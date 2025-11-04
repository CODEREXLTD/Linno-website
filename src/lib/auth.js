/**
 * Authentication Utilities
 * Handles admin authentication and authorization
 */

import { signJWT, verifyJWT } from './jwt';

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
    username: 'linno-admin-2013',
    password: 'g%k$mg#j9n-nBgze'
};

/**
 * Validate admin credentials
 * @param {string} username - Username to validate
 * @param {string} password - Password to validate
 * @returns {boolean} - True if credentials are valid
 */
export function validateCredentials(username, password) {
    return (
        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password
    );
}

/**
 * Create admin session token
 * @param {string} username - Admin username
 * @returns {string} - JWT token
 */
export function createAdminToken(username) {
    return signJWT(
        {
            username,
            role: 'admin',
            type: 'linno-admin-session'
        },
        '24h' // Token expires in 24 hours
    );
}

/**
 * Verify admin token
 * @param {string} token - JWT token to verify
 * @returns {Object|null} - Decoded token payload or null
 */
export function verifyAdminToken(token) {
    const payload = verifyJWT(token);
    
    if (!payload) return null;
    
    // Verify it's an admin token
    if (payload.role !== 'admin' || payload.type !== 'linno-admin-session') {
        return null;
    }
    
    return payload;
}

/**
 * Extract token from request cookies
 * @param {Request} request - Next.js request object
 * @returns {string|null} - Token or null
 */
export function getTokenFromRequest(request) {
    const cookieHeader = request.headers.get('cookie');
    if (!cookieHeader) return null;

    const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});

    return cookies['linno-admin-token'] || null;
}
