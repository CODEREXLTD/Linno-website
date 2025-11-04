'use client';
import React, { useState, useEffect } from 'react';
import Application from './Application';
import Separator from '@/components/common/Separator';

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
        <>
            <Separator />

            <section className="linno-job-position section-wrapper" id="linno-open-positions">
                <div className="linno-new-container">
                    <div className="linno-section-title">
                        <h2>Open <span className="title-gradient">Positions</span></h2>
                        <p>
                            We are growing and always excited to meet new talent. <br />
                            Explore our current openings below or send us your portfolio if you think you would be a great fit.
                        </p>
                    </div>

                    <div className="">
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
                            <div className="linno-job-wrapper">
                                {jobPositions.map((job, index) => (
                                    <Application key={job.id || index} job={job} index={index} jobPositions={jobPositions} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OpenPositions;