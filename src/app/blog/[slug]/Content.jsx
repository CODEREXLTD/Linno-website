'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TeamCard from '@/components/common/TeamCard';
import BlogPostSkeleton from '@/components/common/BlogPostSkeleton';
import HomeCTA from '@/app/components/HomeCTA';
import { useBlogPost } from '@/hooks/useBlog';
import '@/styles/blog-post.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import '@wordpress/base-styles/_colors.scss';
import '@wordpress/base-styles/_variables.scss';
import '@wordpress/base-styles/_mixins.scss';
import '@wordpress/base-styles/_breakpoints.scss';
import '@wordpress/base-styles/_animations.scss';
import '@wordpress/base-styles/_z-index.scss';

const Content = ({slug}) => {
    const [headings, setHeadings] = useState([]);
    const [currentUrl, setCurrentUrl] = useState('');
    const [showMobileToc, setShowMobileToc] = useState(false);
    const { post, loading, error } = useBlogPost(slug);

    useEffect(() => {
        // Set current URL for social sharing
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    useEffect(() => {
        // Wait for content to be loaded before extracting headings
        if (!post?.content) return;

        // Small delay to ensure DOM is updated
        const timeoutId = setTimeout(() => {
            // Create a temporary div to parse the HTML content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.content;
            
            // Get all h2 and h3 elements from the content
            const headingElements = tempDiv.querySelectorAll("h2, h3");
            const mapped = Array.from(headingElements).map((el, index) => {
                const text = el.innerText || el.textContent;
                const id = text
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '') // Remove special characters
                    .replace(/\s+/g, '-') // Replace spaces with hyphens
                    .trim();
                
                return {
                    id: `heading-${index}-${id}`, // Add index to ensure uniqueness
                    text: text,
                    level: el.tagName,
                };
            });

            setHeadings(mapped);

            // Add IDs to actual DOM headings after content is rendered
            setTimeout(() => {
                const actualHeadings = document.querySelectorAll(".prose h2, .prose h3");
                mapped.forEach((h, index) => {
                    if (actualHeadings[index]) {
                        actualHeadings[index].setAttribute("id", h.id);
                        actualHeadings[index].style.scrollMarginTop = "6rem"; // Account for sticky header
                    }
                });
            }, 200);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [post?.content]);

    // Calculate reading time
    const calculateReadingTime = (content) => {
        if (!content) return '5 min read';
        
        const wordsPerMinute = 200;
        const textContent = content.replace(/<[^>]*>/g, '');
        const wordCount = textContent.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
        
        return `${readingTime} min read`;
    };
    const formatDate = (dateString) => {
        if (!dateString) return '';
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (error) {
            return dateString;
        }
    };

    // Show loading state
    if (loading) {
        return (
            <>
                <Header />
                <BlogPostSkeleton />
                <Footer />
            </>
        );
    }

    // Show error state
    if (error) {
        return (
            <>
                <Header />
                <main className="w-full min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-red-600 mb-4">Error loading blog post: {error}</p>
                        <Link href="/blog" className="text-blue-600 hover:underline">
                            ← Back to Blog
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    // Show not found state
    if (!post) {
        return (
            <>
                <Header />
                <main className="w-full min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                        <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
                        <Link href="/blog" className="text-blue-600 hover:underline">
                            ← Back to Blog
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <div className="min-h-screen">
                {/* Structured Data for SEO */}
                {post && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "BlogPosting",
                                "headline": post.title,
                                "description": post.excerpt?.replace(/<[^>]*>/g, '').trim(),
                                "image": post.image,
                                "author": {
                                    "@type": "Person",
                                    "name": post.author
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Linno",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "/favicon.svg"
                                    }
                                },
                                "datePublished": post.date,
                                "dateModified": post.date,
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": currentUrl || `https://yourwebsite.com/blog/${slug}`
                                }
                            })
                        }}
                    />
                )}

                {/* Header */}
                <Header />

                <main className="w-full">
                    {/* Breadcrumb */}
                    <section className="w-full py-4 bg-gray-50">
                        <div className="linno-container">
                            <nav className="flex text-sm text-gray-600">
                                <Link href="/" className="hover:text-blue-600">Home</Link>
                                <span className="mx-2">/</span>
                                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                                <span className="mx-2">/</span>
                                <span className="text-gray-900 truncate max-w-xs">{post.title}</span>
                            </nav>
                        </div>
                    </section>

                    <section className="section-container my-4">
                        <div className="linno-container">
                            <div className='space-y-4'>
                                <div className="flex flex-wrap items-center gap-2 text-[#0F0E55] text-[14px] md:text-[16px]">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                    <span>•</span>
                                    <span>{formatDate(post.date)}</span>
                                    <span>•</span>
                                    <span>{calculateReadingTime(post.content)}</span>
                                </div>

                                <h1 className='font-sora text-[#0B0B35] text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight'>
                                    {post.title}
                                </h1>

                                <div className='mx-auto'>
                                    <Image
                                        src={post.image || '/images/default-blog.jpg'}
                                        alt={post.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-wrapper bg-[#F2F5FB]">
                        <div className="w-full max-w-[1440px] px-4 md:px-6 lg:px-8 mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                                {/* Sidebar - Table of Contents and Social Sharing */}
                                <aside className="lg:col-span-1 order-2 lg:order-1">
                                    <div className="lg:sticky lg:top-24 space-y-6">
                                        {/* Table of Contents */}
                                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <h4 className="font-sora text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                                </svg>
                                                Table of Contents
                                            </h4>
                                            {headings.length > 0 ? (
                                                <nav className="space-y-1">
                                                    {headings.map((h, i) => (
                                                        <a
                                                            key={i}
                                                            href={`#${h.id}`}
                                                            className={`
                                                                block text-sm leading-relaxed transition-all duration-200 
                                                                ${h.level === "H3" 
                                                                    ? "pl-6 text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-300" 
                                                                    : "text-gray-700 hover:text-blue-600 font-medium"
                                                                }
                                                                hover:bg-blue-50 px-3 py-2 rounded-lg group
                                                            `}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                const element = document.getElementById(h.id);
                                                                if (element) {
                                                                    const headerOffset = 120;
                                                                    const elementPosition = element.getBoundingClientRect().top;
                                                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                                    
                                                                    window.scrollTo({
                                                                        top: offsetPosition,
                                                                        behavior: 'smooth'
                                                                    });
                                                                }
                                                            }}
                                                        >
                                                            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                                                                {h.text}
                                                            </span>
                                                        </a>
                                                    ))}
                                                </nav>
                                            ) : (
                                                <p className="text-gray-500 text-sm italic">Table of contents will appear here when headings are detected.</p>
                                            )}
                                        </div>

                                        {/* Social Sharing */}
                                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <h4 className="font-sora text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                                </svg>
                                                Share this post
                                            </h4>
                                            <div className="space-y-2">
                                                <a
                                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 text-gray-700 hover:text-white hover:bg-blue-500 text-sm p-3 rounded-lg hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-500 group"
                                                >
                                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                                    </svg>
                                                    Share on Twitter
                                                </a>
                                                <a
                                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 text-gray-700 hover:text-white hover:bg-blue-700 text-sm p-3 rounded-lg hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-700 group"
                                                >
                                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                    </svg>
                                                    Share on LinkedIn
                                                </a>
                                                <a
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 text-gray-700 hover:text-white hover:bg-blue-600 text-sm p-3 rounded-lg hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-600 group"
                                                >
                                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                    </svg>
                                                    Share on Facebook
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                {/* Main Content */}
                                <div className='lg:col-span-3 order-1 lg:order-2'>
                                   <article 
                                        className="prose prose-lg max-w-none blog-post-content
                                        prose-headings:text-gray-900 prose-headings:font-sora prose-headings:scroll-mt-24
                                        prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h1:mt-12 prose-h1:leading-tight
                                        prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-6 prose-h2:mt-12 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3 prose-h2:leading-tight
                                        prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-10 prose-h3:leading-tight
                                        prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-3 prose-h4:mt-8 prose-h4:leading-tight
                                        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:transition-all prose-a:duration-200
                                        prose-strong:text-gray-900 prose-strong:font-semibold
                                        prose-em:text-gray-600 prose-em:italic
                                        prose-ul:text-gray-700 prose-ul:my-8 prose-li:my-3 prose-li:leading-relaxed
                                        prose-ol:text-gray-700 prose-ol:my-8
                                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-blue-50 prose-blockquote:to-indigo-50 prose-blockquote:italic prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:my-8 prose-blockquote:text-blue-900 prose-blockquote:text-lg prose-blockquote:leading-relaxed prose-blockquote:rounded-r-lg prose-blockquote:shadow-sm
                                        prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-slate-800 prose-code:border prose-code:border-slate-200
                                        prose-pre:bg-gradient-to-br prose-pre:from-slate-800 prose-pre:to-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-0 prose-pre:overflow-hidden prose-pre:my-8 prose-pre:shadow-2xl prose-pre:border prose-pre:border-slate-700
                                        prose-pre:code:bg-transparent prose-pre:code:p-6 prose-pre:code:border-0 prose-pre:code:text-slate-100 prose-pre:code:block prose-pre:code:overflow-x-auto prose-pre:code:leading-relaxed
                                        prose-img:rounded-xl prose-img:shadow-xl prose-img:my-10 prose-img:border prose-img:border-gray-200
                                        prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-lg
                                        prose-th:border prose-th:border-gray-300 prose-th:bg-gradient-to-r prose-th:from-gray-50 prose-th:to-gray-100 prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-th:text-sm prose-th:uppercase prose-th:tracking-wide
                                        prose-td:border prose-td:border-gray-300 prose-td:px-6 prose-td:py-4 prose-td:text-gray-700
                                        prose-tr:hover:bg-gray-50 prose-tr:transition-colors prose-tr:duration-150
                                        prose-hr:border-gray-300 prose-hr:my-12 prose-hr:border-t
                                        md:prose-xl
                                        sm:prose-h1:text-3xl sm:prose-h2:text-2xl sm:prose-h3:text-xl
                                        sm:prose-p:text-base sm:prose-blockquote:text-base sm:prose-blockquote:px-6 sm:prose-blockquote:py-4
                                        sm:prose-img:my-6 sm:prose-img:rounded-lg
                                        sm:prose-pre:my-6 sm:prose-pre:rounded-lg
                                        sm:prose-table:text-sm sm:prose-th:px-4 sm:prose-th:py-3 sm:prose-td:px-4 sm:prose-td:py-3"
                                        dangerouslySetInnerHTML={{ __html: post.content }} 
                                    />

                                    {/* Tags */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="mt-12 pt-8 border-t border-gray-200">
                                            <h4 className="font-sora text-lg font-semibold mb-6 text-gray-900 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                </svg>
                                                Tags
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {post.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-800 border border-blue-200 hover:border-blue-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-md"
                                                    >
                                                        #{tag.name || tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Author Card */}
                                    {(post.author || post.authorDetails) && (
                                        <div className="mt-12 pt-8 border-t border-gray-200">
                                            <h4 className="font-sora text-lg font-semibold mb-6 text-gray-900 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                About the Author
                                            </h4>
                                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                                                <TeamCard
                                                    name={post.authorDetails?.name || post.author}
                                                    position={post.authorDetails?.bio || "Author"}
                                                    imgSrc={"/images/default-author.jpg"}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mobile Table of Contents */}
                    {headings.length > 0 && (
                        <>
                            {/* Mobile TOC Toggle Button */}
                            <div className="lg:hidden fixed bottom-6 right-6 z-50 no-print">
                                <button
                                    onClick={() => setShowMobileToc(!showMobileToc)}
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                    aria-label="Toggle table of contents"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                            {/* Mobile TOC Overlay */}
                            {showMobileToc && (
                                <div className="lg:hidden fixed inset-0 z-40 no-print">
                                    <div 
                                        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-200"
                                        onClick={() => setShowMobileToc(false)}
                                    ></div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-96 overflow-y-auto shadow-2xl">
                                        <div className="flex justify-between items-center mb-6">
                                            <h4 className="font-sora text-xl font-semibold text-gray-900 flex items-center gap-2">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                                </svg>
                                                Table of Contents
                                            </h4>
                                            <button
                                                onClick={() => setShowMobileToc(false)}
                                                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <nav className="space-y-1">
                                            {headings.map((h, i) => (
                                                <a
                                                    key={i}
                                                    href={`#${h.id}`}
                                                    className={`
                                                        block text-sm leading-relaxed transition-all duration-200 
                                                        ${h.level === "H3" 
                                                            ? "pl-6 text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-300" 
                                                            : "text-gray-700 hover:text-blue-600 font-medium"
                                                        }
                                                        hover:bg-blue-50 px-3 py-3 rounded-lg group
                                                    `}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setShowMobileToc(false);
                                                        const element = document.getElementById(h.id);
                                                        if (element) {
                                                            const headerOffset = 120;
                                                            const elementPosition = element.getBoundingClientRect().top;
                                                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                            
                                                            window.scrollTo({
                                                                top: offsetPosition,
                                                                behavior: 'smooth'
                                                            });
                                                        }
                                                    }}
                                                >
                                                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                                                        {h.text}
                                                    </span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    <HomeCTA />
                </main>

                <Footer />
            </div>
        </>
    )
};

export default Content;