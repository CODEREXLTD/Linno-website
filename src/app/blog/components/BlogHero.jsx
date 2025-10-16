'use client';
import { memo } from 'react';

const BlogHero = () => {
    return (
        <>
            <section className="section-wrapper bg-white">
                <div className="linno-container">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <h2 className='font-sora text-[#0B0B35] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-tight'>
                            Blog
                        </h2>
                        <p className='font-sora text-[#51515F] text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[32px] w-full max-w-[auto] md:max-w-[500px]'>
                            The latest from our world and beyond. <br />
                            Read, watch and go deeper on what's happening with us and our work.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(BlogHero);