# Email Setup Instructions

## The Issue
Your booking system is trying to send emails but failing because you're using your Google OAuth client secret instead of a Gmail App Password.

## Quick Fix

### 1. Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Follow the steps to enable it

### 2. Generate Gmail App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "App passwords" (you'll only see this after enabling 2FA)
3. Select "Mail" as the app
4. Generate a password (it will look like: `abcd efgh ijkl mnop`)
5. Copy this password

### 3. Set Environment Variable
Create a `.env.local` file in your project root:

```env
GMAIL_USER=jainpriyanshu2982001@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

### 4. Restart Development Server
```bash
npm run dev
```

## What This Fixes
- ✅ Email notifications will work
- ✅ Calendar invites (.ics files) will be sent
- ✅ Booking confirmations will be delivered
- ✅ You'll receive notification emails

## Alternative: Use a Different Email Service
If you prefer not to use Gmail, you can use:
- **SendGrid** (free tier available)
- **Resend** (developer-friendly)
- **Nodemailer with other providers**

## Test the Setup
After setting up the app password, test by booking a session through your portfolio. You should receive emails!

## Current Status
- ✅ Booking form works
- ✅ Time slots are available
- ❌ Email sending (needs app password)
- ✅ Calendar invites (ICS files work)
- ❌ Google Calendar integration (temporarily disabled)
