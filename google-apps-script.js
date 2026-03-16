// Google Apps Script for Rivansh's Birthday RSVP Form
// Copy this code to your Google Apps Script editor

function doPost(e) {
  try {
    // Log the incoming request for debugging
    Logger.log('Received request: ' + JSON.stringify(e));
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    Logger.log('Parsed data: ' + JSON.stringify(data));
    
    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Sheet1') || spreadsheet.getActiveSheet();
    
    // Make sure the sheet has the right headers
    const headers = ['Name', 'RSVP', 'Timestamp', 'Date'];
    const lastRow = sheet.getLastRow();
    
    // Add headers if sheet is empty
    if (lastRow === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    }
    
    // Prepare the row data
    const rowData = [
      data.name || '',
      data.rsvp || '',
      data.timestamp || new Date().toISOString(),
      data.date || new Date().toLocaleDateString()
    ];
    
    // Add the new row
    sheet.appendRow(rowData);
    
    // Format the new row
    const newRow = sheet.getLastRow();
    sheet.getRange(newRow, 1, 1, 4).setFontWeight('normal');
    
    // Add some styling
    if (data.rsvp === 'yes') {
      sheet.getRange(newRow, 2).setBackground('#d4edda'); // Green for yes
    } else {
      sheet.getRange(newRow, 2).setBackground('#f8d7da'); // Red for no
    }
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 4);
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'RSVP submitted successfully',
      data: data
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    
  } catch (error) {
    // Log the error for debugging
    Logger.log('Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    // Return error response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString(),
      error: error.message
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  }
}

// Add OPTIONS method handler for CORS preflight requests
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Test function - run this to test the script
function testDoPost() {
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        rsvp: 'yes',
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString()
      })
    }
  };
  
  const result = doPost(testEvent);
  Logger.log('Test result: ' + result.getContent());
}

// Function to set up the sheet
function setupSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Sheet1') || spreadsheet.insertSheet('Sheet1');
  
  // Clear existing data
  sheet.clear();
  
  // Add headers
  const headers = ['Name', 'RSVP', 'Timestamp', 'Date'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#f8f9fa');
  
  // Set column widths
  sheet.setColumnWidths(1, 4, [200, 100, 250, 150]);
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  Logger.log('Sheet setup complete');
}
