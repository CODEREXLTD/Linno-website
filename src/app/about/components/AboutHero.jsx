'use client';
import Button from '@/components/ui/Button';
import { memo } from 'react';

const AboutHero = () => {
    return (
        <>
            <section className="w-full">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8 lg:gap-20 items-start">
                        <div>
                            <h1 className="text-[#0B0B35] font-[Sora] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[1.15] xl:leading-[92px]">
                                About Us
                            </h1>
                        </div>
                        <div>
                            <p className="text-[#51515F] font-inter text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed sm:leading-relaxed md:leading-8 lg:leading-[35px] mb-5 sm:mb-8 lg:mb-12">
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