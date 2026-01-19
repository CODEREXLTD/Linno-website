# Supabase Storage Setup for Team Images

## Overview
Team member images are now stored in Supabase Storage instead of the local `/public/images` folder. This provides better scalability, CDN delivery, and centralized management.

## Prerequisites
1. Supabase tables already created (from previous migration)
2. Team data migrated to Supabase database

## Setup Instructions

### Step 1: Create Storage Bucket

You have two options:

#### Option A: Automatic (Recommended)
Run the migration script which will attempt to create the bucket automatically:
```bash
node scripts/migrate-images-to-supabase.js
```

#### Option B: Manual Setup
1. Go to Supabase Dashboard Storage:
   https://huauwowskshsqpugedoj.supabase.co/project/huauwowskshsqpugedoj/storage/buckets

2. Click "New Bucket"

3. Configure the bucket:
   - **Name**: `team-images`
   - **Public bucket**: ✅ Yes (checked)
   - **File size limit**: 5 MB
   - **Allowed MIME types**: image/jpeg, image/jpg, image/png, image/webp, image/gif

4. Click "Create bucket"

### Step 2: Migrate Existing Images

After creating the bucket, run the migration script:

```bash
node scripts/migrate-images-to-supabase.js
```

This script will:
- ✅ Upload all team images from `/public/images` to Supabase Storage
- ✅ Update database records with new Supabase URLs
- ✅ Skip images already using Supabase URLs
- ✅ Skip default avatar images
- ✅ Show detailed progress and summary

### Step 3: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the team members admin page:
   http://localhost:4028/admin/team-members

3. Try uploading a new image - it should upload to Supabase Storage

4. Check the public About page:
   http://localhost:4028/about

5. Verify images load correctly from Supabase URLs

## What Changed

### API Routes
- ✅ **Upload Route** (`/api/upload`) - Now uploads to Supabase Storage
- ✅ **Delete Route** (`/api/upload/delete`) - Now deletes from Supabase Storage

### Image URLs
- **Before**: `/images/filename.jpg` (local)
- **After**: `https://huauwowskshsqpugedoj.supabase.co/storage/v1/object/public/team-images/filename.jpg`

### File Management
- **Upload**: Uploads go directly to Supabase Storage bucket
- **Delete**: Removes files from Supabase Storage
- **CDN**: Supabase provides global CDN for fast image delivery
- **Backup**: Original images in `/public/images` remain as backup

## Storage Bucket Policies (Optional)

For additional security, you can set up storage policies in Supabase:

```sql
-- Allow public read access (already enabled by making bucket public)
-- But you can also set granular policies:

-- Allow authenticated users to upload
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'team-images');

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated updates"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'team-images');

-- Allow authenticated users to delete
CREATE POLICY "Allow authenticated deletes"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'team-images');
```

## Advantages of Supabase Storage

✅ **Scalability** - No local disk space concerns
✅ **CDN** - Global content delivery network for fast loading
✅ **Security** - Fine-grained access control with RLS
✅ **Backup** - Automatic backups by Supabase
✅ **Management** - Easy file management via dashboard
✅ **Optimization** - Automatic image transformations (optional)

## Troubleshooting

### Issue: "Bucket does not exist"
**Solution**: Create the bucket manually using Option B above

### Issue: "Permission denied"
**Solution**: Ensure the bucket is set to "Public"

### Issue: Images not loading
**Solution**: 
1. Check if bucket is public
2. Verify CORS settings in Supabase (should allow your domain)
3. Check browser console for specific errors

### Issue: Upload fails
**Solution**:
1. Check file size (must be < 5MB)
2. Verify file type is allowed (jpg, png, webp, gif)
3. Check Supabase Storage quotas

## Rollback (if needed)

If you need to revert to local storage:

1. Restore the original API routes from git:
   ```bash
   git checkout HEAD -- src/app/api/upload/route.js src/app/api/upload/delete/route.js
   ```

2. The local images are still in `/public/images` as backup

## Next Steps

Consider these enhancements:
- Image transformations (resize, optimize)
- Image thumbnails for faster loading
- Lazy loading implementation
- WebP format conversion for better compression
- Image upload progress indicators
