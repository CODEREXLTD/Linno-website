'use client';
import Badge from '@/components/common/Badge';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { memo } from 'react';

const HomeHero = () => {
    return (
        <>
            <section className="w-full">
                <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto py-12 md:py-16 lg:py-26">
                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-0 w-full">

                        {/* Left Content */}
                        <div className="flex flex-col gap-[21px] sm:gap-[32px] lg:gap-[42px] justify-start items-start w-full order-2 lg:order-1">
                            {/* Innovation Badge */}
                            <div className="flex flex-col gap-[11px] sm:gap-[17px] lg:gap-[22px] justify-start items-start w-full">
                                <div className="w-full sm:w-4/5 lg:w-[60%]">
                                    <Badge
                                        highlight='Innovation.'
                                        text='Fueled by People'
                                        className='!py-2'
                                    />
                                </div>
                                {/* Main Heading and Description */}
                                <div className="flex flex-col gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-start items-start w-full">
                                    <h1 className="text-[30px] md:text-[50px] font-sora leading-tight text-[#0b0b35] w-full">
                                        <span className="font-normal">Building Tools That Empower </span>
                                        <span className="title-gradient"> Creators</span>
                                        <span className="font-normal"> And Businesses Worldwide</span>
                                    </h1>
                                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter font-normal leading-[22px] sm:leading-[26px] md:leading-[31px] lg:leading-[35px] text-[#51515f] w-full md:w-[70%]">
                                        A team with passion for technology and innovation, focused on creating software solutions that solve real-world problems, currently trusted by over 50k users all over the world! 
                                    </p>
                                </div>
                            </div>
                            {/* CTA Button */}
                            <Button
                                variant="primary"
                                size="lg"
                                link={true}
                                href="/products"
                                label="See What We've Built"
                                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sora font-semibold leading-[18px] sm:leading-[20px] md:leading-[23px] lg:leading-[26px] text-[#ffffff] bg-[#3433fe] rounded-[10px] pt-[7px] sm:pt-[11px] lg:pt-[14px] pr-[16px] sm:pr-[24px] lg:pr-[32px] pb-[7px] sm:pb-[11px] lg:pb-[14px] pl-[16px] sm:pl-[24px] lg:pl-[32px] hover:bg-[#2d2bdb] active:bg-[#2622c4] transition-all duration-200 w-full sm:w-auto"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center items-center w-full order-1 lg:order-2 mb-6 lg:mb-0">
                            <div className="w-full px-4 sm:px-0">
                                <Image
                                    src="/images/hero-home.jpg"
                                    alt="Team collaboration"
                                    width={676}
                                    height={576}
                                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(HomeHero);