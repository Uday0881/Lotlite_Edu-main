/**
 * ============================================================
 * Lotlite Google Apps Script — Lead Webhook Receiver
 * ============================================================
 *
 * HOW TO SET UP:
 * 1. Open Google Sheets → Extensions → Apps Script
 * 2. Paste this entire file into Code.gs
 * 3. Click "Deploy" → "New Deployment" → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone (so Spring Boot can POST to it)
 * 4. Copy the deployment URL
 * 5. Paste it in backend/src/main/resources/application.properties:
 *    lotlite.sheets.webhook-url=https://script.google.com/macros/s/YOUR_ID/exec
 *
 * The sheet will auto-create headers on first run.
 * ============================================================
 */

// ---- Config: Change sheet name here ----
var SHEET_NAME = "Leads";

/**
 * doPost — receives JSON from Spring Boot and writes to Google Sheets.
 * Triggered by: POST https://script.google.com/macros/s/.../exec
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Write header row
      sheet.appendRow([
        "Submitted At",
        "Full Name",
        "Email",
        "Phone",
        "Program Interest",
        "Source"
      ]);

      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setBackground("#1a1a2e");
      headerRange.setFontColor("#FFD700");
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(11);
    }

    // Append lead row
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.fullName    || "",
      data.email       || "",
      data.phone       || "",
      data.programInterest || "",
      data.source      || "homepage"
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Lead recorded" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * doGet — Test endpoint. Visit the URL in a browser to confirm it's working.
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Lotlite Sheets webhook is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}
