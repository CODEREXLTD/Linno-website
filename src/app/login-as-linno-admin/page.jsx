'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(''); // Clear error on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Redirect to admin dashboard
                router.push('/admin/dashboard');
            } else {
                setError(data.message || 'Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F8F9FC] to-[#E8EBF5] px-4">
            <div className="w-full max-w-[480px]">
                {/* Login Card */}
                <div className="bg-white rounded-[20px] shadow-[0_10px_40px_rgba(11,10,61,0.08)] p-[40px] sm:p-[50px] lg:p-[60px]">
                    {/* Logo/Title Section */}
                    <div className="flex flex-col gap-[12px] mb-[40px] text-center">
                        <h1 className="text-[32px] sm:text-[38px] font-sora font-bold leading-[1.2] text-[#0B0A3D]">
                            Admin <span className="bg-gradient-to-r from-[#3433FE] to-[#21F0A8] bg-clip-text text-transparent">Portal</span>
                        </h1>
                        <p className="text-[16px] font-inter text-[#5E658B] leading-[1.5]">
                            Sign in to manage Linno positions
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-[12px] px-[20px] py-[14px]">
                                <p className="text-[14px] font-inter text-red-600">{error}</p>
                            </div>
                        )}

                        {/* Username Field */}
                        <div className="flex flex-col gap-[10px]">
                            <label 
                                htmlFor="username" 
                                className="text-[14px] font-inter font-medium text-[#0B0A3D]"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full px-[20px] py-[14px] rounded-[12px] border border-[#E0E4F2] bg-white text-[16px] font-inter text-[#0B0A3D] placeholder:text-[#9CA3C4] focus:outline-none focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 transition-all duration-200"
                                placeholder="Enter your username"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col gap-[10px]">
                            <label 
                                htmlFor="password" 
                                className="text-[14px] font-inter font-medium text-[#0B0A3D]"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-[20px] py-[14px] rounded-[12px] border border-[#E0E4F2] bg-white text-[16px] font-inter text-[#0B0A3D] placeholder:text-[#9CA3C4] focus:outline-none focus:border-[#3433FE] focus:ring-2 focus:ring-[#3433FE]/20 transition-all duration-200"
                                placeholder="Enter your password"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-[16px] px-[32px] py-[16px] rounded-[12px] bg-gradient-to-r from-[#3433FE] to-[#21F0A8] text-white text-[16px] font-inter font-semibold leading-[1.5] shadow-[0_4px_20px_rgba(52,51,254,0.3)] hover:shadow-[0_6px_30px_rgba(52,51,254,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-[10px]">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Note */}
                <p className="text-center text-[14px] font-inter text-[#5E658B] mt-[24px]">
                    Secure admin access for Linno team only
                </p>
            </div>
        </div>
    );
}
