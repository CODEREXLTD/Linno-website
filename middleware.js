/**
 * Middleware to protect admin routes
 * Verifies JWT token for all /admin/* routes
 */

import { NextResponse } from 'next/server';
import { verifyAdminToken } from './src/lib/auth';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Allow auth verification endpoint
    if (pathname === '/api/auth/verify' || pathname === '/api/auth/login' || pathname === '/api/auth/logout') {
        return NextResponse.next();
    }

    // Check if the request is for an admin route or admin API
    if (pathname.startsWith('/admin') || pathname.startsWith('/api/')) {
        // Skip protection for public APIs
        if (pathname.startsWith('/api/team') || pathname.startsWith('/api/jobs')) {
            // Only protect write operations for team and jobs
            if (request.method !== 'GET') {
                const token = request.cookies.get('linno-admin-token')?.value;
                const payload = verifyAdminToken(token);

                if (!payload) {
                    return NextResponse.json(
                        { success: false, message: 'Unauthorized' },
                        { status: 401 }
                    );
                }
            }
            return NextResponse.next();
        }

        // For admin pages and other API routes, check authentication
        const token = request.cookies.get('linno-admin-token')?.value;
        const payload = verifyAdminToken(token);

        if (!payload) {
            // For API routes, return 401
            if (pathname.startsWith('/api/')) {
                return NextResponse.json(
                    { success: false, message: 'Unauthorized' },
                    { status: 401 }
                );
            }

            // For admin pages, redirect to login
            const loginUrl = new URL('/login-as-linno-admin', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }

        // Token is valid, allow the request to proceed
        return NextResponse.next();
    }

    // For non-admin routes, allow the request
    return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
    matcher: [
        '/admin/:path*',
        '/api/:path*'
    ]
};
