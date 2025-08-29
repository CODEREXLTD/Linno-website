'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Careers', href: '/careers' }
  ];
  
  const otherLinks = [
    { name: 'Client Stories', href: '/stories' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: '/images/img_icon.svg', 
      size: { width: 20, height: 20 },
      href: 'https://www.linkedin.com/company/coderex-ltd/'
    },
    { 
      name: 'Facebook', 
      icon: '/images/img_vector_indigo_a700_18x18.svg', 
      size: { width: 18, height: 18 },
      href: 'https://www.facebook.com/coderexco'
    },
    { 
      name: 'X', 
      icon: '/images/img_vector_indigo_a100.svg', 
      size: { width: 20, height: 16 },
      href: 'https://x.com/coderexco'
    },
    { 
      name: 'Instagram', 
      icon: '/images/img_vector_indigo_200.svg', 
      size: { width: 18, height: 18 },
      href: 'https://www.instagram.com/coderexco/'
    }
  ];

  return (
    <footer className="w-full bg-[linear-gradient(90deg,#3433fe19_0%,_#00c85319_100%)] mt-auto">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[28px] sm:pt-[42px] lg:pt-[56px] pb-[28px] sm:pb-[42px] lg:pb-[56px]">
        <div className="flex flex-col gap-[29px] sm:gap-[44px] lg:gap-[58px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mt-[19px] sm:mt-[29px] lg:mt-[38px]">
            {/* Company Info */}
            <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px] w-full lg:w-[300px] xl:w-[350px]">
              <div className="w-[104px] sm:w-[139px] lg:w-[174px]">
                <Link href="/" className="block">
                  <Image
                    src="/images/img_vector_indigo_a700_30x174.svg"
                    alt="Linno Logo"
                    width={174}
                    height={30}
                    className="w-full h-auto hover:scale-105 transition-transform duration-200"
                  />
                </Link>
              </div>
              
              <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] w-full">
                <div className="flex justify-center lg:justify-start items-center w-auto">
                  <Link 
                    href="mailto:enquiry@linno.io"
                    className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-normal leading-[23px] sm:leading-[27px] lg:leading-[31px] text-global-2 underline hover:text-global-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-3 focus:ring-opacity-50 rounded"
                  >
                    enquiry@linno.io
                  </Link>
                </div>
                <address className="text-sm sm:text-base lg:text-lg font-inter font-medium leading-[22px] sm:leading-[26px] lg:leading-[30px] text-global-5 text-center lg:text-left not-italic">
                  Level 12B, 69/1 Chandrashila Suvastu Tower,<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Panthapath, Dhaka 1215
                </address>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center sm:items-start gap-8 sm:gap-12 lg:gap-16 w-full lg:flex-1">
              {/* Quick Links */}
              <div className="flex flex-col gap-[15px] sm:gap-[18px] lg:gap-[20px] items-center sm:items-start w-full sm:w-auto">
                <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-sora font-bold leading-[20px] sm:leading-[22px] lg:leading-[23px] text-global-1">
                  Quick Links
                </h3>
                <nav className="flex flex-col gap-[8px] sm:gap-[10px] lg:gap-[12px] text-sm sm:text-base lg:text-lg font-inter font-medium leading-[24px] sm:leading-[28px] lg:leading-[32px] text-global-5 text-center sm:text-left">
                  {quickLinks?.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="hover:text-global-3 focus:text-global-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-3 focus:ring-opacity-50 rounded px-1 py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Other Links */}
              <div className="flex flex-col gap-[15px] sm:gap-[18px] lg:gap-[20px] items-center sm:items-start w-full sm:w-auto">
                <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-sora font-bold leading-[20px] sm:leading-[22px] lg:leading-[23px] text-global-1 sm:sr-only lg:not-sr-only">
                  More
                </h3>
                <nav className="flex flex-col gap-[8px] sm:gap-[10px] lg:gap-[12px] text-sm sm:text-base lg:text-lg font-inter font-medium leading-[24px] sm:leading-[28px] lg:leading-[32px] text-global-5 text-center sm:text-left pt-[3px] sm:pt-[4px] lg:pt-0">
                  {otherLinks?.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="hover:text-global-3 focus:text-global-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-3 focus:ring-opacity-50 rounded px-1 py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social Media */}
              <div className="flex flex-col gap-[15px] sm:gap-[18px] lg:gap-[20px] items-center lg:items-start w-full sm:w-auto">
                <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-sora font-bold leading-[20px] sm:leading-[22px] lg:leading-[23px] text-global-1">
                  Follow Us
                </h3>
                <nav className="flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[18px] w-full sm:w-auto">
                  {socialLinks?.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-[8px] sm:gap-[10px] lg:gap-[12px] justify-center lg:justify-start items-center w-auto group focus:outline-none focus:ring-2 focus:ring-global-3 focus:ring-opacity-50 rounded px-2 py-1 transition-all duration-200"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Image
                        src={social?.icon}
                        alt={`${social?.name} icon`}
                        width={social?.size?.width}
                        height={social?.size?.height}
                        className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                      />
                      <span className="text-sm sm:text-base lg:text-lg font-inter font-medium leading-[18px] sm:leading-[19px] lg:leading-[20px] text-global-5 group-hover:text-global-3 transition-colors duration-200">
                        {social?.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8 w-full pt-[20px] sm:pt-[24px] lg:pt-[28px] border-t border-gray-200">
            <p className="text-sm sm:text-base lg:text-lg font-inter font-medium leading-[18px] sm:leading-[19px] lg:leading-[20px] text-global-5 text-center sm:text-left order-2 sm:order-1">
              © 2025 Linno. All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg font-inter font-medium leading-[18px] sm:leading-[19px] lg:leading-[20px] text-global-5 text-center sm:text-right order-1 sm:order-2">
              <Link 
                href="/privacy" 
                className="hover:text-global-3 focus:text-global-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-3 focus:ring-opacity-50 rounded px-1 py-1"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;