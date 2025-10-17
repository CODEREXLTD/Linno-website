import { useState, useEffect, useCallback } from 'react';
import { fetchBlogPosts, fetchBlogPost, fetchFeaturedPosts, fetchCategories, searchBlogPosts } from '@/services/blogApi';

// Custom hook for blog data management
export const useBlog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleApiCall = useCallback(async (apiCall) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    handleApiCall
  };
};

// Hook for blog posts with pagination
export const useBlogPosts = (page = 1, category = null, limit = 10) => {
  const { loading, error, handleApiCall } = useBlog();
  const [data, setData] = useState({
    posts: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalPosts: 0,
      hasNext: false,
      hasPrev: false
    },
    categories: []
  });

  const fetchPosts = useCallback(async () => {
    try {
      // Pass category directly to API service
      const result = await handleApiCall(() => fetchBlogPosts(page, limit, category));
      setData(result);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
    }
  }, [page, category, limit, handleApiCall]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    ...data,
    loading,
    error,
    refetch: fetchPosts
  };
};

// Hook for single blog post
export const useBlogPost = (slug) => {
  const { loading, error, handleApiCall } = useBlog();
  const [post, setPost] = useState(null);

  const fetchPost = useCallback(async () => {
    if (!slug) return;
    
    try {
      const result = await handleApiCall(() => fetchBlogPost(slug));
      setPost(result);
    } catch (err) {
      console.error('Error fetching blog post:', err);
    }
  }, [slug, handleApiCall]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return {
    post,
    loading,
    error,
    refetch: fetchPost
  };
};

// Hook for featured posts
export const useFeaturedPosts = () => {
  const { loading, error, handleApiCall } = useBlog();
  const [posts, setPosts] = useState([]);

  const fetchFeatured = useCallback(async () => {
    try {
      const result = await handleApiCall(() => fetchFeaturedPosts());
      setPosts(result);
    } catch (err) {
      console.error('Error fetching featured posts:', err);
    }
  }, [handleApiCall]);

  useEffect(() => {
    fetchFeatured();
  }, [fetchFeatured]);

  return {
    posts,
    loading,
    error,
    refetch: fetchFeatured
  };
};

// Hook for categories
export const useCategories = () => {
  const { loading, error, handleApiCall } = useBlog();
  const [categories, setCategories] = useState([]);

  const fetchCategoriesData = useCallback(async () => {
    try {
      const result = await handleApiCall(() => fetchCategories());
      setCategories(result);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  }, [handleApiCall]);

  useEffect(() => {
    fetchCategoriesData();
  }, [fetchCategoriesData]);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategoriesData
  };
};

// Hook for search
export const useBlogSearch = (query, page = 1, limit = 10) => {
  const { loading, error, handleApiCall } = useBlog();
  const [data, setData] = useState({
    posts: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalPosts: 0,
      hasNext: false,
      hasPrev: false
    }
  });

  const search = useCallback(async () => {
    if (!query.trim()) return;
    
    try {
      const result = await handleApiCall(() => searchBlogPosts(query, page, limit));
      setData(result);
    } catch (err) {
      console.error('Error searching blog posts:', err);
    }
  }, [query, page, limit, handleApiCall]);

  useEffect(() => {
    if (query.trim()) {
      search();
    }
  }, [search]);

  return {
    ...data,
    loading,
    error,
    search
  };
};
