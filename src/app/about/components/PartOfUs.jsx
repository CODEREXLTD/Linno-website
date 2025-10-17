'use client';
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Separator from '@/components/common/Separator';


const PartOfUs = () => {

    return (
        <>
            <section className="linno-partof-us">
                <div className="linno-new-container">
                    <div className="linno-section-title">
                        <h2><span className="title-gradient">Guess What...</span> You Are Part Of Us More Than You Think</h2>
                        <p>
                            <strong>You could ask: Why should I care?</strong> We’ve probably never met and don't know if we ever will. But one thing is for sure. We’re likely working toward the same future.
                        </p>
                    </div>

                    <div className="partof-us-wrapper">
                        <div className="single-partof-us">
                            <h3>Innovation serves people</h3>

                            <div className="partof-us-iamge">
                                <Image
                                    src="/images/innovation-serves-people.webp"
                                    alt="innovation serves people"
                                    width={332}
                                    height={254}
                                />
                            </div>
                        </div>

                        <div className="single-partof-us">
                            <h3>Work has meaning & purpose</h3>

                            <div className="partof-us-iamge">
                                <Image
                                    src="/images/work-has-meaning-purpose.webp"
                                    alt="work has meaning purpose"
                                    width={332}
                                    height={254}
                                />
                            </div>
                        </div>

                        <div className="single-partof-us">
                            <h3>Progress is earned together</h3>

                            <div className="partof-us-iamge">
                                <Image
                                    src="/images/progress-is-earned-together.webp"
                                    alt="progress is earned together"
                                    width={332}
                                    height={254}
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>

                <Separator />
            </section>
        </>
    );
};

export default memo(PartOfUs);