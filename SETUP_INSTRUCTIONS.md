# Calendar Booking System Setup Instructions

## 🚀 Quick Setup

### 1. Environment Variables (Optional)

The system is configured with your provided credentials as defaults, so it will work out of the box! However, for production, create a `.env.local` file in your project root with the following variables:

```env
# Gmail SMTP Configuration
GMAIL_USER=jainpriyanshu2982001@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password_here

# Google Calendar API Configuration
GOOGLE_CLIENT_ID=507834482501-on31s99jj9p8ihicgqm873e5r1i7tlde.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback

# Your Calendar ID (usually your email address)
GOOGLE_CALENDAR_ID=jainpriyanshu2982001@gmail.com
```

**Note**: The system will use your provided credentials as defaults if environment variables are not found, so it should work immediately!

### 2. Gmail App Password Setup

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Enable 2-Step Verification if not already enabled
4. Go to Security → App passwords
5. Generate a new app password for "Mail"
6. Use this password as `GMAIL_APP_PASSWORD` in your `.env.local`

### 3. Google Calendar API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Calendar API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Set Application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/google/callback` (for development)
   - `https://yourdomain.com/api/auth/google/callback` (for production)
7. Copy the Client ID and Client Secret to your `.env.local`

### 4. OAuth Consent Screen

1. In Google Cloud Console, go to OAuth consent screen
2. Choose "External" user type
3. Fill in the required information:
   - App name: "Priyanshu's Portfolio Booking"
   - User support email: your email
   - Developer contact: your email
4. Add scopes:
   - `https://www.googleapis.com/auth/calendar`
   - `https://www.googleapis.com/auth/calendar.events`
5. Add test users (your email) for testing

## 🔧 Features Included

### ✅ Email Notifications
- Automatic email to you when someone books
- Confirmation email to the person who booked
- Professional HTML email templates

### ✅ Google Calendar Integration
- Automatic calendar event creation
- Google Meet link generation
- Attendee invitation
- Email reminders (24 hours and 30 minutes before)

### ✅ Time Slot Management
- Real-time availability checking
- Conflict detection with existing events
- 30-day advance booking window

### ✅ User Experience
- Beautiful, responsive design
- Form validation
- Loading states and error handling
- Mobile-friendly interface

## 🚀 How It Works

1. **Visitor books a session** through your portfolio
2. **System sends you an email** with booking details
3. **System sends confirmation** to the visitor
4. **If Google Calendar is connected**, it automatically:
   - Creates a calendar event
   - Generates a Google Meet link
   - Sends calendar invite to the visitor
   - Sets up email reminders

## 🛠️ Customization

### Time Slots
Edit `generateTimeSlots()` in `CalendarBooking.tsx` to:
- Change available hours
- Modify slot duration
- Add/remove weekends
- Set different availability patterns

### Email Templates
Modify `emailService.ts` to:
- Change email styling
- Add your branding
- Customize email content

### Calendar Events
Update `calendarService.ts` to:
- Change event duration
- Modify timezone
- Add custom event properties
- Change reminder settings

## 🔒 Security Notes

- Never commit `.env.local` to version control
- Use environment variables in production
- Consider using a database to store OAuth tokens securely
- Implement rate limiting for the booking API

## 🐛 Troubleshooting

### Email Not Working
- Check Gmail app password is correct
- Ensure 2FA is enabled on your Google account
- Verify SMTP settings in `emailService.ts`

### Calendar Integration Issues
- Check OAuth consent screen is configured
- Verify redirect URIs match exactly
- Ensure Google Calendar API is enabled
- Check scopes are properly configured

### Time Zone Issues
- Update timezone in `calendarService.ts` (currently set to 'Asia/Kolkata')
- Ensure your server timezone matches your calendar timezone

## 📱 Production Deployment

1. Update redirect URIs in Google Cloud Console
2. Set production environment variables
3. Consider using a database for token storage
4. Implement proper error logging
5. Add rate limiting and security measures

## 🎉 You're All Set!

Once configured, visitors can:
- Book time slots with you
- Receive automatic confirmations
- Get Google Meet links for video calls
- Receive email reminders

You'll receive:
- Email notifications for new bookings
- Automatic calendar events
- All booking details in one place

Happy booking! 🚀
