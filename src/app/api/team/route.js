/**
 * Team Members API Routes
 * Handles GET (all members) and POST (create member) requests
 */

import { NextResponse } from 'next/server';
import { getAllTeamMembers, createTeamMember, getActiveTeamMembers } from '@/lib/team';
import { verifyAdminToken } from '@/lib/auth';

/**
 * GET /api/team
 * Returns all team members or only active members based on query parameter
 */
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const active = searchParams.get('active');

        let members;
        if (active === 'true') {
            members = getActiveTeamMembers();
        } else {
            members = getAllTeamMembers();
        }

        return NextResponse.json({
            success: true,
            data: members
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching team members:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch team members' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/team
 * Creates a new team member (admin only)
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
        if (!body.name || !body.position) {
            return NextResponse.json(
                { success: false, message: 'Name and position are required' },
                { status: 400 }
            );
        }

        const newMember = createTeamMember(body);

        return NextResponse.json({
            success: true,
            message: 'Team member created successfully',
            data: newMember
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating team member:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to create team member' },
            { status: 500 }
        );
    }
}
