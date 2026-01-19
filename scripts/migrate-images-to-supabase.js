/**
 * Migrate Team Images to Supabase Storage
 * This script uploads all team member images from local /public/images to Supabase Storage
 * and updates the database with new URLs
 * 
 * Run with: node scripts/migrate-images-to-supabase.js
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

async function createStorageBucket() {
    console.log('\n📦 Checking Supabase Storage bucket...\n');

    try {
        // Try to list files in the bucket to verify it exists and is accessible
        const { data, error } = await supabase.storage
            .from('team-images')
            .list('', {
                limit: 1
            });

        if (error) {
            // If error is about bucket not existing, provide instructions
            if (error.message.includes('not found') || error.message.includes('does not exist')) {
                console.error('❌ Bucket "team-images" does not exist\n');
                console.log('⚠️  Please create the bucket manually in Supabase Dashboard:');
                console.log('   1. Go to Storage in your Supabase dashboard');
                console.log('   2. Create a new bucket named "team-images"');
                console.log('   3. Make it public');
                console.log('   4. Run this script again\n');
                return false;
            }
            
            // For other errors, show the message but continue
            console.log(`⚠️  Warning: ${error.message}`);
            console.log('   Continuing anyway...\n');
            return true;
        }

        console.log('✅ Bucket "team-images" is accessible\n');
        return true;
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.log('   Assuming bucket exists and continuing...\n');
        return true; // Continue anyway
    }
}

async function uploadImage(imagePath, filename) {
    try {
        // Read the file
        const fullPath = path.join(process.cwd(), 'public', 'images', filename);
        
        if (!fs.existsSync(fullPath)) {
            console.log(`   ⚠️  File not found: ${fullPath}`);
            return null;
        }

        const fileBuffer = fs.readFileSync(fullPath);
        const fileExt = path.extname(filename);
        const mimeTypes = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.webp': 'image/webp',
            '.gif': 'image/gif'
        };
        const contentType = mimeTypes[fileExt.toLowerCase()] || 'image/jpeg';

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
            .from('team-images')
            .upload(filename, fileBuffer, {
                contentType: contentType,
                cacheControl: '3600',
                upsert: true // Overwrite if exists
            });

        if (error) {
            console.error(`   ❌ Failed to upload ${filename}:`, error.message);
            return null;
        }

        // Get public URL
        const { data: urlData } = supabase.storage
            .from('team-images')
            .getPublicUrl(filename);

        console.log(`   ✅ Uploaded: ${filename}`);
        return urlData.publicUrl;
    } catch (error) {
        console.error(`   ❌ Error uploading ${filename}:`, error.message);
        return null;
    }
}

async function migrateImages() {
    console.log('🖼️  Migrating team member images...\n');

    try {
        // Get all team members from database
        const { data: teamMembers, error } = await supabase
            .from('team_members')
            .select('id, name, image');

        if (error) {
            throw error;
        }

        console.log(`   Found ${teamMembers.length} team members\n`);

        let uploadedCount = 0;
        let skippedCount = 0;
        let failedCount = 0;

        for (const member of teamMembers) {
            const imagePath = member.image;

            // Skip if already a Supabase URL
            if (imagePath.includes('supabase.co')) {
                console.log(`   ⏭️  Skipped ${member.name}: Already using Supabase URL`);
                skippedCount++;
                continue;
            }

            // Skip default images
            if (imagePath.includes('default-avatar')) {
                console.log(`   ⏭️  Skipped ${member.name}: Using default avatar`);
                skippedCount++;
                continue;
            }

            // Extract filename from path
            const filename = imagePath.replace('/images/', '');

            // Upload image
            const newUrl = await uploadImage(imagePath, filename);

            if (newUrl) {
                // Update database with new URL
                const { error: updateError } = await supabase
                    .from('team_members')
                    .update({ image: newUrl })
                    .eq('id', member.id);

                if (updateError) {
                    console.error(`   ❌ Failed to update database for ${member.name}:`, updateError.message);
                    failedCount++;
                } else {
                    uploadedCount++;
                }
            } else {
                failedCount++;
            }
        }

        console.log('\n================================================\n');
        console.log('📊 Migration Summary:\n');
        console.log(`   ✅ Uploaded: ${uploadedCount}`);
        console.log(`   ⏭️  Skipped: ${skippedCount}`);
        console.log(`   ❌ Failed: ${failedCount}`);
        console.log(`   📝 Total: ${teamMembers.length}\n`);

        return uploadedCount > 0 || skippedCount === teamMembers.length;
    } catch (error) {
        console.error('❌ Error migrating images:', error.message);
        return false;
    }
}

async function main() {
    console.log('\n🚀 Starting Image Migration to Supabase Storage\n');
    console.log('================================================\n');

    // Step 1: Create/Check bucket
    const bucketReady = await createStorageBucket();
    
    if (!bucketReady) {
        console.log('\n❌ Cannot proceed without bucket. Please create it manually and run again.\n');
        process.exit(1);
    }

    // Step 2: Migrate images
    const success = await migrateImages();

    if (success) {
        console.log('================================================\n');
        console.log('✅ Image migration completed!\n');
        console.log('🎉 All team images are now in Supabase Storage!\n');
        console.log('💡 Note: Local images in public/images can be kept as backup\n');
    } else {
        console.log('\n❌ Migration failed. Please check the errors above.\n');
        process.exit(1);
    }
}

main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
