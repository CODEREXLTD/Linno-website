'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
            });

            if (response.ok) {
                router.push('/login-as-linno-admin');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const navigationItems = [
        {
            name: 'Dashboard',
            path: '/admin/dashboard',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            name: 'Job Positions',
            path: '/admin/job-positions',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8F9FC] font-inter">
            {/* Top Navigation Bar */}
            <nav className="bg-white border-b border-[#E0E4F2] sticky top-0 z-50 shadow-sm">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-[70px]">
                        {/* Logo/Brand */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 rounded-lg hover:bg-[#F8F9FC] transition-colors"
                            >
                                <svg className="w-6 h-6 text-[#0B0A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <h1 className="text-[22px] font-sora font-bold text-[#0B0A3D]">
                                Linno <span className="bg-gradient-to-r from-[#3433FE] to-[#21F0A8] bg-clip-text text-transparent">Admin</span>
                            </h1>
                        </div>

                        {/* User Menu */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex flex-col items-end">
                                <span className="text-[14px] font-medium text-[#0B0A3D]">Admin User</span>
                                <span className="text-[12px] text-[#5E658B]">linno-admin-2013</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-[14px] font-medium transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex">
                {/* Sidebar Navigation - Desktop */}
                <aside className="hidden lg:block w-[260px] bg-white border-r border-[#E0E4F2] min-h-[calc(100vh-70px)] sticky top-[70px]">
                    <nav className="p-4">
                        <ul className="flex flex-col gap-2">
                            {navigationItems.map((item) => (
                                <li key={item.path}>
                                    <button
                                        onClick={() => router.push(item.path)}
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium text-[#5E658B] hover:bg-gradient-to-r hover:from-[#3433FE]/10 hover:to-[#21F0A8]/10 hover:text-[#3433FE] transition-all duration-200"
                                    >
                                        {item.icon}
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Mobile Sidebar */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
                        <aside className="w-[260px] bg-white h-full shadow-xl" onClick={(e) => e.stopPropagation()}>
                            <div className="p-4 border-b border-[#E0E4F2]">
                                <h2 className="text-[18px] font-sora font-bold text-[#0B0A3D]">Menu</h2>
                            </div>
                            <nav className="p-4">
                                <ul className="flex flex-col gap-2">
                                    {navigationItems.map((item) => (
                                        <li key={item.path}>
                                            <button
                                                onClick={() => {
                                                    router.push(item.path);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium text-[#5E658B] hover:bg-gradient-to-r hover:from-[#3433FE]/10 hover:to-[#21F0A8]/10 hover:text-[#3433FE] transition-all duration-200"
                                            >
                                                {item.icon}
                                                {item.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>
                    </div>
                )}

                {/* Main Content Area */}
                <main className="flex-1 min-h-[calc(100vh-70px)]">
                    {children}
                </main>
            </div>
        </div>
    );
}
