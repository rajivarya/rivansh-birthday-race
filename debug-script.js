// GOOGLE APPS SCRIPT CODE - Copy this into your Google Sheet's Apps Script editor
// Go to: Extensions > Apps Script in your Google Sheet

function doPost(e) {
  try {
    // Log the incoming request for debugging
    Logger.log('Received request: ' + JSON.stringify(e));
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    Logger.log('Parsed data: ' + JSON.stringify(data));
    
    // Get the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    
    // Check if sheet exists
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Sheet1');
      // Add headers if sheet was just created
      sheet.appendRow(['Name', 'RSVP', 'Timestamp', 'Date']);
    }
    
    // Append the new row
    sheet.appendRow([
      data.name || '',
      data.rsvp || '',
      data.timestamp || '',
      data.date || ''
    ]);
    
    Logger.log('Data successfully added to sheet');
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'RSVP submitted successfully',
      received: data
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
  } catch (error) {
    // Log the error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString(),
      stack: error.stack
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
}

// Handle OPTIONS requests for CORS preflight
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Test function - you can run this in the Apps Script editor to test
function testFunction() {
  var testData = {
    name: 'Test User',
    rsvp: 'yes',
    timestamp: new Date().toISOString(),
    date: new Date().toLocaleDateString()
  };
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  sheet.appendRow([testData.name, testData.rsvp, testData.timestamp, testData.date]);
  
  Logger.log('Test data added: ' + JSON.stringify(testData));
}
