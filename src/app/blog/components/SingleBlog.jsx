'use client';
import { decodeHTML } from '@/hooks/useDecodeHTML';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useState } from 'react';

const SingleBlog = ({ post }) => {
    const [imageError, setImageError] = useState(false);

    const formatDate = (dateString) => {
        if (!dateString) return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'Asia/Dhaka'
        }).format(new Date());

        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'Asia/Dhaka'
        }).format(new Date(dateString));
    };

    const getTitle = (title) => {
        if (typeof title === 'string') return decodeHTML(title);
        if (typeof title === 'object' && title?.rendered) return decodeHTML(title.rendered);
        return title || 'Untitled Post';
    };

    const handleImageError = () => {
        setImageError(true);
    }; 
    
    return (
        <>
            <Link
                key={post?.id}
                href={`/blog/${post?.slug}`}
            >
                <article className="bg-[#ffffff] rounded-[14px] p-4 md:p-6 flex flex-col gap-[20px] sm:gap-[23px] lg:gap-[26px] hover:shadow-lg transition-shadow duration-300 group">
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex flex-row justify-start items-center gap-[10px]">
                            <div className="w-[1px] h-[18px] bg-[#3433fe]"></div>
                            <div className="flex flex-row justify-start items-center gap-[12px] sm:gap-[14px] lg:gap-[16px] px-[10px]">
                                <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                    {post?.category}
                                </span>
                                <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                    {formatDate(post?.date)}
                                </span>
                            </div>
                        </div>
                        <h3 className="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-bold leading-[20px] sm:leading-[25px] lg:leading-[30px] xl:leading-[33px] text-[#0b0a3d] group-hover:text-[#3433fe] transition-colors duration-200 line-clamp-3">
                            {getTitle(post?.title)}
                        </h3>
                    </div>
                    <div className="relative overflow-hidden rounded-[14px]">
                        <Image
                            src={imageError ? '/images/hero-home.jpg' : (post?.image || '/images/hero-home.jpg')}
                            alt={getTitle(post?.title)}
                            width={390}
                            height={284}
                            className="w-full h-auto rounded-[14px] group-hover:scale-105 transition-transform duration-300"
                            onError={handleImageError}
                            loading="lazy"
                        />
                    </div>
                </article>
            </Link>
        </>
    );
};

export default memo(SingleBlog);