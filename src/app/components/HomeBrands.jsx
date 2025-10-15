'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { memo } from 'react';

const HomeBrands = () => {
    return (
        <>
            <section className="w-full bg-[linear-gradient(90deg,rgba(52,51,254,0.06)_9.32%,rgba(0,200,83,0.06)_100%)] mt-[40px] sm:mt-[60px] lg:mt-[80px] xl:mt-[118px] pt-[40px] sm:pt-[60px] lg:pt-[80px] xl:pt-[118px] pb-[40px] sm:pb-[60px] lg:pt-[80px] xl:pb-[112px]">
                <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-start w-full">

                        {/* Section Header */}
                        <div className="flex flex-col gap-[7px] sm:gap-[11px] lg:gap-[14px] justify-start items-center lg:items-start w-full lg:w-[68%] text-center lg:text-left">
                            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-sora leading-[1.3] sm:leading-[42px] md:leading-[50px] lg:leading-[61px] text-[#0B0A3D] w-auto">
                                <span className="font-normal">Our </span>
                                <span className="font-bold title-gradient">Brands</span>
                            </h2>

                            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter font-normal leading-[20px] sm:leading-[23px] md:leading-[27px] lg:leading-[30px] text-[#B1B4C9] w-full">
                                We empower businesses through our brands—WPFunnels and RexTheme—each designed to solve real-world challenges and accelerate growth.
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
                                    <p className="text-[20px] font-sora leading-[1.6] text-[#585A65]">
                                        WPFunnels is a WordPress solutions brand behind WPFunnels, Mail Mint, and Creator LMS. Their tools empower creators and businesses with sales funnels, marketing automation, and eLearning solutions—all built to simplify workflows and maximize growth.
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    size="md"
                                    onClick={() => {
                                        window.open('https://getwpfunnels.com/', '_blank')
                                    }}
                                    className='hover:bg-[#2622c4] hover:text-white active:bg-[#2622c4] transition-all duration-200 hover:border-transparent'
                                >
                                    Learn More
                                </Button>
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
                                    <p className="text-[20px] font-sora leading-[1.6] text-[#585A65]">
                                        RexTheme develops premium WordPress plugins that help businesses grow online. Their solutions include tools for product feed generation, abandoned cart recovery, and immersive virtual tours—built to boost eCommerce performance and user engagement.
                                    </p>
                                </div>
                                <Button

                                    variant="outline"
                                    size="md"
                                    onClick={() => {
                                        window.open('https://rextheme.com/', '_blank')
                                    }}
                                    className='hover:bg-[#2622c4] hover:text-white hover:font-semibold active:bg-[#2622c4] transition-all duration-200 hover:border-transparent'
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(HomeBrands);