 'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Separator from '@/components/common/Separator';

const CultureSection = () => {

    const cultureGallery = [
        {
            url: '/images/linno-culture1.webp',
            alt: 'linno culture image 1',
        },
        {
            url: '/images/linno-culture2.webp',
            alt: 'linno culture image 2',
        },
        {
            url: '/images/linno-culture3.webp',
            alt: 'linno culture image 3',
        },
        {
            url: '/images/linno-culture4.webp',
            alt: 'linno culture image 4',
        },
        {
            url: '/images/linno-culture5.webp',
            alt: 'linno culture image 5',
        },
    ];

    const [showClone, setShowClone] = useState(false);

    useEffect(() => {
        // enable cloned items after client mount to avoid SSR/hydration mismatch
        setShowClone(true);
    }, []);

    return (
        <>
            <section className="linno-culture">
                <Separator/>

                <div className="linno-new-container">
                    <div className="linno-section-title">
                        <h2>Do Great Work In A <span className="title-gradient">Strong culture</span></h2>
                        <p>
                            We believe that innovation thrives where people feel trusted and inspired. Our team members share ideas openly, support one another, and stay curious about what is next.
                            <br /> 
                            <br /> 
                            We value clear communication, continuous learning, and doing work that we are proud of.
                        </p>
                    </div>
                </div>

                <div className="linno-culture-gallery-wrapper">
                    <span className="gallery-shape top-shape"></span>
                    <div className="linno-culture-gallery">
                        {cultureGallery?.map((item, index) => (
                            <figure key={`orig-${index}`} className="single-gallery-image ">
                                <Image
                                    src={item?.url}
                                    alt={`${item?.alt}`}
                                    width={450}
                                    height={570}
                                />
                            </figure>
                        ))}

                        {showClone && (
                            // duplicate the items to create a seamless loop if needed
                            cultureGallery?.map((item, index) => (
                                <figure key={`dup-${index}`} className="single-gallery-image clone">
                                    <Image
                                        src={item?.url}
                                        alt={`${item?.alt}`}
                                        width={450}
                                        height={570}
                                    />
                                </figure>
                            ))
                        )}
                    </div>
                    <span className="gallery-shape bottom-shape"></span>
                </div>
            </section>
        </>
    );
};

export default CultureSection;