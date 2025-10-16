'use client';
import { memo } from 'react';
import SingleBlog from './SingleBlog';

const Blogs = ({ 
    blogs, 
    pagination, 
    currentPage, 
    selectedCategory, 
    handlePageChange, 
    handleCategoryClick, 
    getPageNumbers,
    error 
}) => {

    return (
        <>
            <div className="flex-1 order-1 lg:order-2">
                {error ? (
                    <div className="text-center py-12">
                        <p className="text-red-500 text-lg mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-[#3433fe] text-white rounded-md hover:bg-[#2d2bdb] transition-colors duration-200"
                        >
                            Retry
                        </button>
                    </div>
                ) : blogs && blogs.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] sm:gap-[50px] lg:gap-[64px] mb-[60px] sm:mb-[70px] lg:mb-[80px]">
                            {blogs.map((post, index) => (
                                <SingleBlog post={post} key={post.id || index} />
                            ))}
                        </div>

                        {/* Always show pagination for testing */}
                        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 mb-8">
                            <button
                                onClick={() => handlePageChange && handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage <= 1}
                                className={`px-3 sm:px-4 py-2 rounded-md ${currentPage > 1
                                    ? 'bg-[#3433fe] text-white hover:bg-[#2d2bdb]'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    } transition-colors duration-200`}
                            >
                                Previous
                            </button>

                            {/* Show page numbers */}
                            {[1, 2, 3, 4, 5].map((pageNum) => (
                                <button
                                    key={pageNum}
                                    onClick={() => handlePageChange && handlePageChange(pageNum)}
                                    className={`px-3 py-2 rounded-md ${currentPage === pageNum
                                        ? 'bg-[#3433fe] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        } transition-colors duration-200`}
                                >
                                    {pageNum}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange && handlePageChange(currentPage + 1)}
                                disabled={currentPage >= 5}
                                className={`px-3 sm:px-4 py-2 rounded-md ${currentPage < 5
                                    ? 'bg-[#3433fe] text-white hover:bg-[#2d2bdb]'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    } transition-colors duration-200`}
                            >
                                Next
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-[#51515f] text-lg">No blog posts found</p>
                        {selectedCategory !== 'All' && (
                            <button
                                onClick={() => handleCategoryClick('All')}
                                className="mt-4 px-6 py-2 bg-[#3433fe] text-white rounded-md hover:bg-[#2d2bdb] transition-colors duration-200"
                            >
                                View All Posts
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default memo(Blogs);