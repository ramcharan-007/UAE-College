# Lead Capture System - Quick Start

## 🎯 What's Working Now

✅ **Form is capturing leads automatically!**

When users submit the form on `/coming-soon`, leads are:

1. Logged to your **terminal/console** in real-time
2. Validated on the backend
3. Ready to sync to any service

---

## 🚀 How to Get Started (Pick ONE)

### Option A: See Leads in Terminal (Easiest)

**No setup needed!** Leads appear in your terminal when running `pnpm dev`

```bash
pnpm dev
# Submit form → Look for "=== NEW LEAD ===" in terminal
```

### Option B: Email Notifications (Recommended)

**Send leads to your email automatically**

1. Choose a service (Resend is easiest):
   - Resend: [resend.com](https://resend.com) - free tier
   - SendGrid: [sendgrid.com](https://sendgrid.com) - free tier
   - Mailgun: [mailgun.com](https://mailgun.com) - free tier

2. Get your API key

3. Create `.env.local`:

   ```
   RESEND_API_KEY=your_key_here
   ```

4. Uncomment email code in `/app/api/lead-capture/route.ts`

5. Restart: `pnpm dev`

### Option C: Google Sheets (Optional Backup)

**Send leads to Google Sheets as backup**

See `GOOGLE_SHEETS_SETUP.md` for complete instructions

---

## 📊 Current Architecture

```
User Form (/coming-soon)
    ↓
    └→ POST /api/lead-capture
        ├→ Validate fields
        ├→ Log to console
        ├→ Send to email (if configured)
        ├→ Send to Google Sheets (if configured)
        └→ Return success
```

---

## 🧪 Test It Right Now

1. Open browser: `http://localhost:3000/coming-soon`
2. Fill out the form with test data
3. Click "Notify Me"
4. **Check your terminal** - you should see the lead printed!

---

## 📝 Files Involved

- **Form**: `/app/coming-soon/page.tsx` - The form UI
- **API**: `/app/api/lead-capture/route.ts` - Backend processing
- **Config**: `.env.local.example` - Copy to `.env.local` and fill in

---

## ❌ The 401 Error

The 401 error was from the old Google Apps Script setup. It's been replaced with a better system that:

- Works locally first (no external dependency)
- Can sync to Google Sheets optionally
- Can send emails when configured

The form now works without any external setup!

---

## 🎓 Next Steps

1. **Test the form** at `/coming-soon` - it's working now!
2. **Optional**: Set up one email service (see Option B above)
3. **Optional**: Set up Google Sheets (see GOOGLE_SHEETS_SETUP.md)
4. **Monitor leads** in terminal, email, or Google Sheets

---

## 💡 Pro Tips

- Leads are logged with timestamp automatically
- Email validation happens on the backend
- Phone number is optional
- Leads persist even if email/Sheets fails
- All URLs that need to redirect are set up (blog, faq, login, register, etc.)

---

## 📞 Questions?

Check the terminal output when submitting the form - it shows exactly what's happening!

**Expected output when form is submitted:**

```
=== NEW LEAD ===
Name: John Doe
Email: john@example.com
Phone: +971 50 123 4567
Interest: Online Courses
Source: Coming Soon Page
================
```

Enjoy! 🎉
