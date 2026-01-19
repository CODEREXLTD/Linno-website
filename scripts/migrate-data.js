/**
 * Automated Supabase Migration
 * Run with: node scripts/migrate-data.js
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read env variables from .env.local manually
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        envVars[match[1].trim()] = match[2].trim();
    }
});

const supabaseUrl = envVars.DB_PROJECT_URL;
const supabaseAnonKey = envVars.DB_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// SQL to create tables
const setupSQL = `
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
`;

async function migrateData() {
    console.log('\n🚀 Starting Supabase Migration\n');
    console.log('================================================\n');

    console.log('⚠️  IMPORTANT: Before running this script, please:\n');
    console.log('1. Go to: https://huauwowskshsqpugedoj.supabase.co/project/huauwowskshsqpugedoj/sql/new');
    console.log('2. Copy and run the SQL from: scripts/table-schema.sql\n');
    console.log('If you have already done this, the migration will continue...\n');

    // Save SQL to file for easy access
    fs.writeFileSync(path.join(__dirname, 'table-schema.sql'), setupSQL);
    console.log('✅ SQL schema saved to: scripts/table-schema.sql\n');

    console.log('📦 Starting data migration in 3 seconds...\n');
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Migrate Jobs
    try {
        const jobsPath = path.join(__dirname, '..', 'src', 'data', 'jobs.json');
        const jobsData = JSON.parse(fs.readFileSync(jobsPath, 'utf8'));
        
        console.log(`Migrating ${jobsData.length} jobs...`);

        const jobsToInsert = jobsData.map(job => ({
            id: job.id,
            category: job.category,
            title: job.title,
            location: job.location,
            type: job.type,
            level: job.level,
            button_style: job.buttonStyle,
            button_link: job.buttonLink,
            status: job.status
        }));

        const { error: jobsError } = await supabase
            .from('jobs')
            .upsert(jobsToInsert, { onConflict: 'id' });

        if (jobsError) {
            if (jobsError.message.includes('relation') && jobsError.message.includes('does not exist')) {
                console.error('\n❌ Table "jobs" does not exist!');
                console.error('Please run the SQL from scripts/table-schema.sql in Supabase first.\n');
                process.exit(1);
            }
            throw jobsError;
        }
        console.log('✅ Jobs migrated successfully');
    } catch (error) {
        console.error('❌ Error migrating jobs:', error.message);
        process.exit(1);
    }

    // Migrate Team Members
    try {
        const teamPath = path.join(__dirname, '..', 'src', 'data', 'team.json');
        const teamData = JSON.parse(fs.readFileSync(teamPath, 'utf8'));
        
        console.log(`Migrating ${teamData.length} team members...`);

        const membersToInsert = teamData.map(member => ({
            id: member.id,
            name: member.name,
            position: member.position,
            department: member.department,
            image: member.image,
            icon: member.icon,
            status: member.status,
            order: member.order
        }));

        const { error: teamError } = await supabase
            .from('team_members')
            .upsert(membersToInsert, { onConflict: 'id' });

        if (teamError) {
            if (teamError.message.includes('relation') && teamError.message.includes('does not exist')) {
                console.error('\n❌ Table "team_members" does not exist!');
                console.error('Please run the SQL from scripts/table-schema.sql in Supabase first.\n');
                process.exit(1);
            }
            throw teamError;
        }
        console.log('✅ Team members migrated successfully');
    } catch (error) {
        console.error('❌ Error migrating team members:', error.message);
        process.exit(1);
    }

    // Verify
    const { count: jobsCount } = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true });

    const { count: teamCount } = await supabase
        .from('team_members')
        .select('*', { count: 'exact', head: true });

    console.log('\n================================================\n');
    console.log('✅ Migration completed successfully!\n');
    console.log(`   📊 Jobs in database: ${jobsCount}`);
    console.log(`   📊 Team members in database: ${teamCount}\n`);
    console.log('🎉 Your data is now in Supabase!\n');
    console.log('Next steps:');
    console.log('  - The lib files have been updated to use Supabase');
    console.log('  - Your JSON files are backed up and can be removed later');
    console.log('  - Test your application to ensure everything works\n');
    
    process.exit(0);
}

migrateData().catch(error => {
    console.error('❌ Migration failed:', error);
    process.exit(1);
});
