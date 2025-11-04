'use client';
import React, { useState, useEffect } from 'react';

export default function JobPositionsPage() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create'); // 'create' or 'edit'
    const [editingJob, setEditingJob] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        location: 'On-Site',
        type: 'Full Time',
        level: '',
        buttonStyle: 'outline',
        buttonLink: '',
        status: 'publish'
    });

    // Fetch jobs on component mount
    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await fetch('/api/jobs');
            const data = await response.json();
            if (data.success) {
                setJobs(data.data);
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
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

    const openCreateModal = () => {
        setModalMode('create');
        setFormData({
            category: '',
            title: '',
            location: 'On-Site',
            type: 'Full Time',
            level: '',
            buttonStyle: 'outline',
            buttonLink: '',
            status: 'publish'
        });
        setShowModal(true);
    };

    const openEditModal = (job) => {
        setModalMode('edit');
        setEditingJob(job);
        setFormData({
            category: job.category,
            title: job.title,
            location: job.location,
            type: job.type,
            level: job.level,
            buttonStyle: job.buttonStyle || 'outline',
            buttonLink: job.buttonLink,
            status: job.status
        });
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;
            if (modalMode === 'create') {
                response = await fetch('/api/jobs', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            } else {
                response = await fetch(`/api/jobs/${editingJob.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
            }

            if (response.ok) {
                await fetchJobs();
                setShowModal(false);
                setEditingJob(null);
            }
        } catch (error) {
            console.error('Error saving job:', error);
        }
    };

    const handleDelete = async (jobId) => {
        try {
            const response = await fetch(`/api/jobs/${jobId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                await fetchJobs();
                setDeleteConfirm(null);
            }
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    return (
        <div className="p-6 lg:p-8">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-[32px] font-sora font-bold text-[#0B0A3D] mb-2">
                            Job Positions
                        </h1>
                        <p className="text-[16px] text-[#5E658B]">
                            Manage all job openings and positions
                        </p>
                    </div>
                    <button
                        onClick={openCreateModal}
                        className="flex items-center gap-2 px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white text-[15px] font-semibold shadow-[0_4px_20px_rgba(52,51,254,0.3)] hover:shadow-[0_6px_30px_rgba(52,51,254,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add New Position
                    </button>
                </div>

                {/* Jobs List */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3433FE]"></div>
                    </div>
                ) : jobs.length === 0 ? (
                    <div className="bg-white rounded-[16px] p-12 text-center shadow-[0_2px_12px_rgba(11,10,61,0.06)] border border-[#E0E4F2]">
                        <svg className="w-16 h-16 mx-auto mb-4 text-[#E0E4F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-[20px] font-sora font-bold text-[#0B0A3D] mb-2">No job positions yet</h3>
                        <p className="text-[15px] text-[#5E658B] mb-6">Create your first job position to get started</p>
                        <button
                            onClick={openCreateModal}
                            className="px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white text-[15px] font-semibold"
                        >
                            Add New Position
                        </button>
                    </div>
                ) : (
                    <div className="bg-white rounded-[16px] shadow-[0_2px_12px_rgba(11,10,61,0.06)] border border-[#E0E4F2] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#F8F9FC] border-b border-[#E0E4F2]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Title</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Level</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-right text-[13px] font-semibold text-[#5E658B] uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#E0E4F2]">
                                    {jobs.map((job) => (
                                        <tr key={job.id} className="hover:bg-[#F8F9FC] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="text-[15px] font-medium text-[#0B0A3D]">{job.title}</div>
                                                <div className="text-[13px] text-[#5E658B]">{job.location}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex px-3 py-1 rounded-full text-[13px] font-medium bg-[#3433FE]/10 text-[#3433FE]">
                                                    {job.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-[14px] text-[#5E658B]">{job.type}</td>
                                            <td className="px-6 py-4 text-[14px] text-[#5E658B]">{job.level}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-3 py-1 rounded-full text-[13px] font-medium ${
                                                    job.status === 'publish' 
                                                        ? 'bg-green-100 text-green-700' 
                                                        : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {job.status === 'publish' ? 'Published' : 'Draft'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => openEditModal(job)}
                                                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                                                        title="Edit"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteConfirm(job)}
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
                                        {modalMode === 'create' ? 'Create New Position' : 'Edit Position'}
                                    </h2>
                                    <button
                                        onClick={() => {
                                            setShowModal(false);
                                            setEditingJob(null);
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
                                    {/* Title */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Job Title <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            placeholder="e.g., Senior Frontend Developer"
                                        />
                                    </div>

                                    {/* Category */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Category <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            placeholder="e.g., Engineering, Marketing"
                                        />
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Location
                                        </label>
                                        <select
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                        >
                                            <option value="On-Site">On-Site</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Hybrid">Hybrid</option>
                                        </select>
                                    </div>

                                    {/* Type */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Employment Type
                                        </label>
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                        >
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Contract">Contract</option>
                                            <option value="Internship">Internship</option>
                                        </select>
                                    </div>

                                    {/* Level */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Experience Level
                                        </label>
                                        <input
                                            type="text"
                                            name="level"
                                            value={formData.level}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            placeholder="e.g., Junior, Mid-Level, Senior, Lead-Role"
                                        />
                                    </div>

                                    {/* Application Link */}
                                    <div>
                                        <label className="block text-[14px] font-medium text-[#0B0A3D] mb-2">
                                            Application Link
                                        </label>
                                        <input
                                            type="url"
                                            name="buttonLink"
                                            value={formData.buttonLink}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[#E0E4F2] focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 outline-none transition-all"
                                            placeholder="https://..."
                                        />
                                    </div>

                                    {/* Status */}
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
                                            <option value="publish">Publish</option>
                                            <option value="draft">Draft</option>
                                        </select>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowModal(false);
                                                setEditingJob(null);
                                            }}
                                            className="flex-1 px-6 py-3 rounded-[12px] border border-[#E0E4F2] text-[#5E658B] font-semibold hover:bg-[#F8F9FC] transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white font-semibold shadow-[0_4px_20px_rgba(52,51,254,0.3)] hover:shadow-[0_6px_30px_rgba(52,51,254,0.4)] transition-all"
                                        >
                                            {modalMode === 'create' ? 'Create Position' : 'Update Position'}
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
                                        Delete Position
                                    </h3>
                                    <p className="text-[15px] text-[#5E658B] leading-relaxed">
                                        Are you sure you want to delete <strong>{deleteConfirm.title}</strong>? This action cannot be undone.
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
