import React from 'react';
import BlogPostContent from './Content';

export default function BlogPost({ params }) {
  const { slug } = params;

  return <BlogPostContent slug={slug} />;
}