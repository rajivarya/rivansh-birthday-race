# 🔧 CORS Error Fix Guide

## 🚨 The Problem
You're getting this error:
```
Access to fetch at 'https://script.google.com/macros/s/...' from origin 'https://rajivarya.github.io' has been blocked by CORS policy
```

## ✅ The Solution

### Step 1: Update Your Google Apps Script
1. **Open your Google Sheet**: https://docs.google.com/spreadsheets/d/1Ryk3N3HhL3Q4cBGKOeZayZxfu6579PEzfiU6tcRzZ3c/edit
2. **Go to Extensions → Apps Script**
3. **Delete all existing code**
4. **Copy the NEW code from `google-apps-script.js`** (updated with CORS headers)
5. **Paste and save** (Ctrl+S)

### Step 2: Redeploy the Web App
1. **Click "Deploy" → "Manage deployments"**
2. **Click the existing deployment and "Delete" it**
3. **Click "Deploy" → "New deployment"**
4. **Choose "Web app"**
5. **Fill in the settings:**
   - **Description**: `Rivansh Birthday RSVP Form (CORS Fixed)`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
6. **Click "Deploy"**
7. **Authorize when prompted**
8. **Copy the NEW Web app URL**

### Step 3: Update the HTML File
1. **Open `index.html`**
2. **Find line 1396:**
   ```javascript
   GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzB2gm-PAM-w1vB2fAOICkSnCAQC3TDXhUmiNTnoSjQxA5gXqCDK-tKk4P2SUL7gOg4/exec',
   ```
3. **Replace with your NEW URL from Step 2**

### Step 4: Test the Fix
1. **Deploy to GitHub:**
   ```bash
   git add index.html
   git commit -m "Fixed CORS headers in Google Apps Script"
   git push origin gh-pages
   ```
2. **Wait 1-2 minutes for GitHub Pages to update**
3. **Test the form**: https://rajivarya.github.io/rivansh-birthday-race/
4. **Open browser console (F12) to see if CORS error is gone**

## 🔍 What Was Fixed

### Before (Broken):
```javascript
return ContentService.createTextOutput(JSON.stringify({...}))
  .setMimeType(ContentService.MimeType.JSON);
```

### After (Fixed):
```javascript
return ContentService.createTextOutput(JSON.stringify({...}))
  .setMimeType(ContentService.MimeType.JSON)
  .setHeader('Access-Control-Allow-Origin', '*')
  .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
```

### Added CORS Handler:
```javascript
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
```

## 🧪 Quick Test

After updating, test with the simple test tool:
**Visit:** https://rajivarya.github.io/rivansh-birthday-race/simple-test.html

Click "Test Web App" - you should see:
- ✅ **Success** instead of CORS error
- **Status: 200**
- **Response data from Google Apps Script**

## 🆘 If Still Not Working

### Alternative 1: Use No-CORS Mode
Update the form submission to use `mode: 'no-cors'` (but you won't get error messages)

### Alternative 2: Use Google Forms
1. Create a Google Form instead
2. Get the form link
3. Replace the form action with the Google Forms URL

### Alternative 3: Manual Entry
The form will save data to localStorage and show it in console for manual entry.

## 📞 Next Steps

1. **Update the Google Apps Script** with the CORS-fixed code
2. **Redeploy the Web App** to get a new URL
3. **Update the HTML file** with the new URL
4. **Test the form** - CORS error should be gone!

---

*The CORS error happens because GitHub Pages (rajivarya.github.io) is a different domain than Google Apps Script, so we need to explicitly allow cross-origin requests.*
