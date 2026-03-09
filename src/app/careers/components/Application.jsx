import Button from '@/components/ui/Button';
import Image from 'next/image';
import { memo, useState } from 'react';
  
const ArrowRight = () => (
    <svg width="28" height="14" fill="none" viewBox="0 0 28 14" xmlns="http://www.w3.org/2000/svg"><path fill="#3433FE" d="M27.18 7.652a.946.946 0 000-1.34L21.148.277a.948.948 0 00-1.34 1.34l5.363 5.364-5.364 5.363a.948.948 0 101.341 1.341l6.034-6.034zM0 6.982v.948h26.51V6.034H0v.948z"/></svg>
);

const Application = ({job, index, jobPositions}) => {

    return (
        <>
            <div key={index} className="linno-single-job">
                <span className="job-category">
                    {job?.category}
                </span>

                <div className="job-details">
                    <div className="job-content">
                        <h3 className="job-title">
                            {job?.title}
                        </h3>

                        <ul className="job-meta">
                            <li>
                                <svg width="15" height="17" fill="none" viewBox="0 0 15 17" xmlns="http://www.w3.org/2000/svg"><path stroke="#51515F" strokeWidth="1.5" d="M7.22 9.325a2.34 2.34 0 100-4.681 2.34 2.34 0 000 4.68z"/><path stroke="#51515F" strokeWidth="1.5" d="M.933 5.619c1.478-6.497 11.103-6.49 12.573.007.863 3.811-1.508 7.037-3.586 9.032a3.896 3.896 0 01-5.409 0C2.441 12.663.071 9.43.933 5.619z"/></svg>
                                {job?.location}
                            </li>
                            <li>
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path stroke="#51515F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 7.75c0 3.864-3.136 7-7 7s-7-3.136-7-7 3.136-7 7-7 7 3.136 7 7z"/><path stroke="#51515F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.347 9.976L8.177 8.68c-.378-.224-.686-.763-.686-1.204v-2.87"/></svg>
                                {job?.type}
                            </li>
                            {
                                job?.level && (
                                    <li>
                                        <svg width="14" height="15" fill="none" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><path stroke="#51515F" strokeLinecap="round" strokeLinejoin="round" d="M10.3 1.9v12.6h3.15V1.9c0-.77-.315-1.4-1.26-1.4h-.63c-.945 0-1.26.63-1.26 1.4z"/><path fill="#51515F" stroke="#51515F" strokeLinecap="round" strokeLinejoin="round" d="M5.4 6.1v8.4h2.8V6.1c0-.77-.28-1.4-1.12-1.4h-.56c-.84 0-1.12.63-1.12 1.4zM.5 9.6v4.9h2.8V9.6c0-.77-.28-1.4-1.12-1.4h-.56C.78 8.2.5 8.83.5 9.6z"/></svg>
                                        {job?.level}
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <Button
                        variant={job?.buttonStyle}
                        size="md"
                        link={true}
                        href={job?.buttonLink}
                        label="Apply Now"
                        blank={true}
                        iconPosition="right"
                        className="job-apply-btn"
                        icon={<ArrowRight />}
                    >
                        Apply Now
                    </Button>

                </div>
            </div>
        </>
    );
};

export default memo(Application);