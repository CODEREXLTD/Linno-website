import { memo } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Badge from '@/components/common/Badge';
import Separator from '@/components/common/Separator';

const ArrowRight = () => (
    <svg width="29" height="14" fill="none" viewBox="0 0 29 14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M27.926 7.67c.37-.37.37-.97 0-1.34L21.892.296a.948.948 0 10-1.341 1.34L25.914 7l-5.363 5.364a.948.948 0 101.34 1.34l6.035-6.034zM.745 7v.948h26.51V6.052H.745V7z"/></svg>
);

const Hero = () => {
    const scrollToOpenPositions = () => {
        const element = document.getElementById('linno-open-positions');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <section className="linno-career-hero">
                <div className="linno-new-container">
                    <div className="content-wrapper">
                        <div className="linno-section-title">
                            <h1>
                                Linno Careers
                            </h1>
                        </div>

                        <div className='linno-about-description'>
                            <p>
                                We are a team of makers, designers, and developers who love building tools that make WordPress better. At our company, you will get the freedom to experiment, the space to grow, and the support of a team that truly cares about creating meaningful products.
                            </p>

                            <div className="linno-section-cta">
                                <Button 
                                    onClick={scrollToOpenPositions}
                                    className="linno-cta-btn"
                                >
                                    Check Open Position
                                    <ArrowRight />
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Separator />
        </>
        
    );
};

export default memo(Hero);