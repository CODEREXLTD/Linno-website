'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const HomeBrands = () => {
    return (
        <>
            <section className="linno-home-brand-section section-wrapper">
                <div className="linno-container">
                    <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-start w-full">
                        {/* Section Header */}
                        <div className="flex flex-col gap-6 justify-start items-center lg:items-start w-full max-w-full md:max-w-[1070px] text-center lg:text-left">
                            <h2 className="section-title">
                                <span className="font-normal">You Probably </span>
                                <span className="font-bold title-gradient">Know Us</span>
                                <span className="font-normal"> Already....</span>
                            </h2>

                            <p className="section-description">
                                While we are Linno at heart, globally we operate through two leading brands, each focused on solving real problems for real people.
                            </p>
                        </div>

                        {/* Brand Cards */}
                        <div className="flex flex-col lg:flex-row gap-[25px] sm:gap-[30px] lg:gap-[38px] xl:gap-[50px] justify-center items-stretch w-full mb-[13px] sm:mb-[20px] lg:mb-[26px]">
                            {/* WPFunnels Card */}
                            <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[44px] xl:gap-[58px] justify-between items-start w-full lg:w-1/2 bg-[#ffffff] border border-[#E7E9F5] rounded-[20px] pt-[20px] sm:pt-[24px] lg:pt-[30px] xl:pt-[34px] pr-[20px] sm:pr-[24px] lg:pr-[30px] xl:pr-[36px] pb-[20px] sm:pb-[24px] lg:pb-[30px] xl:pb-[34px] pl-[20px] sm:pl-[24px] lg:pl-[30px] xl:pl-[36px] shadow-[0_10px_50px_0_rgba(52,51,254,0.05)] backdrop-blur-[5px]">
                                <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[38px] xl:gap-[59px] justify-start items-start w-full">
                                    <div className="w-[80px] sm:w-[110px] lg:w-[140px] xl:w-[174px]">
                                        <Image
                                            src="/images/img_vector_deep_purple_500.svg"
                                            alt="WPFunnels Logo"
                                            width={174}
                                            height={26}
                                            className="w-full h-auto"
                                        />
                                    </div>

                                    <div className='space-y-3'>
                                        <h3 className='text-[24px] sm:text-[30px] lg:text-[20px] font-sora font-semibold leading-[1.3] text-[#0b0b35]'>
                                            Makers of WPFunnels, Mail Mint, and Creator LMS.
                                        </h3>
                                        <p className="text-[16px] font-normal font-sora leading-[1.6] text-[#585A65]">
                                            The team is dedicated to empowering digital creators and businesses with sales funnels, marketing automation, and easy eLearning solutions—all built to simplify workflows and maximize growth.
                                        </p>
                                    </div>
                                </div>

                                <Link href={'https://getwpfunnels.com/'} target='_blank'>
                                    <div className="flex justify-start items-center w-full group cursor-pointer">
                                        <p className='flex justify-start items-center gap-[14px] products-link-btn'>
                                            <span className="text-[12px] text-[#3433FE] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-sora font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] xl:leading-[21px]  transition-colors duration-200">
                                                Visit Website
                                            </span>
                                            <svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#3433FE" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            {/* RexTheme Card */}
                            <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[44px] xl:gap-[58px] justify-between items-start w-full lg:w-1/2 bg-[#ffffff] border border-[#E7E9F5] rounded-[20px] pt-[20px] sm:pt-[24px] lg:pt-[30px] xl:pt-[34px] pr-[20px] sm:pr-[24px] lg:pr-[30px] xl:pr-[36px] pb-[20px] sm:pb-[24px] lg:pb-[30px] xl:pb-[34px] pl-[20px] sm:pl-[24px] lg:pl-[30px] xl:pl-[36px] shadow-[0_10px_50px_0_rgba(52,51,254,0.05)] backdrop-blur-[5px]">
                                <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[42px] xl:gap-[52px] justify-start items-start w-full">
                                    <div className="w-[74px] sm:w-[100px] lg:w-[130px] xl:w-[162px]">
                                        <Image

                                            src="/images/img_vector_indigo_a700_01.svg"
                                            alt="RexTheme Logo"
                                            width={162}
                                            height={34}
                                            className="w-full h-auto"
                                        />
                                    </div>

                                    <div className='space-y-3'>
                                        <h3 className='text-[24px] sm:text-[30px] lg:text-[20px] font-sora font-semibold leading-[1.3] text-[#0b0b35]'>
                                            The team behind Product Feed Manager and WPVR
                                        </h3>
                                        <p className="text-[16px] font-normal font-sora leading-[1.6] text-[#585A65]">
                                            A team focused on delivering premium WordPress plugins that help businesses grow online with solutions for product feed generation, abandoned cart recovery, and immersive virtual tours—built to boost eCommerce performance and user engagement.
                                        </p>
                                    </div>
                                </div>
                                <Link href={'https://rextheme.com/'} target='_blank'>
                                    <div className="flex justify-start items-center w-full group cursor-pointer">
                                        <p className='flex justify-start items-center gap-[14px] products-link-btn'>
                                            <span className="text-[12px] text-[#3433FE] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-sora font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] xl:leading-[21px]  transition-colors duration-200">
                                                Visit Website
                                            </span>
                                            <svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#3433FE" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(HomeBrands);