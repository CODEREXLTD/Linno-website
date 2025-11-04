/**
 * Login API Route
 * Handles admin authentication and JWT token creation
 */

import { NextResponse } from 'next/server';
import { validateCredentials, createAdminToken } from '@/lib/auth';

export async function POST(request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        // Validate input
        if (!username || !password) {
            return NextResponse.json(
                { success: false, message: 'Username and password are required' },
                { status: 400 }
            );
        }

        // Validate credentials
        if (!validateCredentials(username, password)) {
            return NextResponse.json(
                { success: false, message: 'Invalid username or password' },
                { status: 401 }
            );
        }

        // Create JWT token
        const token = createAdminToken(username);

        // Create response with token in HTTP-only cookie
        const response = NextResponse.json(
            { 
                success: true, 
                message: 'Login successful',
                redirect: '/admin/dashboard'
            },
            { status: 200 }
        );

        // Set HTTP-only cookie
        response.cookies.set({
            name: 'linno-admin-token',
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/'
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred during login' },
            { status: 500 }
        );
    }
}
