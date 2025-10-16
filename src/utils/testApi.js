// Test utility to check WordPress API connectivity and CORS
export const testApiConnection = async () => {
  try {
    const response = await fetch('https://getin.coderex.co/wp-json/wp/v2/posts?per_page=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      return { success: true, status: response.status };
    } else {
      return { success: false, status: response.status, error: 'API returned error status' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Test specific WordPress endpoints
export const testBlogEndpoints = async () => {
  const endpoints = [
    '/wp-json/wp/v2/posts?per_page=5&_embed=true',
    '/wp-json/wp/v2/categories',
    '/wp-json/wp/v2/posts?sticky=true&_embed=true'
  ];
  
  const results = {};
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`https://getin.coderex.co${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      results[endpoint] = {
        success: response.ok,
        status: response.status,
        cors: true
      };
    } catch (error) {
      results[endpoint] = {
        success: false,
        error: error.message,
        cors: error.message.includes('CORS') || error.message.includes('blocked')
      };
    }
  }
  
  return results;
};
