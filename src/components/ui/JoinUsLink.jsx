// components/JoinUsLink.js
import Link from 'next/link';

const JoinUsLink = () => {
  return (
    <Link href="/careers" className="flex items-center gap-4">
        <span className='text-[#FFC933] text-center font-sora font-extrabold underline capitalize text-[36px] leading-tight'>
            Join Us
        </span>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 51 52" fill="none">
            <path d="M47.3784 3.82861L3.10816 48.0989" stroke="#FFC933" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M47.3784 36.304V3.82861H14.903" stroke="#FFC933" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    </Link>
  );
};

export default JoinUsLink;
