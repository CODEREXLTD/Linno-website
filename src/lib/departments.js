/**
 * Departments Data Management Utilities
 * Handles CRUD operations for departments using Supabase
 */

import { supabase } from './supabase';

/**
 * Get all departments
 * @returns {Promise<Array>} - Array of department objects
 */
export async function getAllDepartments() {
    try {
        const { data, error } = await supabase
            .from('departments')
            .select('*')
            .order('order_index', { ascending: true });

        if (error) throw error;

        return data || [];
    } catch (error) {
        console.error('Error fetching departments:', error);
        return [];
    }
}

/**
 * Get active departments only
 * @returns {Promise<Array>} - Array of active department objects
 */
export async function getActiveDepartments() {
    try {
        const { data, error } = await supabase
            .from('departments')
            .select('*')
            .eq('status', 'active')
            .order('order_index', { ascending: true });

        if (error) throw error;

        return data || [];
    } catch (error) {
        console.error('Error fetching active departments:', error);
        return [];
    }
}

/**
 * Get a single department by ID
 * @param {string} id - Department ID
 * @returns {Promise<Object|null>} - Department object or null
 */
export async function getDepartmentById(id) {
    try {
        const { data, error } = await supabase
            .from('departments')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            if (error.code === 'PGRST116') return null;
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching department:', error);
        return null;
    }
}

/**
 * Get a department by key
 * @param {string} key - Department key
 * @returns {Promise<Object|null>} - Department object or null
 */
export async function getDepartmentByKey(key) {
    try {
        const { data, error } = await supabase
            .from('departments')
            .select('*')
            .eq('key', key)
            .single();

        if (error) {
            if (error.code === 'PGRST116') return null;
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching department by key:', error);
        return null;
    }
}

/**
 * Create a new department
 * @param {Object} departmentData - Department data
 * @returns {Promise<Object>} - Created department object
 */
export async function createDepartment(departmentData) {
    try {
        // Generate unique ID
        const newId = `dept-${Date.now()}`;
        
        // Get max order for new department
        const { data: existingDepts } = await supabase
            .from('departments')
            .select('order_index')
            .order('order_index', { ascending: false })
            .limit(1);

        const maxOrder = existingDepts && existingDepts.length > 0 
            ? existingDepts[0].order_index 
            : 0;
        
        const newDepartment = {
            id: newId,
            name: departmentData.name || '',
            key: departmentData.key || '',
            description: departmentData.description || null,
            icon: departmentData.icon || null,
            status: departmentData.status || 'active',
            order_index: departmentData.order_index !== undefined ? departmentData.order_index : maxOrder + 1
        };
        
        const { data, error } = await supabase
            .from('departments')
            .insert([newDepartment])
            .select()
            .single();

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Error creating department:', error);
        throw error;
    }
}

/**
 * Update an existing department
 * @param {string} id - Department ID
 * @param {Object} departmentData - Updated department data
 * @returns {Promise<Object|null>} - Updated department object or null
 */
export async function updateDepartment(id, departmentData) {
    try {
        const updateData = {
            name: departmentData.name,
            key: departmentData.key,
            description: departmentData.description,
            icon: departmentData.icon,
            status: departmentData.status,
            order_index: departmentData.order_index,
            updated_at: new Date().toISOString()
        };

        // Remove undefined values
        Object.keys(updateData).forEach(key => 
            updateData[key] === undefined && delete updateData[key]
        );

        const { data, error } = await supabase
            .from('departments')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            if (error.code === 'PGRST116') return null;
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error updating department:', error);
        return null;
    }
}

/**
 * Delete a department
 * @param {string} id - Department ID
 * @returns {Promise<boolean>} - True if deleted, false otherwise
 */
export async function deleteDepartment(id) {
    try {
        const { error } = await supabase
            .from('departments')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return true;
    } catch (error) {
        console.error('Error deleting department:', error);
        return false;
    }
}
