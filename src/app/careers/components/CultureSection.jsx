'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const CultureSection = () => {
    const router = useRouter();

    return (
        <section className="section-wrapper bg-white">
            <div className="linno-container">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 w-full">
                    {/* Left Images */}
                    <div className="flex flex-col gap-[14px] sm:gap-[21px] lg:gap-[28px] items-center w-full lg:w-[44%]">
                        <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[21px] lg:gap-[28px] justify-center items-center w-auto">
                            <Image
                                src="/images/img_02_1.png"
                                alt="Team culture"
                                width={210}
                                height={210}
                                className="w-[210px] h-[210px]"
                                loading="lazy"
                            />
                            <Image
                                src="/images/img_frame_14251_248x290.png"
                                alt="Team collaboration"
                                width={290}
                                height={248}
                                className="w-[58%] h-auto"
                                loading="lazy"
                            />
                        </div>
                        <Image
                            src="/images/img_pxl_20230413_154542781.png"
                            alt="Team meeting"
                            width={530}
                            height={274}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                    {/* Right Content */}
                    <div className="flex flex-col gap-[22px] sm:gap-[33px] lg:gap-[44px] items-start w-full lg:w-[44%]">
                        <div className="flex flex-col gap-[11px] sm:gap-[17px] lg:gap-[22px] items-start w-full">
                            <h2 className="section-title">
                                Do Great Work In A Strong <span className="title-gradient">Culture</span>
                            </h2>
                            <div className="section-description">
                                <span className="font-normal">
                                    Culture is one of those words. People throw it around a lot. It's hard to define exactly what it is. But it's something you feel pretty much straight away.
                                </span>
                                <br /><br />
                                <span className="font-normal">We're not going to lie. The culture at </span>
                                <span className="text-[#6d6d72]">Linno isn't perfect. Like every group of people we have our issues. But we are all dedicated to continuing to improve, and we think that's a pretty good start.</span>
                            </div>
                        </div>
                        <Button 
                            onClick={() => {
                                // Check if we're already on the careers page
                                const currentPath = window.location.pathname;
                                
                                if (currentPath === '/careers' || currentPath === '/careers/') {
                                    // We're on the careers page, just scroll to the section
                                    const element = document.getElementById('linno-open-positions');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                } else {
                                    // Navigate to careers page with hash fragment
                                    router.push('/careers#linno-open-positions');
                                }
                            }}
                            className="bg-[#3433fe] text-white rounded-[10px] px-[11px] sm:px-[17px] lg:px-[22px] py-[7px] sm:py-[11px] lg:py-[14px] text-[15px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] w-fit"
                        >
                            Check Open Position
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CultureSection;