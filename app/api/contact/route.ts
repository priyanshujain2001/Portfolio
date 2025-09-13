import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'uegh gfsv hzkm esav'
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const contactData: ContactData = await request.json()
    
    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contactData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email notification to you
    try {
      const transporter = createTransporter()
      
      const mailOptions = {
        from: process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com',
        to: process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com',
        subject: `New Contact Form Message - ${contactData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0ea5e9;">New Contact Form Message 📧</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message Details</h3>
              <p><strong>Name:</strong> ${contactData.name}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              <p><strong>Subject:</strong> ${contactData.subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #0ea5e9;">
                ${contactData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1976d2;">
                <strong>Reply to:</strong> ${contactData.email}
              </p>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              This message was sent through your portfolio contact form.
            </p>
          </div>
        `
      }

      await transporter.sendMail(mailOptions)
      console.log('Contact form email sent successfully')
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue even if email fails
    }

    // Log the contact form submission
    console.log('New contact form submission:', {
      ...contactData,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
