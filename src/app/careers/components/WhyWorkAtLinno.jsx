'use client';
import React from 'react';
import Image from 'next/image';

const WhyWorkAtLinno = () => {
    return (
        <section className="w-full bg-[linear-gradient(90deg,#3433fe0f_0%,_#00c8530f_100%)] mt-[63px] sm:mt-[95px] lg:mt-[126px]">
            <div className="w-full max-w-[1440px] px-2 md:px-4 py-[50px] lg:py-[120px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-4">
                    {/* Left Content */}
                    <div className="flex flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] items-center w-full lg:w-[66%]">
                        <div className="flex flex-col gap-[12px] lg:gap-[26px] items-start w-full">
                            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-left text-[#0b0b35]">
                                Why Work At <span className="font-bold">Linno?</span>
                            </h2>
                            <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-left text-[#51515f] w-[64%]">
                                At Linno, you'll grow, be heard, and make an impact. We value your ideas, support your career journey, and create space for you to do meaningful work with a global reach.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[50px] w-full">
                            <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start w-full max-w-[270px]">
                                <Image
                                    src="/images/img_icon_gray_900_1.svg"
                                    alt="Growth icon"
                                    width={30}
                                    height={32}
                                    className="w-[30px] h-auto"
                                />
                                <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] items-start w-full">
                                    <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-[#0b0b35]">
                                        Grow Your Career
                                    </h3>
                                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-left text-[#51515f] w-full">
                                        Advance with learning, mentorship, and new opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start w-full max-w-[270px]">
                                <Image
                                    src="/images/img_icon_gray_900_2.svg"
                                    alt="Purpose icon"
                                    width={30}
                                    height={32}
                                    className="w-[30px] h-auto"
                                />
                                <div className="flex flex-col gap-[7px] sm:gap-[11px] lg:gap-[14px] items-start w-full">
                                    <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-[#0b0b35]">
                                        Work With Purpose
                                    </h3>
                                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-left text-[#51515f] w-[94%]">
                                        Create software that impacts lives worldwide.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start w-full max-w-[270px]">
                                <Image
                                    src="/images/img_icon_gray_900_3.svg"
                                    alt="Culture icon"
                                    width={32}
                                    height={32}
                                    className="w-[32px] h-auto"
                                />
                                <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] items-start w-full">
                                    <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-[#0b0b35]">
                                        Collaborative Culture
                                    </h3>
                                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-left text-[#51515f] w-[90%]">
                                        Thrive in teamwork, creativity, and shared success.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start w-full max-w-[270px]">
                                <Image
                                    src="/images/img_icon_gray_900_4.svg"
                                    alt="Voice icon"
                                    width={32}
                                    height={32}
                                    className="w-[32px] h-auto"
                                />
                                <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] items-start w-full">
                                    <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-[#0b0b35]">
                                        Your Voice Matters
                                    </h3>
                                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-left text-[#51515f] w-[90%]">
                                        Share ideas freely, influence projects, drive change.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Images */}
                    <div className="flex flex-col gap-[14px] sm:gap-[21px] lg:gap-[28px] items-center w-full lg:w-[34%]">
                        <Image
                            src="/images/img_frame_14248_394x454.png"
                            alt="Team collaboration"
                            width={454}
                            height={394}
                            className="w-full h-auto"
                        />
                        <Image
                            src="/images/img_frame_14249_264x454.png"
                            alt="Team meeting"
                            width={454}
                            height={264}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkAtLinno;