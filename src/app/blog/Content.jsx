"use client"
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import JoinUsLink from '@/components/ui/JoinUsLink';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo, useState, useEffect } from 'react';
import { useBlogPosts, useFeaturedPosts, useCategories } from '@/hooks/useBlog';

const Content = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [featuredPost, setFeaturedPost] = useState(null);

    // Fetch categories first so we can compute categoryId before posts query
    const {
        categories: apiCategories,
        loading: categoriesLoading,
        error: categoriesError
    } = useCategories();

    // Set featured post when data loads (placed after featuredPosts hook)

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'Asia/Dhaka'
        }).format(new Date());
        
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'Asia/Dhaka'
        }).format(new Date(dateString));
    };

    // Use dynamic categories or fallback to static ones
    const categories = apiCategories.length > 0 ? 
        [{ name: 'All', id: 'all', active: selectedCategory === 'All' }, ...apiCategories.map(cat => ({ 
            name: cat.name, 
            id: cat.id,
            active: selectedCategory === cat.name 
        }))] : 
        [
            { name: 'All', id: 'all', active: selectedCategory === 'All' },
            { name: 'Wordpress', id: 'wordpress', active: selectedCategory === 'Wordpress' },
            { name: 'Funnel', id: 'funnel', active: selectedCategory === 'Funnel' },
            { name: 'Plugins', id: 'plugins', active: selectedCategory === 'Plugins' },
            { name: 'UX design', id: 'ux-design', active: selectedCategory === 'UX design' },
            { name: 'User Research', id: 'user-research', active: selectedCategory === 'User Research' },
            { name: 'Web Accessibility', id: 'web-accessibility', active: selectedCategory === 'Web Accessibility' },
            { name: 'SEO Optimization', id: 'seo-optimization', active: selectedCategory === 'SEO Optimization' },
            { name: 'Content Strategy', id: 'content-strategy', active: selectedCategory === 'Content Strategy' },
            { name: 'Data Analytics', id: 'data-analytics', active: selectedCategory === 'Data Analytics' }
        ];
    
    // Get category ID for filtering (WordPress expects integer IDs)
    const getCategoryId = (categoryName) => {
        if (categoryName === 'All') return null;
        const category = categories.find(cat => cat.name === categoryName);
        return category?.id ? parseInt(category.id) : null;
    };

    // Compute categoryId before fetching posts
    const categoryId = getCategoryId(selectedCategory);

    // Fetch posts after categoryId is computable
    const {
        posts: blogPosts,
        pagination,
        categories: dynamicCategories,
        loading: postsLoading,
        error: postsError
    } = useBlogPosts(currentPage, categoryId, 10);

    const {
        posts: featuredPosts,
        loading: featuredLoading,
        error: featuredError
    } = useFeaturedPosts();

    // Set featured post when data loads
    useEffect(() => {
        if (featuredPosts && featuredPosts.length > 0) {
            setFeaturedPost(featuredPosts[0]);
        }
    }, [featuredPosts]);
    
    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        setCurrentPage(1); // Reset to first page when changing category
    };

    const handlePageChange = (page) => {
        if (!pagination) return;
        if (page === currentPage) return;
        if (page < 1 || page > pagination.totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Build a sliding window of page numbers with ellipses
    const getPageNumbers = (totalPages, current, maxVisible = 7) => {
        if (!totalPages || totalPages <= 0) return [];
        if (totalPages <= maxVisible) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages = [];
        const showLeft = current > 3;
        const showRight = current < totalPages - 2;

        pages.push(1);

        let start = Math.max(2, current - 1);
        let end = Math.min(totalPages - 1, current + 1);

        // Ensure a consistent count of middle pages based on maxVisible
        const neededMiddle = maxVisible - 2; // excluding first and last
        let middleCount = end - start + 1;
        if (middleCount < neededMiddle) {
            const extra = neededMiddle - middleCount;
            const addLeft = Math.min(extra, start - 2);
            start -= addLeft;
            const addRight = extra - addLeft;
            end = Math.min(totalPages - 1, end + addRight);
        }

        if (showLeft && start > 2) pages.push('…');

        for (let p = start; p <= end; p++) pages.push(p);

        if (showRight && end < totalPages - 1) pages.push('…');

        pages.push(totalPages);
        return pages;
    };

    // Loading state
    if (postsLoading || featuredLoading || categoriesLoading) {
        return (
            <div className="min-h-screen">
                <Header />
                <main className="w-full">
                    <section className="w-full pt-[63px] sm:pt-[95px] lg:pt-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className="flex items-center justify-center min-h-[400px]">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3433fe] mx-auto mb-4"></div>
                                    <p className="text-[#51515f] text-lg">Loading blog posts...</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }

    // Error state
    if (postsError || featuredError || categoriesError) {
        return (
            <div className="min-h-screen">
                <Header />
                <main className="w-full">
                    <section className="w-full pt-[63px] sm:pt-[95px] lg:pt-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className="flex items-center justify-center min-h-[400px]">
                                <div className="text-center">
                                    <p className="text-red-500 text-lg mb-4">Error loading blog posts</p>
                                    <p className="text-[#51515f]">Please try again later</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="w-full">
                    <section className="w-full pt-[63px] sm:pt-[95px] lg:pt-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 md:mb-32'>
                                <h2 className='font-sora text-[#0B0B35] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-tight'>
                                    Blog
                                </h2>
                                <p className='font-sora text-[#51515F] text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[32px] w-full max-w-[auto] md:max-w-[500px]'>
                                    The latest from our world and beyond. <br />
                                    Read, watch and go deeper on what's happening with us and our work.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                {featuredPost ? (
                                    <>
                                        <p className='font-sora text-[#0F0E55] text-[14px] md:text-[20px]'>
                                            {featuredPost.category} {formatDate(featuredPost.date)}
                                        </p>

                                        <Link href={`/blog/${featuredPost.slug}`}>
                                            <h3 className='font-sora text-[#0B0B35] text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight'>
                                                {featuredPost.title}
                                            </h3>
                                        </Link>

                                        <div className='mx-auto'>
                                            <Link href={`/blog/${featuredPost.slug}`}>
                                                <Image
                                                    src={featuredPost.image}
                                                    alt={featuredPost.title}
                                                    width={400}
                                                    height={300}
                                                    className="w-full h-auto"
                                                />
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-[#51515f] text-lg">No featured post available</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-[63px] sm:py-[95px] lg:py-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className="flex flex-col lg:flex-row gap-[40px] sm:gap-[50px] lg:gap-[64px] xl:gap-[474px]">
                        {/* Sidebar */}
                        <div className="w-full lg:w-[200px] xl:w-[12%] order-2 lg:order-1">
                        <div className="pb-[20px] sm:pb-[23px] lg:pb-[26px]">
                            <div className="">
                                <div className="flex flex-row lg:flex-col gap-[20px] sm:gap-[25px] lg:gap-[36px] overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                                    {categories?.map((category, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-row justify-start items-center gap-[10px] cursor-pointer flex-shrink-0 lg:flex-shrink hover:opacity-75 transition-opacity duration-200"
                                            onClick={() => handleCategoryClick(category?.name)}
                                        >
                                            <Image
                                            src={category?.name === 'Funnel' ? "/images/img_line_12.svg" : "/images/img_line_14.svg"}
                                            alt="Line"
                                            width={20}
                                            height={1}
                                            className="w-[20px] h-[1px]"
                                            />
                                            <span className={`text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] xl:leading-[24px] ml-[10px] whitespace-nowrap ${
                                            category?.name === 'Funnel' ? 'text-[#3433fe]' : 'text-[#0f0e55]'
                                            }`}>
                                            {category?.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Blog Grid */}
                            <div className="flex-1 order-1 lg:order-2">
                                {blogPosts && blogPosts.length > 0 ? (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] sm:gap-[50px] lg:gap-[64px] mb-[60px] sm:mb-[70px] lg:mb-[80px]">
                                            {blogPosts.map((post, index) => (
                                                <Link
                                                    key={post?.id}
                                                    href={`/blog/${post?.slug}`}
                                                >
                                                    <article className="bg-[#ffffff] rounded-[14px] p-[10px] flex flex-col gap-[20px] sm:gap-[23px] lg:gap-[26px] hover:shadow-lg transition-shadow duration-300 group">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-row justify-start items-center gap-[10px]">
                                                                <div className="w-[1px] h-[18px] bg-[#3433fe]"></div>
                                                                <div className="flex flex-row justify-start items-center gap-[12px] sm:gap-[14px] lg:gap-[16px] px-[10px]">
                                                                    <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                                                        {post?.category}
                                                                    </span>
                                                                    <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                                                        {formatDate(post?.date)}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <h3 className="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-bold leading-[20px] sm:leading-[25px] lg:leading-[30px] xl:leading-[33px] text-[#0b0a3d] group-hover:text-[#3433fe] transition-colors duration-200 line-clamp-3">
                                                                {post?.title}
                                                            </h3>
                                                        </div>
                                                        <div className="relative overflow-hidden rounded-[14px]">
                                                            <Image
                                                                src={post?.image}
                                                                alt={post?.title}
                                                                width={390}
                                                                height={284}
                                                                className="w-full h-auto rounded-[14px] group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                    </article>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Pagination */}
                                        {pagination && pagination.totalPages > 1 && (
                                            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 mb-8">
                                                <button
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    disabled={!pagination.hasPrev}
                                                    className={`px-3 sm:px-4 py-2 rounded-md ${
                                                        pagination.hasPrev 
                                                            ? 'bg-[#3433fe] text-white hover:bg-[#2d2bdb]' 
                                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                    } transition-colors duration-200`}
                                                >
                                                    Previous
                                                </button>

                                                {getPageNumbers(pagination.totalPages, currentPage, 7).map((p, idx) => (
                                                    typeof p === 'string' ? (
                                                        <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">{p}</span>
                                                    ) : (
                                                        <button
                                                            key={p}
                                                            onClick={() => handlePageChange(p)}
                                                            className={`px-3 py-2 rounded-md ${
                                                                currentPage === p
                                                                    ? 'bg-[#3433fe] text-white'
                                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                            } transition-colors duration-200`}
                                                        >
                                                            {p}
                                                        </button>
                                                    )
                                                ))}

                                                <button
                                                    onClick={() => handlePageChange(currentPage + 1)}
                                                    disabled={!pagination.hasNext}
                                                    className={`px-3 sm:px-4 py-2 rounded-md ${
                                                        pagination.hasNext 
                                                            ? 'bg-[#3433fe] text-white hover:bg-[#2d2bdb]' 
                                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                    } transition-colors duration-200`}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="text-center py-12">
                                        <p className="text-[#51515f] text-lg">No blog posts found</p>
                                        {selectedCategory !== 'All' && (
                                            <button
                                                onClick={() => handleCategoryClick('All')}
                                                className="mt-4 px-6 py-2 bg-[#3433fe] text-white rounded-md hover:bg-[#2d2bdb] transition-colors duration-200"
                                            >
                                                View All Posts
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Join Us Section */}
                    <section 
                        className="w-full bg-cover bg-center bg-no-repeat pt-[72px] sm:pt-[108px] lg:pt-[144px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[72px] sm:pb-[108px] lg:pb-[144px] pl-[28px] sm:pl-[42px] lg:pl-[56px]"
                        style={{ backgroundImage: "url('/images/img_bg_2.png')" }}
                    >
                        <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-center w-full">
                            <h2 className="text-[36px] w-full max-w-[660px] font-semibold sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-[#ffffff]">
                                Join us and Make Cool Stuff together
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-center items-center w-auto">
                                <JoinUsLink />
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
			    <Footer />
            </div>
        </>
    )
}

export default memo(Content);