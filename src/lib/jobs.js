/**
 * Jobs Data Management Utilities
 * Handles CRUD operations for job positions using Supabase
 */

import { supabase } from './supabase';

/**
 * Read all jobs from Supabase
 * @returns {Promise<Array>} - Array of job objects
 */
export async function getAllJobs() {
    try {
        const { data, error } = await supabase
            .from('jobs')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // Convert snake_case to camelCase for consistency
        return data.map(job => ({
            id: job.id,
            category: job.category,
            title: job.title,
            location: job.location,
            type: job.type,
            level: job.level,
            buttonStyle: job.button_style,
            buttonLink: job.button_link,
            status: job.status
        }));
    } catch (error) {
        console.error('Error reading jobs from Supabase:', error);
        return [];
    }
}

/**
 * Get published jobs only
 * @returns {Promise<Array>} - Array of published job objects
 */
export async function getPublishedJobs() {
    try {
        const { data, error } = await supabase
            .from('jobs')
            .select('*')
            .eq('status', 'publish')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return data.map(job => ({
            id: job.id,
            category: job.category,
            title: job.title,
            location: job.location,
            type: job.type,
            level: job.level,
            buttonStyle: job.button_style,
            buttonLink: job.button_link,
            status: job.status
        }));
    } catch (error) {
        console.error('Error getting published jobs:', error);
        return [];
    }
}

/**
 * Get a single job by ID
 * @param {string} id - Job ID
 * @returns {Promise<Object|null>} - Job object or null
 */
export async function getJobById(id) {
    try {
        const { data, error } = await supabase
            .from('jobs')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            if (error.code === 'PGRST116') return null; // Not found
            throw error;
        }

        return {
            id: data.id,
            category: data.category,
            title: data.title,
            location: data.location,
            type: data.type,
            level: data.level,
            buttonStyle: data.button_style,
            buttonLink: data.button_link,
            status: data.status
        };
    } catch (error) {
        console.error('Error getting job by ID:', error);
        return null;
    }
}

/**
 * Create a new job
 * @param {Object} jobData - Job data
 * @returns {Promise<Object>} - Created job object
 */
export async function createJob(jobData) {
    try {
        // Generate unique ID
        const newId = `job-${Date.now()}`;
        
        const newJob = {
            id: newId,
            category: jobData.category || '',
            title: jobData.title || '',
            location: jobData.location || 'On-Site',
            type: jobData.type || 'Full Time',
            level: jobData.level || '',
            button_style: jobData.buttonStyle || 'outline',
            button_link: jobData.buttonLink || '',
            status: jobData.status || 'draft'
        };
        
        const { data, error } = await supabase
            .from('jobs')
            .insert([newJob])
            .select()
            .single();

        if (error) throw error;

        return {
            id: data.id,
            category: data.category,
            title: data.title,
            location: data.location,
            type: data.type,
            level: data.level,
            buttonStyle: data.button_style,
            buttonLink: data.button_link,
            status: data.status
        };
    } catch (error) {
        console.error('Error creating job:', error);
        throw error;
    }
}

/**
 * Update an existing job
 * @param {string} id - Job ID
 * @param {Object} jobData - Updated job data
 * @returns {Promise<Object|null>} - Updated job object or null
 */
export async function updateJob(id, jobData) {
    try {
        const updateData = {
            category: jobData.category,
            title: jobData.title,
            location: jobData.location,
            type: jobData.type,
            level: jobData.level,
            button_style: jobData.buttonStyle,
            button_link: jobData.buttonLink,
            status: jobData.status,
            updated_at: new Date().toISOString()
        };

        // Remove undefined values
        Object.keys(updateData).forEach(key => 
            updateData[key] === undefined && delete updateData[key]
        );

        const { data, error } = await supabase
            .from('jobs')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            if (error.code === 'PGRST116') return null; // Not found
            throw error;
        }

        return {
            id: data.id,
            category: data.category,
            title: data.title,
            location: data.location,
            type: data.type,
            level: data.level,
            buttonStyle: data.button_style,
            buttonLink: data.button_link,
            status: data.status
        };
    } catch (error) {
        console.error('Error updating job:', error);
        return null;
    }
}

/**
 * Delete a job
 * @param {string} id - Job ID
 * @returns {Promise<boolean>} - True if deleted, false otherwise
 */
export async function deleteJob(id) {
    try {
        const { error } = await supabase
            .from('jobs')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return true;
    } catch (error) {
        console.error('Error deleting job:', error);
        return false;
    }
}
