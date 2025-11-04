/**
 * Jobs Data Management Utilities
 * Handles CRUD operations for job positions using local JSON file
 */

import fs from 'fs';
import path from 'path';

const JOBS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'jobs.json');

/**
 * Read all jobs from the JSON file
 * @returns {Array} - Array of job objects
 */
export function getAllJobs() {
    try {
        const fileContent = fs.readFileSync(JOBS_FILE_PATH, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading jobs file:', error);
        return [];
    }
}

/**
 * Get published jobs only
 * @returns {Array} - Array of published job objects
 */
export function getPublishedJobs() {
    const jobs = getAllJobs();
    return jobs.filter(job => job.status === 'publish');
}

/**
 * Get a single job by ID
 * @param {string} id - Job ID
 * @returns {Object|null} - Job object or null
 */
export function getJobById(id) {
    const jobs = getAllJobs();
    return jobs.find(job => job.id === id) || null;
}

/**
 * Create a new job
 * @param {Object} jobData - Job data
 * @returns {Object} - Created job object
 */
export function createJob(jobData) {
    const jobs = getAllJobs();
    
    // Generate unique ID
    const newId = `job-${Date.now()}`;
    
    const newJob = {
        id: newId,
        category: jobData.category || '',
        title: jobData.title || '',
        location: jobData.location || 'On-Site',
        type: jobData.type || 'Full Time',
        level: jobData.level || '',
        buttonStyle: jobData.buttonStyle || 'outline',
        buttonLink: jobData.buttonLink || '',
        status: jobData.status || 'draft'
    };
    
    jobs.push(newJob);
    saveJobs(jobs);
    
    return newJob;
}

/**
 * Update an existing job
 * @param {string} id - Job ID
 * @param {Object} jobData - Updated job data
 * @returns {Object|null} - Updated job object or null
 */
export function updateJob(id, jobData) {
    const jobs = getAllJobs();
    const jobIndex = jobs.findIndex(job => job.id === id);
    
    if (jobIndex === -1) {
        return null;
    }
    
    jobs[jobIndex] = {
        ...jobs[jobIndex],
        category: jobData.category !== undefined ? jobData.category : jobs[jobIndex].category,
        title: jobData.title !== undefined ? jobData.title : jobs[jobIndex].title,
        location: jobData.location !== undefined ? jobData.location : jobs[jobIndex].location,
        type: jobData.type !== undefined ? jobData.type : jobs[jobIndex].type,
        level: jobData.level !== undefined ? jobData.level : jobs[jobIndex].level,
        buttonStyle: jobData.buttonStyle !== undefined ? jobData.buttonStyle : jobs[jobIndex].buttonStyle,
        buttonLink: jobData.buttonLink !== undefined ? jobData.buttonLink : jobs[jobIndex].buttonLink,
        status: jobData.status !== undefined ? jobData.status : jobs[jobIndex].status
    };
    
    saveJobs(jobs);
    
    return jobs[jobIndex];
}

/**
 * Delete a job
 * @param {string} id - Job ID
 * @returns {boolean} - True if deleted, false otherwise
 */
export function deleteJob(id) {
    const jobs = getAllJobs();
    const filteredJobs = jobs.filter(job => job.id !== id);
    
    if (filteredJobs.length === jobs.length) {
        return false; // Job not found
    }
    
    saveJobs(filteredJobs);
    return true;
}

/**
 * Save jobs to the JSON file
 * @param {Array} jobs - Array of job objects
 */
function saveJobs(jobs) {
    try {
        fs.writeFileSync(JOBS_FILE_PATH, JSON.stringify(jobs, null, 4), 'utf8');
    } catch (error) {
        console.error('Error saving jobs file:', error);
        throw error;
    }
}
