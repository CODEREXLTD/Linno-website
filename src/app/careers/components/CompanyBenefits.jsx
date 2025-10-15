'use client';
import React from 'react';
import Image from 'next/image';

const CompanyBenefits = () => {
    const benefits = [
        {
            icon: '/images/img_icon_white_a700.svg',
            title: 'Fastival\nBonuses',
            spanText: [
                { text: 'Fastival ', weight: 'font-bold' },
                { text: 'Bonuses', weight: 'font-normal' }
            ]
        },
        {
            icon: '/images/img_icon_white_a700_62x62.svg',
            title: 'Performance\nBonus',
            spanText: [
                { text: 'Performance ', weight: 'font-bold' },
                { text: 'Bonus', weight: 'font-normal' }
            ]
        },
        {
            icon: '/images/img_icon_62x62.svg',
            title: 'Yearly \ncompany tour',
            spanText: [
                { text: 'Yearly ', weight: 'font-bold' },
                { text: 'company tour', weight: 'font-normal' }
            ]
        },
        {
            icon: '/images/img_icon_1.svg',
            title: 'Yearly \nsalary review',
            spanText: [
                { text: 'Yearly ', weight: 'font-bold' },
                { text: 'salary review', weight: 'font-normal' }
            ]
        },
        {
            icon: '/images/img_icon_2.svg',
            title: 'Lunch and\nUnlimited Coffee',
            spanText: [
                { text: 'Lunch ', weight: 'font-bold' },
                { text: 'and\nUnlimited Coffee', weight: 'font-normal' }
            ]
        },
        {
            icon: '/images/img_icon_3.svg',
            title: 'Marriage \nBonus and Leave',
            spanText: [
                { text: 'Marriage \n', weight: 'font-bold' },
                { text: 'Bonus and Leave', weight: 'font-normal' }
            ]
        },
        {
            icon: '/images/img_icon_4.svg',
            title: 'Competitive\nSalary'
        },
        {
            icon: '/images/img_icon_5.svg',
            title: 'Paid training to improve skills',
            spanText: [
                { text: 'Paid training', weight: 'font-bold' },
                { text: ' to improve skills', weight: 'font-normal' }
            ]
        },
        {
            icon: '/images/img_icon_6.svg',
            title: 'Parental Bonus and Leave',
            spanText: [
                { text: 'Parental ', weight: 'font-bold' },
                { text: 'Bonus and Leave', weight: 'font-normal' }
            ]
        }
    ];

    return (
        <section className="w-full bg-[#090936] py-[50px] md:py-[120px]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Background Image Section */}
                <div className="mx-auto relative">
                    <div className="relative z-10 flex justify-center items-start w-[48%] mx-auto mb-[36px] sm:mb-[54px] lg:mb-[72px]">
                        <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] items-center">
                            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-white">
                                Company <span className="font-bold">Benefits</span>
                            </h2>
                            <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-center text-white w-full">
                                At Linno, we offer a comprehensive benefits package to support our employees' well-being and work-life balance.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Benefits Grid */}
                <div className="w-full relative z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px] w-full">
                        {benefits?.map((benefit, index) => (
                            <div key={index} className="flex flex-col sm:flex-row lg:flex-row justify-start items-center sm:items-start lg:items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] w-full group hover:scale-105 transition-transform duration-200 backdrop-blur-md bg-white/5 border border-white/10 px-[30px] py-[26px] relative rounded-[12px]  shadow-lg">
                                <div className="bg-[#3433fe] rounded-[30px] p-[12px] sm:p-[14px] lg:p-[16px] w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] lg:w-[62px] lg:h-[62px] flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-200">
                                    <Image
                                        src={benefit?.icon}
                                        alt={`${benefit?.title} icon`}
                                        width={30}
                                        height={30}
                                        className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[30px] lg:h-[30px]"
                                    />
                                </div>
                                <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-sora leading-[18px] sm:leading-[20px] lg:leading-[24px] xl:leading-[28px] text-center sm:text-left lg:text-left text-white flex-1">
                                    {benefit?.spanText ? (
                                        <>
                                            {benefit?.spanText?.map((span, spanIndex) => (
                                                <span key={spanIndex} className={span?.weight}>
                                                    {span?.text}
                                                    {
                                                        spanIndex === 0 ? <br /> : null
                                                    }
                                                </span>
                                            ))}
                                        </>
                                    ) : (
                                        <span className="font-bold">{benefit?.title}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyBenefits;