'use client';
import Link from 'next/link';
import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  loading = false,
  icon = null,
  iconPosition = 'left',
  link  = false,
  href = null,
  label="",
  blank=false,
  ...props
}) => {
  const variants = {
    primary: 'bg-button-1 text-global-7 hover:bg-[#2d2bdb] active:bg-[#2622c4] shadow-sm hover:shadow-md',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 shadow-sm hover:shadow-md',
    outline: 'border-2 border-gray-300 text-gray-700 bg-transparent hover:bg-[#2622c4] hover:text-white hover:font-semibold active:bg-[#2622c4]',
    ghost: 'text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800  shadow-sm hover:shadow-md'
  };

  const sizes = {
    xs: 'px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm min-h-[36px] sm:min-h-[40px] gap-1 sm:gap-1.5',
    sm: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base md:text-base min-h-[40px] sm:min-h-[44px] gap-1.5 sm:gap-2',
    md: 'px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base md:text-lg min-h-[44px] sm:min-h-[48px] gap-2 sm:gap-2.5',
    lg: 'px-5 py-3 text-base sm:px-6 sm:py-4 sm:text-lg md:text-xl lg:text-xl min-h-[48px] sm:min-h-[52px] gap-2.5 sm:gap-3',
    xl: 'px-6 py-4 text-lg sm:px-8 sm:py-5 sm:text-xl md:text-2xl lg:text-2xl min-h-[52px] sm:min-h-[56px] gap-3 sm:gap-4'
  };

  const responsiveRadius = 'rounded-md sm:rounded-lg';
  const responsiveFocus = '';

  const LoadingSpinner = () => (
    <svg 
      className={`animate-spin ${
        size === 'xs' ? 'h-3 w-3 sm:h-4 sm:w-4' :
        size === 'sm' ? 'h-4 w-4 sm:h-5 sm:w-5' :
        size === 'md' ? 'h-4 w-4 sm:h-5 sm:w-5' :
        size === 'lg' ? 'h-5 w-5 sm:h-6 sm:w-6' :
        'h-6 w-6 sm:h-7 sm:w-7'
      }`} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const IconComponent = () => {
    if (!icon) return null;
    return (
      <span className={`inline-flex items-center justify-center ${
        size === 'xs' ? 'w-3 h-3 sm:w-4 sm:h-4' :
        size === 'sm' ? 'w-4 h-4 sm:w-5 sm:h-5' :
        size === 'md' ? 'w-4 h-4 sm:w-5 sm:h-5' :
        size === 'lg' ? 'w-5 h-5 sm:w-6 sm:h-6' :
        'w-6 h-6 sm:w-7 sm:h-7'
      }`}>
        {icon}
      </span>
    );
  };

  if(link){
    return (
      <Link href={href} target={blank ? "_blank" : "_self"}>
        <button
          type={type}
          onClick={disabled || loading ? undefined : onClick}
          disabled={disabled || loading}
          className={`
            ${responsiveRadius}
            transition-all 
            duration-200 
            ease-in-out
            focus:outline-none 
            ${responsiveFocus}
            ${variants?.[variant]} 
            ${sizes?.[size]} 
            ${fullWidth ? 'w-full' : 'w-auto'}
            ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02] active:scale-[0.98] sm:hover:scale-105 sm:active:scale-95'} 
            ${loading ? 'relative' : ''}
            font-medium
            inline-flex
            items-center
            justify-center
            text-center
            touch-manipulation
            select-none
            whitespace-nowrap
            transform-gpu
            ${className}
          `?.trim()?.replace(/\s+/g, ' ')}
          aria-disabled={disabled || loading}
          aria-busy={loading}
          {...props}
        >
          {loading && <LoadingSpinner />}
          {!loading && icon && iconPosition === 'left' && <IconComponent />}
          <span className={`${
            loading ? 'opacity-75' : ''
          } ${icon && !loading ? (iconPosition === 'left' ? 'ml-1 sm:ml-2' : 'mr-1 sm:mr-2') : ''}`}>
            {label}
          </span>
          {!loading && icon && iconPosition === 'right' && <IconComponent />}
        </button>
      </Link>
    )
  }

  return (
    <button
        type={type}
        onClick={disabled || loading ? undefined : onClick}
        disabled={disabled || loading}
        className={`
          ${responsiveRadius}
          transition-all 
          duration-200 
          ease-in-out
          focus:outline-none 
          ${responsiveFocus}
          ${variants?.[variant]} 
          ${sizes?.[size]} 
          ${fullWidth ? 'w-full' : 'w-auto'}
          ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02] active:scale-[0.98] sm:hover:scale-105 sm:active:scale-95'} 
          ${loading ? 'relative' : ''}
          font-medium
          inline-flex
          items-center
          justify-center
          text-center
          touch-manipulation
          select-none
          whitespace-nowrap
          transform-gpu
          ${className}
        `?.trim()?.replace(/\s+/g, ' ')}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {!loading && icon && iconPosition === 'left' && <IconComponent />}
        <span className={`${
          loading ? 'opacity-75' : ''
        } ${icon && !loading ? (iconPosition === 'left' ? 'ml-1 sm:ml-2' : 'mr-1 sm:mr-2') : ''}`}>
          {children}
        </span>
        {!loading && icon && iconPosition === 'right' && <IconComponent />}
      </button>
  );
};

export default Button;