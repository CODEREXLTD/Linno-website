import React from 'react';

const BlogPostSkeleton = () => {
    return (
        <div className="min-h-screen animate-pulse">
            {/* Breadcrumb Skeleton */}
            <section className="w-full py-4 bg-gray-50">
                <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                    <div className="flex text-sm">
                        <div className="h-4 bg-gray-200 rounded w-12"></div>
                        <div className="mx-2 h-4 bg-gray-200 rounded w-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-12"></div>
                        <div className="mx-2 h-4 bg-gray-200 rounded w-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                </div>
            </section>

            {/* Hero Section Skeleton */}
            <section className="w-full py-[63px] sm:py-[95px] lg:py-[126px] bg-white">
                <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                    <div className='space-y-6'>
                        {/* Meta info skeleton */}
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                            <div className="h-4 bg-gray-200 rounded w-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                            <div className="h-4 bg-gray-200 rounded w-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                        </div>

                        {/* Title skeleton */}
                        <div className="space-y-3">
                            <div className="h-8 bg-gray-200 rounded w-full"></div>
                            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                        </div>

                        {/* Image skeleton */}
                        <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
            </section>

            {/* Content Section Skeleton */}
            <section className="w-full pb-[63px] sm:pb-[95px] lg:pb-[126px] bg-white">
                <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Skeleton */}
                        <aside className="lg:col-span-1 order-2 lg:order-1">
                            <div className="lg:sticky lg:top-24 space-y-6">
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                                        <div className="h-4 bg-gray-200 rounded w-28"></div>
                                        <div className="h-4 bg-gray-200 rounded w-36"></div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Content Skeleton */}
                        <div className="lg:col-span-3 order-1 lg:order-2">
                            <div className="space-y-8">
                                {/* Paragraph skeletons */}
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                </div>

                                {/* Heading skeleton */}
                                <div className="h-7 bg-gray-200 rounded w-1/2 mt-8"></div>

                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                </div>

                                {/* Another heading */}
                                <div className="h-6 bg-gray-200 rounded w-2/3 mt-8"></div>

                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                </div>

                                {/* Tags skeleton */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <div className="h-6 bg-gray-200 rounded w-16 mb-4"></div>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                                        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                                        <div className="h-6 bg-gray-200 rounded-full w-14"></div>
                                    </div>
                                </div>

                                {/* Author card skeleton */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                                        <div className="space-y-2">
                                            <div className="h-5 bg-gray-200 rounded w-24"></div>
                                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPostSkeleton;