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

// OAuth2 client setup
const createOAuth2Client = () => {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID || '507834482501-on31s99jj9p8ihicgqm873e5r1i7tlde.apps.googleusercontent.com',
    process.env.GOOGLE_CLIENT_SECRET || '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',
    process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback'
  )
}

// Get authorization URL for OAuth flow
export const getAuthUrl = () => {
  const oauth2Client = createOAuth2Client()
  
  const scopes = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events'
  ]
  
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent'
  })
}

// Exchange authorization code for tokens
export const getTokensFromCode = async (code: string) => {
  const oauth2Client = createOAuth2Client()
  
  try {
    const { tokens } = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)
    return tokens
  } catch (error) {
    console.error('Error getting tokens:', error)
    throw error
  }
}

// Create calendar event
export const createCalendarEvent = async (bookingData: BookingData, accessToken: string) => {
  const oauth2Client = createOAuth2Client()
  oauth2Client.setCredentials({ access_token: accessToken })
  
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client })
  
  // Parse date and time
  const [year, month, day] = bookingData.selectedSlot.date.split('-').map(Number)
  const [hours, minutes] = bookingData.selectedSlot.time.split(':').map(Number)
  
  const startDateTime = new Date(year, month - 1, day, hours, minutes)
  const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000) // 1 hour duration
  
  const event = {
    summary: `Session with ${bookingData.name} - ${bookingData.topic}`,
    description: `
Topic: ${bookingData.topic}
${bookingData.details ? `Details: ${bookingData.details}` : ''}

Contact Information:
- Name: ${bookingData.name}
- Email: ${bookingData.email}

This session was booked through the portfolio website.
    `.trim(),
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'Asia/Kolkata', // Adjust timezone as needed
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    attendees: [
      {
        email: bookingData.email,
        displayName: bookingData.name,
      },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 }, // 24 hours before
        { method: 'popup', minutes: 30 }, // 30 minutes before
      ],
    },
    conferenceData: {
      createRequest: {
        requestId: `booking-${Date.now()}`,
        conferenceSolutionKey: {
          type: 'hangoutsMeet'
        }
      }
    }
  }
  
  try {
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'jainpriyanshu2982001@gmail.com',
      requestBody: event,
      conferenceDataVersion: 1,
    })
    
    console.log('Calendar event created:', response.data.id)
    return {
      success: true,
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
      meetLink: response.data.conferenceData?.entryPoints?.[0]?.uri
    }
  } catch (error) {
    console.error('Error creating calendar event:', error)
    throw error
  }
}

// Get available time slots for a specific date
export const getAvailableTimeSlots = async (date: string, accessToken: string) => {
  const oauth2Client = createOAuth2Client()
  oauth2Client.setCredentials({ access_token: accessToken })
  
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client })
  
  const startOfDay = new Date(date + 'T00:00:00+05:30')
  const endOfDay = new Date(date + 'T23:59:59+05:30')
  
  try {
    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'jainpriyanshu2982001@gmail.com',
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    })
    
    const events = response.data.items || []
    const busySlots = events.map(event => {
      const start = new Date(event.start?.dateTime || event.start?.date || '')
      const end = new Date(event.end?.dateTime || event.end?.date || '')
      return { start, end }
    })
    
    // Generate available slots (9 AM to 6 PM, 1-hour slots)
    const availableSlots = []
    const startHour = 9
    const endHour = 18
    
    for (let hour = startHour; hour < endHour; hour++) {
      const slotStart = new Date(date + `T${hour.toString().padStart(2, '0')}:00:00+05:30`)
      const slotEnd = new Date(date + `T${(hour + 1).toString().padStart(2, '0')}:00:00+05:30`)
      
      // Check if this slot conflicts with any existing events
      const isAvailable = !busySlots.some(busySlot => 
        (slotStart >= busySlot.start && slotStart < busySlot.end) ||
        (slotEnd > busySlot.start && slotEnd <= busySlot.end) ||
        (slotStart <= busySlot.start && slotEnd >= busySlot.end)
      )
      
      if (isAvailable) {
        availableSlots.push({
          time: `${hour.toString().padStart(2, '0')}:00`,
          available: true
        })
      }
    }
    
    return availableSlots
  } catch (error) {
    console.error('Error getting available time slots:', error)
    throw error
  }
}
