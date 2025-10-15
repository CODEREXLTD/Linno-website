'use client';
import Image from 'next/image';
import { memo } from 'react';

const Globe = () => {
    return (
        <>
            <section
                className="w-full bg-cover bg-center bg-no-repeat p-[50px_28px_60px_28px] lg:p-[112px_42px_112px_42px] 2xl:p-[185px_56px_300px_56px] xl:p-[125px_56px_240px_56px]"
                style={{ backgroundImage: "url('/images/globe-bg.webp')" }}
            >
                <div className="">
                    <div className="glob-content-wrapper">
                        <div className="glob-stats-grid relative">
                            <div className="single-stat top-stat">
                                <h2 className="2xl:text-[48px] xl:text-[38px] text-[28px] font-semibold leading-[1] text-white">13+</h2>
                                <p className="text-[#21F0A8] mt-[16px] 2xl:text-[20px] xl:text-[18px] text-[16px] leading-[1.2]">Successful Products</p>
                            </div>

                            <div className="single-stat left-stat">
                                <h2 className="2xl:text-[48px] xl:text-[38px] text-[28px] font-semibold leading-[1] text-white">50+</h2>
                                <p className="text-[#21F0A8] mt-[16px] 2xl:text-[20px] xl:text-[18px] text-[16px] leading-[1.2]">Country Worldwide</p>
                            </div>

                            <div className="single-stat right-stat">
                                <h2 className="2xl:text-[48px] xl:text-[38px] text-[28px] font-semibold leading-[1] text-white">12+</h2>
                                <p className="text-[#21F0A8] mt-[16px] 2xl:text-[20px] xl:text-[18px] text-[16px] leading-[1.2]">Years of Innovation</p>
                            </div>
                        </div>
                        
                        <div className="glob-content">
                            <h2 className="2xl:text-[38px] lg:text-[36px] text-[36px] font-sora leading-[1.5] text-[#ffffff] lg:max-w-[470px]">
                                <span className="font-semibold">Trusted Across</span>
                                <br />
                                <span className="font-normal gradient-title"> The Globe For Innovative Solutions</span>
                            </h2>

                            <p className='glob-content-text'>We thrive on innovation, teamwork, and continuous learning. Our workplace empowers people to do their best work while enjoying the journey together.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(Globe);