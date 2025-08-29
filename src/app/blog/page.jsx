'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import EditText from '@/components/ui/EditText';
const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Funnel');
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
      date: 'August 28, 2025',
      title: '8 Proven Ways of effective delegation',
      image: '/images/img_rectangle_19014_284x390.png'
    },
    {
      id: 2,
      category: 'Wordpress',
      date: 'August 28, 2025',
      title: '2 Easy Ways To Create WordPress Custom User Roles',
      image: '/images/img_rectangle_19014_1.png'
    },
    {
      id: 3,
      category: 'Wordpress',
      date: 'August 28, 2025',
      title: 'Why You Should Stop Using Nulled Plugins In WordPress',
      image: '/images/img_rectangle_19014_2.png'
    },
    {
      id: 4,
      category: 'Wordpress',
      date: 'August 28, 2025',
      title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
      image: '/images/img_rectangle_19014_3.png'
    },
    {
      id: 5,
      category: 'Wordpress',
      date: 'August 28, 2025',
      title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
      image: '/images/img_rectangle_19014_4.png'
    },
    {
      id: 6,
      category: 'Wordpress',
      date: 'August 28, 2025',
      title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
      image: '/images/img_rectangle_19014_5.png'
    },
    {
      id: 7,
      category: 'Wordpress',
      date: 'August 28, 2025',
      title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
      image: '/images/img_rectangle_19014_6.png'
    },
    {
      id: 8,
      category: 'Wordpress',
      date: 'August 28, 2025',
      title: 'WordCamp Dhaka 2019 – First WordCamp in Bangladesh',
      image: '/images/img_rectangle_19014_7.png'
    }
  ];
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  return (
    <div className="w-full bg-[#ffffff] relative">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img_frame_1171278179.png"
          alt="Background"
          width={1920}
          height={2718}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/images/img_group_1171278158.png"
          alt="Background overlay"
          width={1920}
          height={1396}
          className="w-full h-auto object-cover absolute top-[456px] left-0"
        />
      </div>
      {/* Decorative Elements */}
      <Image
        src="/images/img_ellipse_1447.png"
        alt="Decorative element"
        width={350}
        height={712}
        className="absolute top-[3956px] left-0 w-[16%] h-auto z-10"
      />
      {/* Main Content */}
      <div className="relative z-20 w-full">
        {/* Vertical Lines */}
        <div className="absolute left-[52px] top-0 w-[1px] h-[11722px] bg-[#0000000f]"></div>
        <div className="absolute right-[209px] top-0 w-[1px] h-[11722px] bg-[#0000000f]"></div>
        {/* Content Container */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pt-[18px] pb-[18px] mb-[10px]">
            <Header />
          </div>
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-[106px]">
            <div className="flex-1">
              <h1 className="text-[50px] sm:text-[65px] md:text-[80px] lg:text-[100px] font-bold leading-[60px] sm:leading-[78px] md:leading-[96px] lg:leading-[120px] text-[#0e0e54] mb-0">
                Blog
              </h1>
            </div>
            <div className="w-full lg:w-[38%]">
              <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[28px] text-[#292929]">
                The latest from our world and beyond.<br />
                Read, watch and go deeper on what's happening with us and our work.
              </p>
            </div>
          </div>
          {/* Featured Article Section */}
          <div className="mb-[22px]">
            <div className="flex flex-row justify-start items-center gap-[10px] mb-[22px]">
              <div className="w-[2px] h-[36px] bg-[#3433fe]"></div>
              <span className="text-[10px] sm:text-[14px] md:text-[17px] lg:text-[20px] font-normal leading-[12px] sm:leading-[17px] md:leading-[21px] lg:leading-[25px] tracking-[1px] sm:tracking-[1.4px] md:tracking-[1.7px] lg:tracking-[2px] uppercase text-[#0f0e55] ml-[10px]">
                Wordpress
              </span>
              <span className="text-[10px] sm:text-[14px] md:text-[17px] lg:text-[20px] font-normal leading-[12px] sm:leading-[17px] md:leading-[21px] lg:leading-[25px] tracking-[1px] sm:tracking-[1.4px] md:tracking-[1.7px] lg:tracking-[2px] uppercase text-[#0f0e55] ml-[12px]">
                August 28, 2025
              </span>
            </div>
            <h2 className="text-[21px] sm:text-[28px] md:text-[35px] lg:text-[42px] font-bold leading-[25px] sm:leading-[34px] md:leading-[42px] lg:leading-[51px] text-[#0b0a3d] mb-[26px]">
              WordCamp Dhaka 2019 – First WordCamp in Bangladesh
            </h2>
            <div className="p-[10px] bg-[#ffffff] rounded-[16px] shadow-[0px_15px_21px_#6d688921]">
              <Image
                src="/images/img_rectangle_19014.png"
                alt="Featured article"
                width={1318}
                height={530}
                className="w-full h-auto rounded-[16px]"
              />
            </div>
          </div>
          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row gap-[40px] sm:gap-[50px] lg:gap-[64px] xl:gap-[474px] mt-[80px] sm:mt-[95px] lg:mt-[110px]">
            {/* Sidebar */}
            <div className="w-full lg:w-[200px] xl:w-[12%] order-2 lg:order-1">
              <div className="pt-[20px] sm:pt-[23px] lg:pt-[26px] pb-[20px] sm:pb-[23px] lg:pb-[26px]">
                <div className="mt-[60px] sm:mt-[75px] lg:mt-[90px]">
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
      </div>
      {/* Footer Section */}
      <div className="w-full bg-[#ffffff] pt-[38px] pr-[38px] pb-[38px] pl-[38px] mt-[724px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16 mt-[34px]">
            {/* Left Section - Logo and Contact */}
            <div className="w-full lg:w-[18%] flex flex-col gap-[38px] justify-start items-center self-center">
              <div className="flex flex-col gap-[38px] justify-start items-center">
                <div className="flex flex-row justify-center items-center gap-[10px]">
                  <Image
                    src="/images/img_path.svg"
                    alt="Logo"
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px]"
                  />
                  <div className="flex flex-row justify-center items-center gap-[8px] self-end">
                    <Image
                      src="/images/img_path_gray_900.svg"
                      alt="Logo part"
                      width={24}
                      height={38}
                      className="w-auto h-[38px]"
                    />
                    <div className="w-[8px] h-[38px] bg-[#0b0b35] rounded-[4px] ml-[8px]"></div>
                    <Image
                      src="/images/img_path_gray_900_38x38.svg"
                      alt="Logo part"
                      width={38}
                      height={38}
                      className="w-[38px] h-[38px] ml-[8px]"
                    />
                    <Image
                      src="/images/img_path_gray_900_38x38.svg"
                      alt="Logo part"
                      width={38}
                      height={38}
                      className="w-[38px] h-[38px] ml-[8px]"
                    />
                    <Image
                      src="/images/img_compound_path.svg"
                      alt="Logo part"
                      width={38}
                      height={38}
                      className="w-[38px] h-[38px] ml-[8px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full">
                  <span className="text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-normal leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#0b0b35] underline">
                    enquiry@linno.io
                  </span>
                </div>
                <EditText
                  placeholder="Contact Us"
                  className="w-full bg-[#3433fe] text-[#ffffff] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[29px] rounded-[24px] pt-[8px] pr-[46px] pb-[8px] pl-[16px] gap-[16px]"
                  onChange={() => {}}
                  rightImage={{
                    src: "/images/img_arrow_10.svg",
                    width: 30,
                    height: 16
                  }}
                />
              </div>
            </div>
            {/* Right Section - Links and Social */}
            <div className="flex-1 flex flex-row justify-end items-center">
              <div className="flex flex-row justify-between items-start w-[38%] gap-8">
                <div className="flex flex-col gap-[22px] justify-start items-start w-[16%]">
                  <span className="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-bold leading-[11px] sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-[#0b0b35]">
                    Quick Links
                  </span>
                  <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#51515f]">
                    About Us<br />Products<br />Showcase<br />Careers
                  </span>
                </div>
                <div className="flex flex-row justify-start items-start gap-[64px]">
                  <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-[#51515f] w-[52%]">
                    Client Stories<br />Blog<br />Contact
                  </span>
                  <div className="flex flex-col gap-[18px] justify-start items-start self-center w-[32%]">
                    <span className="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-bold leading-[11px] sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-[#0b0b35]">
                      Follow Us
                    </span>
                    <div className="flex flex-col gap-[16px] justify-start items-center">
                      <div className="flex flex-row justify-start items-start gap-[14px]">
                        <Image
                          src="/images/img_icon_gray_900.svg"
                          alt="LinkedIn"
                          width={16}
                          height={16}
                          className="w-[16px] h-[16px]"
                        />
                        <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f] self-center">
                          LinkedIn
                        </span>
                      </div>
                      <div className="flex flex-row justify-center items-start gap-[14px]">
                        <Image
                          src="/images/img_vector_gray_900.svg"
                          alt="Facebook"
                          width={16}
                          height={16}
                          className="w-[16px] h-[16px]"
                        />
                        <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f] self-center">
                          Facebook
                        </span>
                      </div>
                      <div className="flex flex-row justify-start items-start gap-[12px]">
                        <Image
                          src="/images/img_vector_gray_900_14x16.svg"
                          alt="Twitter"
                          width={16}
                          height={14}
                          className="w-auto h-[14px]"
                        />
                        <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f] self-center ml-[12px]">
                          Twitter
                        </span>
                      </div>
                      <div className="flex flex-row justify-center items-start gap-[12px]">
                        <Image
                          src="/images/img_icon_gray_900_16x16.svg"
                          alt="Instagram"
                          width={16}
                          height={16}
                          className="w-[16px] h-[16px]"
                        />
                        <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f] self-center">
                          Instagram
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Location Section */}
          <div className="flex flex-row justify-center items-end w-full mt-[124px] ml-[16px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] bg-[#fbfbff] border border-[#3433fe] rounded-[10px]">
            <div className="flex flex-col gap-[16px] justify-start items-center w-[76%] mt-[18px]">
              <div className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-row justify-start items-center gap-[20px]">
                  <Image
                    src="/images/img_twemoji_flag_bangladesh.svg"
                    alt="Bangladesh flag"
                    width={26}
                    height={20}
                    className="w-auto h-[20px]"
                  />
                  <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[29px] text-[#0b0b35]">
                    Dhaka
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center px-[56px] flex-1">
                  <Image
                    src="/images/img_twemoji_flag_united_states.svg"
                    alt="United States flag"
                    width={26}
                    height={20}
                    className="w-auto h-[20px]"
                  />
                  <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[29px] text-[#0b0b35] ml-[20px]">
                    United States
                  </span>
                </div>
                <div className="flex flex-row justify-start items-center px-[56px] pr-[56px] pl-[138px] flex-1">
                  <Image
                    src="/images/img_emojione_v1_flag_for_canada.svg"
                    alt="Canada flag"
                    width={26}
                    height={20}
                    className="w-auto h-[20px]"
                  />
                  <span className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-[14px] sm:leading-[19px] md:leading-[24px] lg:leading-[29px] text-[#0b0b35] ml-[20px]">
                    Canada
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full mr-[86px] ml-[46px]">
                <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[13px] sm:leading-[18px] md:leading-[22px] lg:leading-[27px] text-[#51515f] w-[22%]">
                  Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215
                </span>
                <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[13px] sm:leading-[18px] md:leading-[22px] lg:leading-[27px] text-[#51515f] w-[22%]">
                  Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215
                </span>
                <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[13px] sm:leading-[18px] md:leading-[22px] lg:leading-[27px] text-[#51515f] w-[22%]">
                  Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215
                </span>
              </div>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="flex flex-row justify-between items-center w-full mt-[24px] mr-[238px] ml-[248px]">
            <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f]">
              © 2025 Linno. All Rights Reserved.
            </span>
            <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-medium leading-[10px] sm:leading-[13px] md:leading-[16px] lg:leading-[20px] text-[#51515f]">
              Privacy Policy           Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPage;