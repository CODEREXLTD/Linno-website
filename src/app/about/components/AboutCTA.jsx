'use client';
import Link from 'next/link';
import { memo } from 'react';

const AboutCTA = () => {
    return (
        <>
            <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0b0a3c]"></div>
                <div className="absolute inset-0 bg-[url('/images/about_cta_img.webp')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-white text-center font-sora font-semibold capitalize text-[38px] leading-[48px] sm:text-[48px] sm:leading-[60px] md:text-[60px] md:leading-[78px] lg:text-[80px] lg:leading-[94px]">
                        Join Us And Make Cool <br className="hidden sm:block" /> Stuff Togather
                    </h1>
                    <div className="mt-8">
                        <Link
                            href="/careers"
                            className="inline-flex items-center gap-2 text-center font-sora font-semibold capitalize text-[38px] leading-[48px] sm:text-[48px] sm:leading-[60px] md:text-[60px] md:leading-[78px] lg:text-[80px] lg:leading-[94px] font-bold text-yellow-400 hover:text-yellow-500 transition"
                        >
                            Join Us
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <div className="h-[2px] bg-yellow-400 mt-0 w-[120px] sm:w-[180px] md:w-[200px] lg:w-[250px] mx-auto"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(AboutCTA);