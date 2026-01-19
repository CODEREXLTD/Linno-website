/**
 * Team Members Data Management Utilities
 * Handles CRUD operations for team members using Supabase
 */

import { supabase } from './supabase';

/**
 * Read all team members from Supabase
 * @returns {Promise<Array>} - Array of team member objects
 */
export async function getAllTeamMembers() {
    try {
        const { data, error } = await supabase
            .from('team_members')
            .select('*')
            .order('order', { ascending: true });

        if (error) throw error;

        return data || [];
    } catch (error) {
        console.error('Error reading team members from Supabase:', error);
        return [];
    }
}

/**
 * Get active team members only
 * @returns {Promise<Array>} - Array of active team member objects
 */
export async function getActiveTeamMembers() {
    try {
        const { data, error } = await supabase
            .from('team_members')
            .select('*')
            .eq('status', 'active')
            .order('order', { ascending: true });

        if (error) throw error;

        return data || [];
    } catch (error) {
        console.error('Error getting active team members:', error);
        return [];
    }
}

/**
 * Get team members by department
 * @param {string} department - Department key
 * @returns {Promise<Array>} - Array of team member objects
 */
export async function getTeamMembersByDepartment(department) {
    try {
        const { data, error } = await supabase
            .from('team_members')
            .select('*')
            .eq('status', 'active')
            .contains('department', [department])
            .order('order', { ascending: true });

        if (error) throw error;

        return data || [];
    } catch (error) {
        console.error('Error getting team members by department:', error);
        return [];
    }
}

/**
 * Get a single team member by ID
 * @param {string} id - Team member ID
 * @returns {Promise<Object|null>} - Team member object or null
 */
export async function getTeamMemberById(id) {
    try {
        const { data, error } = await supabase
            .from('team_members')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            if (error.code === 'PGRST116') return null; // Not found
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error getting team member by ID:', error);
        return null;
    }
}

/**
 * Create a new team member
 * @param {Object} memberData - Team member data
 * @returns {Promise<Object>} - Created team member object
 */
export async function createTeamMember(memberData) {
    try {
        // Generate unique ID
        const newId = `team-${Date.now()}`;
        
        // Get max order for new member
        const { data: existingMembers } = await supabase
            .from('team_members')
            .select('order')
            .order('order', { ascending: false })
            .limit(1);

        const maxOrder = existingMembers && existingMembers.length > 0 
            ? existingMembers[0].order 
            : 0;
        
        const newMember = {
            id: newId,
            name: memberData.name || '',
            position: memberData.position || '',
            department: memberData.department || [],
            image: memberData.image || '/images/default-avatar.jpg',
            icon: memberData.icon || '/images/img_lucide_lab_target_arrow.svg',
            status: memberData.status || 'active',
            order: memberData.order !== undefined ? memberData.order : maxOrder + 1
        };
        
        const { data, error } = await supabase
            .from('team_members')
            .insert([newMember])
            .select()
            .single();

        if (error) throw error;

        return data;
    } catch (error) {
        console.error('Error creating team member:', error);
        throw error;
    }
}

/**
 * Update an existing team member
 * @param {string} id - Team member ID
 * @param {Object} memberData - Updated team member data
 * @returns {Promise<Object|null>} - Updated team member object or null
 */
export async function updateTeamMember(id, memberData) {
    try {
        const updateData = {
            name: memberData.name,
            position: memberData.position,
            department: memberData.department,
            image: memberData.image,
            icon: memberData.icon,
            status: memberData.status,
            order: memberData.order,
            updated_at: new Date().toISOString()
        };

        // Remove undefined values
        Object.keys(updateData).forEach(key => 
            updateData[key] === undefined && delete updateData[key]
        );

        const { data, error } = await supabase
            .from('team_members')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            if (error.code === 'PGRST116') return null; // Not found
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error updating team member:', error);
        return null;
    }
}

/**
 * Delete a team member
 * @param {string} id - Team member ID
 * @returns {Promise<boolean>} - True if deleted, false otherwise
 */
export async function deleteTeamMember(id) {
    try {
        const { error } = await supabase
            .from('team_members')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return true;
    } catch (error) {
        console.error('Error deleting team member:', error);
        return false;
    }
}
