/**
 * Single Department API Routes
 * Handles GET, PUT, and DELETE requests for individual departments
 */

import { NextResponse } from 'next/server';
import { getDepartmentById, updateDepartment, deleteDepartment } from '@/lib/departments';
import { verifyAdminToken } from '@/lib/auth';

/**
 * GET /api/departments/[id]
 * Returns a single department by ID
 */
export async function GET(request, { params }) {
    try {
        const { id } = params;
        const department = await getDepartmentById(id);

        if (!department) {
            return NextResponse.json(
                { success: false, message: 'Department not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: department
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching department:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch department' },
            { status: 500 }
        );
    }
}

/**
 * PUT /api/departments/[id]
 * Updates a department (admin only)
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

        const updatedDepartment = await updateDepartment(id, body);

        if (!updatedDepartment) {
            return NextResponse.json(
                { success: false, message: 'Department not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Department updated successfully',
            data: updatedDepartment
        }, { status: 200 });
    } catch (error) {
        console.error('Error updating department:', error);
        
        // Handle unique constraint violation
        if (error.code === '23505') {
            return NextResponse.json(
                { success: false, message: 'A department with this key already exists' },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { success: false, message: 'Failed to update department' },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/departments/[id]
 * Deletes a department (admin only)
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
        const deleted = await deleteDepartment(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: 'Department not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Department deleted successfully'
        }, { status: 200 });
    } catch (error) {
        console.error('Error deleting department:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete department' },
            { status: 500 }
        );
    }
}
