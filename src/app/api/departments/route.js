/**
 * Departments API Routes
 * Handles GET and POST requests for departments
 */

import { NextResponse } from 'next/server';
import { getAllDepartments, getActiveDepartments, createDepartment } from '@/lib/departments';
import { verifyAdminToken } from '@/lib/auth';

/**
 * GET /api/departments
 * Returns all departments or active departments only
 */
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const activeOnly = searchParams.get('active') === 'true';

        const departments = activeOnly 
            ? await getActiveDepartments() 
            : await getAllDepartments();

        return NextResponse.json({
            success: true,
            data: departments
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching departments:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch departments' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/departments
 * Creates a new department (admin only)
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
        if (!body.name || !body.key) {
            return NextResponse.json(
                { success: false, message: 'Name and key are required' },
                { status: 400 }
            );
        }

        const newDepartment = await createDepartment(body);

        return NextResponse.json({
            success: true,
            message: 'Department created successfully',
            data: newDepartment
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating department:', error);
        
        // Handle unique constraint violation
        if (error.code === '23505') {
            return NextResponse.json(
                { success: false, message: 'A department with this key already exists' },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { success: false, message: 'Failed to create department' },
            { status: 500 }
        );
    }
}
