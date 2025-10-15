// components/JoinUsLink.js
import Link from 'next/link';

const JoinUsLink = () => {
    return (
        <Link href="/careers" className="flex items-center gap-4">
            <span className='cta-text-gradient underline'>
                Join Us
            </span>
            <span>
                <svg className='w-[20px] md:w-[24px] lg:w-[51px] h-[20px] md:h-[24px] lg:h-[51px]' fill="none" width="51" height="51" viewBox="0 0 51 51" xmlns="http://www.w3.org/2000/svg"><path stroke="#21F0A8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6" d="M47.378 3.365l-44.27 44.27m44.27-11.795V3.365H14.903" /></svg>
            </span>
        </Link>
    );
};

export default JoinUsLink;
