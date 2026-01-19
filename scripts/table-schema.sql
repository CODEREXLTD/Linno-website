
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

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable read access for all users" ON jobs;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON jobs;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON jobs;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON jobs;

DROP POLICY IF EXISTS "Enable read access for all users" ON team_members;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON team_members;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON team_members;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON team_members;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON jobs
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON team_members
    FOR SELECT USING (true);

-- Create policies for authenticated insert/update/delete (allow all for now)
CREATE POLICY "Enable insert for authenticated users" ON jobs
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON jobs
    FOR UPDATE USING (true);

CREATE POLICY "Enable delete for authenticated users" ON jobs
    FOR DELETE USING (true);

CREATE POLICY "Enable insert for authenticated users" ON team_members
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON team_members
    FOR UPDATE USING (true);

CREATE POLICY "Enable delete for authenticated users" ON team_members
    FOR DELETE USING (true);
