'use client';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import Image from 'next/image';
import Separator from '@/components/common/Separator';

const LifeAtLinno = () => {
    const router = useRouter();
    
    const handleCheckOpenPositions = () => {
        router.push('/careers#linno-open-positions');
    };
    return (
        <>
            <section className="linno-life">
                <div className="linno-new-container">
                    <div className="linno-section-title">
                        <h2>
                            <span className="title-gradient">Linno </span>
                            Is All About It's People
                        </h2>

                        <p>
                            While technology is our passion, people are our strength. At Linno, we are proud to have an amazing team that loves to innovate, grow in skills, and dive into unique ideas of true value for businesses.
                            <br /><br />
                            And from the heart, we all work as a team that makes each other better!
                        </p>
                    </div>

                    <div className="linno-life-gallery">
                        <div className="linno-life-gallery-item gallery-item-1">
                            <figure>
                                <Image
                                    src="/images/life-at-linno-image1.webp"
                                    alt="Life at Linno"
                                    width={182}
                                    height={253}
                                    loading="lazy"
                                />
                            </figure>
                        </div>

                        <div className="linno-life-gallery-item gallery-item-2">
                            <figure>
                                <Image
                                    src="/images/life-at-linno-image2.webp"
                                    alt="Life at Linno"
                                    width={260}
                                    height={276}
                                    loading="lazy"
                                />
                            </figure>

                                <figure>
                                <Image
                                    src="/images/life-at-linno-image3.webp"
                                    alt="Life at Linno"
                                    width={260}
                                    height={255}
                                    loading="lazy"
                                />
                            </figure>
                        </div>

                        <div className="linno-life-gallery-item gallery-item-3">
                            <figure>
                                <Image
                                    src="/images/life-at-linno-image4.webp"
                                    alt="Life at Linno"
                                    width={294}
                                    height={590}
                                    loading="lazy"
                                />
                            </figure>
                        </div>

                        <div className="linno-life-gallery-item gallery-item-4">
                            <figure>
                                <Image
                                    src="/images/life-at-linno-image5.webp"
                                    alt="Life at Linno"
                                    width={260}
                                    height={276}
                                    loading="lazy"
                                />
                            </figure>

                            <figure>
                                <Image
                                    src="/images/life-at-linno-image6.webp"
                                    alt="Life at Linno"
                                    width={260}
                                    height={255}
                                    loading="lazy"
                                />
                            </figure>
                        </div>

                        <div className="linno-life-gallery-item gallery-item-5">
                            <figure>
                                <Image
                                    src="/images/life-at-linno-image7.webp"
                                    alt="Life at Linno"
                                    width={182}
                                    height={253}
                                    loading="lazy"
                                />
                            </figure>
                        </div>
                    </div>

                    <div className="linno-section-cta">
                        <Button
                            variant="primary"
                            onClick={handleCheckOpenPositions}
                            className="linno-cta-btn"
                        >
                            About Us
                            <svg width="29" height="14" fill="none" viewBox="0 0 29 14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M27.926 7.67c.37-.37.37-.97 0-1.34L21.892.296a.948.948 0 10-1.341 1.34L25.914 7l-5.363 5.364a.948.948 0 101.34 1.34l6.035-6.034zM.745 7v.948h26.51V6.052H.745V7z"/></svg>
                        </Button>
                    </div>
                </div>
            </section>

            <Separator />
        </>
    );
};

export default memo(LifeAtLinno);