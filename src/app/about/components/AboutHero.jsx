'use client';
import Button from '@/components/ui/Button';
import { memo } from 'react';

const AboutHero = () => {
    return (
        <>
            <section className="section-wrapper bg-white">
                <div className="linno-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8 lg:gap-20 items-start">
                        <div>
                            <h1 className="section-title">
                                About <span className='title-gradient'>Us</span>
                            </h1>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className="section-description">
                                We combine expert resources with the latest technologies to deliver high-quality software solutions for your business.
                            </p>
                            <Button
                                variant="primary"
                                size="lg"
                                link={true}
                                href="/contact"
                                label="Contact Us"
                                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sora font-semibold leading-[18px] sm:leading-[20px] md:leading-[23px] lg:leading-[26px] text-[#ffffff] bg-[#3433fe] rounded-[10px] pt-[7px] sm:pt-[11px] lg:pt-[14px] pr-[16px] sm:pr-[24px] lg:pr-[32px] pb-[7px] sm:pb-[11px] lg:pb-[14px] pl-[16px] sm:pl-[24px] lg:pl-[32px] hover:bg-[#2d2bdb] active:bg-[#2622c4] transition-all duration-200 w-full sm:w-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(AboutHero);