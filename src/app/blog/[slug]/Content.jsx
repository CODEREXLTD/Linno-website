'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TeamCard from '@/components/common/TeamCard';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import HomeCTA from '@/app/components/HomeCTA';
import { useBlogPost } from '@/hooks/useBlog';

const Content = ({slug}) => {
    const [headings, setHeadings] = useState([]);
    const [currentUrl, setCurrentUrl] = useState('');
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
            // Grab all h2 and h3 headings for TOC
            const elements = Array.from(document.querySelectorAll("h2, h3"));
            const mapped = elements.map((el) => ({
                id: el.innerText.replace(/\s+/g, "-").toLowerCase(),
                text: el.innerText,
                level: el.tagName,
            }));

            // Add IDs to headings if not already present
            mapped.forEach((h) => {
                const existingEl = document.getElementById(h.id);
                if (!existingEl) {
                    const targetEl = Array.from(document.querySelectorAll("h2, h3")).find(
                        el => el.innerText === h.text
                    );
                    if (targetEl) {
                        targetEl.setAttribute("id", h.id);
                    }
                }
            });

            setHeadings(mapped);
        }, 100);

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
                <main className="w-full min-h-screen flex items-center justify-center">
                    <LoadingSpinner text="Loading blog post..." />
                </main>
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
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <nav className="flex text-sm text-gray-600">
                                <Link href="/" className="hover:text-blue-600">Home</Link>
                                <span className="mx-2">/</span>
                                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                                <span className="mx-2">/</span>
                                <span className="text-gray-900 truncate max-w-xs">{post.title}</span>
                            </nav>
                        </div>
                    </section>

                    <section className="w-full py-[63px] sm:py-[95px] lg:py-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
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

                    <section className="w-full pb-[63px] sm:pb-[95px] lg:pb-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <aside className="md:col-span-1 sticky top-20 h-fit hidden sm:block">
                                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                        <h4 className="font-sora text-lg font-semibold mb-4">Table of Contents</h4>
                                        {headings.length > 0 ? (
                                            <ul className="space-y-3 text-[#51515F] text-sm">
                                                {headings.map((h, i) => (
                                                    <li
                                                        key={i}
                                                        className={`${
                                                            h.level === "H3" ? "pl-4 border-l-2 border-gray-200" : ""
                                                        } hover:text-blue-600 text-[#585A65] leading-6 transition-colors`}
                                                    >
                                                        <Link href={`#${h.id}`} className="block py-1">
                                                            {h.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-500 text-sm">No headings found</p>
                                        )}
                                    </div>

                                    {/* Social Sharing */}
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h4 className="font-sora text-lg font-semibold mb-4">Share this post</h4>
                                        <div className="flex flex-col space-y-2">
                                            <a
                                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-blue-400 hover:text-blue-600 text-sm"
                                            >
                                                Share on Twitter
                                            </a>
                                            <a
                                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-blue-700 hover:text-blue-900 text-sm"
                                            >
                                                Share on LinkedIn
                                            </a>
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                                            >
                                                Share on Facebook
                                            </a>
                                        </div>
                                    </div>
                                </aside>


                                <div className='col-span-2'>
                                   <div 
                                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-sora prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:italic prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100"
                                        dangerouslySetInnerHTML={{ __html: post.content }} 
                                    />

                                    {/* Tags */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="mt-8 pt-6 border-t border-gray-200">
                                            <h4 className="font-sora text-lg font-semibold mb-3">Tags</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                                    >
                                                        #{tag.name || tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {(post.author || post.authorDetails) && (
                                        <div className="mt-8 pt-8 border-t border-gray-200">
                                            <TeamCard
                                                name={post.authorDetails?.name || post.author}
                                                position={post.authorDetails?.bio || "Author"}
                                                imgSrc={post.authorDetails?.avatar || "/images/default-author.png"}
                                            />
                                        </div>
                                    )}
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
};

export default Content;