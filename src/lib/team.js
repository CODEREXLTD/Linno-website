/**
 * Team Members Data Management Utilities
 * Handles CRUD operations for team members using local JSON file
 */

import fs from 'fs';
import path from 'path';

const TEAM_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'team.json');

/**
 * Read all team members from the JSON file
 * @returns {Array} - Array of team member objects
 */
export function getAllTeamMembers() {
    try {
        const fileContent = fs.readFileSync(TEAM_FILE_PATH, 'utf8');
        const members = JSON.parse(fileContent);
        // Sort by order
        return members.sort((a, b) => (a.order || 0) - (b.order || 0));
    } catch (error) {
        console.error('Error reading team file:', error);
        return [];
    }
}

/**
 * Get active team members only
 * @returns {Array} - Array of active team member objects
 */
export function getActiveTeamMembers() {
    const members = getAllTeamMembers();
    return members.filter(member => member.status === 'active');
}

/**
 * Get team members by department
 * @param {string} department - Department key
 * @returns {Array} - Array of team member objects
 */
export function getTeamMembersByDepartment(department) {
    const members = getActiveTeamMembers();
    return members.filter(member => {
        if (Array.isArray(member.department)) {
            return member.department.includes(department);
        }
        return member.department === department;
    });
}

/**
 * Get a single team member by ID
 * @param {string} id - Team member ID
 * @returns {Object|null} - Team member object or null
 */
export function getTeamMemberById(id) {
    const members = getAllTeamMembers();
    return members.find(member => member.id === id) || null;
}

/**
 * Create a new team member
 * @param {Object} memberData - Team member data
 * @returns {Object} - Created team member object
 */
export function createTeamMember(memberData) {
    const members = getAllTeamMembers();
    
    // Generate unique ID
    const newId = `team-${Date.now()}`;
    
    // Determine order (last + 1)
    const maxOrder = members.reduce((max, m) => Math.max(max, m.order || 0), 0);
    
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
    
    members.push(newMember);
    saveTeamMembers(members);
    
    return newMember;
}

/**
 * Update an existing team member
 * @param {string} id - Team member ID
 * @param {Object} memberData - Updated team member data
 * @returns {Object|null} - Updated team member object or null
 */
export function updateTeamMember(id, memberData) {
    const members = getAllTeamMembers();
    const memberIndex = members.findIndex(member => member.id === id);
    
    if (memberIndex === -1) {
        return null;
    }
    
    members[memberIndex] = {
        ...members[memberIndex],
        name: memberData.name !== undefined ? memberData.name : members[memberIndex].name,
        position: memberData.position !== undefined ? memberData.position : members[memberIndex].position,
        department: memberData.department !== undefined ? memberData.department : members[memberIndex].department,
        image: memberData.image !== undefined ? memberData.image : members[memberIndex].image,
        icon: memberData.icon !== undefined ? memberData.icon : members[memberIndex].icon,
        status: memberData.status !== undefined ? memberData.status : members[memberIndex].status,
        order: memberData.order !== undefined ? memberData.order : members[memberIndex].order
    };
    
    saveTeamMembers(members);
    
    return members[memberIndex];
}

/**
 * Delete a team member
 * @param {string} id - Team member ID
 * @returns {boolean} - True if deleted, false otherwise
 */
export function deleteTeamMember(id) {
    const members = getAllTeamMembers();
    const filteredMembers = members.filter(member => member.id !== id);
    
    if (filteredMembers.length === members.length) {
        return false; // Member not found
    }
    
    saveTeamMembers(filteredMembers);
    return true;
}

/**
 * Save team members to the JSON file
 * @param {Array} members - Array of team member objects
 */
function saveTeamMembers(members) {
    try {
        fs.writeFileSync(TEAM_FILE_PATH, JSON.stringify(members, null, 4), 'utf8');
    } catch (error) {
        console.error('Error saving team file:', error);
        throw error;
    }
}
