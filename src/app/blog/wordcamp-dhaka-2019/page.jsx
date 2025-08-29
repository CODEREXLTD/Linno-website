'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import EditText from '@/components/ui/EditText';

const WordCampDhakaBlogPost = () => {
  const [activeSection, setActiveSection] = useState('wordpress');
  const tableOfContents = [
    { id: 'wordpress', label: 'Wordpress', active: false },
    { id: 'funnel', label: 'Funnel', active: true },
    { id: 'plugins', label: 'Plugins', active: false },
    { id: 'ux-design', label: 'UX design', active: false },
    { id: 'user-research', label: 'User Research', active: false },
    { id: 'web-accessibility', label: 'Web Accessibility', active: false },
    { id: 'seo-optimization', label: 'SEO Optimization', active: false },
    { id: 'content-strategy', label: 'Content Strategy', active: false },
    { id: 'data-analytics', label: 'Data Analytics', active: false }
  ];
  const socialLinks = [
    { name: 'LinkedIn', icon: '/images/img_icon_gray_900.svg' },
    { name: 'Facebook', icon: '/images/img_vector_gray_900.svg' },
    { name: 'Twitter', icon: '/images/img_vector_gray_900_14x16.svg' },
    { name: 'Instagram', icon: '/images/img_icon_gray_900_16x16.svg' }
  ];
  const locations = [
    {
      flag: '/images/img_twemoji_flag_bangladesh.svg',
      country: 'Dhaka',
      address: 'Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215'
    },
    {
      flag: '/images/img_twemoji_flag_united_states.svg',
      country: 'United States',
      address: 'Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215'
    },
    {
      flag: '/images/img_emojione_v1_flag_for_canada.svg',
      country: 'Canada',
      address: 'Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215'
    }
  ];

  return (
    <div className="w-full bg-global-7">
      {/* Background decorative element */}
      <div className="absolute top-[935px] left-0 w-[350px] h-[712px] z-0">
        <Image
          src="/images/img_ellipse_1447.png"
          alt="Decorative background"
          width={350}
          height={712}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Left sidebar line */}
        <div className="hidden lg:block w-[1px] h-full bg-[#0000000f]"></div>
        {/* Main content area */}
        <div className="flex-1 max-w-[1440px] mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <Header />
            {/* Breadcrumb and Share */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[128px] mb-[196px]">
              <p className="text-[16px] sm:text-[20px] font-sora font-normal leading-[20px] sm:leading-[25px] text-[#0f0e55]">
                Blog / wordpress
              </p>
              <p className="text-[16px] sm:text-[20px] font-sora font-normal leading-[20px] sm:leading-[25px] tracking-[1px] sm:tracking-[2px] uppercase text-[#0f0e55]">
                Share
              </p>
            </div>
            {/* Article header */}
            <div className="mb-[148px]">
              <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-sora font-bold leading-[34px] sm:leading-[44px] lg:leading-[51px] text-[#0b0a3d] mb-[22px]">
                WordCamp Dhaka 2019 – First WordCamp in Bangladesh
              </h1>
              <div className="flex items-center gap-[10px]">
                <div className="w-[2px] h-[36px] bg-[#3433fe]"></div>
                <p className="text-[16px] sm:text-[20px] font-sora font-normal leading-[20px] sm:leading-[25px] tracking-[1px] sm:tracking-[2px] uppercase text-[#0f0e55]">
                  August 28, 2025
                </p>
              </div>
            </div>
            {/* Featured image */}
            <div className="mb-[148px] p-[10px] bg-global-7 rounded-[16px] shadow-[0px_15px_21px_#6d688921]">
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[530px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/img_rectangle_19014.png"
                  alt="WordCamp Dhaka 2019"
                  width={1318}
                  height={530}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Two column layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-[70px]">
              {/* Table of Contents - Left Column */}
              <div className="w-full lg:w-[12%] lg:min-w-[200px]">
                <div className="sticky top-8">
                  <h3 className="text-[18px] sm:text-[20px] font-sora font-medium leading-[22px] sm:leading-[24px] text-[#0f0e55] mb-[36px]">
                    Table of Contents
                  </h3>
                  <div className="flex flex-col gap-[36px]">
                    {tableOfContents?.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSection(item?.id)}
                        className="flex items-center gap-[10px] text-left group"
                      >
                        <div className="w-[20px] h-[1px] bg-gray-300 group-hover:bg-[#3433fe] transition-colors"></div>
                        <span className={`text-[18px] sm:text-[20px] font-sora font-normal leading-[22px] sm:leading-[24px] transition-colors ${
                          item?.active || activeSection === item?.id 
                            ? 'text-[#3433fe]' 
                            : 'text-[#0f0e55] group-hover:text-[#3433fe]'
                        }`}>
                          {item?.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Main content - Right Column */}
              <div className="flex-1">
                {/* Main article image */}
                <div className="mb-[308px]">
                  <Image
                    src="/images/img_group_1171278164.png"
                    alt="WordPress Child Theme Illustration"
                    width={1920}
                    height={1928}
                    className="w-full h-auto"
                  />
                </div>
                {/* Article content */}
                <div className="max-w-[52%] ml-auto">
                  <div className="text-[16px] sm:text-[20px] font-sora font-medium leading-[24px] sm:leading-[30px] text-[#787878]">
                    <p className="mb-6">
                      WordPress is a powerful CMS, used to build over 27% of all websites on the internet. It offers over 3000 free themes and over 8000 premium themes, that are GPL licensed, for developing websites.
                    </p>
                    <p className="mb-6">
                      While creating a website, you may choose to among brilliant themes. However, you should get familiar with how to create a child theme.
                    </p>
                    <p className="mb-6">
                      Let me explain why.
                    </p>
                    <p className="mb-6">
                      All WordPress themes release updates every now and then to fix bugs and add new features. This is good in the sense that your theme is getting more and more secure with fewer bugs and good new features.
                    </p>
                    <p className="mb-6">
                      However, if you have made any customization to the theme, then you will face issues.
                    </p>
                    <p className="mb-6">
                      Basically, when updating a theme, all the core files of the theme are replaced with new updated files.
                    </p>
                    <p className="mb-6">
                      Hence your theme will lose all the customizations that you implemented. Also, there is no way to get them back (
                      <span className="underline">unless you kept backup</span>
                      ) once updated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom content image */}
            <div className="mb-[70px] -mt-[456px]">
              <Image
                src="/images/img_group_1171278158.png"
                alt="Additional content illustration"
                width={1920}
                height={1396}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* Right sidebar line */}
        <div className="hidden lg:block w-[1px] h-full bg-[#0000000f]"></div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-global-7 pt-[38px] pb-[38px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left section - Logo and contact */}
            <div className="w-full lg:w-[18%]">
              <div className="flex flex-col gap-[38px]">
                {/* Logo and social icons */}
                <div className="flex flex-col gap-[38px]">
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src="/images/img_path.svg"
                      alt="Linno Logo"
                      width={44}
                      height={44}
                      className="w-[44px] h-[44px]"
                    />
                    <div className="flex items-center gap-[8px]">
                      <Image
                        src="/images/img_path_gray_900.svg"
                        alt="Social icon"
                        width={24}
                        height={38}
                        className="w-auto h-[38px]"
                      />
                      <div className="w-[8px] h-[38px] bg-[#0b0b35] rounded-[4px]"></div>
                      <Image
                        src="/images/img_path_gray_900_38x38.svg"
                        alt="Social icon"
                        width={38}
                        height={38}
                        className="w-[38px] h-[38px]"
                      />
                      <Image
                        src="/images/img_path_gray_900_38x38.svg"
                        alt="Social icon"
                        width={38}
                        height={38}
                        className="w-[38px] h-[38px]"
                      />
                      <Image
                        src="/images/img_compound_path.svg"
                        alt="Social icon"
                        width={38}
                        height={38}
                        className="w-[38px] h-[38px]"
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <Link 
                    href="mailto:enquiry@linno.io"
                    className="text-[24px] sm:text-[30px] font-sora font-normal leading-[29px] sm:leading-[36px] text-[#0b0b35] underline hover:text-[#3433fe] transition-colors"
                  >
                    enquiry@linno.io
                  </Link>
                  {/* Contact button */}
                  <div className="w-full">
                    <EditText
                      placeholder="Contact Us"
                      className="bg-[#3433fe] text-global-7 rounded-[24px] px-[16px] py-[8px] pr-[46px] text-[20px] sm:text-[24px] font-sora font-normal leading-[24px] sm:leading-[29px] border-none focus:ring-2 focus:ring-[#3433fe] focus:ring-opacity-50"
                      onChange={() => {}}
                      rightImage={{
                        src: "/images/img_arrow_10.svg",
                        width: 30,
                        height: 16
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right section - Links and social */}
            <div className="flex-1 flex flex-col sm:flex-row justify-end gap-8 sm:gap-16">
              {/* Quick Links */}
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div className="flex flex-col gap-[22px]">
                  <h4 className="text-[16px] sm:text-[18px] font-sora font-bold leading-[20px] sm:leading-[22px] text-[#0b0b35]">
                    Quick Links
                  </h4>
                  <div className="flex flex-col gap-[12px]">
                    {['About Us', 'Products', 'Showcase', 'Careers']?.map((link, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="text-[14px] sm:text-[16px] font-sora font-normal leading-[28px] sm:leading-[36px] text-[#51515f] hover:text-[#3433fe] transition-colors"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] pl-0 sm:pl-[64px]">
                  {['Client Stories', 'Blog', 'Contact']?.map((link, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="text-[14px] sm:text-[16px] font-sora font-normal leading-[28px] sm:leading-[36px] text-[#51515f] hover:text-[#3433fe] transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Follow Us */}
              <div className="flex flex-col gap-[18px]">
                <h4 className="text-[16px] sm:text-[18px] font-sora font-bold leading-[20px] sm:leading-[22px] text-[#0b0b35]">
                  Follow Us
                </h4>
                <div className="flex flex-col gap-[16px]">
                  {socialLinks?.map((social, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="flex items-center gap-[12px] sm:gap-[14px] group"
                    >
                      <Image
                        src={social?.icon}
                        alt={`${social?.name} icon`}
                        width={16}
                        height={16}
                        className="w-[16px] h-[16px]"
                      />
                      <span className="text-[14px] sm:text-[16px] font-sora font-normal leading-[18px] sm:leading-[20px] text-[#51515f] group-hover:text-[#3433fe] transition-colors">
                        {social?.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Location section */}
          <div className="mt-[124px] mb-[24px]">
            <div className="bg-[#fbfbff] border border-[#3433fe] rounded-[10px] p-[36px]">
              <div className="flex flex-col gap-[16px]">
                {/* Country headers */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                  {locations?.map((location, index) => (
                    <div key={index} className="flex items-center gap-[20px] flex-1 justify-center">
                      <Image
                        src={location?.flag}
                        alt={`${location?.country} flag`}
                        width={26}
                        height={20}
                        className="w-[26px] h-[20px]"
                      />
                      <span className="text-[20px] sm:text-[24px] font-sora font-bold leading-[24px] sm:leading-[29px] text-[#0b0b35]">
                        {location?.country}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Addresses */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
                  {locations?.map((location, index) => (
                    <p key={index} className="text-[14px] sm:text-[16px] font-sora font-medium leading-[22px] sm:leading-[27px] text-[#51515f] text-center flex-1">
                      {location?.address}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#51515f]">
              © 2025 Linno. All Rights Reserved.
            </p>
            <p className="text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#51515f]">
              Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms &amp; Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WordCampDhakaBlogPost;