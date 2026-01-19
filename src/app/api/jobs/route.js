/**
 * Jobs API Routes
 * Handles GET (all jobs) and POST (create job) requests
 */

import { NextResponse } from 'next/server';
import { getAllJobs, createJob, getPublishedJobs } from '@/lib/jobs';
import { verifyAdminToken } from '@/lib/auth';

/**
 * GET /api/jobs
 * Returns all jobs or only published jobs based on query parameter
 */
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const published = searchParams.get('published');

        let jobs;
        if (published === 'true') {
            jobs = await getPublishedJobs();
        } else {
            jobs = await getAllJobs();
        }

        return NextResponse.json({
            success: true,
            data: jobs
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch jobs' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/jobs
 * Creates a new job (admin only)
 */
export async function POST(request) {
    try {
        // Verify admin token
        const token = request.cookies.get('linno-admin-token')?.value;
        const payload = verifyAdminToken(token);

        if (!payload) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();

        // Validate required fields
        if (!body.title || !body.category) {
            return NextResponse.json(
                { success: false, message: 'Title and category are required' },
                { status: 400 }
            );
        }

        const newJob = await createJob(body);

        return NextResponse.json({
            success: true,
            message: 'Job created successfully',
            data: newJob
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to create job' },
            { status: 500 }
        );
    }
}
