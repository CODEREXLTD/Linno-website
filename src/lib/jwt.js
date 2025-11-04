/**
 * JWT Utility Functions
 * Handles JWT signing and verification using Next.js built-in crypto
 */

import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

/**
 * Base64 URL encoding
 */
function base64UrlEncode(str) {
    return Buffer.from(str)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

/**
 * Base64 URL decoding
 */
function base64UrlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) {
        str += '=';
    }
    return Buffer.from(str, 'base64').toString('utf8');
}

/**
 * Sign a JWT token
 * @param {Object} payload - Data to encode in the token
 * @param {string} expiresIn - Expiration time (e.g., '24h', '7d')
 * @returns {string} - JWT token
 */
export function signJWT(payload, expiresIn = '24h') {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };

    // Calculate expiration timestamp
    const now = Math.floor(Date.now() / 1000);
    let exp = now;
    
    const timeUnit = expiresIn.slice(-1);
    const timeValue = parseInt(expiresIn.slice(0, -1));
    
    if (timeUnit === 'h') {
        exp += timeValue * 60 * 60;
    } else if (timeUnit === 'd') {
        exp += timeValue * 24 * 60 * 60;
    }

    const tokenPayload = {
        ...payload,
        iat: now,
        exp: exp
    };

    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const encodedPayload = base64UrlEncode(JSON.stringify(tokenPayload));
    
    const signatureInput = `${encodedHeader}.${encodedPayload}`;
    const signature = crypto
        .createHmac('sha256', JWT_SECRET)
        .update(signatureInput)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');

    return `${signatureInput}.${signature}`;
}

/**
 * Verify and decode a JWT token
 * @param {string} token - JWT token to verify
 * @returns {Object|null} - Decoded payload or null if invalid
 */
export function verifyJWT(token) {
    try {
        if (!token) return null;

        const parts = token.split('.');
        if (parts.length !== 3) return null;

        const [encodedHeader, encodedPayload, signature] = parts;

        // Verify signature
        const signatureInput = `${encodedHeader}.${encodedPayload}`;
        const expectedSignature = crypto
            .createHmac('sha256', JWT_SECRET)
            .update(signatureInput)
            .digest('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');

        if (signature !== expectedSignature) {
            return null;
        }

        // Decode payload
        const payload = JSON.parse(base64UrlDecode(encodedPayload));

        // Check expiration
        const now = Math.floor(Date.now() / 1000);
        if (payload.exp && payload.exp < now) {
            return null;
        }

        return payload;
    } catch (error) {
        console.error('JWT verification error:', error);
        return null;
    }
}
