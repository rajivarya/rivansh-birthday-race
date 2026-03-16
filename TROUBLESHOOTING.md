# 🔧 Google Sheets Troubleshooting Guide

## 🚨 Quick Fix Steps

### Step 1: Test Your Google Apps Script
1. **Open your Google Sheet**: https://docs.google.com/spreadsheets/d/1Ryk3N3HhL3Q4cBGKOeZayZxfu6579PEzfiU6tcRzZ3c/edit
2. **Go to Extensions → Apps Script**
3. **In the Apps Script editor, click "Run" → "testDoPost"**
4. **Check the execution logs** (View → Executions)

### Step 2: Verify Web App Deployment
1. **In Apps Script editor, click "Deploy" → "Manage deployments"**
2. **Check that your Web app is deployed with:**
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
3. **Copy the Web app URL** - it should end with `/exec`

### Step 3: Test the Web App Directly
Use this URL in your browser (replace YOUR_URL):
```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Step 4: Check Sheet Headers
Make sure your Google Sheet has these exact headers in row 1:
- **A1**: Name
- **B1**: RSVP  
- **C1**: Timestamp
- **D1**: Date

## 🔍 Debugging Steps

### Check Browser Console
1. **Open your website**: https://rajivarya.github.io/rivansh-birthday-race/
2. **Open Developer Tools** (F12 or Ctrl+Shift+I)
3. **Go to Console tab**
4. **Fill out the form and submit**
5. **Look for these messages:**
   - `Submitting data: {...}`
   - `Response status: 200`
   - `Success response: {...}`
   - OR any error messages

### Check Apps Script Logs
1. **In Apps Script editor, go to "View" → "Executions"**
2. **Look for recent executions**
3. **Click on each execution to see details**
4. **Check for errors in the logs**

## 🛠️ Common Issues & Solutions

### Issue 1: "CORS Error"
**Solution**: Redeploy the Web App with "Anyone" access

### Issue 2: "Permission Denied"
**Solution**: 
1. Redeploy the Web App
2. Reauthorize when prompted
3. Make sure you're the sheet owner

### Issue 3: "No data in sheet"
**Solution**:
1. Check if sheet has correct headers
2. Run `setupSheet` function in Apps Script
3. Test with `testDoPost` function

### Issue 4: "Web app URL not working"
**Solution**:
1. Deploy as new Web App
2. Copy the new URL
3. Update the HTML file

## 🧪 Manual Testing

### Test 1: Simple Web App Test
Create this test function in your Apps Script:

```javascript
function testSimple() {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Web app is working!'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

### Test 2: Direct Form Test
Open this URL in browser (replace YOUR_URL):
```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?name=TestUser&rsvp=yes
```

## 📱 Alternative: Use Google Forms

If Apps Script doesn't work, try this simpler approach:

1. **Create Google Form**: https://forms.google.com
2. **Add questions**:
   - Name (Short answer)
   - RSVP (Multiple choice: Yes/No)
3. **Get the form link** and replace the form action in HTML

## 🆘 Emergency Fix

If nothing works, use this temporary solution:

1. **Check browser console** for submitted data
2. **Manually add data** to Google Sheet
3. **Contact me** with the exact error messages

## 📞 What to Send Me for Help

If you're still stuck, send me:
1. **Browser console screenshot** (F12 → Console)
2. **Apps Script execution logs** screenshot
3. **Exact error message** text
4. **Your Web app URL** (remove sensitive parts)

---

*Last updated: March 2026*
