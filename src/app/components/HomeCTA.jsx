'use client';
import JoinUsLink from '@/components/ui/JoinUsLink';
import { memo } from 'react';

const HomeCTA = () => {
    return (
        <>
            <section
                className="w-full bg-cover bg-center bg-no-repeat pt-[72px] sm:pt-[108px] lg:pt-[144px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[72px] sm:pb-[108px] lg:pb-[144px] pl-[28px] sm:pl-[42px] lg:pl-[56px]"
                style={{ backgroundImage: "url('/images/img_bg_2.png')" }}
            >
                <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-center w-full">
                    <h2 className="text-[36px] w-full max-w-[660px] font-semibold sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-[#ffffff]">
                        Join us and Make Cool Stuff together
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