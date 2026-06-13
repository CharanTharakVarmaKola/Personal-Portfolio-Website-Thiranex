# Google Sheets Integration for Contact Form

This guide will help you set up your contact form to store submissions in a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Form Submissions"
4. Add the following headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Parse the JSON data
  var data = JSON.parse(e.postData.contents);
  
  // Add a new row with the form data
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.message
  ]);
  
  // Return success response
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'success',
    'data': data
  })).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'active',
    'message': 'Contact form endpoint is working'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (give it a name like "ContactFormHandler")
4. Click **Deploy** → **New deployment**
5. Click the gear icon → **Web app**
6. Configure:
   - **Description**: "Contact Form Webhook"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
7. Click **Deploy**
8. Copy the **Web app URL** (this is your script URL)

## Step 3: Update Your Contact Form

1. Open `frontend/src/components/Contact.jsx`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web app URL
3. The line should look like:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/XXXXX/exec'
   ```

## Step 4: Test the Integration

1. Start your frontend: `npm run dev` in the `frontend` directory
2. Go to http://localhost:3000
3. Navigate to the Contact section
4. Fill out the form and submit
5. Check your Google Sheet - you should see a new row with the submission

## Step 5: Deploy to Vercel

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Add environment variables in Vercel dashboard if needed
# (Not required for Google Sheets integration)

# Deploy to production
vercel --prod
```

### Option B: Using Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `CharanTharakVarmaKola/Personal-Portfolio-Website-Thiranex`
4. Configure:
   - **Framework**: Vite
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `frontend/dist`
5. Click **Deploy**

## Important Notes

### Security Considerations

- Your Google Apps Script URL is public - anyone can submit data to your sheet
- Consider adding validation in the Apps Script
- You can add a secret key and validate it in the script if needed

### Rate Limiting

- Google Apps Script has rate limits
- For high-traffic sites, consider using a proper backend
- You can add error handling for rate limit responses

### CORS Issues

- The `mode: 'no-cors'` in the fetch request handles CORS
- This means you won't get detailed error responses
- Success is assumed if no error is thrown

### Alternative: Backend Proxy

If you want better error handling, you can:

1. Keep the backend API endpoint
2. Have the backend forward requests to Google Sheets
3. This gives you better control and error handling

## Troubleshooting

### "Script function not found" Error

- Make sure you saved the Apps Script
- Redeploy the web app after making changes
- Check that the function name matches exactly

### No Data in Sheet

- Check the Google Sheet headers match the script
- Verify the script URL is correct
- Check browser console for errors
- Make sure "Who has access" is set to "Anyone"

### CORS Errors

- Ensure `mode: 'no-cors'` is set in the fetch request
- Check that the web app is deployed with "Anyone" access

## Advanced Features

### Add Validation

Add validation in the Apps Script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Validate required fields
  if (!data.name || !data.email || !data.message) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': 'Missing required fields'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': 'Invalid email format'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // Add the row
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'success',
    'data': data
  })).setMimeType(ContentService.MimeType.JSON);
}
```

### Add Spam Protection

Add a simple honeypot field to your form and check it in the script:

```javascript
// In Contact.jsx, add a hidden field
<input
  type="text"
  name="honeypot"
  style={{ display: 'none' }}
  value={formData.honeypot}
  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
/>

// In Apps Script, check for honeypot
if (data.honeypot) {
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'error',
    'message': 'Spam detected'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

## Summary

Your contact form now:
- ✅ Stores submissions in Google Sheets
- ✅ Requires no backend server
- ✅ Works with Vercel deployment
- ✅ Provides real-time data access
- ✅ Easy to export and analyze

The Google Sheets integration is simple, free, and perfect for portfolio websites!
