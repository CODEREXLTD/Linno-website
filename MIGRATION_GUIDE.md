# Supabase Migration Instructions

## Prerequisites
Your existing data has been backed up:
- `src/data/jobs.json.backup`
- `src/data/team.json.backup`

## Step 1: Create Tables in Supabase

1. Go to your Supabase Dashboard SQL Editor:
   https://huauwowskshsqpugedoj.supabase.co/project/huauwowskshsqpugedoj/sql/new

2. Copy and run the following SQL:

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

-- Create policies for insert/update/delete (allow all for now)
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
```

## Step 2: Migrate Data

After creating the tables, run the migration script:

```bash
node scripts/migrate-data.js
```

This will:
- Transfer all jobs from `jobs.json` to Supabase
- Transfer all team members from `team.json` to Supabase
- Verify the migration was successful

## Step 3: Test Your Application

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit the admin pages to verify everything works:
   - http://localhost:4028/admin/job-positions
   - http://localhost:4028/admin/team-members

3. Test the public pages:
   - http://localhost:4028/careers
   - http://localhost:4028/about

## What Changed

### Code Updates
- ✅ Installed `@supabase/supabase-js` package
- ✅ Created `src/lib/supabase.js` for Supabase client
- ✅ Updated `src/lib/jobs.js` to use Supabase (all CRUD operations)
- ✅ Updated `src/lib/team.js` to use Supabase (all CRUD operations)
- ✅ Updated all API routes to handle async operations

### Data Storage
- **Before**: Data stored in JSON files (`src/data/jobs.json`, `src/data/team.json`)
- **After**: Data stored in Supabase PostgreSQL database
- **Backups**: Original JSON files backed up as `*.json.backup`

## Rollback (if needed)

If you need to rollback to JSON storage:

1. Restore the backup files:
   ```bash
   cp src/data/jobs.json.backup src/data/jobs.json
   cp src/data/team.json.backup src/data/team.json
   ```

2. Revert the lib files using git:
   ```bash
   git checkout HEAD -- src/lib/jobs.js src/lib/team.js
   ```

## Advantages of Supabase

- ✅ **Scalable**: No file locking issues with concurrent writes
- ✅ **Real-time**: Can add real-time subscriptions in the future
- ✅ **Secure**: Row Level Security (RLS) policies
- ✅ **Backup**: Automatic backups by Supabase
- ✅ **Query Power**: Full PostgreSQL capabilities
- ✅ **API**: Auto-generated REST and GraphQL APIs

## Next Steps

Consider adding:
- Better RLS policies (restrict write access to authenticated admins only)
- Audit logging (track who changed what and when)
- Soft deletes (keep deleted records with a deleted_at timestamp)
- Image storage in Supabase Storage
- Full-text search on job titles and descriptions
