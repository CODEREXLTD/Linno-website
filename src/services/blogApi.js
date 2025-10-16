// Blog API service for connecting to WordPress backend
const API_BASE_URL = 'https://getin.coderex.co';

// WordPress REST API endpoints
const ENDPOINTS = {
  POSTS: '/wp-json/wp/v2/posts',
  POST_BY_SLUG: '/wp-json/wp/v2/posts',
  CATEGORIES: '/wp-json/wp/v2/categories',
  TAGS: '/wp-json/wp/v2/tags',
  FEATURED: '/wp-json/wp/v2/posts?sticky=true'
};

// WordPress REST API response transformation
const transformPost = (post) => {
  // Extract featured image from _embedded
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                       post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url ||
                       '/images/default-blog.jpg';
  
  // Extract categories from _embedded
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const primaryCategory = categories.find(cat => cat.taxonomy === 'category') || categories[0];
  
  // Extract author from _embedded
  const author = post._embedded?.author?.[0];
  
  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || post.title,
    category: primaryCategory?.name || 'Uncategorized',
    categoryId: primaryCategory?.id || null,
    date: post.date,
    readTime: '5 min read', // WordPress doesn't provide this by default
    author: author?.name || 'Linno Team',
    image: featuredImage,
    excerpt: post.excerpt?.rendered || post.excerpt,
    content: post.content?.rendered || post.content,
    featured: post.sticky || false,
    tags: post._embedded?.['wp:term']?.find(term => term[0]?.taxonomy === 'post_tag') || [],
    link: post.link
  };
};

const transformCategory = (category) => ({
  id: category.id,
  name: category.name,
  slug: category.slug,
  count: category.count || 0
});

// Fetch all blog posts with pagination
export const fetchBlogPosts = async (page = 1, limit = 10, category = null) => {
  try {
    const params = new URLSearchParams({
      per_page: limit.toString(),
      page: page.toString(),
      _embed: 'true', // Include embedded data (featured images, categories, author)
      ...(category && category !== 'All' && category !== 'all' && { categories: category.toString() })
    });

    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.POSTS}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;
    const totalPosts = parseInt(response.headers.get('X-WP-Total')) || 0;
    
    return {
      posts: posts.map(transformPost),
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalPosts: totalPosts,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      categories: [] // Will be fetched separately
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw new Error('Failed to fetch blog posts');
  }
};

// Fetch single blog post by slug
export const fetchBlogPost = async (slug) => {
  try {
    const params = new URLSearchParams({
      slug: slug,
      _embed: 'true'
    });

    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.POST_BY_SLUG}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    if (posts.length === 0) {
      return null;
    }
    
    return transformPost(posts[0]);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw new Error('Failed to fetch blog post');
  }
};

// Fetch featured posts (sticky posts in WordPress)
export const fetchFeaturedPosts = async () => {
  try {
    const params = new URLSearchParams({
      sticky: 'true',
      per_page: '5',
      _embed: 'true'
    });

    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.POSTS}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    return posts.map(transformPost);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    throw new Error('Failed to fetch featured posts');
  }
};

// Fetch categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.CATEGORIES}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const categories = await response.json();
    return categories.map(transformCategory);
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
};

// Search blog posts
export const searchBlogPosts = async (query, page = 1, limit = 10) => {
  try {
    const params = new URLSearchParams({
      search: query,
      per_page: limit.toString(),
      page: page.toString(),
      _embed: 'true'
    });

    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.POSTS}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;
    const totalPosts = parseInt(response.headers.get('X-WP-Total')) || 0;
    
    return {
      posts: posts.map(transformPost),
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalPosts: totalPosts,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  } catch (error) {
    console.error('Error searching blog posts:', error);
    throw new Error('Failed to search blog posts');
  }
};
