/**
 * Image Upload API Route
 * Handles image uploads to /public/images/ directory
 */

import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { verifyAdminToken } from '@/lib/auth';

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

        // Create unique filename
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename with timestamp
        const timestamp = Date.now();
        const originalName = file.name.replace(/\s+/g, '-').toLowerCase();
        const extension = path.extname(originalName);
        const nameWithoutExt = path.basename(originalName, extension);
        const filename = `${nameWithoutExt}-${timestamp}${extension}`;

        // Ensure public/images directory exists
        const imagesDir = path.join(process.cwd(), 'public', 'images');
        if (!existsSync(imagesDir)) {
            await mkdir(imagesDir, { recursive: true });
        }

        // Save file
        const filepath = path.join(imagesDir, filename);
        await writeFile(filepath, buffer);

        // Return the public path
        const publicPath = `/images/${filename}`;

        return NextResponse.json({
            success: true,
            message: 'Image uploaded successfully',
            data: {
                path: publicPath,
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
