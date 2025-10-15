'use client';
import React from 'react';
import Application from './Application';

const OpenPositions = () => {
    const jobPositions = [
        {
            category: 'Marketing',
            title: 'Digital Product Marketing Executive',
            location: 'On-Site',
            type: 'Full Time',
            level: 'Mid-Level',
            buttonStyle: 'outline',
            buttonLink: 'https://inside.coderex.co/jobs/digital-product-marketing-executive--mid-level--gokgm'
        },
        {
            category: 'Engineering',
            title: 'AI Engineer ',
            location: 'On-Site',
            type: 'Full Time',
            level: 'Lead-Role',
            buttonStyle: 'outline',
            buttonLink: 'https://inside.coderex.co/jobs/ai-engineer--lead-role--nbgze'
        },
    ];

    return (
        <section className="w-full bg-white" id="linno-open-positions">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[58px] sm:py-[87px] lg:py-[116px]">
                <div className="flex flex-col gap-[26px] sm:gap-[39px] lg:gap-[52px] justify-center items-center w-full">
                    {/* Header */}
                    <div className="flex flex-col gap-[3px] sm:gap-[5px] lg:gap-[6px] items-center px-[4px] sm:px-[6px] lg:px-[8px] w-auto">
                        <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-snug text-center text-[#0b0b35]">
                            Open <span className="font-bold">Positions</span>
                        </h2>
                        <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[19px] sm:leading-[22px] lg:leading-[25px] text-center text-[#51515f]">
                            We're Hiring! See something that interests you? Apply here.
                        </p>
                    </div>

                    {/* Job Listings */}
                    <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[60px] xl:gap-[86px] items-center w-full lg:w-[80%] xl:w-[52%] mb-[4px] sm:mb-[6px] lg:mb-[8px]">
                        {jobPositions?.map((job, index) => (
                            <Application key={index} job={job} index={index} jobPositions={jobPositions} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;