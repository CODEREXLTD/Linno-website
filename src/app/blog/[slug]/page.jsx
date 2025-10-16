import React from 'react'
import Content from './Content';
import { fetchBlogPost } from '@/services/blogApi';

export async function generateMetadata({ params }) {
    const { slug } = params;
    
    try {
        const post = await fetchBlogPost(slug);
        
        if (!post) {
            return {
                title: "Blog Post Not Found | Linno",
                description: "The requested blog post could not be found.",
            };
        }

        // Strip HTML tags from excerpt for meta description
        const description = post.excerpt 
            ? post.excerpt.replace(/<[^>]*>/g, '').trim().substring(0, 160)
            : "Read the latest insights and updates from Linno.";

        return {
            title: `${post.title} | Linno Blog`,
            description: description,
            keywords: [post.category, 'Linno', 'blog', 'technology', 'development'].join(', '),
            openGraph: {
                title: post.title,
                description: description,
                images: [
                    {
                        url: post.image,
                        width: 1200,
                        height: 630,
                        alt: post.title,
                    }
                ],
                type: 'article',
                publishedTime: post.date,
                authors: [post.author],
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: description,
                images: [post.image],
            },
            icons: {
                icon: [
                    { url: '/favicon.svg', type: 'image/x-icon' }
                ],
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: "Blog Post | Linno",
            description: "Read the latest insights and updates from Linno.",
            icons: {
                icon: [
                    { url: '/favicon.svg', type: 'image/x-icon' }
                ],
            },
        };
    }
}

export default function page({ params }) {
    const { slug } = params;

    return (
        <div>
            <Content slug={slug} />
        </div>
    )
}