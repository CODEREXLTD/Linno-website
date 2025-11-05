import { memo } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Badge from '@/components/common/Badge';
import Separator from '@/components/common/Separator';
import Gallery from './Gallery';

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
                <svg className='hero-top-shape' width="425" height="1089" fill="none" viewBox="0 0 425 1089" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_6116_231)"><path fill="url(#paint0_radial_6116_231)" fillOpacity=".2" d="M-692.734 706.701c170.876 302.109 546.745 412.769 839.526 247.17 292.781-165.6 260.998-433.527 90.122-735.635C66.038-83.873-37.798 104.154-330.579 269.755c-292.782 165.6-533.032 134.837-362.155 436.946z"/></g><defs><radialGradient id="paint0_radial_6116_231" cx="0" cy="0" r="1" gradientTransform="matrix(574.868 -358.963 -409.821 -660.186 -184.831 327.261)" gradientUnits="userSpaceOnUse"><stop stopColor="#3433FE"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient><filter id="filter0_f_6116_231" width="1232.18" height="1088.78" x="-807.757" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_6116_231" stdDeviation="29"/></filter></defs></svg>

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

                    <Gallery />
                </div>

                <svg className='hero-bottom-shape' width="486" height="1259" fill="none" viewBox="0 0 486 1259" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_6116_232)"><path fill="url(#paint0_radial_6116_232)" fill-opacity=".2" d="M912.417 892.209c122.713-357.905-4.87-725.901-284.975-821.943-280.104-96.042-132.35 61.329-255.068 419.234-122.717 357.904-509.5 465-62 589 280.105 96.04 479.325 171.61 602.043-186.291z"/></g><defs><radialGradient id="paint0_radial_6116_232" cx="0" cy="0" r="1" gradientTransform="matrix(-574.244 -162.981 -248.115 809.648 584.771 776.145)" gradientUnits="userSpaceOnUse"><stop stop-color="#3433FE"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><filter id="filter0_f_6116_232" width="1059.1" height="1315.62" x="0" y="-57.404" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_6116_232" stdDeviation="50"/></filter></defs></svg>
            </section>

            <Separator />
        </>
        
    );
};

export default memo(Hero);