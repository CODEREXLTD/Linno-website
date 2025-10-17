'use client';
import { memo } from 'react';
import Image from 'next/image';
import Separator from '@/components/common/Separator';


const LinnoExistance = () => {

    return (
        <>
            <section className="linno-existance">
                <div className="linno-new-container">
                    <div className="linno-section-title">
                        <h2>Why <span className="title-gradient">Linno Exists</span></h2>
                        <p>
                            When we started, we offered web development services for agencies and worked for several global enterprises like <span className="light-text">GE</span> and <span className="light-text">Hitachi.</span>
                            <br />
                            <br />
                            But somewhere along the way, <span className="light-text">our founder, Lincoln Islam,</span> came across a hard question:
                        </p>
                    </div>

                    <div className="content-wrapper">
                        <div className="content-left">
                            <Image
                                src="/images/lincoln-islam-with-circle-bg.webp"
                                alt="lincoln islam"
                                width={470}
                                height={463}
                                priority
                            />
                        </div>

                        <div className="content-right">
                            <ul className="questions">
                                <li>Why do we exist? Just to make money? One off contracts?</li>
                                <li>What impact do we have on the world?</li>
                            </ul>
                            <p className='question-ans'>That's when he realized, it was time for a change.... <span className="title-gradient">Time to be purposeful.</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <Separator />
        </>
    );
};

export default memo(LinnoExistance);