# 🚀 POLO COUNTERTOPS - SETUP GUIDE

## ✅ Database Setup (COMPLETED)

The database has been set up with a clean structure:

### Tables Created:
- **quote_submissions** - Stores all customer quote requests
  - Fields: name, email, phone, address, zip_code, service_type, message, attachment_url, status
  - Indexes: created_at, status, email (for fast queries)
  - Status tracking: 'pending', 'contacted', 'completed', etc.

### Storage:
- **quote-attachments** bucket - Stores uploaded files (images, PDFs)
  - Max file size: 10MB
  - Allowed types: JPG, PNG, WEBP, PDF
  - Public access for easy sharing

### Security (RLS):
- ✅ Public can submit quotes (no login required)
- ✅ Public can upload files (no login required)
- ✅ Only authenticated users can view/edit submissions (for admin)

---

## 🔧 REQUIRED: EmailJS Configuration

You need to set up EmailJS to receive quote notifications via email.

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your Polo email address
3. Verify your email

### Step 2: Add Email Service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect Polo's official email (e.g., `info@polocountertops.com`)
4. Save the service and note the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Dashboard → **Email Templates** → **Create New Template**
2. Set "To Email" to your Polo business email
3. Set "Subject" to: `New Quote Request from {{from_name}}`
4. Use this template body:

```
New Quote Request Received
==========================

Customer Information:
--------------------
Name: {{from_name}}
Email: {{email}}
Phone: {{phone}}
Address: {{address}}
ZIP Code: {{zip_code}}

Project Details:
---------------
Service Type: {{material}}
Project Type: {{project_type}}

Additional Comments:
-------------------
{{comments}}

Attachment:
----------
{{attachment_url}}

Submitted: {{submission_date}}
```

5. Save the template and note the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Dashboard → **Account** → **General**
2. Copy your **Public Key** (e.g., `user_aBcDeFgHiJkLmN`)

### Step 5: Update .env File
Open the `.env` file and replace:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

With your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_aBcDeFgHiJkLmN
```

---

## 📍 REQUIRED: Update Contact Information

Update the following files with Polo's real information:

### 1. Footer.tsx
Location: `src/components/Footer.tsx`

Update these lines:
```jsx
// Phone number (around line 33)
<a href="tel:5551234567" className="hover:text-amber-600 transition-colors">
  (555) 123-4567  // ← REPLACE WITH POLO'S PHONE
</a>

// Email (around line 38)
<a href="mailto:info@polo.com" className="hover:text-amber-600 transition-colors">
  info@polo.com  // ← REPLACE WITH POLO'S EMAIL
</a>

// Address (around line 26-27)
<p>123 Main Street</p>
<p>Your City, ST 12345</p>  // ← REPLACE WITH POLO'S ADDRESS
```

### 2. QuoteForm.tsx (ZIP Code Validation)
Location: `src/components/QuoteForm.tsx`

Around line 13-22, update the valid ZIP codes list:
```jsx
const VALID_ZIP_CODES = new Set([
  '20124', '20147', '20148', // ← REPLACE WITH POLO'S SERVICE AREA ZIP CODES
  // Add all ZIP codes where Polo provides service
]);
```

**Question:** Which ZIP codes does Polo serve?

---

## 🌐 OPTIONAL: Google Places API

For better address autocomplete, you can add a Google Places API key.

### Steps:
1. Go to https://console.cloud.google.com/
2. Create a new project or select existing
3. Enable **Google Places API**
4. Create credentials → API Key
5. Add to `.env`:

```env
VITE_GOOGLE_PLACES_API_KEY=your_google_api_key_here
```

**Note:** The form works without this, but autocomplete will be basic.

---

## 🎯 NEXT STEPS

1. ✅ Database is ready (no action needed)
2. ⏳ Set up EmailJS and update `.env` with credentials
3. ⏳ Update contact info in Footer.tsx
4. ⏳ Update ZIP code validation in QuoteForm.tsx
5. ⏳ (Optional) Add Google Places API key
6. ⏳ Test the form submission

---

## 🧪 Testing

After updating credentials:

1. Restart dev server: `npm run dev`
2. Open the website
3. Fill out the quote form
4. Upload a test file
5. Submit the form
6. Check:
   - ✅ Email received in Polo's inbox
   - ✅ Data saved in Supabase database
   - ✅ File uploaded to storage
   - ✅ Redirect to Thank You page

---

## 📊 Admin Access (Future)

To view submissions, you can:
1. Log into Supabase Dashboard: https://supabase.com/dashboard
2. Go to Table Editor → `quote_submissions`
3. View all submissions with attachments

Or build an admin panel (future enhancement).

---

## 🆘 Support

If you need help:
1. Check `.env` file has all required values
2. Verify EmailJS template parameters match
3. Check browser console for errors
4. Check Supabase logs for database errors

---

**Ready to go! 🚀 Just add your EmailJS credentials and contact info.**
