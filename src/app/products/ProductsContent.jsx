'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const ProductsContent = () => {
  // Products data array
  const products = [
    { 
      id: 1, 
      title: "Mail Mint", 
      description: "Create automated abandoned cart recovery campaigns for WooCommerce and EDD stores to win back abandoned customers.", 
      image: "/images/img_vector_24x34.png", 
      link: "https://getwpfunnels.com/email-marketing-automation-mail-mint/" 
    },
    { 
      id: 2, 
      title: "WPFunnels", 
      description: "Generate WooCommerce product feeds for Google Shopping, Facebook feeds and 170+ online marketplaces.", 
      image: "/images/img_vector_deep_purple_500_32x34.svg", 
      link: "https://getwpfunnels.com/wordpress-funnel-builder-wpfunnels/" 
    },
    { 
      id: 3, 
      title: "Creator LMS", 
      description: "Create automated abandoned cart recovery campaigns for WooCommerce and EDD stores to win back abandoned customers.", 
      image: "/images/img_logo.svg", 
      link: "https://getwpfunnels.com/creator-lms" 
    },
    { 
      id: 4, 
      title: "Product Feed Manager", 
      description: "Generate WooCommerce product feeds for Google Shopping, Facebook feeds and 170+ online marketplaces.", 
      image: "/images/img_fav.svg", 
      link: "https://rextheme.com/best-woocommerce-product-feed/" 
    },
    { 
      id: 5, 
      title: "WPVR", 
      description: "Create 360 virtual tours easily within just a few clicks for Real Estate, Hotels, Art Galleries, Restaurants and more.", 
      image: "/images/img_fav_deep_purple_a700.svg", 
      link: "https://rextheme.com/wpvr/" 
    },
    { 
      id: 6, 
      title: "Cart Lift", 
      description: "Create automated abandoned cart recovery campaigns for WooCommerce and EDD stores to win back abandoned customers.", 
      image: "/images/img_fav_deep_purple_500_02.svg", 
      link: "https://rextheme.com/cart-lift/" 
    },
    { 
      id: 7, 
      title: "Product One", 
      description: "This is product one description showcasing our innovative solutions for modern businesses.", 
      image: "/images/img_vector_24x34.png", 
      link: "#" 
    },
    { 
      id: 8, 
      title: "Product Two", 
      description: "This is product two description highlighting our commitment to excellence and customer satisfaction.", 
      image: "/images/img_fav.svg", 
      link: "#" 
    },
    { 
      id: 9, 
      title: "Product Three", 
      description: "This is product three description demonstrating our expertise in delivering high-quality solutions.", 
      image: "/images/img_logo.svg", 
      link: "#" 
    }
  ];

  return (
    <div className="w-full bg-[#ffffff]">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-[#f2f5fb] pt-[40px] sm:pt-[60px] lg:pt-[80px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
        <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[32px] justify-center items-center text-center w-full">
            {/* Section Header */}
            <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-center w-full max-w-4xl">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-sora leading-[44px] sm:leading-[58px] lg:leading-[77px] text-[#0b0b35] w-auto">
                <span className="font-normal">Our </span>
                <span className="font-bold">Products</span>
              </h1>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[24px] sm:leading-[27px] lg:leading-[30px] text-[#51515f] w-full lg:w-[80%]">
                Discover our comprehensive suite of innovative solutions designed to empower businesses and drive digital transformation. Each product is crafted with precision to meet real-world challenges and accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="w-full bg-[#ffffff] pt-[58px] sm:pt-[87px] lg:pt-[116px] pb-[58px] sm:pb-[87px] lg:pb-[116px]">
        <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] justify-center items-center w-full">
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="flex flex-col gap-[18px] sm:gap-[24px] lg:gap-[30px] xl:gap-[36px] justify-center items-center w-full bg-[linear-gradient(117deg,#3433fe0f_0%,_#00c8530f_100%)] rounded-[6px] pt-[15px] sm:pt-[18px] lg:pt-[22px] xl:pt-[20px] pr-[15px] sm:pr-[18px] lg:pr-[22px] xl:pr-[20px] pb-[15px] sm:pb-[18px] lg:pb-[22px] xl:pb-[20px] pl-[15px] sm:pl-[18px] lg:pl-[22px] xl:pl-[20px] hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Product Content */}
                  <div className="flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] xl:gap-[20px] justify-start items-start w-full">
                    {/* Product Icon */}
                    <div className="flex justify-center items-center w-auto bg-[#ffffff] rounded-[10px] pt-[8px] sm:pt-[10px] lg:pt-[12px] xl:pt-[16px] pr-[7px] sm:pr-[9px] lg:pr-[11px] xl:pr-[14px] pb-[8px] sm:pb-[10px] lg:pb-[12px] xl:pb-[16px] pl-[7px] sm:pl-[9px] lg:pl-[11px] xl:pl-[14px] group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={40}
                        height={32}
                        className="w-auto h-auto max-w-[34px] max-h-[32px]"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex flex-col gap-[6px] sm:gap-[8px] lg:gap-[9px] xl:gap-[10px] justify-start items-start w-full">
                      <h3 className="text-[16px] sm:text-[18px] lg:text-[21px] xl:text-[24px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[27px] xl:leading-[31px] text-[#0b0b35] w-auto group-hover:text-[#3433fe] transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-inter font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] xl:leading-[26px] text-[#51515f] w-full">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="flex justify-start items-center w-full group-hover:translate-x-1 transition-transform duration-300">
                    {product.link === "#" ? (
                      <div className="flex justify-start items-center cursor-pointer">
                        <span className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-sora font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] xl:leading-[21px] text-[#51515f] hover:text-[#3433fe] transition-colors duration-200">
                          Learn More
                        </span>
                        <Image
                          src="/images/img_vector_blue_gray_300.svg"
                          alt="Arrow"
                          width={12}
                          height={12}
                          className="ml-[8px] sm:ml-[10px] lg:ml-[12px] xl:ml-[16px] w-[12px] h-[12px] group-hover:translate-x-1 transition-transform duration-200"
                        />
                      </div>
                    ) : (
                      <Link 
                        className="flex justify-start items-center" 
                        href={product.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-sora font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] xl:leading-[21px] text-[#51515f] hover:text-[#3433fe] transition-colors duration-200">
                          Learn More
                        </span>
                        <Image
                          src="/images/img_vector_blue_gray_300.svg"
                          alt="Arrow"
                          width={12}
                          height={12}
                          className="ml-[8px] sm:ml-[10px] lg:ml-[12px] xl:ml-[16px] w-[12px] h-[12px] group-hover:translate-x-1 transition-transform duration-200"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsContent;
