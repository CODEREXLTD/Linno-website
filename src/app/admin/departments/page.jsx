'use client';
import React, { useState, useEffect } from 'react';
import Toast from '@/components/common/Toast';

export default function DepartmentsPage() {
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [editingDept, setEditingDept] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [toast, setToast] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        key: '',
        description: '',
        status: 'active',
        order_index: 0
    });

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
    };

    const closeToast = () => {
        setToast(null);
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await fetch('/api/departments');
            const data = await response.json();
            if (data.success) {
                setDepartments(data.data);
            }
        } catch (error) {
            console.error('Error fetching departments:', error);
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

        // Auto-generate key from name if creating new department
        if (name === 'name' && modalMode === 'create') {
            const generatedKey = value
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')
                .replace(/\s+/g, '-')
                .trim();
            setFormData(prev => ({ ...prev, key: generatedKey }));
        }
    };

    const openCreateModal = () => {
        setModalMode('create');
        const maxOrder = departments.reduce((max, d) => Math.max(max, d.order_index || 0), 0);
        setFormData({
            name: '',
            key: '',
            description: '',
            status: 'active',
            order_index: maxOrder + 1
        });
        setShowModal(true);
    };

    const openEditModal = (dept) => {
        setModalMode('edit');
        setEditingDept(dept);
        setFormData({
            name: dept.name,
            key: dept.key,
            description: dept.description || '',
            status: dept.status,
            order_index: dept.order_index || 0
        });
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            let response;
            if (modalMode === 'create') {
                response = await fetch('/api/departments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            } else {
                response = await fetch(`/api/departments/${editingDept.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            }

            const data = await response.json();

            if (response.ok) {
                await fetchDepartments();
                setShowModal(false);
                setEditingDept(null);
                showToast(
                    modalMode === 'create' 
                        ? 'Department created successfully!' 
                        : 'Department updated successfully!',
                    'success'
                );
            } else {
                showToast(data.message || 'Failed to save department', 'error');
            }
        } catch (error) {
            console.error('Error saving department:', error);
            showToast('An error occurred while saving the department', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (deptId) => {
        setIsDeleting(true);
        try {
            const response = await fetch(`/api/departments/${deptId}`, {
                method: 'DELETE'
            });

            const data = await response.json();

            if (response.ok) {
                await fetchDepartments();
                setDeleteConfirm(null);
                showToast('Department deleted successfully!', 'success');
            } else {
                showToast(data.message || 'Failed to delete department', 'error');
            }
        } catch (error) {
            console.error('Error deleting department:', error);
            showToast('An error occurred while deleting the department', 'error');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="p-6 lg:p-8">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-[32px] font-sora font-bold text-[#0B0A3D] mb-2">
                            Departments
                        </h1>
                        <p className="text-[16px] text-[#5E658B]">
                            Manage departments for team organization
                        </p>
                    </div>
                    <button
                        onClick={openCreateModal}
                        className="flex items-center gap-2 px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white text-[15px] font-semibold shadow-[0_4px_20px_rgba(52,51,254,0.3)] hover:shadow-[0_6px_30px_rgba(52,51,254,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Department
                    </button>
                </div>

                {/* Departments List */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3433FE]"></div>
                    </div>
                ) : departments.length === 0 ? (
                    <div className="bg-white rounded-[16px] p-12 text-center shadow-[0_2px_12px_rgba(11,10,61,0.06)] border border-[#E0E4F2]">
                        <svg className="w-16 h-16 mx-auto mb-4 text-[#E0E4F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <h3 className="text-[20px] font-sora font-bold text-[#0B0A3D] mb-2">No departments yet</h3>
                        <p className="text-[15px] text-[#5E658B] mb-6">Create your first department to get started</p>
                        <button
                            onClick={openCreateModal}
                            className="px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white text-[15px] font-semibold"
                        >
                            Add Department
                        </button>
                    </div>
                ) : (
                    <div className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(11,10,61,0.06)] border border-[#E0E4F2] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#F8F9FC] border-b border-[#E0E4F2]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Key</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Order</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-right text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#E0E4F2]">
                                    {departments.map((dept) => (
                                        <tr key={dept.id} className="hover:bg-[#F8F9FC] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="text-[15px] font-medium text-[#0B0A3D]">{dept.name}</div>
                                                {dept.description && (
                                                    <div className="text-[13px] text-[#5E658B] line-clamp-1">{dept.description}</div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex px-3 py-1 rounded-full text-[13px] font-mono bg-[#F8F9FC] text-[#0B0A3D] border border-[#E0E4F2]">
                                                    {dept.key}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-[14px] text-[#5E658B]">{dept.order_index}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-3 py-1 rounded-full text-[13px] font-medium ${
                                                    dept.status === 'active' 
                                                        ? 'bg-green-100 text-green-700' 
                                                        : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                    {dept.status === 'active' ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => openEditModal(dept)}
                                                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                                                        title="Edit"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteConfirm(dept)}
                                                        className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                                                        title="Delete"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Create/Edit Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-[20px] max-w-[600px] w-full max-h-[90vh] overflow-y-auto">
                            <div className="sticky top-0 bg-white border-b border-[#E0E4F2] px-6 py-4 rounded-t-[20px]">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[24px] font-sora font-bold text-[#0B0A3D]">
                                        {modalMode === 'create' ? 'Create Department' : 'Edit Department'}
                                    </h2>
                                    <button
                                        onClick={() => {
                                            setShowModal(false);
                                            setEditingDept(null);
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
                                            Department Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            placeholder="e.g., Engineering Team"
                                        />
                                    </div>

                                    {/* Key */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Department Key <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="key"
                                            value={formData.key}
                                            onChange={handleInputChange}
                                            required
                                            pattern="[a-z0-9\-]+"
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all font-mono"
                                            placeholder="e.g., engineering"
                                            disabled={modalMode === 'edit'}
                                        />
                                        <p className="text-[12px] text-[#5E658B] mt-1">
                                            Lowercase letters, numbers, and hyphens only. {modalMode === 'edit' && 'Cannot be changed after creation.'}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all resize-none"
                                            placeholder="Optional description..."
                                        />
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
                                                name="order_index"
                                                value={formData.order_index}
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
                                                setEditingDept(null);
                                            }}
                                            className="flex-1 px-6 py-3 rounded-[12px] border border-[#E0E4F2] text-[#5E658B] font-semibold hover:bg-[#F8F9FC] transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white font-semibold shadow-[0_4px_20px_rgba(52,51,254,0.3)] hover:shadow-[0_6px_30px_rgba(52,51,254,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                    <span>Saving...</span>
                                                </>
                                            ) : (
                                                modalMode === 'create' ? 'Create Department' : 'Update Department'
                                            )}
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
                                        Delete Department
                                    </h3>
                                    <p className="text-[15px] text-[#5E658B] leading-relaxed">
                                        Are you sure you want to delete <strong>{deleteConfirm.name}</strong>? 
                                        This may affect team members assigned to this department.
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
                                    disabled={isDeleting}
                                    className="flex-1 px-6 py-3 rounded-[12px] bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isDeleting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                            <span>Deleting...</span>
                                        </>
                                    ) : (
                                        'Delete'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Toast Notification */}
                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={closeToast}
                    />
                )}
            </div>
        </div>
    );
}
