/**
 * Image Delete API Route
 * Handles deletion of images from Supabase Storage
 */

import { NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
    try {
        // Verify admin token
        const token = request.cookies.get('linno-admin-token')?.value;
        const payload = verifyAdminToken(token);

        if (!payload) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { imagePath } = body;

        if (!imagePath) {
            return NextResponse.json(
                { success: false, message: 'No image path provided' },
                { status: 400 }
            );
        }

        // Extract filename from Supabase URL or local path
        let filename;
        
        if (imagePath.includes('supabase.co')) {
            // It's a Supabase URL - extract filename from URL
            const urlParts = imagePath.split('/');
            filename = urlParts[urlParts.length - 1];
        } else if (imagePath.startsWith('/images/')) {
            // It's a local path - extract filename
            filename = imagePath.replace('/images/', '');
        } else {
            return NextResponse.json(
                { success: false, message: 'Invalid image path' },
                { status: 400 }
            );
        }

        // Prevent deletion of default/system images
        const protectedImages = ['default-avatar.jpg', 'placeholder.jpg'];
        if (protectedImages.includes(filename)) {
            return NextResponse.json(
                { success: false, message: 'Cannot delete protected system image' },
                { status: 403 }
            );
        }

        // Delete from Supabase Storage
        const { error } = await supabase.storage
            .from('team-images')
            .remove([filename]);

        if (error) {
            console.error('Supabase delete error:', error);
            return NextResponse.json(
                { success: false, message: `Failed to delete from storage: ${error.message}` },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Image deleted successfully'
        }, { status: 200 });

    } catch (error) {
        console.error('Error deleting image:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete image' },
            { status: 500 }
        );
    }
}
