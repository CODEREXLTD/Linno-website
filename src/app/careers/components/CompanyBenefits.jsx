'use client';
import React from 'react';
import Image from 'next/image';

const CompanyBenefits = () => {
    const benefits = [
        {
            icon: '/images/img_icon_white_a700.svg',
            title: 'Fastival\nBonuses',
            spanText: [
                { text: 'Fastival ', weight: 'font-normal' },
                { text: 'Bonuses', weight: 'font-bold' }
            ]
        },
        {
            icon: '/images/img_icon_white_a700_62x62.svg',
            title: 'Performance\nBonus',
            spanText: [
                { text: 'Performance ', weight: 'font-normal' },
                { text: 'Bonus', weight: 'font-bold' }
            ]
        },
        {
            icon: '/images/img_icon_62x62.svg',
            title: 'Yearly \ncompany tour',
            spanText: [
                { text: 'Yearly ', weight: 'font-normal' },
                { text: 'company tour', weight: 'font-bold' }
            ]
        },
        {
            icon: '/images/img_icon_1.svg',
            title: 'Yearly \nsalary review',
            spanText: [
                { text: 'Yearly ', weight: 'font-normal' },
                { text: 'salary review', weight: 'font-bold' }
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
            title: 'Competitive\nSalary',
            spanText: [
                { text: 'Competitive', weight: 'font-normal' },
                { text: ' Salary', weight: 'font-bold' }
            ]
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
        <section className="linno-benefits">
            <div className="linno-new-container">
                <div className="linno-section-title">
                    <h2>Company <strong>Benefits</strong></h2>
                    <p>
                        At Linno, we offer a comprehensive benefits package to support our employees' well-being and work-life balance.
                    </p>
                </div>

                <div className="benefits-grid">
                    {benefits?.map((benefit, index) => (
                        <div key={index} className="single-benefit ">
                            <div className="benefit-icon">
                                <Image
                                    src={benefit?.icon}
                                    alt={`${benefit?.title} icon`}
                                    width={28}
                                    height={28}
                                    loading="lazy"
                                />
                            </div>

                            <h3 className="benefit-title">
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
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyBenefits;