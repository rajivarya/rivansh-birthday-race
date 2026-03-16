# 🏁 Google Sheets Setup Guide for Rivansh's Birthday RSVP

## 📋 Step-by-Step Instructions

### Step 1: Open Your Google Sheet
1. Go to your existing Google Sheet: https://docs.google.com/spreadsheets/d/1Ryk3N3HhL3Q4cBGKOeZayZxfu6579PEzfiU6tcRzZ3c/edit
2. Make sure you have these headers in row 1:
   - `A1`: Name
   - `B1`: RSVP  
   - `C1`: Timestamp
   - `D1`: Date

### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy the entire contents of `google-apps-script.js` file
4. Paste it into the Apps Script editor
5. Click **Save** (💾)

### Step 3: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Fill in the deployment settings:
   - **Description**: `Rivansh Birthday RSVP Form`
   - **Execute as**: `Me` (your Google account)
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. **Authorize access**:
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"
6. **Copy the Web app URL** - it will look like: `https://script.google.com/macros/s/.../exec`

### Step 4: Update the HTML File
1. Open `index.html` in a text editor
2. Find line 1396:
   ```javascript
   GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycby_RHwPtwE3bVnK5_SpngLlakMpzENw05mGJ0sc2I3iUKriIqgQcsZnWrERAYkiiVVS/exec',
   ```
3. Replace the URL with your new Web app URL from Step 3

### Step 5: Test the Setup
1. Open the HTML file in a web browser
2. Fill out the RSVP form with a test name
3. Select "YES" or "NO"
4. Click "Submit RSVP"
5. Check your Google Sheet - you should see a new row with the test data

### Step 6: Deploy to GitHub (Optional)
1. Commit the updated HTML file to git:
   ```bash
   git add index.html
   git commit -m "Updated Google Apps Script URL"
   git push origin gh-pages
   ```

## 🔧 Troubleshooting

### Common Issues:

**"CORS Error" or "Network Error"**
- Make sure the Web app is deployed with "Anyone" access
- Check that the URL in the HTML file matches exactly

**No data appears in Google Sheet**
- Check the Apps Script logs: Extensions → Apps Script → Executions
- Make sure the sheet has the correct headers
- Try running the `testDoPost` function in the Apps Script editor

**Permission denied**
- Redeploy the Web App and make sure to authorize properly
- Check that the script has permission to edit the spreadsheet

**Form shows error message**
- Open browser developer tools (F12) and check the Console tab
- Look for any JavaScript errors

### Test the Apps Script:
1. In Apps Script editor, go to **Executions** tab
2. Click **Run function** → `testDoPost`
3. Check the logs to see if it worked

## 📱 Alternative: Manual Setup

If the automatic setup doesn't work, you can:

1. **Use Google Forms** (simpler):
   - Create a Google Form with Name and RSVP questions
   - Share the form link instead

2. **Use Email Notifications**:
   - Modify the script to send emails instead of writing to sheets

## 🎯 Final Verification

Once everything is working:
- ✅ Form submits without errors
- ✅ Data appears in Google Sheet immediately
- ✅ Success message shows on the webpage
- ✅ Confetti animation plays for "YES" responses

## 📞 Need Help?

If you're still having issues:
1. Check the browser console (F12) for JavaScript errors
2. Check the Apps Script execution logs
3. Make sure the Google Sheet is shared properly
4. Verify the Web app URL is correct

---

*Last updated: March 2026*
