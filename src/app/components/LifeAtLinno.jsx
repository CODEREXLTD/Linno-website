'use client';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

const LifeAtLinno = () => {
    const router = useRouter();
    
    const handleCheckOpenPositions = () => {
        router.push('/careers#linno-open-positions');
    };
    return (
        <>
            <section className="w-full bg-[linear-gradient(90deg,#3433fe0f_0%,_#00c8530f_100%)] pt-[61px] sm:pt-[92px] lg:pt-[122px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[61px] sm:pb-[92px] lg:pb-[122px] pl-[28px] sm:pl-[42px] lg:pr-[56px]">
                <div className="flex flex-col lg:flex-row gap-[25px] sm:gap-[38px] lg:gap-[45px] justify-center items-center w-full max-w-[1440px] mx-auto">
                    {/* Left Content */}
                    <div className="flex flex-col gap-[41px] sm:gap-[62px] lg:gap-[50px] justify-start lg:items-start items-center w-full lg:w-[30%] mb-[16px] sm:mb-[24px] lg:mb-[32px]">
                        <div className="flex flex-col gap-[18px] sm:gap-[27px] lg:gap-[36px] justify-start items-start w-full">
                            <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-start items-start w-full">
                                <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-[#0b0b35] w-auto">
                                    <span className="font-normal">Life at </span>
                                    <span className="font-bold">Linno</span>
                                </h2>
                                <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[29px] text-[#40403f] w-full">
                                    We combine expert resources with the latest technologies to deliver high-quality software solutions for your business.
                                </p>
                            </div>
                            <Button
                                variant="primary"
                                onClick={handleCheckOpenPositions}
                                className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#ffffff] bg-[#3433fe] rounded-[10px] pt-[7px] sm:pt-[11px] lg:pt-[14px] pr-[13px] sm:pr-[20px] lg:pr-[26px] pb-[7px] sm:pb-[11px] lg:pb-[14px] pl-[13px] sm:pl-[20px] lg:pl-[26px] hover:bg-[#2d2bdb] active:bg-[#2622c4] transition-all duration-200"
                            >
                                Check Open Positions
                            </Button>
                        </div>
                        <div className="w-full">
                            <img
                                src="/images/img_08_1.png"
                                alt="Team member"
                                width={400}
                                height={356}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                    {/* Middle Content */}
                    <div className="flex flex-col gap-[17px] sm:gap-[26px] lg:gap-[34px] justify-start items-center w-full lg:w-[24%]">
                        <div className="flex justify-center w-full relative">
                            <div className="w-full max-w-[402px] h-[137px] sm:h-[206px] lg:h-[274px] relative">
                                <img
                                    src="/images/img_image.png"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-auto">
                            <div className="w-full max-w-[400px]">
                                <img
                                    src="/images/img_pxl_20230818_110706499.png"
                                    alt="Office environment"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className="flex flex-col gap-[17px] sm:gap-[26px] lg:gap-[34px] justify-start items-center w-full lg:w-[22%]">
                        <div className="w-full max-w-[400px]">
                            <img
                                src="/images/home-img2.jpg"
                                alt="Team meeting"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="w-full max-w-[400px]">
                            <img
                                src="/images/img_image_8.png"
                                alt="Workspace"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(LifeAtLinno);