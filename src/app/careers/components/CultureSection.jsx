'use client';
import React from 'react';
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
                            <figure key={index} className="single-gallery-image ">
                                <Image
                                    src={item?.url}
                                    alt={`${item?.alt}`}
                                    width={450}
                                    height={570}
                                />
                            </figure>
                        ))}
                    </div>
                    <span className="gallery-shape bottom-shape"></span>
                </div>
            </section>
        </>
    );
};

export default CultureSection;