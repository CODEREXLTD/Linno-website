import { memo } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Badge from '@/components/common/Badge';

const Hero = () => {
    const scrollToOpenPositions = () => {
        const element = document.getElementById('linno-open-positions');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="w-full mt-[63px] sm:mt-[95px] lg:mt-[126px] mb-[50px] sm:mb-[75px] lg:mb-[100px]">
            <div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
                    <div className="col-span-1 space-y-4"> 
                        <Badge
                            highlight='People-Driven'
                            text='Excellence'
                            className='max-w-[300px]'
                        />
                        <h1 className="text-[31px] sm:text-[47px] lg:text-[62px] font-sora leading-[36px] sm:leading-[54px] lg:leading-[72px] text-left text-[#0b0b35]">
                            We're All in This Together<br />
                            Working at <span className="title-gradient">Linno</span>
                        </h1>
                        <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-left text-[#51515f] w-full lg:w-[86%]">
                            Be part of a team that values your ideas, fuels your growth, and empowers you to make a real impact.
                        </p>
                        <Button 
                            onClick={scrollToOpenPositions}
                            className="bg-[#3433fe] text-white rounded-[10px] px-[15px] sm:px-[23px] lg:px-[30px] py-[7px] sm:py-[11px] lg:py-[14px] text-[15px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] w-fit"
                        >
                            Check Open Position
                        </Button>
                    </div>

                    <div className="col-span-1">
                        <div className="flex gap-2 flex-col sm:flex-row">
                            <div className='space-y-2 mt-8'>
                                <div className="bg-[#3433fe] rounded-none px-[11px] sm:px-[17px] lg:px-[22px] py-[25px] sm:py-[38px] lg:py-[50px] w-full">
                                    <div className="text-[15px] sm:text-[18px] lg:text-[20px] font-sora leading-[23px] sm:leading-[27px] lg:leading-[30px] text-center sm:text-left text-white w-full">
                                        <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[23px] sm:leading-[27px] lg:leading-[30px]">30+</span>
                                        <span className="text-[35px] sm:text-[41px] lg:text-[46px] font-inter leading-[23px] sm:leading-[27px] lg:leading-[30px]"> </span><br />
                                        <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[30px] sm:leading-[35px] lg:leading-[40px]">Team</span><br />
                                        <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[18px] sm:leading-[21px] lg:leading-[24px]">Members</span>
                                    </div>
                                </div>
                                <div className="bg-[linear-gradient(90deg,#3433fe19_0%,_#00c85319_100%)] w-full sm:w-[120px] flex justify-center items-center h-auto py-4">
                                    <div className="text-[15px] sm:text-[18px] lg:text-[20px] font-sora leading-[20px] sm:leading-[23px] lg:leading-[26px] text-center text-[#0b0b35]">
                                        <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#3433fe]">50+</span><br />
                                        <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px]">Countries</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 items-start sm:items-end flex-col-reverse sm:flex-row'>
                                    <Image
                                        src="/images/team_collaboration.png"
                                        alt="Team collaboration"
                                        width={348}
                                        height={308}
                                        className="h-auto max-w-full sm:max-w-[60%]"
                                    />

                                    <div className="bg-[linear-gradient(90deg,#3433fe19_0%,_#00c85319_100%)] rounded-none px-[8px] sm:px-[12px] lg:px-[16px] py-[14px] sm:py-[21px] lg:py-[28px] w-full sm:w-[40%]">
                                        <div className="text-[15px] sm:text-[18px] lg:text-[20px] font-sora leading-[23px] sm:leading-[27px] lg:leading-[30px] text-left text-[#0b0b35] w-full flex flex-col gap-2 items-center sm:items-start">
                                            <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[23px] sm:leading-[27px] lg:leading-[30px] text-[#3433fe]">12+</span>
                                            <span className="">Years </span>
                                            <span className="">Experience</span>
                                        </div>
                                    </div>
                                </div>

                                <Image
                                    src="/images/team_meeting.jpg"
                                    alt="Team meeting"
                                    width={300}
                                    height={180}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full hidden">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[58px] sm:pt-[87px] lg:pt-[116px]">
                    <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-0 w-full">
                        {/* Left Content */}
                        <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] w-full lg:w-[46%]">
                            <div className="flex flex-col gap-[5px] sm:gap-[8px] lg:gap-[10px]">
                                <div className="bg-[linear-gradient(90deg,#3433fe19_0%,_#00c85319_100%)] rounded-[10px] px-[9px] sm:px-[14px] lg:px-[18px] py-[2px] sm:py-[3px] lg:py-[4px] w-fit">
                                    <Badge
                                        highlight='People-Driven'
                                        text='Excellence'
                                    />
                                </div>
                                <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] w-full lg:w-[92%]">
                                    <h1 className="text-[31px] sm:text-[47px] lg:text-[62px] font-sora leading-[36px] sm:leading-[54px] lg:leading-[72px] text-left text-[#0b0b35]">
                                        We're All in This Together<br />
                                        Working at <span className="font-bold">Linno</span>
                                    </h1>
                                    <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-left text-[#51515f] w-full lg:w-[86%]">
                                        Be part of a team that values your ideas, fuels your growth, and empowers you to make a real impact.
                                    </p>
                                </div>
                            </div>
                            <Button 
                                onClick={scrollToOpenPositions}
                                className="bg-[#3433fe] text-white rounded-[10px] px-[15px] sm:px-[23px] lg:px-[30px] py-[7px] sm:py-[11px] lg:py-[14px] text-[15px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] w-fit"
                            >
                                Check Open Position
                            </Button>
                        </div>
                        {/* Right Content */}
                        <div className="flex flex-row justify-start items-start gap-4 lg:gap-0 w-full lg:w-[54%] lg:pl-[48px]">
                            {/* Stats Column */}
                            <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-center w-[18%] mt-[15px] sm:mt-[23px] lg:mt-[30px]">
                                <div className="bg-[#3433fe] rounded-none px-[11px] sm:px-[17px] lg:px-[22px] py-[25px] sm:py-[38px] lg:py-[50px] w-full">
                                    <div className="text-[15px] sm:text-[18px] lg:text-[20px] font-sora leading-[23px] sm:leading-[27px] lg:leading-[30px] text-left text-white w-full">
                                        <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[23px] sm:leading-[27px] lg:leading-[30px]">30+</span>
                                        <span className="text-[35px] sm:text-[41px] lg:text-[46px] font-inter leading-[23px] sm:leading-[27px] lg:leading-[30px]"> </span><br />
                                        <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[30px] sm:leading-[35px] lg:leading-[40px]">Team</span><br />
                                        <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[18px] sm:leading-[21px] lg:leading-[24px]">Members</span>
                                    </div>
                                </div>
                                <div className="bg-[linear-gradient(90deg,#3433fe19_0%,_#00c85319_100%)] flex justify-center items-center w-[120px] h-auto py-4">
                                    <div className="text-[15px] sm:text-[18px] lg:text-[20px] font-sora leading-[20px] sm:leading-[23px] lg:leading-[26px] text-center text-[#0b0b35]">
                                        <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#3433fe]">50+</span><br />
                                        <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px]">Countries</span>
                                    </div>
                                </div>
                            </div>
                            {/* Images Column */}
                            <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start w-[82%] ml-[10px] sm:ml-[15px] lg:ml-[20px]">
                                <Image
                                    src="/images/img_pxl_20230818_110706499_308x348.png"
                                    alt="Team collaboration"
                                    width={348}
                                    height={308}
                                    className="w-[80%] h-auto"
                                />
                                <Image
                                    src="/images/img_image_2.png"
                                    alt="Team meeting"
                                    width={438}
                                    height={210}
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Experience Badge */}
                            <div className="bg-[linear-gradient(90deg,#3433fe19_0%,_#00c85319_100%)] rounded-none px-[8px] sm:px-[12px] lg:px-[16px] py-[14px] sm:py-[21px] lg:py-[28px] w-[20%] mt-[76px] sm:mt-[114px] lg:mt-[152px] -ml-[34px] sm:ml-[-51px] lg:ml-[-68px]">
                                <div className="text-[15px] sm:text-[18px] lg:text-[20px] font-sora leading-[23px] sm:leading-[27px] lg:leading-[30px] text-left text-[#0b0b35] w-full">
                                    <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[23px] sm:leading-[27px] lg:leading-[30px] text-[#3433fe]">12+</span>
                                    <span className="text-[35px] sm:text-[41px] lg:text-[46px] font-inter leading-[23px] sm:leading-[27px] lg:leading-[30px] text-[#3433fe]"> </span><br />
                                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[30px] sm:leading-[35px] lg:leading-[40px]">Years </span>
                                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-semibold leading-[18px] sm:leading-[21px] lg:leading-[24px]">Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default memo(Hero);