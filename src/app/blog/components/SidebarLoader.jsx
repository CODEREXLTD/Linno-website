import { memo } from 'react';

const SidebarLoader = () => {
    return (
        <>
            <div className="w-64 flex-shrink-0 space-y-4">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="h-6 bg-gray-200 rounded animate-pulse"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                    />
                ))}
            </div>
        </>
    );
};

export default memo(SidebarLoader);