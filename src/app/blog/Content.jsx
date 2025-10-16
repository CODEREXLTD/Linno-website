"use client"
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import React, { memo, useEffect, useState } from 'react';
import BlogHero from './components/BlogHero';
import FeaturedBlog from './components/FeaturedBlog';
import HomeCTA from '../components/HomeCTA';
import Sidebar from './components/Sidebar';
import Blogs from './components/Blogs';
import SidebarLoader from './components/SidebarLoader';
import BlogLoader from './components/BlogLoader';

const Content = () => {
    const [blogs, setBlogs] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const fetchCategories = async () => {
        try{

        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    }

    const fetchBlogs = async (category = 'All') => {
        try{
            setLoading(true);

        } catch (error) {
            console.error('Error fetching blogs:', error);
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

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            // fetchData();
        }; 

        return () => mounted = false;
    }, []);

    return (
        <>
            <div className="min-h-screen">
                <Header />
                <main className="w-full">
                    <BlogHero />
                    <FeaturedBlog />

                    <section className="section-wrapper">
                        <div className="linno-container">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
                                {
                                    pageLoading ? <SidebarLoader /> : <Sidebar/>
                                }

                                {
                                    (pageLoading || loading) ? ( <BlogLoader /> ) : ( <Blogs blogs={blogs} /> )
                                }
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