"use client"
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import React, { memo } from 'react';
import BlogHero from './components/BlogHero';
import FeaturedBlog from './components/FeaturedBlog';
import HomeCTA from '../components/HomeCTA';
import Sidebar from './components/Sidebar';
import Blogs from './components/Blogs';

const Content = () => {
    return (
        <>
            <div className="min-h-screen">
                <Header />
                <main className="w-full">
                    <BlogHero />
                    <FeaturedBlog />

                    <section className="section-wrapper bg-white">
                        <div className="linno-container">
                            <div className="flex flex-col lg:flex-row gap-[40px] sm:gap-[50px] lg:gap-[64px] xl:gap-[474px]">
                                <Sidebar/>
                                <Blogs />
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