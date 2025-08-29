import { memo } from 'react';

const Badge = ({highlight, text, className = ''}) => {
    return (
        <div className={`bg-[linear-gradient(90deg,#3433fe19_0%,_#00c85319_100%)] rounded-[10px] pt-[2px] sm:pt-[3px] lg:pt-[4px] pr-[9px] sm:pr-[14px] lg:pr-[18px] pb-[2px] sm:pb-[3px] lg:pb-[4px] pl-[9px] sm:pl-[14px] lg:pl-[18px] ${className}`}>
            <span className="text-[15px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-center text-[#000000]"> 
                {
                    highlight && <span className='text-[#3433FE]'>{highlight} </span>
                }
                {text}
            </span>
        </div>
    );
};

export default memo(Badge);