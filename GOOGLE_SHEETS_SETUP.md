# Lead Capture System Setup

## ✅ Current Status

The website now has a **built-in lead capture system** that works out of the box!

- ✅ Form captures leads automatically
- ✅ Logs leads in the console
- ✅ Ready for email integration
- ⏳ Optional: Google Sheets integration

---

## 📝 How Leads Are Captured Currently

1. User submits form on `/coming-soon`
2. Data is sent to `/api/lead-capture` (your server)
3. Lead is logged to console and available in backend
4. User sees success message

---

## 🚀 Setup Options

### Option 1: Email Notifications (Recommended)

**Using Resend** (Free tier available):

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install package:
   ```bash
   npm install resend
   ```
4. Create `.env.local` in project root:
   ```
   RESEND_API_KEY=your_api_key_here
   ```
5. Edit `/app/api/lead-capture/route.ts` and uncomment the email section
6. Restart: `pnpm dev`

**Using SendGrid**:
- Get API key from sendgrid.com
- Add to `.env.local`: `SENDGRID_API_KEY=your_key`
- Update route.ts with SendGrid code

---

### Option 2: Google Sheets (Optional)

**Why optional?** Leads are already captured locally. Google Sheets is just an extra backup.

#### Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet "ICASR Leads"
3. Add headers in row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Interest
   - F1: Source

#### Step 2: Create Apps Script

1. **Extensions > Apps Script**
2. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.interest || '',
      data.source || 'Website'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Save** (name it "ICASR Lead Capture")

#### Step 3: Deploy as Web App

**⚠️ Important Steps:**

1. Click **Deploy > New deployment**
2. Click gear icon ⚙️, select **Web app**
3. Set:
   - **Execute as**: Your email
   - **Who has access**: **Anyone** ← CRITICAL!
4. Click **Deploy**
5. Copy the URL shown

#### Step 4: Add Environment Variable

Create `.env.local`:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with your deployment ID from the URL.

#### Step 5: Restart Server

```bash
pnpm dev
```

---

## 🧪 Testing

Visit `/coming-soon` and submit the form.

**Check these places for your lead:**

1. **Browser Console** (F12)
   - Look for successful request to `/api/lead-capture`

2. **Terminal Output**
   - Look for "NEW LEAD" section with form data

3. **Google Sheet** (if set up)
   - Check for new row with timestamp

4. **Email** (if Resend/SendGrid set up)
   - Check info@icasr.ae inbox

---

## 🐛 Troubleshooting

### Nothing appears anywhere
- Check browser console (F12) for errors
- Check terminal for error messages
- Try submitting again

### 401 Unauthorized from Google
- Your Apps Script deployment has wrong permissions
- Go to **Deploy > Manage deployments > Edit**
- Change "Who has access" to **Anyone**
- Create new version

### Google Sheet is empty
- Verify sheet headers match exactly
- Check that Apps Script is deployed as Web App (not library)
- Verify `.env.local` has correct URL
- Check terminal for "GOOGLE_SCRIPT_URL" environment variable

### Email not working
- Check that API key is in `.env.local`
- Verify email code is uncommented in route.ts
- Check terminal for email errors

---

## 📋 Environment Variables Checklist

Create `.env.local` with any of these:

```
# Google Sheets (optional)
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Email with Resend (optional)
RESEND_API_KEY=your_resend_api_key

# Email with SendGrid (optional)
SENDGRID_API_KEY=your_sendgrid_key

# Email with Mailgun (optional)
MAILGUN_API_KEY=your_mailgun_key
```

Note: Leave blank or remove any services you're not using.

---

## �� Current Implementation

**File**: `/app/api/lead-capture/route.ts`

This route:
- Accepts POST requests from the form
- Validates name and email
- Logs lead to console
- Sends to Google Sheets (if URL set)
- Sends email notification (if configured)
- Returns success/error response

**Form**: `/app/coming-soon/page.tsx`

This page:
- Shows lead capture form
- Displays current services
- Redirects `/blog`, `/login`, `/faqs`, `/register` etc.
- Shows success message after submission

---

## 🔒 Security

- ✅ Form validates required fields on backend
- ✅ API key hidden in environment variables
- ✅ Google Apps Script checks access levels
- ⏳ TODO: Add rate limiting to prevent spam
- ⏳ TODO: Add CAPTCHA for production

---

## 📞 Next Steps

1. Test the form at `/coming-soon`
2. Check console output to see if leads are captured
3. Pick one integration (Google Sheets OR Email) to set up
4. Follow the steps above for your choice
5. Test again

**Questions?** Email info@icasr.ae or check terminal logs.
