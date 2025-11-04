/**
 * Logout API Route
 * Clears the admin session token
 */

import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const response = NextResponse.json(
            { success: true, message: 'Logout successful' },
            { status: 200 }
        );

        // Clear the cookie
        response.cookies.set({
            name: 'linno-admin-token',
            value: '',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 0,
            path: '/'
        });

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred during logout' },
            { status: 500 }
        );
    }
}
