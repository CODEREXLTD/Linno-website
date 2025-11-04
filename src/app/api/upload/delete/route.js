/**
 * Image Delete API Route
 * Handles deletion of images from /public/images/ directory
 */

import { NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
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

        const body = await request.json();
        const { imagePath } = body;

        if (!imagePath) {
            return NextResponse.json(
                { success: false, message: 'No image path provided' },
                { status: 400 }
            );
        }

        // Ensure the path is within /images/ directory for security
        if (!imagePath.startsWith('/images/')) {
            return NextResponse.json(
                { success: false, message: 'Invalid image path' },
                { status: 400 }
            );
        }

        // Convert public path to filesystem path
        const filename = path.basename(imagePath);
        const filepath = path.join(process.cwd(), 'public', 'images', filename);

        // Check if file exists
        if (!existsSync(filepath)) {
            return NextResponse.json(
                { success: false, message: 'Image not found' },
                { status: 404 }
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

        // Delete the file
        await unlink(filepath);

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
