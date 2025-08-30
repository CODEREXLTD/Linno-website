"use client"
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import JoinUsLink from '@/components/ui/JoinUsLink';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo, useState } from 'react'

const Content = () => {
    const [selectedCategory, setSelectedCategory] = useState('Funnel');

        
    const formattedToday = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'Asia/Dhaka'
        }).format(new Date());

    const categories = [
        { name: 'All', active: false },
        { name: 'Wordpress', active: false },
        { name: 'Funnel', active: true },
        { name: 'Plugins', active: false },
        { name: 'UX design', active: false },
        { name: 'User Research', active: false },
        { name: 'Web Accessibility', active: false },
        { name: 'SEO Optimization', active: false },
        { name: 'Content Strategy', active: false },
        { name: 'Data Analytics', active: false }
    ];
    const blogPosts = [
        {
        id: 1,
        category: 'Wordpress',
        date: formattedToday,
        title: '8 Proven Ways of effective delegation',
        image: '/images/img_rectangle_19014_284x390.png'
        },
        {
        id: 2,
        category: 'Wordpress',
        date: formattedToday,
        title: '2 Easy Ways To Create WordPress Custom User Roles',
        image: '/images/img_rectangle_19014_1.png'
        },
        {
        id: 3,
        category: 'Wordpress',
        date: formattedToday,
        title: 'Why You Should Stop Using Nulled Plugins In WordPress',
        image: '/images/img_rectangle_19014_2.png'
        },
        {
        id: 4,
        category: 'Wordpress',
        date: formattedToday,
        title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
        image: '/images/img_rectangle_19014_3.png'
        },
        {
        id: 5,
        category: 'Wordpress',
        date: formattedToday,
        title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
        image: '/images/img_rectangle_19014_4.png'
        },
        {
        id: 6,
        category: 'Wordpress',
        date: formattedToday,
        title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
        image: '/images/img_rectangle_19014_5.png'
        },
        {
        id: 7,
        category: 'Wordpress',
        date: formattedToday,
        title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
        image: '/images/img_rectangle_19014_6.png'
        },
        {
        id: 8,
        category: 'Wordpress',
        date: formattedToday,
        title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
        image: '/images/img_rectangle_19014_7.png'
        }
    ];
    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    return (
        <>
            <div className="min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="w-full">
                    <section className="w-full pt-[63px] sm:pt-[95px] lg:pt-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 md:mb-32'>
                                <h2 className='font-sora text-[#0B0B35] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-tight'>
                                    Blog
                                </h2>
                                <p className='font-sora text-[#51515F] text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[32px] w-full max-w-[auto] md:max-w-[500px]'>
                                    The latest from our world and beyond. <br />
                                    Read, watch and go deeper on what's happening with us and our work.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <p className='font-sora text-[#0F0E55] text-[14px] md:text-[20px]'>
                                    Wordpress {formattedToday}
                                </p>

                                <Link href="/blog/wordcamp-dhaka-2019">
                                    <h3  className='font-sora text-[#0B0B35] text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight'>
                                        WordCamp Dhaka 2019 - First WordCamp in Bangladesh
                                    </h3>
                                </Link>

                                <div className='mx-auto'>
                                    <Link href="/blog/wordcamp-dhaka-2019">
                                        <Image
                                            src="/images/wordpress-wordcamp.png"
                                            alt="WordCamp Dhaka 2019"
                                            width={400}
                                            height={300}
                                            className="w-full h-auto"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-[63px] sm:py-[95px] lg:py-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className="flex flex-col lg:flex-row gap-[40px] sm:gap-[50px] lg:gap-[64px] xl:gap-[474px]">
                        {/* Sidebar */}
                        <div className="w-full lg:w-[200px] xl:w-[12%] order-2 lg:order-1">
                        <div className="pb-[20px] sm:pb-[23px] lg:pb-[26px]">
                            <div className="">
                                <div className="flex flex-row lg:flex-col gap-[20px] sm:gap-[25px] lg:gap-[36px] overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                                    {categories?.map((category, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-row justify-start items-center gap-[10px] cursor-pointer flex-shrink-0 lg:flex-shrink hover:opacity-75 transition-opacity duration-200"
                                            onClick={() => handleCategoryClick(category?.name)}
                                        >
                                            <Image
                                            src={category?.name === 'Funnel' ? "/images/img_line_12.svg" : "/images/img_line_14.svg"}
                                            alt="Line"
                                            width={20}
                                            height={1}
                                            className="w-[20px] h-[1px]"
                                            />
                                            <span className={`text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] xl:leading-[24px] ml-[10px] whitespace-nowrap ${
                                            category?.name === 'Funnel' ? 'text-[#3433fe]' : 'text-[#0f0e55]'
                                            }`}>
                                            {category?.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Blog Grid */}
                            <div className="flex-1 order-1 lg:order-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] sm:gap-[50px] lg:gap-[64px] mb-[60px] sm:mb-[70px] lg:mb-[80px]">
                                {blogPosts?.slice(0, 4)?.map((post, index) => (
                                    <Link
                                        key={post?.id}
                                        href="/blog/wordcamp-dhaka-2019"
                                    >
                                        <article className="bg-[#ffffff] rounded-[14px] p-[10px] flex flex-col gap-[20px] sm:gap-[23px] lg:gap-[26px] hover:shadow-lg transition-shadow duration-300 group">
                                            <div className="flex flex-col gap-[12px]">
                                            <div className="flex flex-row justify-start items-center gap-[10px]">
                                                <div className="w-[1px] h-[18px] bg-[#3433fe]"></div>
                                                <div className="flex flex-row justify-start items-center gap-[12px] sm:gap-[14px] lg:gap-[16px] px-[10px]">
                                                <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                                    {post?.category}
                                                </span>
                                                <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                                    {post?.date}
                                                </span>
                                                </div>
                                            </div>
                                            <h3 className="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-bold leading-[20px] sm:leading-[25px] lg:leading-[30px] xl:leading-[33px] text-[#0b0a3d] group-hover:text-[#3433fe] transition-colors duration-200 line-clamp-3">
                                                {post?.title}
                                            </h3>
                                            </div>
                                            <div className="relative overflow-hidden rounded-[14px]">
                                            <Image
                                                src={post?.image}
                                                alt={post?.title}
                                                width={390}
                                                height={284}
                                                className="w-full h-auto rounded-[14px] group-hover:scale-105 transition-transform duration-300"
                                            />
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                            {/* Additional Blog Posts */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] sm:gap-[50px] lg:gap-[64px] mb-[60px] sm:mb-[70px] lg:mb-[80px]">
                                {blogPosts?.slice(4, 6)?.map((post, index) => (
                                <article key={post?.id} className="bg-[#ffffff] rounded-[14px] p-[10px] flex flex-col gap-[20px] sm:gap-[23px] lg:gap-[26px] hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="flex flex-col gap-[12px]">
                                    <div className="flex flex-row justify-start items-center gap-[10px]">
                                        <div className="w-[1px] h-[18px] bg-[#3433fe]"></div>
                                        <div className="flex flex-row justify-start items-center gap-[12px] sm:gap-[14px] lg:gap-[16px] px-[10px]">
                                        <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                            {post?.category}
                                        </span>
                                        <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                            {post?.date}
                                        </span>
                                        </div>
                                    </div>
                                    <h3 className="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-bold leading-[20px] sm:leading-[25px] lg:leading-[30px] xl:leading-[33px] text-[#0b0a3d] group-hover:text-[#3433fe] transition-colors duration-200 line-clamp-3">
                                        {post?.title}
                                    </h3>
                                    </div>
                                    <div className="relative overflow-hidden rounded-[14px]">
                                    <Image
                                        src={post?.image}
                                        alt={post?.title}
                                        width={390}
                                        height={284}
                                        className="w-full h-auto rounded-[14px] group-hover:scale-105 transition-transform duration-300"
                                    />
                                    </div>
                                </article>
                                ))}
                            </div>
                            {/* Final Blog Posts */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] sm:gap-[50px] lg:gap-[64px]">
                                {blogPosts?.slice(6, 8)?.map((post, index) => (
                                <article key={post?.id} className="bg-[#ffffff] rounded-[14px] p-[10px] flex flex-col gap-[20px] sm:gap-[23px] lg:gap-[26px] hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="flex flex-col gap-[12px]">
                                    <div className="flex flex-row justify-start items-center gap-[10px]">
                                        <div className="w-[1px] h-[18px] bg-[#3433fe]"></div>
                                        <div className="flex flex-row justify-start items-center gap-[12px] sm:gap-[14px] lg:gap-[16px] px-[10px]">
                                        <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                            {post?.category}
                                        </span>
                                        <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[12px] sm:leading-[14px] lg:leading-[17px] tracking-[0.5px] sm:tracking-[0.7px] lg:tracking-[1px] uppercase text-[#787878]">
                                            {post?.date}
                                        </span>
                                        </div>
                                    </div>
                                    <h3 className="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-bold leading-[20px] sm:leading-[25px] lg:leading-[30px] xl:leading-[33px] text-[#0b0a3d] group-hover:text-[#3433fe] transition-colors duration-200 line-clamp-3">
                                        {post?.title}
                                    </h3>
                                    </div>
                                    <div className="relative overflow-hidden rounded-[14px]">
                                    <Image
                                        src={post?.image}
                                        alt={post?.title}
                                        width={390}
                                        height={284}
                                        className="w-full h-auto rounded-[14px] group-hover:scale-105 transition-transform duration-300"
                                    />
                                    </div>
                                </article>
                                ))}
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Join Us Section */}
                    <section 
                        className="w-full bg-cover bg-center bg-no-repeat pt-[72px] sm:pt-[108px] lg:pt-[144px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[72px] sm:pb-[108px] lg:pb-[144px] pl-[28px] sm:pl-[42px] lg:pl-[56px]"
                        style={{ backgroundImage: "url('/images/img_bg_2.png')" }}
                    >
                        <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-center w-full">
                            <h2 className="text-[36px] w-full max-w-[660px] font-semibold sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-[#ffffff]">
                                Join us and Make Cool Stuff together
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-center items-center w-auto">
                                <JoinUsLink />
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
			    <Footer />
            </div>
        </>
    )
}

export default memo(Content);