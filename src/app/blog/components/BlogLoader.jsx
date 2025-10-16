import { memo } from 'react';

const BlogLoader = () => {
    return (
        <>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                    {/* Meta: Category and Date */}
                    <div className="flex gap-4 items-center">
                    <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Title - 2 lines */}
                    <div className="space-y-2">
                    <div className="h-7 bg-gray-300 rounded animate-pulse w-full" />
                    <div className="h-7 bg-gray-300 rounded animate-pulse w-4/5" />
                    </div>

                    {/* Featured Image at bottom */}
                    <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
                </div>
                ))}
            </div>
        </>
    );
};

export default memo(BlogLoader);