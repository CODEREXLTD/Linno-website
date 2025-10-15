'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
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
                                <span className="font-normal">Our </span>
                                <span className="font-bold title-gradient">Brands</span>
                            </h2>

                            <p className="section-description">
                                We empower businesses through our brands WPFunnels and RexTheme - each designed to solve real-world challenges and accelerate growth.
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
                                    <p className="text-[20px] font-normal font-sora leading-[1.6] text-[#585A65]">
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
                                    <p className="text-[20px] font-normal font-sora leading-[1.6] text-[#585A65]">
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