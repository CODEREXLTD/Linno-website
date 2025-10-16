'use client';
import React, { useState } from 'react';
import { testApiConnection, testBlogEndpoints } from '@/utils/testApi';
import { fetchBlogPosts, fetchCategories } from '@/services/blogApi';

const TestWordPressAPI = () => {
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    try {
      // Test basic connection
      const connectionTest = await testApiConnection();
      
      // Test specific endpoints
      const endpointsTest = await testBlogEndpoints();
      
      // Test our API functions
      const blogPosts = await fetchBlogPosts(1, 5);
      const categories = await fetchCategories();
      
      setTestResults({
        connection: connectionTest,
        endpoints: endpointsTest,
        apiFunctions: {
          blogPosts: blogPosts.posts.length > 0 ? '✅ Success' : '❌ No posts',
          categories: categories.length > 0 ? '✅ Success' : '❌ No categories'
        }
      });
    } catch (error) {
      setTestResults({
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">WordPress API Test</h2>
      
      <button
        onClick={runTests}
        disabled={loading}
        className="bg-[#3433fe] text-white px-6 py-2 rounded-md hover:bg-[#2d2bdb] disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test WordPress API'}
      </button>

      {testResults && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gray-100 rounded">
            <h3 className="font-semibold">Connection Test:</h3>
            <p className={testResults.connection?.success ? 'text-green-600' : 'text-red-600'}>
              {testResults.connection?.success ? '✅ Connected' : '❌ Failed'}
              {testResults.connection?.error && ` - ${testResults.connection.error}`}
            </p>
          </div>

          {testResults.endpoints && (
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-semibold">Endpoints Test:</h3>
              {Object.entries(testResults.endpoints).map(([endpoint, result]) => (
                <div key={endpoint} className="mt-2">
                  <p className="font-mono text-sm">{endpoint}</p>
                  <p className={result.success ? 'text-green-600' : 'text-red-600'}>
                    {result.success ? '✅ Success' : '❌ Failed'}
                    {result.error && ` - ${result.error}`}
                  </p>
                </div>
              ))}
            </div>
          )}

          {testResults.apiFunctions && (
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-semibold">API Functions Test:</h3>
              {Object.entries(testResults.apiFunctions).map(([functionName, result]) => (
                <div key={functionName} className="mt-2">
                  <p className="font-mono text-sm">{functionName}</p>
                  <p className={result.includes('✅') ? 'text-green-600' : 'text-red-600'}>
                    {result}
                  </p>
                </div>
              ))}
            </div>
          )}

          {testResults.error && (
            <div className="p-4 bg-red-100 rounded">
              <h3 className="font-semibold text-red-600">Error:</h3>
              <p className="text-red-600">{testResults.error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestWordPressAPI;
