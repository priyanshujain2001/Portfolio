import nodemailer from 'nodemailer'
import { generateCalendarInvite } from './simpleCalendarService'

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

// Create transporter for Gmail
const createTransporter = () => {
  // Check if we have a proper app password
  const appPassword = process.env.GMAIL_APP_PASSWORD
  if (!appPassword || appPassword === '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') {
    throw new Error('Gmail App Password not configured. Please set GMAIL_APP_PASSWORD environment variable with a proper Gmail App Password.')
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com',
      pass: appPassword
    }
  })
}

// Send booking notification to you
export const sendBookingNotification = async (bookingData: BookingData) => {
  try {
    const transporter = createTransporter()
  
  const mailOptions = {
    from: process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com',
    to: process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com',
    subject: `New Booking Request - ${bookingData.topic}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0ea5e9;">New Booking Request Received! 🎉</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Booking Details</h3>
          <p><strong>Name:</strong> ${bookingData.name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Topic:</strong> ${bookingData.topic}</p>
          <p><strong>Date:</strong> ${new Date(bookingData.selectedSlot.date).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
          <p><strong>Time:</strong> ${bookingData.selectedSlot.time}</p>
          ${bookingData.details ? `<p><strong>Additional Details:</strong><br>${bookingData.details}</p>` : ''}
        </div>
        
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1976d2;">
            <strong>Next Steps:</strong> Please respond to confirm the session and send a calendar invite.
          </p>
        </div>
        
        <p style="color: #666; font-size: 14px;">
          This booking was submitted through your portfolio website.
        </p>
      </div>
    `
  }

    const result = await transporter.sendMail(mailOptions)
    console.log('Booking notification email sent:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Error sending booking notification:', error)
    // Don't throw error, just log it and continue
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Send confirmation email to the person who booked
export const sendBookingConfirmation = async (bookingData: BookingData) => {
  try {
    const transporter = createTransporter()
  
  // Generate calendar invite
  const icsContent = generateCalendarInvite(bookingData)
  
  const mailOptions = {
    from: process.env.GMAIL_USER || 'jainpriyanshu2982001@gmail.com',
    to: bookingData.email,
    subject: `Booking Confirmed - ${bookingData.topic}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0ea5e9;">Booking Confirmed! 🎉</h2>
        
        <p>Hi ${bookingData.name},</p>
        
        <p>Thank you for booking a session with me! I'm excited to discuss <strong>${bookingData.topic}</strong> with you.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Session Details</h3>
          <p><strong>Date:</strong> ${new Date(bookingData.selectedSlot.date).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
          <p><strong>Time:</strong> ${bookingData.selectedSlot.time}</p>
          <p><strong>Topic:</strong> ${bookingData.topic}</p>
        </div>
        
        <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #2e7d32;">
            <strong>Calendar Invite:</strong> I've attached a calendar invite to this email. Please add it to your calendar!
          </p>
        </div>
        
        <p>Looking forward to our conversation!</p>
        
        <p>Best regards,<br>Priyanshu Jain</p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          This is an automated confirmation email. If you have any questions, please reply to this email.
        </p>
      </div>
    `,
    attachments: [
      {
        filename: 'meeting-invite.ics',
        content: icsContent,
        contentType: 'text/calendar; charset=utf-8'
      }
    ]
  }

    const result = await transporter.sendMail(mailOptions)
    console.log('Booking confirmation email sent:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Error sending booking confirmation:', error)
    // Don't throw error, just log it and continue
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
