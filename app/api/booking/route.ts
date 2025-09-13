import { NextRequest, NextResponse } from 'next/server'
import { sendBookingNotification, sendBookingConfirmation } from '@/lib/emailService'
import { createCalendarEvent } from '@/lib/simpleCalendarService'

interface BookingData {
  name: string
  email: string
  topic: string
  details: string
  selectedSlot: {
    date: string
    time: string
  }
}

export async function POST(request: NextRequest) {
  try {
    const bookingData: BookingData = await request.json()
    
    // Validate required fields
    if (!bookingData.name || !bookingData.email || !bookingData.topic || !bookingData.selectedSlot) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(bookingData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email notifications
    try {
      // Send notification to you
      await sendBookingNotification(bookingData)
      
      // Send confirmation to the user
      await sendBookingConfirmation(bookingData)
      
      console.log('Email notifications sent successfully')
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue with booking even if email fails
    }

    // Try to create calendar event (optional - will work even if this fails)
    let calendarEvent = null
    try {
      calendarEvent = await createCalendarEvent(bookingData)
      console.log('Calendar event created:', calendarEvent)
    } catch (calendarError) {
      console.error('Calendar event creation failed:', calendarError)
      // Continue with booking even if calendar creation fails
    }

    // Log the booking for your records
    console.log('New booking received:', {
      ...bookingData,
      timestamp: new Date().toISOString(),
      calendarEvent: calendarEvent
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking submitted successfully! You will receive a confirmation email shortly.',
        calendarEvent: calendarEvent
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Booking submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    )
  }
}
