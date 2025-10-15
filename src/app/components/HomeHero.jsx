'use client';
import Badge from '@/components/common/Badge';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { memo } from 'react';

const HomeHero = () => {
    return (
        <>
            <section className="linno-hero">
                <div className="linno-container">
                    <div className="hero-content-wrapper flex flex-col gap-[21px] sm:gap-[32px] lg:gap-[42px] justify-start items-start w-full order-2 lg:order-1">
                        {/* Innovation Badge */}
                        <div className="flex flex-col gap-[11px] sm:gap-[17px] lg:gap-[22px] justify-start items-start w-full">
                            <div className="w-full">
                                <Badge
                                    highlight='Innovation.'
                                    text='Fueled by People'
                                    className='max-w-[330px] !py-2'
                                />
                            </div>

                            {/* Main Heading and Description */}
                            <div className="flex flex-col gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-start items-start w-full">
                                <h1 className="linno-hero-title">
                                    Building Tools That <span className="title-gradient"> Empower Creators</span> And <span className="title-gradient">Businesses</span> Worldwide
                                </h1>

                                <p className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-inter font-normal leading-[1.6] text-[#51515f] lg:max-w-[500px]">
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
                </div>

                <div className="linno-hero-image">
                    <div className="hero-image-wrapper">
                        <div className="iamge-side1">
                            <div className="single-hero-image">
                                <Image
                                    src="/images/home-hero-image1.webp"
                                    alt="linno hero image 1"
                                    width={417}
                                    height={496}
                                    priority
                                />
                            </div>

                            <div className="single-hero-image">
                                <Image
                                    src="/images/home-hero-image2.webp"
                                    alt="linno hero image 2"
                                    width={417}
                                    height={220}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="iamge-side2">
                            <div className="hero-target">
                                <Image
                                    src="/images/target-image.webp"
                                    alt="target"
                                    width={124}
                                    height={124}
                                    priority
                                />

                                <span>Innovative Team</span>
                            </div>

                            <div className="single-hero-image">
                                <Image
                                    src="/images/home-hero-image3.webp"
                                    alt="linno hero image 3"
                                    width={348}
                                    height={532}
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