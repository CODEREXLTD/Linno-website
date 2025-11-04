'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TeamMembersPage() {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [editingMember, setEditingMember] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        department: [],
        image: '/images/default-avatar.jpg',
        icon: '/images/img_lucide_lab_target_arrow.svg',
        status: 'active',
        order: 0
    });

    const departmentOptions = [
        { label: 'Founder', value: 'founder' },
        { label: 'Leadership', value: 'leadership' },
        { label: 'Engineering', value: 'engineering' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Product', value: 'product' },
        { label: 'Customer', value: 'customer' },
        { label: 'Assistant', value: 'assistant' }
    ];

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await fetch('/api/team');
            const data = await response.json();
            if (data.success) {
                setMembers(data.data);
            }
        } catch (error) {
            console.error('Error fetching team members:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDepartmentChange = (dept) => {
        setFormData(prev => {
            const newDepartments = prev.department.includes(dept)
                ? prev.department.filter(d => d !== dept)
                : [...prev.department, dept];
            return { ...prev, department: newDepartments };
        });
    };

    const openCreateModal = () => {
        setModalMode('create');
        const maxOrder = members.reduce((max, m) => Math.max(max, m.order || 0), 0);
        setFormData({
            name: '',
            position: '',
            department: [],
            image: '/images/default-avatar.jpg',
            icon: '/images/img_lucide_lab_target_arrow.svg',
            status: 'active',
            order: maxOrder + 1
        });
        setShowModal(true);
    };

    const openEditModal = (member) => {
        setModalMode('edit');
        setEditingMember(member);
        setFormData({
            name: member.name,
            position: member.position,
            department: Array.isArray(member.department) ? member.department : [member.department],
            image: member.image,
            icon: member.icon || '/images/img_lucide_lab_target_arrow.svg',
            status: member.status,
            order: member.order || 0
        });
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;
            if (modalMode === 'create') {
                response = await fetch('/api/team', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            } else {
                response = await fetch(`/api/team/${editingMember.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            }

            if (response.ok) {
                await fetchMembers();
                setShowModal(false);
                setEditingMember(null);
            }
        } catch (error) {
            console.error('Error saving team member:', error);
        }
    };

    const handleDelete = async (memberId) => {
        try {
            const response = await fetch(`/api/team/${memberId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                await fetchMembers();
                setDeleteConfirm(null);
            }
        } catch (error) {
            console.error('Error deleting team member:', error);
        }
    };

    const getDepartmentBadges = (departments) => {
        const deptArray = Array.isArray(departments) ? departments : [departments];
        return deptArray.map(dept => {
            const option = departmentOptions.find(d => d.value === dept);
            return option ? option.label : dept;
        }).join(', ');
    };

    return (
        <div className="p-6 lg:p-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-[32px] font-sora font-bold text-[#0B0A3D] mb-2">
                            Team Members
                        </h1>
                        <p className="text-[16px] text-[#5E658B]">
                            Manage your team members and their information
                        </p>
                    </div>
                    <button
                        onClick={openCreateModal}
                        className="flex items-center gap-2 px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white text-[15px] font-semibold shadow-[0_4px_20px_rgba(52,51,254,0.3)] hover:shadow-[0_6px_30px_rgba(52,51,254,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Team Member
                    </button>
                </div>

                {/* Team Members Grid */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3433FE]"></div>
                    </div>
                ) : members.length === 0 ? (
                    <div className="bg-white rounded-[16px] p-12 text-center shadow-[0_2px_12px_rgba(11,10,61,0.06)] border border-[#E0E4F2]">
                        <svg className="w-16 h-16 mx-auto mb-4 text-[#E0E4F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <h3 className="text-[20px] font-sora font-bold text-[#0B0A3D] mb-2">No team members yet</h3>
                        <p className="text-[15px] text-[#5E658B] mb-6">Add your first team member to get started</p>
                        <button
                            onClick={openCreateModal}
                            className="px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white text-[15px] font-semibold"
                        >
                            Add Team Member
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {members.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(11,10,61,0.06)] border border-[#E0E4F2] overflow-hidden hover:shadow-[0_4px_20px_rgba(11,10,61,0.1)] transition-all duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative w-full h-[280px] bg-[#F8F9FC] overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={280}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className={`inline-flex px-3 py-1 rounded-full text-[12px] font-medium ${
                                            member.status === 'active' 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-gray-100 text-gray-700'
                                        }`}>
                                            {member.status === 'active' ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-[16px] font-bold text-[#0B0A3D] mb-1 truncate">
                                        {member.name}
                                    </h3>
                                    <p className="text-[14px] text-[#5E658B] mb-3 line-clamp-2 min-h-[40px]">
                                        {member.position}
                                    </p>
                                    
                                    {/* Departments */}
                                    <div className="flex flex-wrap gap-1 mb-4 min-h-[28px]">
                                        {(Array.isArray(member.department) ? member.department : [member.department]).map((dept, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-flex px-2 py-1 rounded-md text-[11px] font-medium bg-[#3433FE]/10 text-[#3433FE]"
                                            >
                                                {departmentOptions.find(d => d.value === dept)?.label || dept}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2 pt-3 border-t border-[#E0E4F2]">
                                        <button
                                            onClick={() => openEditModal(member)}
                                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-[13px] font-medium transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => setDeleteConfirm(member)}
                                            className="flex items-center justify-center p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Create/Edit Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-[20px] max-w-[650px] w-full max-h-[90vh] overflow-y-auto">
                            <div className="sticky top-0 bg-white border-b border-[#E0E4F2] px-6 py-4 rounded-t-[20px]">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[24px] font-sora font-bold text-[#0B0A3D]">
                                        {modalMode === 'create' ? 'Add Team Member' : 'Edit Team Member'}
                                    </h2>
                                    <button
                                        onClick={() => {
                                            setShowModal(false);
                                            setEditingMember(null);
                                        }}
                                        className="p-2 hover:bg-[#F8F9FC] rounded-lg transition-colors"
                                    >
                                        <svg className="w-6 h-6 text-[#5E658B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6">
                                <div className="flex flex-col gap-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            placeholder="e.g., John Doe"
                                        />
                                    </div>

                                    {/* Position */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Position <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="position"
                                            value={formData.position}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            placeholder="e.g., Senior Developer"
                                        />
                                    </div>

                                    {/* Departments */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Departments
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {departmentOptions.map((dept) => (
                                                <label
                                                    key={dept.value}
                                                    className="flex items-center gap-2 p-3 rounded-lg border border-[#E0E4F2] hover:border-[#3433FE] cursor-pointer transition-colors"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.department.includes(dept.value)}
                                                        onChange={() => handleDepartmentChange(dept.value)}
                                                        className="w-4 h-4 text-[#3433FE] rounded focus:ring-2 focus:ring-[#3433FE]/20"
                                                    />
                                                    <span className="text-[14px] text-[#0B0A3D]">{dept.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image URL */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Image Path
                                        </label>
                                        <input
                                            type="text"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            placeholder="/images/team-member.jpg"
                                        />
                                        <p className="text-[12px] text-[#5E658B] mt-1">
                                            Upload image to /public/images/ folder first
                                        </p>
                                    </div>

                                    {/* Status & Order */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                                Status
                                            </label>
                                            <select
                                                name="status"
                                                value={formData.status}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            >
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                                Display Order
                                            </label>
                                            <input
                                                type="number"
                                                name="order"
                                                value={formData.order}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                                placeholder="0"
                                            />
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowModal(false);
                                                setEditingMember(null);
                                            }}
                                            className="flex-1 px-6 py-3 rounded-[12px] border border-[#E0E4F2] text-[#5E658B] font-semibold hover:bg-[#F8F9FC] transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white font-semibold shadow-[0_4px_20px_rgba(52,51,254,0.3)] hover:shadow-[0_6px_30px_rgba(52,51,254,0.4)] transition-all"
                                        >
                                            {modalMode === 'create' ? 'Add Member' : 'Update Member'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {deleteConfirm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-[20px] max-w-[450px] w-full p-6">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 rounded-full bg-red-100">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-[20px] font-sora font-bold text-[#0B0A3D] mb-2">
                                        Delete Team Member
                                    </h3>
                                    <p className="text-[15px] text-[#5E658B] leading-relaxed">
                                        Are you sure you want to remove <strong>{deleteConfirm.name}</strong> from the team? This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setDeleteConfirm(null)}
                                    className="flex-1 px-6 py-3 rounded-[12px] border border-[#E0E4F2] text-[#5E658B] font-semibold hover:bg-[#F8F9FC] transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => handleDelete(deleteConfirm.id)}
                                    className="flex-1 px-6 py-3 rounded-[12px] bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
