import { memo } from 'react';
import Image from 'next/image';
import { decodeHTML } from '@/hooks/useDecodeHTML';

const Sidebar = ({ categories, selectedCategory, handleCategoryClick }) => {
    
    return (
        <>
            <div className="w-full lg:w-[200px] xl:w-[12%] order-2 lg:order-1">
                <div className="pb-[20px] sm:pb-[23px] lg:pb-[26px]">
                    <div className="">
                        <div className="flex flex-row lg:flex-col gap-[20px] sm:gap-[25px] lg:gap-[36px] overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                            {categories?.map((category, index) => (
                                <div
                                    key={category.id || index}
                                    className="flex flex-row justify-start items-center gap-[10px] cursor-pointer flex-shrink-0 lg:flex-shrink hover:opacity-75 transition-opacity duration-200"
                                    onClick={() => handleCategoryClick?.(category?.name)}
                                >
                                    <Image
                                        src={selectedCategory === category?.name ? "/images/img_line_12.svg" : "/images/img_line_14.svg"}
                                        alt="Line"
                                        width={20}
                                        height={1}
                                        className="w-[20px] h-[1px]"
                                        loading="lazy"
                                    />
                                    <span className={`text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] xl:leading-[24px] ml-[10px] whitespace-nowrap transition-colors duration-200 ${selectedCategory === category?.name ? 'text-[#3433fe]' : 'text-[#0f0e55]'
                                        }`}>
                                        {decodeHTML(category?.name)}
                                        {category?.count > 0 && (
                                            <span className="ml-2 text-xs text-gray-500">({category.count})</span>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Sidebar);