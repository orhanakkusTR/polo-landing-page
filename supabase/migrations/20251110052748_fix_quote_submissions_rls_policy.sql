/*
  # Fix Quote Submissions RLS Policy
  
  ## Changes
  - Drop the existing INSERT policy that only allows 'anon' role
  - Create a new INSERT policy that allows both 'anon' and 'authenticated' roles
  - This allows anyone (logged in or not) to submit quotes
  
  ## Security
  - Public INSERT access maintained for form submissions
  - No authentication required for quote submission
*/

-- Drop existing policy
DROP POLICY IF EXISTS "Anyone can submit quotes" ON quote_submissions;

-- Create new policy that allows both anon and authenticated users
CREATE POLICY "Public can submit quotes"
  ON quote_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Also ensure authenticated users can insert (redundant but explicit)
CREATE POLICY "Authenticated can submit quotes"
  ON quote_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);