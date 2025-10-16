'use client';
import { memo } from 'react';
import SingleBlog from './SingleBlog';

const Blogs = () => {
    return null;
    return (
        <>
            <div className="flex-1 order-1 lg:order-2">
                {blogPosts && blogPosts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] sm:gap-[50px] lg:gap-[64px] mb-[60px] sm:mb-[70px] lg:mb-[80px]">
                            {blogPosts.map((post, index) => (
                                <SingleBlog post={post} key={index} />
                            ))}
                        </div>

                        {/* Pagination */}
                        {pagination && pagination.totalPages > 1 && (
                            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 mb-8">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={!pagination.hasPrev}
                                    className={`px-3 sm:px-4 py-2 rounded-md ${pagination.hasPrev
                                        ? 'bg-[#3433fe] text-white hover:bg-[#2d2bdb]'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        } transition-colors duration-200`}
                                >
                                    Previous
                                </button>

                                {getPageNumbers(pagination.totalPages, currentPage, 7).map((p, idx) => (
                                    typeof p === 'string' ? (
                                        <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">{p}</span>
                                    ) : (
                                        <button
                                            key={p}
                                            onClick={() => handlePageChange(p)}
                                            className={`px-3 py-2 rounded-md ${currentPage === p
                                                ? 'bg-[#3433fe] text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                } transition-colors duration-200`}
                                        >
                                            {p}
                                        </button>
                                    )
                                ))}

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={!pagination.hasNext}
                                    className={`px-3 sm:px-4 py-2 rounded-md ${pagination.hasNext
                                        ? 'bg-[#3433fe] text-white hover:bg-[#2d2bdb]'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        } transition-colors duration-200`}
                                >
                                    Next
                                </button>
                            </div>
                        )}
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