'use client';
import { memo } from 'react';


const AboutVideo = () => {
    return (
        <>
            <section className="w-full relative">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/videos/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark overlay with 20% opacity */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            </section>
        </>
    );
};

export default memo(AboutVideo);