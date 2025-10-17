'use client';
import { memo } from 'react';
import Separator from '@/components/common/Separator';


const Facts = () => {

    const facts = [
        {
            title: 'Team Members',
            number: '30+',
        },
        {
            title: 'Year Founded',
            number: '2012',
        },
        {
            title: 'Download Worldwide',
            number: '50k+',
        },
        {
            title: 'Software products',
            number: '13+',
        },
        
    ];

    return (
        <>
            <section className="linno-facts">
                <div className="linno-new-container">
                    <div className="facts-wrapper">
                        {facts?.map((value, index) => (
                            <div
                                key={index}
                                className="single-fact"
                            >
                                <spna className="fact-number">{value?.number}</spna>
                                <spna className="fact-title">{value?.title}</spna>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Separator />
        </>
    );
};

export default memo(Facts);