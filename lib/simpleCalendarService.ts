import { google } from 'googleapis'

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

// Create service account auth (simpler than OAuth)
const createServiceAccountAuth = () => {
  // For now, we'll skip Google Calendar integration
  // and just return null to indicate it's not available
  return null
}

// Create calendar event (simplified)
export const createCalendarEvent = async (bookingData: BookingData) => {
  try {
    // For now, skip Google Calendar integration
    // The email with ICS attachment will handle calendar invites
    console.log('Calendar integration temporarily disabled - using email ICS instead')
    
    return {
      success: true,
      message: 'Calendar invite will be sent via email attachment'
    }
  } catch (error) {
    console.error('Error creating calendar event:', error)
    return {
      success: false,
      error: 'Calendar event creation failed, but booking was recorded'
    }
  }
}

// Generate calendar invite content for email
export const generateCalendarInvite = (bookingData: BookingData) => {
  const [year, month, day] = bookingData.selectedSlot.date.split('-').map(Number)
  const [hours, minutes] = bookingData.selectedSlot.time.split(':').map(Number)
  
  const startDateTime = new Date(year, month - 1, day, hours, minutes)
  const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000)
  
  // Format dates for calendar invite
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }
  
  const startFormatted = formatDate(startDateTime)
  const endFormatted = formatDate(endDateTime)
  
  // Generate ICS file content
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Portfolio Booking//EN
BEGIN:VEVENT
UID:${Date.now()}@portfolio-booking.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${startFormatted}
DTEND:${endFormatted}
SUMMARY:Session with ${bookingData.name} - ${bookingData.topic}
DESCRIPTION:${bookingData.details || 'Session booked through portfolio website'}
LOCATION:Google Meet (link will be provided)
ORGANIZER:MAILTO:${process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com'}
ATTENDEE:MAILTO:${bookingData.email}
ATTENDEE:MAILTO:${process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com'}
END:VEVENT
END:VCALENDAR`
  
  return icsContent
}
