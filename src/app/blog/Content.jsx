"use client"
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import React, { memo, useEffect, useState, useCallback } from 'react';
import BlogHero from './components/BlogHero';
import FeaturedBlog from './components/FeaturedBlog';
import HomeCTA from '../components/HomeCTA';
import Sidebar from './components/Sidebar';
import Blogs from './components/Blogs';
import SidebarLoader from './components/SidebarLoader';
import BlogLoader from './components/BlogLoader';
import { fetchBlogPosts, fetchCategories as fetchCategoriesAPI, getTotalPostsCount } from '@/services/blogApi';

const Content = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLoading, setPageLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            const categoriesData = await fetchCategoriesAPI();
            const totalPosts = await getTotalPostsCount();
            
            // Add "All" category at the beginning with total posts count
            const allCategories = [
                { id: 'all', name: 'All', slug: 'all', count: totalPosts },
                ...categoriesData
            ];
            setCategories(allCategories);
            setError(null);
        } catch (error) {
            console.error('Error fetching categories:', error);
            setError('Failed to load categories');
            // Set default categories on error
            setCategories([{ id: 'all', name: 'All', slug: 'all', count: 0 }]);
        }
    }

    const fetchBlogs = async (category = 'All', page = 1) => {
        try {
            setLoading(true);
            setError(null);
            
            // Find the category ID based on the category name
            // Only pass categoryId if it's not 'All' and we have categories loaded
            let categoryId = null;
            if (category !== 'All' && categories.length > 0) {
                const foundCategory = categories.find(cat => cat.name === category);
                categoryId = foundCategory?.id || null;
            }
            
            // Use a reasonable page size for pagination
            const response = await fetchBlogPosts(page, 6, categoryId);
            
            setBlogs(response.posts || []);
            
            // Use the actual pagination data from WordPress API
            const paginationData = response.pagination || {
                currentPage: page,
                totalPages: 1,
                totalPosts: response.posts?.length || 0,
                hasNext: false,
                hasPrev: page > 1
            };
            
            setPagination(paginationData);
            setCurrentPage(page);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setError('Failed to load blog posts');
            setBlogs([]);
            setPagination(null);
        } finally {
            setLoading(false);
        }
    };

    const fetchData = async () => {
        setPageLoading(true);
        await fetchCategories();
        await fetchBlogs();
        setPageLoading(false);
    }

    const handleCategoryClick = useCallback(async (categoryName) => {
        if (categoryName !== selectedCategory) {
            setSelectedCategory(categoryName);
            setCurrentPage(1);
            await fetchBlogs(categoryName, 1);
        }
    }, [selectedCategory, categories]);

    const handlePageChange = useCallback(async (page) => {
        if (page !== currentPage && page > 0) {
            await fetchBlogs(selectedCategory, page);
        }
    }, [currentPage, selectedCategory, categories]);

    // Helper function for pagination
    const getPageNumbers = useCallback((totalPages, currentPage, maxVisible = 7) => {
        const pages = [];
        const half = Math.floor(maxVisible / 2);
        
        let start = Math.max(1, currentPage - half);
        let end = Math.min(totalPages, currentPage + half);
        
        if (end - start + 1 < maxVisible) {
            if (start === 1) {
                end = Math.min(totalPages, start + maxVisible - 1);
            } else {
                start = Math.max(1, end - maxVisible + 1);
            }
        }
        
        if (start > 1) {
            pages.push(1);
            if (start > 2) pages.push('...');
        }
        
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        
        if (end < totalPages) {
            if (end < totalPages - 1) pages.push('...');
            pages.push(totalPages);
        }
        
        return pages;
    }, []);

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            fetchData();
        }; 

        return () => mounted = false;
    }, []);

    // Refetch blogs when categories are loaded for the first time
    useEffect(() => {
        if (categories.length > 1 && !pageLoading && blogs.length === 0) {
            fetchBlogs(selectedCategory, currentPage);
        }
    }, [categories]);

    return (
        <>
            <div className="min-h-screen">
                <Header />
                <main className="w-full">
                    <BlogHero />
                    <FeaturedBlog />

                    <section className="section-wrapper bg-[#F2F5FB]">
                        <div className="linno-container">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
                                <div>
                                    {
                                        pageLoading ? <SidebarLoader /> : (
                                            <Sidebar 
                                                categories={categories} 
                                                selectedCategory={selectedCategory}
                                                handleCategoryClick={handleCategoryClick}
                                            />
                                        )
                                    }
                                </div>

                                <div>
                                    {
                                        (pageLoading || loading) ? ( <BlogLoader /> ) : ( 
                                            <Blogs 
                                                blogs={blogs} 
                                                pagination={pagination}
                                                currentPage={currentPage}
                                                selectedCategory={selectedCategory}
                                                handlePageChange={handlePageChange}
                                                handleCategoryClick={handleCategoryClick}
                                                getPageNumbers={getPageNumbers}
                                                error={error}
                                            /> 
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <HomeCTA />
                </main>

                <Footer />
            </div>
        </>
    )
}

export default memo(Content);