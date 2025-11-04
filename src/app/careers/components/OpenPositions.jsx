'use client';
import React, { useState, useEffect } from 'react';
import Application from './Application';

const OpenPositions = () => {
    const [jobPositions, setJobPositions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch published jobs from API
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/jobs?published=true');
                const data = await response.json();
                if (data.success) {
                    setJobPositions(data.data);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

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
                    {isLoading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3433FE]"></div>
                        </div>
                    ) : jobPositions.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-[18px] text-[#5E658B]">No open positions at the moment. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[60px] xl:gap-[86px] items-center w-full lg:w-[80%] mb-[4px] sm:mb-[6px] lg:mb-[8px]">
                            {jobPositions.map((job, index) => (
                                <Application key={job.id || index} job={job} index={index} jobPositions={jobPositions} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;