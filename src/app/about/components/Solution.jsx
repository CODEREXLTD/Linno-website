'use client';
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Separator from '@/components/common/Separator';


const Solution = () => {

    return (
        <>
            <section className="linno-solution">
                <div className="linno-new-container">
                    <div className="linno-section-title">
                        <h2>What We Build <span className="title-gradient">(And Why It Matters)</span></h2>
                        <p>
                            Initially we started small, creating a single plugin for WooCommerce businesses, that solved a genuine road block for them.
                            <br /><br />
                            But then, we dived deeper and started looking for ways to solve broader business problems that, yet, didn't have a good solution available.
                        </p>

                        <p className="note">
                            Over the years, we managed to launch <span className='title-gradient'>several innovative solutions</span> of real value!
                        </p>
                    </div>

                    <div className="solution-wrapper">
                        <div className="single-solution">
                            <Image
                                src="/images/virtual-reality-within-wordpress.webp"
                                alt="virtual reality within wordpress"
                                width={273}
                                height={81}
                            />

                            <h3>Virtual Reality within WordPress</h3>
                            <p>Our team came up with WPVR, a VR solution in WordPress, allowing realtors and hotel owners to offer an immersive experience to buyers and prospects!</p>

                            <Link href={'https://getwpfunnels.com/'} target='_blank' className="solution-link">
                                View Solutions
                                <svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#3433FE" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
                            </Link>
                        </div>

                        <div className="single-solution">
                            <Image
                                src="/images/woocommerce-solution.webp"
                                alt="woocommerce solution"
                                width={370}
                                height={81}
                            />

                            <h3>WooCommerce Solutions</h3>
                            <p>Product feed manager, abandoned cart recovery, dynamic discounts, custom checkout, and many more necessary plugins to grow as a business!</p>

                            <Link href={'https://getwpfunnels.com/'} target='_blank' className="solution-link">
                                View Solutions
                                <svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#3433FE" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
                            </Link>
                        </div>

                        <div className="single-solution">
                            <Image
                                src="/images/easier-for-creators.webp"
                                alt="easier for creators"
                                width={273}
                                height={81}
                            />

                            <h3>Making It Easier For Digital Creators</h3>
                            <p>We introduced a visual funnel builder, easy email marketing automation, and an all-in-one LMS plugin in WordPress to make things affordable and easy to grow with authority.</p>

                            <Link href={'https://getwpfunnels.com/'} target='_blank' className="solution-link">
                                View Solutions
                                <svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#3433FE" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <Separator />
        </>
    );
};

export default memo(Solution);