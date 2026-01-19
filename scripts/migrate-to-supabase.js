/**
 * Migration Script: Transfer data from JSON files to Supabase
 * This script will:
 * 1. Create necessary tables in Supabase
 * 2. Migrate existing data from JSON files to Supabase
 * 
 * Run with: node scripts/migrate-to-supabase.js
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.DB_PROJECT_URL;
const supabaseAnonKey = process.env.DB_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing Supabase environment variables');
    console.error('Please check your .env.local file');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function createTables() {
    console.log('\n📋 Creating Supabase tables...\n');

    // Create jobs table
    const jobsTableSQL = `
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
    `;

    // Create team_members table
    const teamTableSQL = `
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
    `;

    try {
        // Note: Direct SQL execution requires service role key or database access
        // For now, we'll create tables manually in Supabase dashboard or use the data directly
        console.log('⚠️  Please create the following tables in your Supabase dashboard:\n');
        console.log('--- JOBS TABLE ---');
        console.log(jobsTableSQL);
        console.log('\n--- TEAM_MEMBERS TABLE ---');
        console.log(teamTableSQL);
        console.log('\n✅ SQL commands generated. Please run them in Supabase SQL Editor.');
        console.log('   Dashboard: https://huauwowskshsqpugedoj.supabase.co\n');
        
        return true;
    } catch (error) {
        console.error('❌ Error:', error.message);
        return false;
    }
}

async function migrateJobs() {
    console.log('📦 Migrating jobs data...\n');

    try {
        // Read jobs from JSON file
        const jobsPath = path.join(__dirname, '..', 'src', 'data', 'jobs.json');
        const jobsData = JSON.parse(fs.readFileSync(jobsPath, 'utf8'));

        console.log(`   Found ${jobsData.length} jobs to migrate`);

        // Check if table exists and has data
        const { data: existingJobs, error: checkError } = await supabase
            .from('jobs')
            .select('id')
            .limit(1);

        if (checkError) {
            if (checkError.message.includes('relation "public.jobs" does not exist')) {
                console.error('❌ Table "jobs" does not exist. Please create it first.');
                return false;
            }
            throw checkError;
        }

        // Insert jobs data
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

        const { data, error } = await supabase
            .from('jobs')
            .upsert(jobsToInsert, { onConflict: 'id' });

        if (error) {
            throw error;
        }

        console.log('✅ Jobs migrated successfully\n');
        return true;
    } catch (error) {
        console.error('❌ Error migrating jobs:', error.message);
        return false;
    }
}

async function migrateTeam() {
    console.log('📦 Migrating team members data...\n');

    try {
        // Read team from JSON file
        const teamPath = path.join(__dirname, '..', 'src', 'data', 'team.json');
        const teamData = JSON.parse(fs.readFileSync(teamPath, 'utf8'));

        console.log(`   Found ${teamData.length} team members to migrate`);

        // Check for duplicate IDs and fix them
        const seenIds = new Set();
        const duplicates = [];
        
        teamData.forEach((member, index) => {
            if (seenIds.has(member.id)) {
                duplicates.push({ index, id: member.id, name: member.name });
            }
            seenIds.add(member.id);
        });

        if (duplicates.length > 0) {
            console.log(`   ⚠️  Found ${duplicates.length} duplicate ID(s). Fixing...\n`);
            duplicates.forEach(dup => {
                const newId = `team-${Date.now()}-${dup.index}`;
                console.log(`      Changing ${dup.id} (${dup.name}) -> ${newId}`);
                teamData[dup.index].id = newId;
            });
            console.log('');
        }

        // Check if table exists
        const { data: existingMembers, error: checkError } = await supabase
            .from('team_members')
            .select('id')
            .limit(1);

        if (checkError) {
            if (checkError.message.includes('relation "public.team_members" does not exist')) {
                console.error('❌ Table "team_members" does not exist. Please create it first.');
                return false;
            }
            throw checkError;
        }

        // Insert team members data
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

        const { data, error } = await supabase
            .from('team_members')
            .upsert(membersToInsert, { onConflict: 'id' });

        if (error) {
            throw error;
        }

        console.log('✅ Team members migrated successfully\n');
        
        // Save the fixed JSON file if there were duplicates
        if (duplicates.length > 0) {
            fs.writeFileSync(teamPath, JSON.stringify(teamData, null, 4), 'utf8');
            console.log('✅ Fixed team.json with unique IDs\n');
        }
        
        return true;
    } catch (error) {
        console.error('❌ Error migrating team members:', error.message);
        return false;
    }
}

async function verifyMigration() {
    console.log('🔍 Verifying migration...\n');

    try {
        // Count jobs
        const { count: jobsCount, error: jobsError } = await supabase
            .from('jobs')
            .select('*', { count: 'exact', head: true });

        if (jobsError) throw jobsError;

        // Count team members
        const { count: teamCount, error: teamError } = await supabase
            .from('team_members')
            .select('*', { count: 'exact', head: true });

        if (teamError) throw teamError;

        console.log(`   ✅ Jobs in database: ${jobsCount}`);
        console.log(`   ✅ Team members in database: ${teamCount}\n`);

        return true;
    } catch (error) {
        console.error('❌ Error verifying migration:', error.message);
        return false;
    }
}

async function main() {
    console.log('\n🚀 Starting Supabase Migration\n');
    console.log('================================================\n');

    // Step 1: Show table creation SQL
    await createTables();

    console.log('\n⏸️  Migration paused. Please complete these steps:\n');
    console.log('1. Go to Supabase Dashboard SQL Editor');
    console.log('2. Run the SQL commands shown above');
    console.log('3. Run this script again with: node scripts/migrate-to-supabase.js migrate\n');

    // If 'migrate' argument is passed, continue with data migration
    if (process.argv.includes('migrate')) {
        console.log('\n▶️  Continuing with data migration...\n');
        console.log('================================================\n');

        const jobsSuccess = await migrateJobs();
        const teamSuccess = await migrateTeam();

        if (jobsSuccess && teamSuccess) {
            await verifyMigration();
            console.log('================================================\n');
            console.log('✅ Migration completed successfully!\n');
            console.log('🎉 Your data is now in Supabase!\n');
        } else {
            console.log('\n❌ Migration failed. Please check the errors above.\n');
            process.exit(1);
        }
    }
}

main().catch(console.error);
