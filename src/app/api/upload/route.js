/**
 * Image Upload API Route
 * Handles image uploads to Supabase Storage
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

        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json(
                { success: false, message: 'No file uploaded' },
                { status: 400 }
            );
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { success: false, message: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed' },
                { status: 400 }
            );
        }

        // Validate file size (max 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { success: false, message: 'File size exceeds 5MB limit' },
                { status: 400 }
            );
        }

        // Generate unique filename with timestamp
        const timestamp = Date.now();
        const originalName = file.name.replace(/\s+/g, '-').toLowerCase();
        const extension = originalName.split('.').pop();
        const nameWithoutExt = originalName.substring(0, originalName.lastIndexOf('.'));
        const filename = `${nameWithoutExt}-${timestamp}.${extension}`;

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
            .from('team-images')
            .upload(filename, buffer, {
                contentType: file.type,
                cacheControl: '3600',
                upsert: false
            });

        if (error) {
            console.error('Supabase upload error:', error);
            return NextResponse.json(
                { success: false, message: `Failed to upload to storage: ${error.message}` },
                { status: 500 }
            );
        }

        // Get public URL
        const { data: urlData } = supabase.storage
            .from('team-images')
            .getPublicUrl(filename);

        return NextResponse.json({
            success: true,
            message: 'Image uploaded successfully',
            data: {
                path: urlData.publicUrl,
                filename: filename,
                size: file.size,
                type: file.type
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Error uploading image:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to upload image' },
            { status: 500 }
        );
    }
}
