'use client';
import JoinUsLink from '@/components/ui/JoinUsLink';
import { memo } from 'react';

const HomeCTA = () => {
    return (
        <>
            <section
                className="w-full bg-cover bg-center bg-no-repeat py-[50px] md:py-[145px] linno-home-cta-section px-4"
                style={{ backgroundImage: "url('/images/img_bg_2.png')" }}
            >
                <div className="flex flex-col gap-[30px] justify-center items-center w-full max-w-full md:max-w-[1000px] mx-auto">
                    <p className='text-[20px] sm:text-[24px] md:text-[30px] font-sora font-medium leading-[1.3] text-center text-[#ffffff]'>
                        Want To Be Part Of Our Innovative Journey?
                    </p>
                    <h2 className="text-[36px] w-full font-semibold sm:text-[42px] md:text-[60px] lg:text-[80px] font-sora leading-[1.17] text-center text-[#ffffff]">
                        Join Us! Let's Make Cool Stuff together!
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-center items-center w-auto">
                        <JoinUsLink />
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(HomeCTA);