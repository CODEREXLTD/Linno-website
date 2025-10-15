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
        <section className="section-wrapper" id="linno-open-positions">
            <div className="linno-container">
                <div className="flex flex-col gap-[26px] sm:gap-[39px] lg:gap-[52px] justify-center items-center w-full">
                    {/* Header */}
                    <div className="flex flex-col gap-[3px] sm:gap-[5px] lg:gap-[6px] items-center px-[4px] sm:px-[6px] lg:px-[8px] w-auto">
                        <h2 className="section-title">
                            Open <span className="title-gradient">Positions</span>
                        </h2>
                        <p className="section-description">
                            We're Hiring! See something that interests you? Apply here.
                        </p>
                    </div>

                    {/* Job Listings */}
                    <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[60px] xl:gap-[86px] items-center w-full lg:w-[80%] mb-[4px] sm:mb-[6px] lg:mb-[8px]">
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