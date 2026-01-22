# Comprehensive Supabase Migration Guide

This guide covers complete Supabase setup for the Linno website, including fresh installations, project changes, and account migrations.

---

## Table of Contents

1. [Overview](#overview)
2. [Initial Setup (Fresh Installation)](#initial-setup-fresh-installation)
3. [Changing Supabase Project/Account](#changing-supabase-projectaccount)
4. [Database Schema Setup](#database-schema-setup)
5. [Storage Bucket Setup](#storage-bucket-setup)
6. [Data Migration](#data-migration)
7. [Image Migration](#image-migration)
8. [Application Configuration](#application-configuration)
9. [Testing & Verification](#testing--verification)
10. [Troubleshooting](#troubleshooting)
11. [Rollback Procedures](#rollback-procedures)

---

## Overview

### What Uses Supabase?

- **Database**: Job positions and team members data
- **Storage**: Team member profile images
- **Authentication**: Admin authentication (JWT-based, Supabase as backend)

### Architecture

```
Application (Next.js)
    ↓
API Routes (/api/jobs, /api/team, /api/upload)
    ↓
Lib Functions (src/lib/jobs.js, src/lib/team.js)
    ↓
Supabase Client (src/lib/supabase.js)
    ↓
Supabase (Database + Storage)
```

---

## Initial Setup (Fresh Installation)

### Prerequisites

- Node.js installed
- Supabase account
- Git repository cloned

### Step 1: Create Supabase Project

1. Go to https://supabase.com/dashboard
2. Click **"New Project"**
3. Fill in project details:
   - **Name**: `linno-website` (or your preferred name)
   - **Database Password**: Choose a strong password
   - **Region**: Select closest to your users
4. Wait 2-3 minutes for project initialization
5. Note down your project credentials

### Step 2: Get Project Credentials

1. In Supabase Dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJhbGc...`)

### Step 3: Configure Environment Variables

Create or update `.env.local` in project root:

```bash
# Supabase Configuration
DB_PROJECT_URL=https://your-project-id.supabase.co
DB_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Admin Authentication
JWT_SECRET=your-jwt-secret-key-change-in-production
```

**Important**: Never commit `.env.local` to git!

### Step 4: Install Dependencies

```bash
npm install @supabase/supabase-js
```

### Step 5: Setup Database Schema

Go to Supabase **SQL Editor** and run:

```sql
-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    location TEXT DEFAULT 'On-Site',
    type TEXT DEFAULT 'Full Time',
    level TEXT,
    button_style TEXT DEFAULT 'outline',
    button_link TEXT,
    status TEXT DEFAULT 'draft',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    department JSONB DEFAULT '[]'::jsonb,
    image TEXT DEFAULT '/images/default-avatar.jpg',
    icon TEXT DEFAULT '/images/img_lucide_lab_target_arrow.svg',
    status TEXT DEFAULT 'active',
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON jobs
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON team_members
    FOR SELECT USING (true);

-- Create policies for insert/update/delete
CREATE POLICY "Enable insert for all users" ON jobs
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON jobs
    FOR UPDATE USING (true);

CREATE POLICY "Enable delete for all users" ON jobs
    FOR DELETE USING (true);

CREATE POLICY "Enable insert for all users" ON team_members
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON team_members
    FOR UPDATE USING (true);

CREATE POLICY "Enable delete for all users" ON team_members
    FOR DELETE USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
CREATE INDEX IF NOT EXISTS idx_jobs_category ON jobs(category);
CREATE INDEX IF NOT EXISTS idx_team_status ON team_members(status);
CREATE INDEX IF NOT EXISTS idx_team_order ON team_members("order");
CREATE INDEX IF NOT EXISTS idx_team_department ON team_members USING GIN (department);
```

### Step 6: Setup Storage Bucket

1. Go to Supabase Dashboard → **Storage**
2. Click **"New Bucket"**
3. Configure:
   - **Name**: `team-images`
   - **Public bucket**: ✅ Yes (checked)
   - **File size limit**: 5 MB
   - **Allowed MIME types**: Leave default or specify: `image/jpeg, image/jpg, image/png, image/webp, image/gif`
4. Click **"Create bucket"**

### Step 7: Setup Storage Policies

Go to **SQL Editor** and run:

```sql
-- Allow public SELECT (read) access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'team-images' );

-- Allow INSERT (upload) for all users
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
```

### Step 8: Migrate Existing Data

If you have existing data in JSON files:

```bash
# Migrate database data (jobs and team members)
node scripts/migrate-to-supabase.js migrate

# Migrate images to Supabase Storage
node scripts/migrate-images-to-supabase.js
```

### Step 9: Update Next.js Configuration

Ensure `next.config.mjs` includes Supabase domain:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-project-id.supabase.co',
      port: '',
      pathname: '/storage/v1/object/public/**',
    },
  ],
},
```

### Step 10: Start Application

```bash
npm run dev
```

Visit http://localhost:4028 to test.

---

## Changing Supabase Project/Account

### Scenario 1: Moving to a Different Supabase Project

**When you might need this:**
- Switching from development to production
- Moving to a different region
- Starting fresh with a new project

**Steps:**

#### 1. Create New Supabase Project

Follow [Step 1-2 in Initial Setup](#step-1-create-supabase-project)

#### 2. Update Environment Variables

Update `.env.local` with new credentials:

```bash
# Old values (comment out or delete)
# DB_PROJECT_URL=https://old-project.supabase.co
# DB_ANON_KEY=old-anon-key...

# New values
DB_PROJECT_URL=https://new-project.supabase.co
DB_ANON_KEY=new-anon-key...
```

#### 3. Setup Database in New Project

Run the complete SQL schema from [Step 5](#step-5-setup-database-schema)

#### 4. Setup Storage in New Project

1. Create `team-images` bucket (see [Step 6](#step-6-setup-storage-bucket))
2. Apply storage policies (see [Step 7](#step-7-setup-storage-policies))

#### 5. Migrate Data to New Project

**Option A: From JSON Backup Files**
```bash
# Ensure you have backup files
# src/data/jobs.json.backup
# src/data/team.json.backup

# Restore if needed
cp src/data/jobs.json.backup src/data/jobs.json
cp src/data/team.json.backup src/data/team.json

# Run migration
node scripts/migrate-to-supabase.js migrate
node scripts/migrate-images-to-supabase.js
```

**Option B: Export from Old Project**

Create `scripts/export-from-supabase.js`:

```javascript
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Old project credentials
const oldUrl = 'https://old-project.supabase.co';
const oldKey = 'old-anon-key...';
const oldSupabase = createClient(oldUrl, oldKey);

async function exportData() {
  // Export jobs
  const { data: jobs } = await oldSupabase.from('jobs').select('*');
  fs.writeFileSync('export-jobs.json', JSON.stringify(jobs, null, 2));
  
  // Export team members
  const { data: team } = await oldSupabase.from('team_members').select('*');
  fs.writeFileSync('export-team.json', JSON.stringify(team, null, 2));
  
  console.log('Data exported successfully!');
}

exportData();
```

Then import to new project:

```javascript
// Update migrate script to use export-jobs.json and export-team.json
```

#### 6. Update Next.js Configuration

Update `next.config.mjs` with new Supabase domain:

```javascript
{
  protocol: 'https',
  hostname: 'new-project-id.supabase.co', // Update this
  port: '',
  pathname: '/storage/v1/object/public/**',
}
```

#### 7. Restart Application

```bash
# Stop the dev server (Ctrl+C)
npm run dev
```

#### 8. Verify Everything Works

Test all functionality:
- ✅ Jobs listing and CRUD operations
- ✅ Team members listing and CRUD operations
- ✅ Image uploads and display
- ✅ Admin authentication

---

### Scenario 2: Moving to a Different Supabase Account

**When you might need this:**
- Transferring to client's account
- Moving from personal to organization account
- Handing over project ownership

**Steps:**

Same as [Scenario 1](#scenario-1-moving-to-a-different-supabase-project), plus:

#### Additional: Transfer Storage Files

1. **Download all images from old storage:**

```bash
# Create download script: scripts/download-images.js
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const https = require('https');
const path = require('path');

const oldSupabase = createClient('old-url', 'old-key');

async function downloadImages() {
  const { data: files } = await oldSupabase.storage
    .from('team-images')
    .list();
  
  const downloadDir = path.join(__dirname, '..', 'temp-images');
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }

  for (const file of files) {
    const { data } = oldSupabase.storage
      .from('team-images')
      .getPublicUrl(file.name);
    
    // Download logic here
    console.log(`Downloaded: ${file.name}`);
  }
}

downloadImages();
```

2. **Upload to new storage:**

Modify `migrate-images-to-supabase.js` to read from `temp-images` folder.

---

## Database Schema Setup

### Complete SQL Schema

Located in: `scripts/table-schema.sql`

Run this in Supabase SQL Editor whenever:
- Setting up a new project
- Resetting database
- Adding to new environment

### Understanding the Schema

#### Jobs Table

| Column | Type | Description |
|--------|------|-------------|
| id | TEXT | Unique identifier (e.g., "job-1234567890") |
| category | TEXT | Job category (e.g., "Engineering", "Marketing") |
| title | TEXT | Job title |
| location | TEXT | Work location (default: "On-Site") |
| type | TEXT | Employment type (default: "Full Time") |
| level | TEXT | Seniority level (e.g., "Mid-Level", "Senior") |
| button_style | TEXT | UI button style (default: "outline") |
| button_link | TEXT | External job posting URL |
| status | TEXT | publish/draft (default: "draft") |
| created_at | TIMESTAMP | Auto-generated creation time |
| updated_at | TIMESTAMP | Auto-updated modification time |

#### Team Members Table

| Column | Type | Description |
|--------|------|-------------|
| id | TEXT | Unique identifier (e.g., "team-1234567890") |
| name | TEXT | Full name |
| position | TEXT | Job title/position |
| department | JSONB | Array of department keys (e.g., ["engineering", "leadership"]) |
| image | TEXT | Image URL (local or Supabase Storage) |
| icon | TEXT | Icon image URL |
| status | TEXT | active/inactive (default: "active") |
| order | INTEGER | Display order (default: 0) |
| created_at | TIMESTAMP | Auto-generated creation time |
| updated_at | TIMESTAMP | Auto-updated modification time |

---

## Storage Bucket Setup

### Bucket Configuration

- **Name**: `team-images`
- **Type**: Public
- **Size Limit**: 5 MB per file
- **Allowed Types**: image/jpeg, image/jpg, image/png, image/webp, image/gif

### Storage Policies

Policies control who can read/write to storage.

**Current Setup**: Public access (anyone can read/write)

**Production Recommendation**: Restrict writes to authenticated users

```sql
-- More secure production policies
DROP POLICY IF EXISTS "Allow uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow deletes" ON storage.objects;

-- Allow authenticated uploads only
CREATE POLICY "Authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'team-images' );

-- Allow authenticated updates only
CREATE POLICY "Authenticated updates"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'team-images' );

-- Allow authenticated deletes only
CREATE POLICY "Authenticated deletes"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'team-images' );
```

---

## Data Migration

### Migration Scripts

Two main scripts handle data migration:

#### 1. Database Migration: `scripts/migrate-to-supabase.js`

**Purpose**: Migrate jobs and team members from JSON to Supabase database

**Usage**:
```bash
node scripts/migrate-to-supabase.js migrate
```

**What it does**:
- Reads `src/data/jobs.json` and `src/data/team.json`
- Detects and fixes duplicate IDs
- Uploads data to Supabase tables
- Verifies migration success
- Updates JSON files with fixed data

**Output**:
```
🚀 Starting Supabase Migration
================================================
📦 Migrating jobs data...
   Found 3 jobs to migrate
✅ Jobs migrated successfully

📦 Migrating team members data...
   Found 26 team members to migrate
   ⚠️  Found 1 duplicate ID(s). Fixing...
      Changing team-29 (Md Ashfaqur Rahman) -> team-1768793453771-23
✅ Team members migrated successfully
✅ Fixed team.json with unique IDs

🔍 Verifying migration...
   ✅ Jobs in database: 3
   ✅ Team members in database: 26

✅ Migration completed successfully!
```

#### 2. Image Migration: `scripts/migrate-images-to-supabase.js`

**Purpose**: Migrate team member images from local `/public/images` to Supabase Storage

**Usage**:
```bash
node scripts/migrate-images-to-supabase.js
```

**What it does**:
- Checks/verifies `team-images` bucket exists
- Reads team members from database
- Uploads each image to Supabase Storage
- Updates database with new Supabase URLs
- Skips images already in Supabase
- Shows detailed progress

**Output**:
```
🚀 Starting Image Migration to Supabase Storage
================================================
📦 Checking Supabase Storage bucket...
✅ Bucket "team-images" is accessible

🖼️  Migrating team member images...
   Found 26 team members
   ✅ Uploaded: lincoln_islam.jpg
   ✅ Uploaded: farshid.jpg
   ...
   ⏭️  Skipped: Default avatar images

📊 Migration Summary:
   ✅ Uploaded: 24
   ⏭️  Skipped: 2
   ❌ Failed: 0
   📝 Total: 26

✅ Image migration completed!
```

### Manual Data Export/Import

#### Export Current Data

Create `scripts/export-data.js`:

```javascript
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load env
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) envVars[match[1].trim()] = match[2].trim();
});

const supabase = createClient(envVars.DB_PROJECT_URL, envVars.DB_ANON_KEY);

async function exportData() {
    console.log('Exporting data from Supabase...\n');
    
    // Export jobs
    const { data: jobs, error: jobsError } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (jobsError) throw jobsError;
    
    fs.writeFileSync(
        path.join(__dirname, '..', 'backup-jobs.json'),
        JSON.stringify(jobs, null, 2)
    );
    console.log(`✅ Exported ${jobs.length} jobs`);
    
    // Export team members
    const { data: team, error: teamError } = await supabase
        .from('team_members')
        .select('*')
        .order('order', { ascending: true });
    
    if (teamError) throw teamError;
    
    fs.writeFileSync(
        path.join(__dirname, '..', 'backup-team.json'),
        JSON.stringify(team, null, 2)
    );
    console.log(`✅ Exported ${team.length} team members`);
    
    console.log('\n✅ Export complete!');
    console.log('Files saved: backup-jobs.json, backup-team.json\n');
}

exportData().catch(console.error);
```

Run: `node scripts/export-data.js`

---

## Image Migration

### Understanding Image URLs

**Before Migration** (Local):
```
/images/lincoln_islam.jpg
```

**After Migration** (Supabase):
```
https://your-project-id.supabase.co/storage/v1/object/public/team-images/lincoln_islam.jpg
```

### Image Upload Flow

1. User uploads image via admin panel
2. Frontend sends to `/api/upload`
3. API validates file (type, size)
4. API uploads to Supabase Storage
5. Supabase returns public URL
6. URL saved to database

### Handling Large Image Migrations

For 100+ images, modify the script to use batching:

```javascript
// In migrate-images-to-supabase.js
const BATCH_SIZE = 10;

for (let i = 0; i < teamMembers.length; i += BATCH_SIZE) {
    const batch = teamMembers.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(member => uploadImage(member)));
    console.log(`Processed ${Math.min(i + BATCH_SIZE, teamMembers.length)}/${teamMembers.length}`);
}
```

---

## Application Configuration

### File: `src/lib/supabase.js`

Supabase client initialization:

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.DB_PROJECT_URL;
const supabaseAnonKey = process.env.DB_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
    }
});
```

### File: `next.config.mjs`

Image domain configuration:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-project-id.supabase.co',
      port: '',
      pathname: '/storage/v1/object/public/**',
    },
  ],
},
```

**Important**: Update `hostname` when changing Supabase projects!

### Environment Variables

Required in `.env.local`:

```bash
# Supabase
DB_PROJECT_URL=https://xxxxx.supabase.co
DB_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# JWT (for admin auth)
JWT_SECRET=your-secure-secret-key
```

**Security Notes**:
- Never commit `.env.local` to version control
- Use different secrets for dev/staging/production
- Rotate keys periodically
- Store production secrets in secure vault (e.g., Vercel Environment Variables)

---

## Testing & Verification

### Checklist After Migration/Setup

#### Database Tests

```bash
# Test connection
node -e "const {createClient} = require('@supabase/supabase-js'); const s = createClient(process.env.DB_PROJECT_URL, process.env.DB_ANON_KEY); s.from('jobs').select('count').single().then(console.log)"
```

- [ ] Jobs API: GET `/api/jobs`
- [ ] Jobs API: GET `/api/jobs?published=true`
- [ ] Team API: GET `/api/team`
- [ ] Team API: GET `/api/team?active=true`
- [ ] Admin can create job
- [ ] Admin can update job
- [ ] Admin can delete job
- [ ] Admin can create team member
- [ ] Admin can update team member
- [ ] Admin can delete team member

#### Storage Tests

- [ ] Admin can upload image
- [ ] Image appears immediately after upload
- [ ] Images load on public about page
- [ ] Admin can delete image
- [ ] Image URLs use Supabase domain
- [ ] Images load fast (CDN working)

#### Frontend Tests

- [ ] Homepage loads
- [ ] About page shows team members
- [ ] Careers page shows jobs
- [ ] Team member images display correctly
- [ ] Department filtering works
- [ ] Admin dashboard accessible
- [ ] Admin can login
- [ ] Admin can manage data

### Performance Verification

```javascript
// Test query performance
console.time('Get Team Members');
await fetch('/api/team?active=true');
console.timeEnd('Get Team Members');
// Should be < 500ms

console.time('Get Jobs');
await fetch('/api/jobs?published=true');
console.timeEnd('Get Jobs');
// Should be < 300ms
```

---

## Troubleshooting

### Common Issues

#### Issue: "Missing Supabase environment variables"

**Solution**:
1. Check `.env.local` exists in project root
2. Verify `DB_PROJECT_URL` and `DB_ANON_KEY` are set
3. Restart dev server after changing env vars

#### Issue: "Table does not exist"

**Solution**:
1. Go to Supabase SQL Editor
2. Run complete schema from `scripts/table-schema.sql`
3. Verify tables exist in Table Editor

#### Issue: "Row level security policy violation"

**Solution**:
```sql
-- Check existing policies
SELECT * FROM pg_policies WHERE tablename = 'jobs';
SELECT * FROM pg_policies WHERE tablename = 'team_members';

-- If missing, run the policies from table-schema.sql
```

#### Issue: "Bucket does not exist"

**Solution**:
1. Go to Storage in Supabase Dashboard
2. Create bucket named `team-images`
3. Make it public
4. Run storage policies SQL

#### Issue: "Images not loading / hostname not configured"

**Solution**:
1. Update `next.config.mjs` with correct Supabase hostname
2. Restart dev server (`npm run dev`)
3. Hard refresh browser (Ctrl+Shift+R)

#### Issue: "Permission denied" on storage upload

**Solution**:
```sql
-- Run storage policies
-- See scripts/storage-policies.sql
```

#### Issue: "Duplicate key value violates unique constraint"

**Solution**:
The migration script handles this automatically. If manual insertion:
```javascript
// Use upsert instead of insert
await supabase
  .from('jobs')
  .upsert(data, { onConflict: 'id' });
```

#### Issue: Migration script shows "Failed to upload" images

**Causes**:
1. Storage bucket doesn't exist
2. Storage policies not set
3. File doesn't exist locally

**Debug**:
```bash
# Check if images exist
ls -la public/images/*.{jpg,jpeg,png}

# Test bucket access
node -e "const {createClient} = require('@supabase/supabase-js'); const s = createClient(process.env.DB_PROJECT_URL, process.env.DB_ANON_KEY); s.storage.from('team-images').list().then(console.log)"
```

---

## Rollback Procedures

### Scenario 1: Rollback Database to JSON

If you need to revert to local JSON storage:

#### Step 1: Export Current Data

```bash
node scripts/export-data.js
```

#### Step 2: Restore JSON Files

```bash
cp backup-jobs.json src/data/jobs.json
cp backup-team.json src/data/team.json
```

#### Step 3: Revert Code Changes

```bash
# Restore old lib files
git checkout HEAD~1 -- src/lib/jobs.js src/lib/team.js

# Or restore from before Supabase migration
git checkout <commit-hash> -- src/lib/jobs.js src/lib/team.js
```

#### Step 4: Remove Supabase Package (Optional)

```bash
npm uninstall @supabase/supabase-js
```

### Scenario 2: Rollback Images to Local

#### Step 1: Download Images from Supabase

Use the download script (create if needed):

```javascript
// scripts/download-from-supabase.js
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const https = require('https');
const path = require('path');

// ... download logic
```

#### Step 2: Update Database References

```javascript
// Update all image URLs back to local paths
const { data: members } = await supabase
  .from('team_members')
  .select('*');

for (const member of members) {
  if (member.image.includes('supabase.co')) {
    const filename = member.image.split('/').pop();
    await supabase
      .from('team_members')
      .update({ image: `/images/${filename}` })
      .eq('id', member.id);
  }
}
```

#### Step 3: Revert Upload API

```bash
git checkout HEAD~1 -- src/app/api/upload/route.js src/app/api/upload/delete/route.js
```

### Scenario 3: Complete Rollback

Nuclear option - restore everything:

```bash
# Restore data files
cp src/data/*.backup src/data/

# Restore all Supabase-related code
git log --oneline  # Find commit before Supabase
git checkout <commit-before-supabase> -- src/lib/ src/app/api/

# Remove Supabase
npm uninstall @supabase/supabase-js

# Clean up
rm scripts/migrate-*.js
rm scripts/table-schema.sql
rm scripts/storage-policies.sql

# Restart
npm run dev
```

---

## Deployment Considerations

### Environment-Specific Setup

#### Development

```bash
# .env.local (development)
DB_PROJECT_URL=https://dev-project.supabase.co
DB_ANON_KEY=dev-anon-key...
```

#### Staging

```bash
# .env.staging (or via hosting platform)
DB_PROJECT_URL=https://staging-project.supabase.co
DB_ANON_KEY=staging-anon-key...
```

#### Production

```bash
# Set via hosting platform (Vercel, Netlify, etc.)
DB_PROJECT_URL=https://prod-project.supabase.co
DB_ANON_KEY=prod-anon-key...
```

### Deployment Checklist

- [ ] Create production Supabase project
- [ ] Run database schema in production
- [ ] Create storage bucket in production
- [ ] Set storage policies in production
- [ ] Migrate data to production
- [ ] Set environment variables in hosting platform
- [ ] Update `next.config.mjs` with production domain
- [ ] Deploy application
- [ ] Test all functionality in production
- [ ] Setup backup/monitoring

### Continuous Deployment

When deploying with environment changes:

1. **Update Environment Variables** in hosting platform
2. **Update next.config.mjs** if Supabase domain changed
3. **Re-deploy** application
4. **Verify** all features work

---

## Quick Reference

### Essential Commands

```bash
# Install dependencies
npm install @supabase/supabase-js

# Migrate database data
node scripts/migrate-to-supabase.js migrate

# Migrate images
node scripts/migrate-images-to-supabase.js

# Export current data
node scripts/export-data.js

# Start application
npm run dev

# Check errors
npm run build
```

### Essential URLs

- **Supabase Dashboard**: https://supabase.com/dashboard
- **Project Settings**: `https://supabase.com/dashboard/project/YOUR_PROJECT_ID/settings/api`
- **SQL Editor**: `https://supabase.com/dashboard/project/YOUR_PROJECT_ID/sql/new`
- **Storage**: `https://supabase.com/dashboard/project/YOUR_PROJECT_ID/storage/buckets`
- **Table Editor**: `https://supabase.com/dashboard/project/YOUR_PROJECT_ID/editor`

### File Locations

```
/Users/macmini3/Desktop/Linno-website/
├── .env.local                          # Environment variables (DON'T COMMIT!)
├── next.config.mjs                     # Next.js config (image domains)
├── src/
│   ├── lib/
│   │   ├── supabase.js                # Supabase client
│   │   ├── jobs.js                    # Jobs CRUD operations
│   │   └── team.js                    # Team CRUD operations
│   ├── app/api/
│   │   ├── jobs/                      # Jobs API routes
│   │   ├── team/                      # Team API routes
│   │   └── upload/                    # Image upload API
│   └── data/
│       ├── jobs.json.backup           # Original jobs data
│       └── team.json.backup           # Original team data
└── scripts/
    ├── migrate-to-supabase.js         # Database migration
    ├── migrate-images-to-supabase.js  # Image migration
    ├── table-schema.sql               # Database schema
    └── storage-policies.sql           # Storage policies
```

---

## Support & Resources

### Documentation

- **Supabase Docs**: https://supabase.com/docs
- **Supabase JavaScript Client**: https://supabase.com/docs/reference/javascript
- **Next.js Image Optimization**: https://nextjs.org/docs/pages/building-your-application/optimizing/images

### Community

- **Supabase Discord**: https://discord.supabase.com
- **Supabase GitHub**: https://github.com/supabase/supabase

### Need Help?

1. Check [Troubleshooting](#troubleshooting) section
2. Review Supabase logs in Dashboard
3. Check browser console for errors
4. Verify environment variables are correct
5. Test database connection manually

---

## Changelog

### Version 1.0 (January 2026)
- ✅ Initial Supabase migration
- ✅ Database tables for jobs and team members
- ✅ Storage bucket for team images
- ✅ Migration scripts
- ✅ Row Level Security policies
- ✅ Next.js image configuration

### Future Enhancements

- [ ] Implement proper admin authentication with Supabase Auth
- [ ] Add real-time subscriptions for live updates
- [ ] Implement image transformations/optimization
- [ ] Add full-text search capabilities
- [ ] Setup automated backups
- [ ] Add audit logging
- [ ] Implement soft deletes
- [ ] Add data versioning

---

**Last Updated**: January 19, 2026  
**Supabase Version**: Latest  
**Next.js Version**: 14.2.0
