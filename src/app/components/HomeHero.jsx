'use client';
import Badge from '@/components/common/Badge';
import Separator from '@/components/common/Separator';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { memo } from 'react';

const ArrowRight = () => (
    <svg width="29" height="14" fill="none" viewBox="0 0 29 14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M27.926 7.67c.37-.37.37-.97 0-1.34L21.892.296a.948.948 0 10-1.341 1.34L25.914 7l-5.363 5.364a.948.948 0 101.34 1.34l6.035-6.034zM.745 7v.948h26.51V6.052H.745V7z"/></svg>
);

const HomeHero = () => {
    return (
        <>
            <section className="linno-hero">
                <div className="linno-container">
                    <div className="hero-content-wrapper flex flex-col gap-[21px] sm:gap-[32px] lg:gap-[42px] justify-start items-start w-full order-2 lg:order-1">
                        {/* Innovation Badge */}
                        <div className="flex flex-col gap-[11px] sm:gap-[17px] lg:gap-[22px] justify-start items-start w-full">
                            <span className="tagline">Innovation. Fueled by People</span>

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

                        <div className="linno-section-cta">
                            <Button
                                variant="primary"
                                link={true}
                                href="/products"
                                label="See What We've Built"
                                icon={<ArrowRight />}
                                iconPosition="right"
                                className="linno-cta-btn cta-link"
                            />
                        </div>
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
                            <div className="hero-experience">
                                <span className="hero-experience-count">
                                    <svg width="134" height="134" fill="none" viewBox="0 0 134 134" xmlns="http://www.w3.org/2000/svg"><circle cx="67" cy="67" r="62" fill="#BEBED7" fill-opacity=".2"/><circle cx="67" cy="67" r="66.5" stroke="url(#paint0_linear_6031_15)"/><defs><linearGradient id="paint0_linear_6031_15" x1="11" x2="120" y1="24.5" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="#21F0A8"/><stop offset=".433" stop-color="#3433FE"/></linearGradient></defs></svg>

                                    <span className="experience">
                                        12+
                                    </span>
                                </span>
                                
                                <span className='experience-text'>Years of Experiences</span>
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
            <Separator />
        </>
    );
};

export default memo(HomeHero);