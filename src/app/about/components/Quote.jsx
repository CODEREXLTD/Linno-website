'use client';
import { memo } from 'react';
import Image from 'next/image';
import Separator from '@/components/common/Separator';


const Quote = () => {

    return (
        <>
            <section className="linno-quote">
                <div className="linno-new-container">
                    <Image
                        src="/images/blue-heart.webp"
                        alt="easier for creators"
                        width={28}
                        height={27}
                        className="quote-icon block m-auto mb-5"
                    />
                    <h2 className="quote-text">
                        We’re not asking you to be impressed.
                        <br />
                        We’re asking you to <span className="title-gradient">expect more, from us,</span> and from the tools you use.
                    </h2>
                </div>
            </section>

            <Separator />
        </>
    );
};

export default memo(Quote);