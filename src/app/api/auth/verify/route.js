/**
 * Authentication Verification Endpoint
 * GET /api/auth/verify - Verify if user is authenticated
 */

import { NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/auth';

export async function GET(request) {
    try {
        // Get token from cookies
        const token = request.cookies.get('linno-admin-token')?.value;

        // Verify token
        const payload = verifyAdminToken(token);

        if (!payload) {
            return NextResponse.json(
                { authenticated: false, message: 'Invalid or missing token' },
                { status: 401 }
            );
        }

        // Token is valid
        return NextResponse.json({
            authenticated: true,
            user: {
                username: payload.username,
                role: payload.role
            }
        });

    } catch (error) {
        console.error('Verification error:', error);
        return NextResponse.json(
            { authenticated: false, message: 'Verification failed' },
            { status: 500 }
        );
    }
}
