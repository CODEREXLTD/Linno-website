'use client';
import { memo } from 'react';
import Image from 'next/image';


const AboutValues = () => {

    const values = [
        {
            title: 'Passion',
            description:
                'We put heart and creativity into every line of code, driven by a genuine love for building impactful solutions.',
            image: '/images/img_pxl_20230818_110706499.png',
            icon: '/images/img_solar_fire_bold_duotone.svg',
        },
        {
            title: 'Trust',
            description:
                'We believe in honesty, reliability, and transparency—earning confidence through every project we deliver.',
            image: '/images/about2.jpg',
            icon: '/images/img_solar_fire_bold_duotone.svg',
        },
        {
            title: 'Leadership',
            description:
                'We strive to lead with vision and innovation, guiding teams and clients toward meaningful digital growth.',
            image: '/images/about1.jpg',
            icon: '/images/img_solar_fire_bold_duotone.svg',
        },
        {
            title: 'We are a family',
            description:
                'We grow together, celebrate success together, and support one another like a close-knit family.',
            image: '/images/family-v2.jpg',
            icon: '/images/img_solar_fire_bold_duotone.svg',
        },
    ];

    return (
        <>
            <section className="section-wrapper bg-[#F2F5FB]">
                <div className="linno-container">
                    <div className="space-y-2 mb-8 sm:mb-12">
                        <h2 className="section-title">
                            Our <span className="title-gradient">Values</span>
                        </h2>
                        <p className="section-description !max-w-[600px]">
                            We combine expert resources with the latest technologies to deliver high-quality software solutions for your business.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {values?.map((value, index) => (
                            <div
                                key={index}
                                className="bg-[#ffffff] rounded-[16px] shadow-[0px_15px_21px_#6d688921] p-4 sm:p-6 lg:p-10"
                            >
                                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-11">
                                    <div className="w-full h-[200px] sm:h-[280px] lg:h-[388px] rounded-[14px] overflow-hidden">
                                        <Image
                                            src={value?.image}
                                            alt={value?.title}
                                            width={610}
                                            height={388}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                                        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                                            <Image
                                                src={value?.icon}
                                                alt="Value icon"
                                                width={28}
                                                height={28}
                                                className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px]"
                                                loading="lazy"
                                            />
                                            <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-sora font-bold leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#0f0e55]">
                                                {value?.title}
                                            </h3>
                                        </div>
                                        <p className="text-[16px] sm:text-[19px] lg:text-[23px] font-inter font-normal leading-[24px] sm:leading-[29px] lg:leading-[35px] text-[#787878]">
                                            {value?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(AboutValues);