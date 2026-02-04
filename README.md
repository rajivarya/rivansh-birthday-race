# Rivansh's Birthday Race Day 🏁

An interactive car racing themed birthday invitation webpage for Rivansh's party with RSVP functionality that saves to Google Sheets.

## 🎉 Features

- **Vibrant Racing Theme**: Dynamic animations, racing cars, checkered flags, and speed effects
- **Interactive RSVP Form**: Collect guest names and attendance responses
- **Google Sheets Integration**: Automatically saves responses to your Google Sheet
- **Responsive Design**: Works perfectly on mobile and desktop
- **Celebration Effects**: Confetti animations for successful RSVPs
- **Real-time Feedback**: Loading states and success/error messages

## 🚀 Live Demo

**View the invitation**: https://rajivarya.github.io/rivansh-birthday-race/

## 📱 Share on WhatsApp

Simply share this link on WhatsApp:
```
https://rajivarya.github.io/rivansh-birthday-race/
```

## ⚙️ Setup Instructions

### Google Sheets Setup

1. **Open the Google Sheet**: https://docs.google.com/spreadsheets/d/1Ryk3N3HhL3Q4cBGKOeZayZxfu6579PEzfiU6tcRzZ3c/edit?usp=sharing

2. **Add Headers** (if not already present):
   - Row 1: `Name`, `RSVP`, `Timestamp`, `Date`

3. **Create Apps Script**:
   - In your Google Sheet: `Extensions` > `Apps Script`
   - Copy the code from `debug-script.js` in this repository
   - Deploy as Web App with "Anyone" access

4. **Update Script URL**:
   - Copy the deployed Web App URL
   - Update the `GOOGLE_SCRIPT_URL` in the HTML file

## 🎨 Design Elements

- **Colors**: Racing reds, checkered black/white, gold accents
- **Fonts**: Bungee (display) and Rubik (body)
- **Animations**: Racing cars, waving flags, speed lines, confetti
- **Theme**: High-energy car racing atmosphere

## 📊 Data Collection

The form automatically collects:
- Guest name
- RSVP response (Yes/No)
- Timestamp (ISO format)
- Date (formatted)

All data is saved directly to your Google Sheet for easy tracking.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Animations, gradients, responsive design
- **JavaScript**: Form handling, Google Sheets integration
- **Google Apps Script**: Backend data processing
- **Google Fonts**: Bungee and Rubik typography

## 📱 Mobile Optimization

- Touch-friendly buttons and inputs
- Responsive layout for all screen sizes
- Optimized animations for mobile performance
- Large, readable text

## 🔧 Troubleshooting

If the form doesn't save to Google Sheets:

1. Check the browser console for errors
2. Verify the Google Apps Script URL is correct
3. Ensure the Apps Script deployment has "Anyone" access
4. Check that your Google Sheet has the proper headers

## 🎈 Party Details

- **Birthday Boy**: Rivansh 🏆
- **Date**: March 26th
- **Theme**: Car Racing Day
- **Activities**: RSVP collection, guest tracking

---

Made with ❤️ for Rivansh's special day! 🎂🏁