/*
  # Create Quote Submissions System

  ## Overview
  Complete system for managing quote form submissions with file attachments.
  
  ## 1. New Tables
  
  ### `quote_submissions`
  Main table for storing customer quote requests
  - `id` (uuid, primary key) - Unique submission identifier
  - `name` (text, required) - Customer full name
  - `email` (text, required) - Customer email address
  - `phone` (text, required) - Customer phone number
  - `address` (text, required) - Installation address
  - `zip_code` (text, required) - ZIP/Postal code
  - `service_type` (text, required) - Selected service/material type
  - `message` (text, optional) - Additional comments from customer
  - `attachment_url` (text, optional) - URL to uploaded file in storage
  - `status` (text, default: 'pending') - Submission status tracking
  - `created_at` (timestamptz) - Submission timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ## 2. Storage Bucket
  
  ### `quote-attachments`
  - Public access for uploaded files (images, PDFs)
  - 10MB file size limit
  - Allowed types: images (jpg, png, webp) and PDFs
  
  ## 3. Security (RLS Policies)
  
  All tables have Row Level Security enabled with the following policies:
  
  ### Public Access Policies
  - **INSERT**: Anyone can submit a quote (no authentication required)
  - **SELECT**: Only authenticated users can view submissions (for admin dashboard)
  - **UPDATE**: Only authenticated users can update submissions (for admin status updates)
  - **DELETE**: Only authenticated users can delete submissions (for admin cleanup)
  
  ### Storage Policies
  - **INSERT**: Anyone can upload files (no authentication required)
  - **SELECT**: Public read access to all files
  
  ## 4. Important Notes
  - All quote submissions are stored permanently until manually deleted
  - Email notifications are handled separately via EmailJS
  - File uploads are stored in Supabase Storage with public URLs
  - Default status is 'pending' for all new submissions
*/

-- Create quote_submissions table
CREATE TABLE IF NOT EXISTS quote_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  zip_code text NOT NULL,
  service_type text NOT NULL,
  message text,
  attachment_url text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_quote_submissions_created_at ON quote_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_submissions_status ON quote_submissions(status);
CREATE INDEX IF NOT EXISTS idx_quote_submissions_email ON quote_submissions(email);

-- Enable Row Level Security
ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit a quote (INSERT)
CREATE POLICY "Anyone can submit quotes"
  ON quote_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Authenticated users can view all quotes (SELECT)
CREATE POLICY "Authenticated users can view quotes"
  ON quote_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can update quotes (UPDATE)
CREATE POLICY "Authenticated users can update quotes"
  ON quote_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete quotes (DELETE)
CREATE POLICY "Authenticated users can delete quotes"
  ON quote_submissions
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket for quote attachments
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'quote-attachments',
  'quote-attachments',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
)
ON CONFLICT (id) DO NOTHING;

-- Storage Policy: Anyone can upload files (INSERT)
CREATE POLICY "Anyone can upload quote attachments"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'quote-attachments');

-- Storage Policy: Public read access to all files (SELECT)
CREATE POLICY "Public access to quote attachments"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'quote-attachments');