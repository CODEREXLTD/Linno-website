'use client';
import Button from '@/components/ui/Button';
import { memo } from 'react';

const ArrowRight = () => (
    <svg width="29" height="14" fill="none" viewBox="0 0 29 14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M27.926 7.67c.37-.37.37-.97 0-1.34L21.892.296a.948.948 0 10-1.341 1.34L25.914 7l-5.363 5.364a.948.948 0 101.34 1.34l6.035-6.034zM.745 7v.948h26.51V6.052H.745V7z"/></svg>
);

const AboutHero = () => {
    return (
        <>
            <section className="linno-about-hero">
                <div className="linno-new-container">
                    <div className="content-wrapper">
                        <div className="linno-section-title">
                            <h1>
                                About Us
                            </h1>
                        </div>

                        <div className='linno-about-description'>
                            <p>
                                We combine expert resources with the latest technologies to deliver high-quality software solutions for your business.
                            </p>

                            <div className="linno-section-cta">
                                <Button
                                    variant="primary"
                                    link={true}
                                    href="/products"
                                    label="Our Products"
                                    icon={<ArrowRight />}
                                    iconPosition="right"
                                    className="linno-cta-btn cta-link"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(AboutHero);