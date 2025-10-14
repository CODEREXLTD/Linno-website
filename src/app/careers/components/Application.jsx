import Button from '@/components/ui/Button';
import Image from 'next/image';
import { memo, useState } from 'react';

const Application = ({job, index, jobPositions}) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <>
            <div key={index} className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] items-center w-full group">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-8 w-full p-4 sm:p-6 lg:p-0 bg-white lg:bg-transparent rounded-lg lg:rounded-none shadow-sm lg:shadow-none hover:shadow-md lg:hover:shadow-none transition-shadow duration-200">
                    <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
                        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-3 sm:gap-6 lg:gap-8">
                            <span className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-inter font-medium leading-[18px] sm:leading-[20px] lg:leading-[22px] xl:leading-[25px] text-[#3433fe] px-3 py-1 bg-blue-50 rounded-full text-center lg:px-0 lg:py-0 lg:bg-transparent lg:rounded-none">
                                {job?.category}
                            </span>
                            <div className="flex flex-col md:flex-row gap-4 justify-start items-start w-full lg:w-auto flex-1">
                                <div className="flex flex-col justify-start items-start w-full lg:w-auto flex-1">
                                    <h3 className={`text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[30px] font-inter font-semibold leading-[22px] sm:leading-[26px] lg:leading-[30px] xl:leading-[37px] transition-colors duration-200 ${job.buttonStyle === 'primary' ? 'text-[#3433fe]' : 'text-[#0b0b35] group-hover:text-[#3433fe]'
                                        }`}>
                                        {job?.title}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 lg:gap-6 justify-start items-start sm:items-center w-full mt-2">
                                        <div className="flex items-center gap-[5px] sm:gap-[8px] lg:gap-[10px]">
                                            <Image
                                                src="/images/img_location.svg"
                                                alt="Location"
                                                width={12}
                                                height={14}
                                                className="w-[12px] h-[14px] flex-shrink-0"
                                            />
                                            <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[15px] sm:leading-[18px] lg:leading-[20px] text-[#51515f]">
                                                {job?.location}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-[5px] sm:gap-[8px] lg:gap-[10px]">
                                            <Image
                                                src="/images/img_clock.svg"
                                                alt="Time"
                                                width={14}
                                                height={14}
                                                className="w-[14px] h-[14px] flex-shrink-0"
                                            />
                                            <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[15px] sm:leading-[18px] lg:leading-[20px] text-[#51515f]">
                                                {job?.type}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-[5px] sm:gap-[8px] lg:gap-[10px]">
                                            <Image
                                                src="/images/img_chart.svg"
                                                alt="Level"
                                                width={12}
                                                height={14}
                                                className="w-[12px] h-[14px] flex-shrink-0"
                                            />
                                            <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[15px] sm:leading-[18px] lg:leading-[20px] text-[#51515f]">
                                                {job?.level}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onMouseEnter={() => {
                                        setIsHover(true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsHover(false);
                                    }}
                                    variant={job?.buttonStyle}
                                    size="md"
                                    link={true}
                                    href={job?.buttonLink}
                                    label="Apply Now"
                                    blank={true}
                                    iconPosition="right"
                                    className="hover:bg-[#2622c4] hover:text-white hover:font-semibold active:bg-[#2622c4] transition-all duration-200 hover:border-transparent"
                                    icon={
                                        <div className="relative w-[14px] h-[10px] sm:w-[16px] sm:h-[12px]">
                                            {
                                                isHover ? <Image
                                                    src="/images/img_arrowright_white_a700.svg"
                                                    alt="Arrow"
                                                    width={16}
                                                    height={12}
                                                /> : <Image
                                                    src="/images/img_arrowright.svg"
                                                    alt="Arrow"
                                                    width={16}
                                                    height={12}
                                                />}

                                        </div>
                                    }
                                >
                                    Apply Now
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
                {index < jobPositions?.length - 1 && (
                    <div className="w-full h-[1px] bg-[#e9e9ff] hidden lg:block" />
                )}
            </div>
        </>
    );
};

export default memo(Application);