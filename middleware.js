/**
 * Middleware to protect admin routes
 * Verifies JWT token for all /admin/* routes
 */

import { NextResponse } from 'next/server';
import { verifyAdminToken } from './src/lib/auth';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Check if the request is for an admin route
    if (pathname.startsWith('/admin')) {
        // Get token from cookies
        const token = request.cookies.get('linno-admin-token')?.value;

        // Verify token
        const payload = verifyAdminToken(token);

        if (!payload) {
            // Redirect to login if token is invalid or missing
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
        '/admin/:path*'
    ]
};
