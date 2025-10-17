'use client';
import { memo } from 'react';
import Separator from '@/components/common/Separator';


const Quote = () => {

    return (
        <>
            <section className="linno-quote">
                <div className="linno-new-container">
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