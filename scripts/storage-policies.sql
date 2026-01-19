-- Supabase Storage Policies for team-images bucket
-- Run this SQL in your Supabase SQL Editor after creating the bucket

-- Allow public SELECT (read) access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'team-images' );

-- Allow INSERT (upload) for all users (or restrict to authenticated if preferred)
CREATE POLICY "Allow uploads"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'team-images' );

-- Allow UPDATE for all users
CREATE POLICY "Allow updates"
ON storage.objects FOR UPDATE
USING ( bucket_id = 'team-images' );

-- Allow DELETE for all users
CREATE POLICY "Allow deletes"
ON storage.objects FOR DELETE
USING ( bucket_id = 'team-images' );
