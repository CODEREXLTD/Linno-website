/**
 * Single Job API Routes
 * Handles GET, PUT (update), and DELETE requests for individual jobs
 */

import { NextResponse } from 'next/server';
import { getJobById, updateJob, deleteJob } from '@/lib/jobs';
import { verifyAdminToken } from '@/lib/auth';

/**
 * GET /api/jobs/[id]
 * Returns a single job by ID
 */
export async function GET(request, { params }) {
    try {
        const { id } = params;
        const job = getJobById(id);

        if (!job) {
            return NextResponse.json(
                { success: false, message: 'Job not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: job
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching job:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch job' },
            { status: 500 }
        );
    }
}

/**
 * PUT /api/jobs/[id]
 * Updates a job (admin only)
 */
export async function PUT(request, { params }) {
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

        const { id } = params;
        const body = await request.json();

        const updatedJob = updateJob(id, body);

        if (!updatedJob) {
            return NextResponse.json(
                { success: false, message: 'Job not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Job updated successfully',
            data: updatedJob
        }, { status: 200 });
    } catch (error) {
        console.error('Error updating job:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to update job' },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/jobs/[id]
 * Deletes a job (admin only)
 */
export async function DELETE(request, { params }) {
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

        const { id } = params;
        const deleted = deleteJob(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: 'Job not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Job deleted successfully'
        }, { status: 200 });
    } catch (error) {
        console.error('Error deleting job:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete job' },
            { status: 500 }
        );
    }
}
