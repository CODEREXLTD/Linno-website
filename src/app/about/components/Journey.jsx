'use client';
import { memo } from 'react';
import Image from 'next/image';
import Separator from '@/components/common/Separator';


const Journey = () => {

    return (
        <>
            <section className="linno-journey">
                <div className="linno-new-container">
                    <div className="content-wrapper">
                        <div className="content-left">
                            <div className="linno-section-title">
                                <h2>And so began our <br />journey to make <br /><span className="title-gradient">A Difference Worldwide!</span></h2>
                                <p>
                                    We were no longer just a small company. It was time to transition into something bigger, an entity that actually makes a difference in the lives of others worldwide.
                                    <br />
                                    <br />
                                    So, we started building tools that would solve real world problems for business around the world!
                                </p>
                            </div>
                        </div>

                        <div className="content-right">
                            <div className="journey-image-wrapper">
                                <div className="journey-single-image">
                                    <Image
                                        src="/images/linno-journey-image1.webp"
                                        alt="linno journey image"
                                        width={260}
                                        height={260}
                                    />
                                </div>

                                <div className="journey-single-image">
                                    <Image
                                        src="/images/linno-journey-image2.webp"
                                        alt="linno journey image"
                                        width={260}
                                        height={260}
                                    />
                                </div>

                                <div className="journey-single-image">
                                    <Image
                                        src="/images/linno-journey-image3.webp"
                                        alt="linno journey image"
                                        width={260}
                                        height={260}
                                    />
                                </div>
                                
                                <div className="journey-single-image">
                                    <Image
                                        src="/images/linno-journey-image4.webp"
                                        alt="linno journey image"
                                        width={260}
                                        height={260}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Separator />
        </>
    );
};

export default memo(Journey);