'use client';
import Image from 'next/image';
import { memo } from 'react';

const Globe = () => {
    return (
        <>
            <section
                className="w-full bg-cover bg-center bg-no-repeat pt-[61px] sm:pt-[92px] lg:pt-[122px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[61px] sm:pb-[92px] lg:pb-[122px] pl-[28px] sm:pl-[42px] lg:pl-[56px]"
                style={{ backgroundImage: "url('/images/img_bg_1.png')" }}
            >
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-col gap-[31px] sm:gap-[47px] lg:gap-[62px] justify-start items-center w-full lg:w-[54%] mb-[4px] sm:mb-[6px] lg:mb-[8px]">
                        <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[44px] sm:leading-[51px] lg:leading-[58px] text-center text-[#ffffff] w-full lg:w-[62%]">
                            <span className="font-semibold">Trusted by Customers</span>
                            <br />
                            <span className="font-normal"> Across the Globe</span>
                        </h2>
                        <div className="flex flex-col justify-start items-center w-full">
                            <div className="w-[244px] sm:w-[366px] lg:w-[488px] mb-[-46px] sm:mb-[-69px] lg:mb-[-92px] z-10">
                                <Image
                                    src="/images/img_11444579_1.png"
                                    alt="Global presence"
                                    width={488}
                                    height={482}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 relative z-40 mt-[-230px] md:mt-[-50px]">
                                <div className="bg-transparent border-l border-r border-t-0 border-b-0 border-[1px] border-l-[rgb(70_68_210/0.62)] border-r-[rgba(255,255,255,0.48)] backdrop-blur-md rounded-xl p-6 text-left hover:scale-110 transition-all duration-300">
                                    <h2 className="text-2xl font-bold text-white">13+</h2>
                                    <p className="text-white/80 mt-2 text-sm">Successful Products</p>
                                </div>

                                <div className="bg-transparent border-l border-r border-t-0 border-b-0 border-[1px] border-l-[rgb(70_68_210/0.62)] border-r-[rgba(255,255,255,0.48)] backdrop-blur-md rounded-xl p-6 text-left hover:scale-110 transition-all duration-300">
                                    <h2 className="text-2xl font-bold text-white">50+</h2>
                                    <p className="text-white/80 mt-2 text-sm">Country Worldwide</p>
                                </div>

                                <div className="bg-transparent backdrop-blur-md rounded-xl p-6 text-left hover:scale-110 transition-all duration-300 border-l border-r border-t-0 border-b-0 border-[1px] border-l-[rgb(70_68_210/0.62)] border-r-[rgba(255,255,255,0.48)]">
                                    <h2 className="text-2xl font-bold text-white">12+</h2>
                                    <p className="text-white/80 mt-2 text-sm">Years of Experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(Globe);