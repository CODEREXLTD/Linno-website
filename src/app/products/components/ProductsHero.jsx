'use client';
import { memo } from 'react';

const ProductsHero = () => {
    return (
        <>
            <section className="w-full bg-[#f2f5fb] pt-[40px] sm:pt-[60px] lg:pt-[80px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
                <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[32px] justify-center items-center text-center w-full">
                        {/* Section Header */}
                        <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-center w-full max-w-4xl">
                            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-sora leading-[44px] sm:leading-[58px] lg:leading-[77px] text-[#0b0b35] w-auto">
                                <span className="font-normal">Our </span>
                                <span className="font-bold">Products</span>
                            </h1>
                            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[24px] sm:leading-[27px] lg:leading-[30px] text-[#51515f] w-full lg:w-[80%]">
                                Discover our comprehensive suite of innovative solutions designed to empower businesses and drive digital transformation. Each product is crafted with precision to meet real-world challenges and accelerate growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(ProductsHero);