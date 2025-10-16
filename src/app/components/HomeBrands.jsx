'use client';
import Separator from '@/components/common/Separator';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const HomeBrands = () => {
    return (
        <>
            <section className="linno-brands">
                <div className="linno-new-container">
                    <div className="">
                        <div className="linno-section-title">
                            <h2>
                                You Probably <span className="title-gradient">Know Us</span> Already....
                            </h2>

                            <p>
                                While we are Linno at heart, globally we operate through two leading brands, each focused on solving real problems for real people.
                            </p>
                        </div>

                        <div className="brand-item-wrapper">
                            <div className="single-brand-item">
                                <Image
                                    src="/images/img_vector_deep_purple_500.svg"
                                    alt="WPFunnels Logo"
                                    width={174}
                                    height={26}
                                    className='brand-item-logo'
                                />

                                <h3 className='brand-item-title'>
                                    Makers of WPFunnels, Mail Mint, and Creator LMS.
                                </h3>
                                
                                <p className="brand-item-description">
                                    The team is dedicated to empowering digital creators and businesses with sales funnels, marketing automation, and easy eLearning solutions—all built to simplify workflows and maximize growth.
                                </p>

                                <Link href={'https://getwpfunnels.com/'} target='_blank' className="brand-item-link">
                                    Visit Website
                                    <svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#3433FE" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
                                </Link>
                            </div>

                            <div className="single-brand-item">
                                <Image
                                    src="/images/img_vector_indigo_a700_01.svg"
                                    alt="RexTheme Logo"
                                    width={162}
                                    height={34}
                                    className='brand-item-logo'
                                />

                                <h3 className='brand-item-title'>
                                    The team behind Product Feed Manager and WPVR.
                                </h3>

                                <p className="brand-item-description">
                                    A team focused on delivering premium WordPress plugins that help businesses grow online with solutions for product feed generation, abandoned cart recovery, and immersive virtual tours—built to boost eCommerce performance and user engagement.
                                </p>

                                <Link href={'https://rextheme.com/'} target='_blank' className="brand-item-link">
                                    Visit Website
                                    <svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#3433FE" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Separator/>
        </>
    );
};

export default memo(HomeBrands);