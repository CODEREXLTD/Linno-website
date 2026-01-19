/**
 * Supabase Client Configuration
 * Provides server-side and client-side Supabase instances
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.DB_PROJECT_URL;
const supabaseAnonKey = process.env.DB_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

/**
 * Server-side Supabase client
 * Used in API routes and server components
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
    }
});

/**
 * Get Supabase client instance
 * @returns {Object} Supabase client
 */
export function getSupabaseClient() {
    return supabase;
}
