'use client';
import React from 'react';
import Image from 'next/image';

const WhyWorkAtLinno = () => {
    return (
        <section className="why-linno">
            <div className="linno-new-container">
                <div className="linno-section-title">
                    <h2>Why Work At <span className="title-gradient">Linno</span></h2>
                    <p>
                        Working here means being part of a team that values creativity, collaboration, and continuous learning. We focus on building products that solve real problems, and we believe that happy teams build the best tools.
                    </p>
                </div>

                <div className="content-wrapper">
                    <div className="content-left">
                        <div className="single-content">
                            <Image
                                src="/images/grow-your-career.svg"
                                alt="grow your career"
                                width={50}
                                height={52}
                            />

                            <h3>Grow Your Career</h3>
                            <p>Advance with learning, mentorship, and new opportunities.</p>
                        </div>

                        <div className="single-content">
                            <Image
                                src="/images/work-with-purpose.svg"
                                alt="work with purpose"
                                width={50}
                                height={52}
                            />

                            <h3>Work With Purpose</h3>
                            <p>Create software that impacts lives worldwide.</p>
                        </div>

                        <div className="single-content">
                            <Image
                                src="/images/collaborative-culture.svg"
                                alt="collaborative culture"
                                width={50}
                                height={52}
                            />

                            <h3>Collaborative Culture</h3>
                            <p>Thrive in teamwork, creativity, and shared success.</p>
                        </div>

                        <div className="single-content">
                            <Image
                                src="/images/your-voice-matters.svg"
                                alt="your voice matters"
                                width={50}
                                height={52}
                            />

                            <h3>Your Voice Matters</h3>
                            <p>Share ideas freely, influence projects, drive change.</p>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="image-wrapper">
                            <div className="image-left">
                                <Image
                                    src="/images/why-work-at-linno-image-sm.webp"
                                    alt="Why Work at Linno"
                                    width={132}
                                    height={147}
                                />
                                <Image
                                    src="/images/why-work-at-linno-image-md.webp"
                                    alt="Why Work at Linno"
                                    width={259}
                                    height={325}
                                />

                            </div>

                            <div className="image-right">
                                <Image
                                    src="/images/why-work-at-linno-image-lg.webp"
                                    alt="Why Work at Linno"
                                    width={367}
                                    height={598}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkAtLinno;