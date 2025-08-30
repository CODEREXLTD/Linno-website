"use client"
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import JoinUsLink from '@/components/ui/JoinUsLink';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react'

const Content = () => {
    
    const formattedToday = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'Asia/Dhaka'
        }).format(new Date());

    return (
        <>
            <div className="min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="w-full">
                    <section className="w-full py-[63px] sm:py-[95px] lg:py-[126px] bg-white">
                        <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 md:mb-32'>
                                <h2 className='font-sora text-[#0B0B35] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-tight'>
                                    Blog
                                </h2>
                                <p className='font-sora text-[#51515F] text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[32px] w-full max-w-[auto] md:max-w-[500px]'>
                                    The latest from our world and beyond. <br />
                                    Read, watch and go deeper on what's happening with us and our work.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <p className='font-sora text-[#0F0E55] text-[14px] md:text-[20px]'>
                                    Wordpress {formattedToday}
                                </p>

                                <Link href="/blog/wordcamp-dhaka-2019">
                                    <h3  className='font-sora text-[#0B0B35] text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight'>
                                        WordCamp Dhaka 2019 - First WordCamp in Bangladesh
                                    </h3>
                                </Link>

                                <div className='mx-auto'>
                                    <Link href="/blog/wordcamp-dhaka-2019">
                                        <Image
                                            src="/images/wordpress-wordcamp.png"
                                            alt="WordCamp Dhaka 2019"
                                            width={400}
                                            height={300}
                                            className="w-full h-auto"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Join Us Section */}
                    <section 
                        className="w-full bg-cover bg-center bg-no-repeat pt-[72px] sm:pt-[108px] lg:pt-[144px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[72px] sm:pb-[108px] lg:pb-[144px] pl-[28px] sm:pl-[42px] lg:pl-[56px]"
                        style={{ backgroundImage: "url('/images/img_bg_2.png')" }}
                    >
                        <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-center w-full">
                            <h2 className="text-[36px] w-full max-w-[660px] font-semibold sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-[#ffffff]">
                                Join us and Make Cool Stuff together
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-center items-center w-auto">
                                <JoinUsLink />
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
			    <Footer />
            </div>
        </>
    )
}

export default memo(Content);