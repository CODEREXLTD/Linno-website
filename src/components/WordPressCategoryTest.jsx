'use client';
import React, { useState } from 'react';
import { fetchBlogPosts, fetchCategories } from '@/services/blogApi';

const WordPressCategoryTest = () => {
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const testWordPressCategories = async () => {
    setLoading(true);
    try {
      // Fetch categories first
      const categories = await fetchCategories();
      
      // Test fetching posts for each category using integer IDs
      const categoryTests = {};
      
      // Test "All" posts
      const allPosts = await fetchBlogPosts(1, 5, null);
      categoryTests['All'] = {
        success: allPosts.posts.length > 0,
        count: allPosts.posts.length,
        categoryId: null
      };
      
      // Test each category with integer ID
      for (const category of categories.slice(0, 3)) { // Test first 3 categories
        try {
          const categoryId = parseInt(category.id);
          const posts = await fetchBlogPosts(1, 5, categoryId);
          categoryTests[category.name] = {
            success: posts.posts.length > 0,
            count: posts.posts.length,
            categoryId: categoryId,
            categoryName: category.name
          };
        } catch (error) {
          categoryTests[category.name] = {
            success: false,
            error: error.message,
            categoryId: parseInt(category.id),
            categoryName: category.name
          };
        }
      }
      
      setTestResults({
        categories: categories,
        categoryTests: categoryTests
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
      <h2 className="text-2xl font-bold mb-4">WordPress Category Filtering Test</h2>
      
      <button
        onClick={testWordPressCategories}
        disabled={loading}
        className="bg-[#3433fe] text-white px-6 py-2 rounded-md hover:bg-[#2d2bdb] disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test WordPress Categories'}
      </button>

      {testResults && (
        <div className="mt-6 space-y-4">
          {testResults.error && (
            <div className="p-4 bg-red-100 rounded">
              <h3 className="font-semibold text-red-600">Error:</h3>
              <p className="text-red-600">{testResults.error}</p>
            </div>
          )}

          {testResults.categories && (
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-semibold">Available WordPress Categories:</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {testResults.categories.map((category, index) => (
                  <div key={index} className="text-sm p-2 bg-white rounded">
                    <div className="font-mono text-xs text-gray-500">ID: {category.id}</div>
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-xs text-gray-600">Slug: {category.slug}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {testResults.categoryTests && (
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-semibold">Category Filtering Results:</h3>
              {Object.entries(testResults.categoryTests).map(([categoryName, result]) => (
                <div key={categoryName} className="mt-2 p-3 bg-white rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{categoryName}</span>
                    <span className={result.success ? 'text-green-600' : 'text-red-600'}>
                      {result.success ? '✅ Success' : '❌ Failed'}
                    </span>
                  </div>
                  {result.categoryId !== undefined && (
                    <p className="text-sm text-gray-600">Category ID: {result.categoryId}</p>
                  )}
                  {result.count !== undefined && (
                    <p className="text-sm text-gray-600">Posts found: {result.count}</p>
                  )}
                  {result.error && (
                    <p className="text-sm text-red-600">Error: {result.error}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WordPressCategoryTest;
