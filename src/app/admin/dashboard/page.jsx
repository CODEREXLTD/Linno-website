'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const router = useRouter();

    const stats = [
        {
            label: 'Total Positions',
            value: '3',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: 'from-[#3433FE] to-[#21F0A8]'
        },
        {
            label: 'Published',
            value: '3',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'from-[#10B981] to-[#34D399]'
        },
        {
            label: 'Draft',
            value: '0',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: 'from-[#F59E0B] to-[#FBBF24]'
        }
    ];

    const quickActions = [
        {
            title: 'Manage Job Positions',
            description: 'View, create, edit, or delete job positions',
            action: () => router.push('/admin/job-positions'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: 'View Live Careers Page',
            description: 'See how job positions appear to visitors',
            action: () => window.open('/careers', '_blank'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        }
    ];

    return (
        <div className="p-6 lg:p-8">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-[32px] font-sora font-bold text-[#0B0A3D] mb-2">
                        Welcome back! 👋
                    </h1>
                    <p className="text-[16px] text-[#5E658B]">
                        Manage your job positions and career page content
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[16px] p-6 shadow-[0_2px_12px_rgba(11,10,61,0.06)] border border-[#E0E4F2] hover:shadow-[0_4px_20px_rgba(11,10,61,0.1)] transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-[12px] bg-gradient-to-r ${stat.color} text-white`}>
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-[14px] font-medium text-[#5E658B] mb-1">
                                {stat.label}
                            </h3>
                            <p className="text-[32px] font-sora font-bold text-[#0B0A3D]">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-[16px] p-6 shadow-[0_2px_12px_rgba(11,10,61,0.06)] border border-[#E0E4F2]">
                    <h2 className="text-[20px] font-sora font-bold text-[#0B0A3D] mb-6">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quickActions.map((action, index) => (
                            <button
                                key={index}
                                onClick={action.action}
                                className="flex items-start gap-4 p-5 rounded-[12px] border border-[#E0E4F2] hover:border-[#3433FE] hover:bg-gradient-to-r hover:from-[#3433FE]/5 hover:to-[#21F0A8]/5 transition-all duration-300 text-left group"
                            >
                                <div className="p-3 rounded-[10px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white group-hover:scale-110 transition-transform duration-300">
                                    {action.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-[16px] font-semibold text-[#0B0A3D] mb-1">
                                        {action.title}
                                    </h3>
                                    <p className="text-[14px] text-[#5E658B]">
                                        {action.description}
                                    </p>
                                </div>
                                <svg className="w-5 h-5 text-[#5E658B] group-hover:text-[#3433FE] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info Card */}
                <div className="mt-6 bg-gradient-to-r from-[#3433FE]/10 to-[#21F0A8]/10 rounded-[16px] p-6 border border-[#3433FE]/20">
                    <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#3433FE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#0B0A3D] mb-1">
                                Admin Portal Information
                            </h3>
                            <p className="text-[14px] text-[#5E658B] leading-relaxed">
                                This admin portal allows you to manage job positions for the Linno careers page. 
                                All changes are saved locally and will be reflected on the public website immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
