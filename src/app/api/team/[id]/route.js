/**
 * Single Team Member API Routes
 * Handles GET, PUT (update), and DELETE requests for individual team members
 */

import { NextResponse } from 'next/server';
import { getTeamMemberById, updateTeamMember, deleteTeamMember } from '@/lib/team';
import { verifyAdminToken } from '@/lib/auth';

/**
 * GET /api/team/[id]
 * Returns a single team member by ID
 */
export async function GET(request, { params }) {
    try {
        const { id } = params;
        const member = getTeamMemberById(id);

        if (!member) {
            return NextResponse.json(
                { success: false, message: 'Team member not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: member
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching team member:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch team member' },
            { status: 500 }
        );
    }
}

/**
 * PUT /api/team/[id]
 * Updates a team member (admin only)
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

        const updatedMember = updateTeamMember(id, body);

        if (!updatedMember) {
            return NextResponse.json(
                { success: false, message: 'Team member not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Team member updated successfully',
            data: updatedMember
        }, { status: 200 });
    } catch (error) {
        console.error('Error updating team member:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to update team member' },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/team/[id]
 * Deletes a team member (admin only)
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
        const deleted = deleteTeamMember(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: 'Team member not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Team member deleted successfully'
        }, { status: 200 });
    } catch (error) {
        console.error('Error deleting team member:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete team member' },
            { status: 500 }
        );
    }
}
