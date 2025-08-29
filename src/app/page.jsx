'use client';
import React from 'react';
import Image from 'next/image';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2f5fb]">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full">
          <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8 pt-[20px] sm:pt-[30px] lg:pt-[40px]">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-12 xl:gap-0 w-full">
              {/* Left Content */}
              <div className="flex flex-col gap-[21px] sm:gap-[32px] lg:gap-[42px] justify-start items-start w-full lg:w-[38%] order-2 lg:order-1">
                {/* Innovation Badge */}
                <div className="flex flex-col gap-[11px] sm:gap-[17px] lg:gap-[22px] justify-start items-start w-full">
                  <div className="w-full sm:w-4/5 lg:w-[60%]">
                    <div className="bg-[linear-gradient(90deg,#3433fe19_0%,_#00c85319_100%)] rounded-[10px] pt-[2px] sm:pt-[3px] lg:pt-[4px] pr-[9px] sm:pr-[14px] lg:pr-[18px] pb-[2px] sm:pb-[3px] lg:pb-[4px] pl-[9px] sm:pl-[14px] lg:pl-[18px]">
                      <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sora font-normal leading-[18px] sm:leading-[20px] md:leading-[23px] lg:leading-[26px] text-[#000000]">
                        Innovation. Fueled by People
                      </span>
                    </div>
                  </div>
                  {/* Main Heading and Description */}
                  <div className="flex flex-col gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-start items-start w-full">
                    <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-sora leading-[38px] sm:leading-[54px] md:text-[74px] lg:leading-[92px] text-[#0b0b35] w-full">
                      <span className="font-normal">High-End </span>
                      <span className="font-bold">Software Solutions</span>
                    </h1>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter font-normal leading-[22px] sm:leading-[26px] md:leading-[31px] lg:leading-[35px] text-[#51515f] w-full">
                      Our expert developers can turn your innovative ideas into exceptional digital solutions.
                    </p>
                  </div>
                </div>
                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {}}
                  className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sora font-semibold leading-[18px] sm:leading-[20px] md:leading-[23px] lg:leading-[26px] text-[#ffffff] bg-[#3433fe] rounded-[10px] pt-[7px] sm:pt-[11px] lg:pt-[14px] pr-[16px] sm:pr-[24px] lg:pr-[32px] pb-[7px] sm:pb-[11px] lg:pb-[14px] pl-[16px] sm:pl-[24px] lg:pl-[32px] hover:bg-[#2d2bdb] active:bg-[#2622c4] transition-all duration-200 w-full sm:w-auto"
                >
                  About Us
                </Button>
              </div>
              {/* Right Image */}
              <div className="flex justify-center items-center w-full lg:w-[62%] order-1 lg:order-2 mb-6 lg:mb-0">
                <div className="w-full max-w-[500px] lg:max-w-[676px] px-4 sm:px-0">
                  <Image
                    src="/images/img_image_4.png"
                    alt="Team collaboration"
                    width={676}
                    height={576}
                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Brands Section */}
        <section className="w-full bg-[linear-gradient(90deg,#3433fe0f_0%,_#00c8530f_100%)] mt-[40px] sm:mt-[60px] lg:mt-[80px] xl:mt-[118px] pt-[40px] sm:pt-[60px] lg:pt-[80px] xl:pt-[118px] pb-[40px] sm:pb-[60px] lg:pt-[80px] xl:pb-[112px]">
          <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-[7px] sm:gap-[11px] lg:gap-[14px] justify-start items-center lg:items-start w-full lg:w-[68%] text-center lg:text-left">
                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-sora leading-[34px] sm:leading-[42px] md:leading-[50px] lg:leading-[61px] text-[#0b0b35] w-auto">
                  <span className="font-normal">Our </span>
                  <span className="font-bold">Brands</span>
                </h2>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter font-normal leading-[20px] sm:leading-[23px] md:leading-[27px] lg:leading-[30px] text-[#51515f] w-full lg:w-[58%]">
                  We empower businesses through our brands—WPFunnels and RexTheme—each designed to solve real-world challenges and accelerate growth.
                </p>
              </div>
              {/* Brand Cards */}
              <div className="flex flex-col lg:flex-row gap-[25px] sm:gap-[30px] lg:gap-[38px] xl:gap-[50px] justify-center items-stretch w-full mb-[13px] sm:mb-[20px] lg:mb-[26px]">
                {/* WPFunnels Card */}
                <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[44px] xl:gap-[58px] justify-between items-start w-full lg:w-1/2 bg-[#ffffff66] border border-[#ffffff] rounded-[10px] pt-[20px] sm:pt-[24px] lg:pt-[30px] xl:pt-[34px] pr-[20px] sm:pr-[24px] lg:pr-[30px] xl:pr-[36px] pb-[20px] sm:pb-[24px] lg:pb-[30px] xl:pb-[34px] pl-[20px] sm:pl-[24px] lg:pl-[30px] xl:pl-[36px] shadow-[0px_4px_10px_#888888ff] hover:shadow-[0px_8px_20px_#888888bb] transition-shadow duration-300">
                  <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[38px] xl:gap-[50px] justify-start items-start w-full">
                    <div className="w-[80px] sm:w-[110px] lg:w-[140px] xl:w-[174px]">
                      <Image
                        src="/images/img_vector_deep_purple_500.svg"
                        alt="WPFunnels Logo"
                        width={174}
                        height={26}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-sora leading-[22px] sm:leading-[25px] md:leading-[28px] lg:leading-[32px] xl:leading-[36px] text-[#0b0b35] w-full">
                      <span className="font-normal">Maximize Your Leads And Sales Using </span>
                      <span className="font-semibold">Marketing Funnel Automation</span>
                      <span className="font-normal"> In WordPress</span>
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {}}
                    className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sora font-semibold leading-[18px] sm:leading-[20px] md:leading-[23px] lg:leading-[26px] text-[#0b0b35] border border-[#0b0b35] rounded-[10px] pt-[5px] sm:pt-[8px] lg:pt-[10px] pr-[15px] sm:pr-[23px] lg:pr-[30px] pb-[5px] sm:pb-[8px] lg:pb-[10px] pl-[15px] sm:pl-[23px] lg:pl-[30px] hover:bg-[#0b0b35] hover:text-white transition-all duration-200 w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </div>
                {/* RexTheme Card */}
                <div className="flex flex-col gap-[24px] sm:gap-[36px] lg:gap-[51px] xl:gap-[68px] justify-between items-start w-full lg:w-1/2 bg-[#ffffff66] border border-[#ffffff] rounded-[10px] pt-[20px] sm:pt-[22px] lg:pt-[28px] xl:pt-[32px] pr-[20px] sm:pr-[26px] lg:pr-[34px] xl:pr-[40px] pb-[20px] sm:pb-[22px] lg:pb-[28px] xl:pb-[32px] pl-[20px] sm:pl-[26px] lg:pl-[34px] xl:pl-[40px] shadow-[0px_4px_10px_#888888ff] hover:shadow-[0px_8px_20px_#888888bb] transition-shadow duration-300">
                  <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[42px] xl:gap-[56px] justify-start items-start w-full">
                    <div className="w-[74px] sm:w-[100px] lg:w-[130px] xl:w-[162px]">
                      <Image
                        src="/images/img_vector_indigo_a700_01.svg"
                        alt="RexTheme Logo"
                        width={162}
                        height={34}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-sora leading-[22px] sm:leading-[25px] md:leading-[28px] lg:leading-[32px] xl:leading-[36px] text-[#0b0b35] w-full">
                      <span className="font-normal">Increase Your </span>
                      <span className="font-semibold">WooCommerce Sales With Powerful Plugins</span>
                      <span className="font-normal"> Designed to Drive Results</span>
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {}}
                    className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sora font-semibold leading-[18px] sm:leading-[20px] md:leading-[23px] lg:leading-[26px] text-[#0b0b35] border border-[#0b0b35] rounded-[10px] pt-[5px] sm:pt-[8px] lg:pt-[10px] pr-[15px] sm:pr-[23px] lg:pr-[30px] pb-[5px] sm:pb-[8px] lg:pb-[10px] pl-[15px] sm:pl-[23px] lg:pl-[30px] hover:bg-[#0b0b35] hover:text-white transition-all duration-200 w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Key Products Section */}
        <section className="w-full bg-[#ffffff] pt-[58px] sm:pt-[87px] lg:pt-[116px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[58px] sm:pb-[87px] lg:pb-[116px] pl-[28px] sm:pl-[42px] lg:pl-[56px]">
          <div className="w-full max-w-[1310px] mx-auto">
            <div className="flex flex-col gap-[26px] sm:gap-[39px] lg:gap-[52px] justify-center items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col justify-center items-start w-full lg:w-[72%]">
                <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-[#0b0b35] w-auto mb-[34px] sm:mb-[51px] lg:mb-[68px]">
                  <span className="font-normal">Our </span>
                  <span className="font-bold">Key Products</span>
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-[#51515f] w-full lg:w-[60%]">
                  We thrive on innovation, teamwork, and continuous learning. Our workplace empowers people to do their best work while enjoying the journey together.
                </p>
              </div>
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full lg:w-[72%] mb-[6px] sm:mb-[9px] lg:mb-[12px]">
                {/* Mail Mint */}
                <div className="flex flex-col gap-[18px] sm:gap-[24px] lg:gap-[30px] xl:gap-[36px] justify-center items-center w-full bg-[linear-gradient(117deg,#3433fe0f_0%,_#00c8530f_100%)] rounded-[6px] pt-[15px] sm:pt-[18px] lg:pt-[22px] xl:pt-[20px] pr-[15px] sm:pr-[18px] lg:pr-[22px] xl:pr-[20px] pb-[15px] sm:pb-[18px] lg:pb-[22px] xl:pb-[20px] pl-[15px] sm:pl-[18px] lg:pl-[22px] xl:pl-[20px] hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] xl:gap-[20px] justify-start items-start w-full">
                    <div className="flex justify-center items-center w-auto bg-[#ffffff] rounded-[10px] pt-[8px] sm:pt-[10px] lg:pt-[12px] xl:pt-[16px] pr-[7px] sm:pr-[9px] lg:pr-[11px] xl:pr-[14px] pb-[8px] sm:pb-[10px] lg:pb-[12px] xl:pb-[16px] pl-[7px] sm:pl-[9px] lg:pl-[11px] xl:pl-[14px]">
                      <Image
                        src="/images/img_vector_24x34.png"
                        alt="Mail Mint"
                        width={34}
                        height={24}
                        className="w-auto h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] sm:gap-[8px] lg:gap-[9px] xl:gap-[10px] justify-start items-start w-full">
                      <h3 className="text-[16px] sm:text-[18px] lg:text-[21px] xl:text-[24px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[27px] xl:leading-[31px] text-[#0b0b35] w-auto">
                        Mail Mint
                      </h3>
                      <p className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-inter font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] xl:leading-[26px] text-[#51515f] w-full">
                        Create automated abandoned cart recovery campaigns for WooCommerce and EDD stores to win back abandoned customers.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center w-full group cursor-pointer">
                    <span className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-sora font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] xl:leading-[21px] text-[#51515f] group-hover:text-[#3433fe] transition-colors duration-200">
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
                </div>
                {/* WPFunnels */}
                <div className="flex flex-col gap-[31px] sm:gap-[47px] lg:gap-[62px] justify-center items-center w-full bg-[linear-gradient(117deg,#3433fe0f_0%,_#00c8530f_100%)] rounded-[6px] pt-[10px] sm:pt-[15px] lg:pt-[20px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[10px] sm:pb-[15px] lg:pb-[20px] pl-[10px] sm:pl-[15px] lg:pl-[20px]">
                  <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-start w-full">
                    <div className="flex justify-center items-center w-auto bg-[#ffffff] rounded-[10px] pt-[6px] sm:pt-[9px] lg:pt-[12px] pr-[6px] sm:pr-[9px] lg:pr-[12px] pb-[6px] sm:pb-[9px] lg:pb-[12px] pl-[6px] sm:pl-[9px] lg:pl-[12px]">
                      <Image
                        src="/images/img_vector_deep_purple_500_32x34.svg"
                        alt="WPFunnels"
                        width={34}
                        height={32}
                        className="w-auto h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] sm:gap-[8px] lg:gap-[10px] justify-start items-start w-full">
                      <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-[#3433fe] w-auto">
                        WPFunnels
                      </h3>
                      <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#51515f] w-full lg:w-[88%]">
                        Generate WooCommerce product feeds for Google Shopping, Facebook feeds and 170+ online marketplaces.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-semibold leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#3433fe] underline cursor-pointer hover:opacity-75 transition-opacity duration-200">
                      Learn More
                    </span>
                    <Image
                      src="/images/img_vector_indigo_a700.svg"
                      alt="Arrow"
                      width={12}
                      height={12}
                      className="ml-[8px] sm:ml-[12px] lg:ml-[16px] w-[12px] h-[12px]"
                    />
                  </div>
                </div>
                {/* Creator LMS */}
                <div className="flex flex-col gap-[18px] sm:gap-[27px] lg:gap-[36px] justify-center items-center w-full bg-[linear-gradient(117deg,#3433fe0f_0%,_#00c8530f_100%)] rounded-[6px] pt-[10px] sm:pt-[15px] lg:pt-[20px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[10px] sm:pb-[15px] lg:pb-[20px] pl-[10px] sm:pl-[15px] lg:pl-[20px]">
                  <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-start w-full">
                    <div className="flex justify-center items-center w-auto bg-[#ffffff] rounded-[10px] pt-[6px] sm:pt-[9px] lg:pt-[12px] pr-[6px] sm:pr-[9px] lg:pr-[12px] pb-[6px] sm:pb-[9px] lg:pb-[12px] pl-[6px] sm:pl-[9px] lg:pl-[12px]">
                      <Image
                        src="/images/img_logo.svg"
                        alt="Creator LMS"
                        width={34}
                        height={30}
                        className="w-auto h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] sm:gap-[8px] lg:gap-[10px] justify-start items-start w-full">
                      <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-[#0b0b35] w-auto">
                        Creator LMS
                      </h3>
                      <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#51515f] w-full lg:w-[90%]">
                        Create automated abandoned cart recovery campaigns for WooCommerce and EDD stores to win back abandoned customers.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-normal leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] cursor-pointer hover:text-[#3433fe] transition-colors duration-200">
                      Learn More
                    </span>
                    <Image
                      src="/images/img_vector_blue_gray_300_01.svg"
                      alt="Arrow"
                      width={12}
                      height={12}
                      className="ml-[8px] sm:ml-[12px] lg:ml-[16px] w-[12px] h-[12px]"
                    />
                  </div>
                </div>
                {/* Product Feed Manager */}
                <div className="flex flex-col gap-[31px] sm:gap-[47px] lg:gap-[62px] justify-center items-center w-full bg-[linear-gradient(117deg,#3433fe0f_0%,_#00c8530f_100%)] rounded-[6px] pt-[10px] sm:pt-[15px] lg:pt-[20px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[10px] sm:pb-[15px] lg:pb-[20px] pl-[10px] sm:pl-[15px] lg:pl-[20px]">
                  <div className="flex flex-col gap-[11px] sm:gap-[17px] lg:gap-[22px] justify-start items-start w-full">
                    <div className="flex justify-center items-center w-auto bg-[#ffffff] rounded-[10px] pt-[6px] sm:pt-[9px] lg:pt-[12px] pr-[5px] sm:pr-[8px] lg:pr-[10px] pb-[6px] sm:pb-[9px] lg:pb-[12px] pl-[5px] sm:pl-[8px] lg:pl-[10px]">
                      <Image
                        src="/images/img_fav.svg"
                        alt="Product Feed Manager"
                        width={40}
                        height={32}
                        className="w-auto h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[3px] sm:gap-[5px] lg:gap-[6px] justify-start items-start w-full">
                      <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-[#0b0b35] w-auto">
                        Product Feed Manager
                      </h3>
                      <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#51515f] w-full lg:w-[90%]">
                        Generate WooCommerce product feeds for Google Shopping, Facebook feeds and 170+ online marketplaces.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-normal leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] cursor-pointer hover:text-[#3433fe] transition-colors duration-200">
                      Learn More
                    </span>
                    <Image
                      src="/images/img_vector_blue_gray_300_01.svg"
                      alt="Arrow"
                      width={12}
                      height={12}
                      className="ml-[8px] sm:ml-[12px] lg:ml-[16px] w-[12px] h-[12px]"
                    />
                  </div>
                </div>
                {/* WPVR */}
                <div className="flex flex-col gap-[31px] sm:gap-[47px] lg:gap-[62px] justify-center items-center w-full bg-[linear-gradient(117deg,#3433fe0f_0%,_#00c8530f_100%)] rounded-[6px] pt-[10px] sm:pt-[15px] lg:pt-[20px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[10px] sm:pb-[15px] lg:pt-[20px] pl-[10px] sm:pl-[15px] lg:pl-[20px]">
                  <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-start w-full">
                    <div className="flex justify-center items-center w-auto bg-[#ffffff] rounded-[10px] pt-[8px] sm:pt-[12px] lg:pt-[16px] pr-[2px] sm:pr-[3px] lg:pr-[4px] pb-[8px] sm:pb-[12px] lg:pb-[16px] pl-[2px] sm:pl-[3px] lg:pl-[4px]">
                      <Image
                        src="/images/img_fav_deep_purple_a700.svg"
                        alt="WPVR"
                        width={50}
                        height={22}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] sm:gap-[8px] lg:gap-[10px] justify-start items-start w-full">
                      <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-[#0b0b35] w-auto">
                        WPVR
                      </h3>
                      <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#51515f] w-full lg:w-[90%]">
                        Create 360 virtual tours easily within just a few clicks for Real Estate, Hotels, Art Galleries, Restaurants and more.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-normal leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] cursor-pointer hover:text-[#3433fe] transition-colors duration-200">
                      Learn More
                    </span>
                    <Image
                      src="/images/img_vector_blue_gray_300_01.svg"
                      alt="Arrow"
                      width={12}
                      height={12}
                      className="ml-[8px] sm:ml-[12px] lg:ml-[16px] w-[12px] h-[12px]"
                    />
                  </div>
                </div>
                {/* Cart Lift */}
                <div className="flex flex-col gap-[18px] sm:gap-[27px] lg:gap-[36px] justify-center items-center w-full bg-[linear-gradient(117deg,#3433fe0f_0%,_#00c8530f_100%)] rounded-[6px] pt-[10px] sm:pt-[15px] lg:pt-[20px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[10px] sm:pb-[15px] lg:pb-[20px] pl-[10px] sm:pl-[15px] lg:pl-[20px]">
                  <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-start w-full">
                    <div className="flex justify-center items-center w-auto bg-[#ffffff] rounded-[10px] pt-[3px] sm:pt-[5px] lg:pt-[6px] pr-[3px] sm:pr-[5px] lg:pr-[6px] pb-[3px] sm:pb-[5px] lg:pb-[6px] pl-[3px] sm:pl-[5px] lg:pl-[6px]">
                      <Image
                        src="/images/img_fav_deep_purple_500_02.svg"
                        alt="Cart Lift"
                        width={44}
                        height={42}
                        className="w-[44px] h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] sm:gap-[8px] lg:gap-[10px] justify-center items-start w-full">
                      <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-[#0b0b35] w-auto">
                        Cart Lift
                      </h3>
                      <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#51515f] w-full lg:w-[90%]">
                        Create automated abandoned cart recovery campaigns for WooCommerce and EDD stores to win back abandoned customers.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-center w-full">
                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-normal leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] cursor-pointer hover:text-[#3433fe] transition-colors duration-200">
                      Learn More
                    </span>
                    <Image
                      src="/images/img_vector_blue_gray_300_01.svg"
                      alt="Arrow"
                      width={12}
                      height={12}
                      className="ml-[8px] sm:ml-[12px] lg:ml-[16px] w-[12px] h-[12px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted by Customers Section */}
        <section 
          className="w-full bg-cover bg-center bg-no-repeat pt-[61px] sm:pt-[92px] lg:pt-[122px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[61px] sm:pb-[92px] lg:pb-[122px] pl-[28px] sm:pl-[42px] lg:pl-[56px]"
          style={{ backgroundImage: "url('/images/img_bg_1.png')" }}
        >
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-[31px] sm:gap-[47px] lg:gap-[62px] justify-start items-center w-full lg:w-[54%] mb-[4px] sm:mb-[6px] lg:mb-[8px]">
              <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[44px] sm:leading-[51px] lg:leading-[58px] text-center text-[#ffffff] w-full lg:w-[62%]">
                <span className="font-semibold">Trusted by Customers</span>
                <span className="font-normal"> Across the Globe</span>
              </h2>
              <div className="flex flex-col justify-start items-center w-full">
                <div className="w-[244px] sm:w-[366px] lg:w-[488px] mb-[-46px] sm:mb-[-69px] lg:mb-[-92px] z-10">
                  <Image
                    src="/images/img_11444579_1.png"
                    alt="Global presence"
                    width={488}
                    height={482}
                    className="w-full h-auto"
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-end w-full mt-[-46px] sm:mt-[-69px] lg:mt-[-92px]">
                  {/* Successful Products */}
                  <div className="flex justify-center items-start w-full lg:w-[32%] pt-[15px] sm:pt-[23px] lg:pt-[30px] pr-[15px] sm:pr-[23px] lg:pr-[30px] pb-[15px] sm:pb-[23px] lg:pb-[30px] pl-[15px] sm:pl-[23px] lg:pl-[30px]">
                    <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter leading-[41px] sm:leading-[48px] lg:leading-[54px] text-[#ffffff] w-full lg:w-[92%] mb-[11px] sm:mb-[17px] lg:mb-[22px]">
                      <span className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora font-extrabold">13+</span>
                      <span className="text-[35px] sm:text-[41px] lg:text-[46px] font-inter"> </span>
                      <br />
                      <span className="font-semibold">Successful Products</span>
                    </p>
                  </div>
                  {/* Country Worldwide */}
                  <div className="flex justify-center items-start w-auto pt-[14px] sm:pt-[21px] lg:pt-[28px] pr-[14px] sm:pr-[21px] lg:pr-[28px] pb-[14px] sm:pb-[21px] lg:pb-[28px] pl-[14px] sm:pl-[21px] lg:pl-[28px] shadow-[0px_5px_10px_#3534fe7f]">
                    <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter leading-[41px] sm:leading-[48px] lg:leading-[54px] text-[#ffffff] w-auto mb-[6px] sm:mb-[9px] lg:mb-[12px]">
                      <span className="text-[47px] sm:text-[55px] lg:text-[62px] font-sora font-extrabold">50+</span>
                      <span className="text-[35px] sm:text-[41px] lg:text-[46px] font-inter"> </span>
                      <br />
                      <span className="text-[18px] sm:text-[21px] lg:text-[24px] font-semibold">Country Worldwide</span>
                    </p>
                  </div>
                  {/* Years of Experience */}
                  <div className="flex justify-center items-start w-full lg:w-[32%] pt-[14px] sm:pt-[21px] lg:pt-[28px] pr-[14px] sm:pr-[21px] lg:pr-[28px] pb-[14px] sm:pb-[21px] lg:pb-[28px] pl-[14px] sm:pl-[21px] lg:pl-[28px]">
                    <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter leading-[41px] sm:leading-[48px] lg:leading-[54px] text-[#ffffff] w-full lg:w-[90%] mb-[13px] sm:mb-[20px] lg:mb-[26px]">
                      <span className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora font-extrabold">12+</span>
                      <span className="text-[35px] sm:text-[41px] lg:text-[46px] font-inter"> </span>
                      <br />
                      <span className="font-semibold">Years of Experiences</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Life at Linno Section */}
        <section className="w-full bg-[linear-gradient(90deg,#3433fe0f_0%,_#00c8530f_100%)] pt-[61px] sm:pt-[92px] lg:pt-[122px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[61px] sm:pb-[92px] lg:pb-[122px] pl-[28px] sm:pl-[42px] lg:pr-[56px]">
          <div className="flex flex-col lg:flex-row gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-center w-full">
            {/* Left Content */}
            <div className="flex flex-col gap-[41px] sm:gap-[62px] lg:gap-[82px] justify-start items-center w-full lg:w-[22%] mb-[16px] sm:mb-[24px] lg:mb-[32px]">
              <div className="flex flex-col gap-[18px] sm:gap-[27px] lg:gap-[36px] justify-start items-start w-full">
                <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-start items-start w-full">
                  <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-[#0b0b35] w-auto">
                    <span className="font-normal">Life at </span>
                    <span className="font-bold">Linno</span>
                  </h2>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[29px] text-[#40403f] w-full">
                    We combine expert resources with the latest technologies to deliver high-quality software solutions for your business.
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {}}
                  className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#ffffff] bg-[#3433fe] rounded-[10px] pt-[7px] sm:pt-[11px] lg:pt-[14px] pr-[13px] sm:pr-[20px] lg:pr-[26px] pb-[7px] sm:pb-[11px] lg:pb-[14px] pl-[13px] sm:pl-[20px] lg:pl-[26px] hover:bg-[#2d2bdb] active:bg-[#2622c4] transition-all duration-200"
                >
                  Check Open Positions
                </Button>
              </div>
              <div className="w-full max-w-[400px]">
                <Image
                  src="/images/img_08_1.png"
                  alt="Team member"
                  width={400}
                  height={356}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            {/* Middle Content */}
            <div className="flex flex-col gap-[17px] sm:gap-[26px] lg:gap-[34px] justify-start items-center w-full lg:w-[24%]">
              <div className="flex justify-center w-full relative">
                <div className="w-full max-w-[402px] h-[137px] sm:h-[206px] lg:h-[274px] relative">
                  <Image
                    src="/images/img_image.png"
                    alt="Team collaboration"
                    width={402}
                    height={274}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-[#3433fe4c] rounded-lg flex justify-center items-center pt-[50px] sm:pt-[75px] lg:pt-[100px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[50px] sm:pb-[75px] lg:pb-[100px] pl-[28px] sm:pl-[42px] lg:pl-[56px]">
                    <div className="w-[35px] sm:w-[53px] lg:w-[70px]">
                      <Image
                        src="/images/img_vector_white_a700.svg"
                        alt="Play button"
                        width={70}
                        height={70}
                        className="w-full h-auto cursor-pointer hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-auto">
                <div className="w-full max-w-[400px]">
                  <Image
                    src="/images/img_pxl_20230818_110706499.png"
                    alt="Office environment"
                    width={400}
                    height={368}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div className="flex flex-col gap-[17px] sm:gap-[26px] lg:gap-[34px] justify-start items-center w-full lg:w-[22%]">
              <div className="w-full max-w-[400px]">
                <Image
                  src="/images/img_image_4_356x400.png"
                  alt="Team meeting"
                  width={400}
                  height={356}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-full max-w-[400px]">
                <Image
                  src="/images/img_image_8.png"
                  alt="Workspace"
                  width={400}
                  height={266}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Technology We Use Section */}
        <section className="w-full mt-[59px] sm:mt-[89px] lg:mt-[118px]">
          <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] justify-start items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-start items-center w-full mr-[133px] sm:mr-[200px] lg:mr-[266px] ml-[129px] sm:ml-[194px] lg:ml-[258px]">
                <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-[#0b0b35] w-auto">
                  <span className="font-bold">Technology </span>
                  <span className="font-normal">We Use</span>
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-center text-[#51515f] w-full">
                  We thrive on innovation, teamwork, and continuous learning. Our workplace empowers people to do their best work while enjoying the journey together.
                </p>
              </div>
              {/* Technology Categories */}
              <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px] justify-start items-center w-full mr-[4px] sm:mr-[6px] lg:mr-[8px]">
                <div className="flex flex-wrap justify-center items-center gap-[8px] sm:gap-[12px] lg:gap-[16px] w-full mr-[97px] sm:mr-[146px] lg:mr-[194px] ml-[97px] sm:ml-[146px] lg:ml-[194px]">
                  <Button
                    variant="outline"
                    onClick={() => {}}
                    className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-semibold leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] border border-[#c7c7ff] rounded-[10px] pt-[5px] sm:pt-[8px] lg:pt-[10px] pr-[9px] sm:pr-[14px] lg:pr-[18px] pb-[5px] sm:pb-[8px] lg:pb-[10px] pl-[9px] sm:pl-[14px] lg:pl-[18px] hover:bg-[#c7c7ff] transition-all duration-200"
                  >
                    DevOps/Server
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {}}
                    className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-semibold leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] border border-[#c7c7ff] rounded-[10px] pt-[5px] sm:pt-[8px] lg:pt-[10px] pr-[9px] sm:pr-[14px] lg:pr-[18px] pb-[5px] sm:pb-[8px] lg:pb-[10px] pl-[9px] sm:pl-[14px] lg:pl-[18px] hover:bg-[#c7c7ff] transition-all duration-200"
                  >
                    Other Technologies
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {}}
                    className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-semibold leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] border border-[#c7c7ff] rounded-[10px] pt-[5px] sm:pt-[8px] lg:pt-[10px] pr-[11px] sm:pr-[17px] lg:pr-[22px] pb-[5px] sm:pb-[8px] lg:pb-[10px] pl-[11px] sm:pl-[17px] lg:pl-[22px] hover:bg-[#c7c7ff] transition-all duration-200 flex-1"
                  >
                    Languages
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {}}
                    className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-semibold leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] border border-[#c7c7ff] rounded-[10px] pt-[5px] sm:pt-[8px] lg:pt-[10px] pr-[11px] sm:pr-[17px] lg:pr-[22px] pb-[5px] sm:pb-[8px] lg:pb-[10px] pl-[11px] sm:pl-[17px] lg:pl-[22px] hover:bg-[#c7c7ff] transition-all duration-200 flex-1"
                  >
                    Frontend
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {}}
                    className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-semibold leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#51515f] border border-[#c7c7ff] rounded-[10px] pt-[5px] sm:pt-[8px] lg:pt-[10px] pr-[11px] sm:pr-[17px] lg:pr-[22px] pb-[5px] sm:pb-[8px] lg:pb-[10px] pl-[11px] sm:pl-[17px] lg:pl-[22px] hover:bg-[#c7c7ff] transition-all duration-200"
                  >
                    Backend
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {}}
                    className="text-[12px] sm:text-[14px] lg:text-[16px] font-sora font-bold leading-[16px] sm:leading-[19px] lg:leading-[21px] text-[#ffffff] bg-[#3433fe] rounded-[10px] pt-[5px] sm:pt-[8px] lg:pt-[10px] pr-[12px] sm:pr-[18px] lg:pr-[24px] pb-[5px] sm:pb-[8px] lg:pb-[10px] pl-[12px] sm:pl-[18px] lg:pl-[24px] hover:bg-[#2d2bdb] active:bg-[#2622c4] transition-all duration-200"
                  >
                    UI/UX
                  </Button>
                </div>
                {/* Technology Tools */}
                <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-start items-center w-full ml-[0.5px] sm:ml-[0.75px] lg:ml-[1px]">
                  {/* Figma */}
                  <div className="flex flex-col gap-[37px] sm:gap-[56px] lg:gap-[74px] justify-center items-start w-full bg-[#e8e4ff] rounded-[10px] pt-[20px] sm:pt-[30px] lg:pt-[40px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[20px] sm:pb-[30px] lg:pb-[40px] pl-[10px] sm:pr-[15px] lg:pl-[20px]">
                    <div className="w-[26px] sm:w-[39px] lg:w-[52px] ml-[8px] sm:ml-[12px] lg:ml-[16px]">
                      <Image
                        src="/images/img_vector_gray_900_01.svg"
                        alt="Figma"
                        width={52}
                        height={76}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex justify-start items-center w-full pr-[8px] sm:pr-[12px] lg:pr-[16px] pl-[8px] sm:pl-[12px] lg:pl-[16px]">
                      <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-sora font-normal leading-[35px] sm:leading-[41px] lg:leading-[46px] text-[#141618]">
                        Figma
                      </span>
                    </div>
                  </div>
                  {/* Sketch */}
                  <div className="flex flex-col gap-[34px] sm:gap-[51px] lg:gap-[68px] justify-start items-start w-full bg-[#dddddd] rounded-[10px] pt-[20px] sm:pt-[30px] lg:pt-[40px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[20px] sm:pb-[30px] lg:pb-[40px] pl-[10px] sm:pl-[15px] lg:pl-[20px]">
                    <div className="w-[42px] sm:w-[63px] lg:w-[84px] ml-[5px] sm:ml-[8px] lg:ml-[10px]">
                      <Image
                        src="/images/img_vector_gray_900_02.svg"
                        alt="Sketch"
                        width={84}
                        height={76}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex justify-start items-center w-full pr-[8px] sm:pr-[12px] lg:pr-[16px] pl-[8px] sm:pl-[12px] lg:pl-[16px]">
                      <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-sora font-normal leading-[35px] sm:leading-[41px] lg:leading-[46px] text-[#141618]">
                        Sketch
                      </span>
                    </div>
                  </div>
                  {/* Adobe XD */}
                  <div className="flex flex-col gap-[33px] sm:gap-[50px] lg:gap-[66px] justify-start items-start w-full bg-[#d7eadb] rounded-[10px] pt-[20px] sm:pt-[30px] lg:pt-[40px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[20px] sm:pb-[30px] lg:pb-[40px] pl-[10px] sm:pl-[15px] lg:pl-[20px]">
                    <div className="w-[39px] sm:w-[59px] lg:w-[78px] ml-[6px] sm:ml-[9px] lg:ml-[12px]">
                      <Image
                        src="/images/img_vector_gray_900_01_76x78.svg"
                        alt="Adobe XD"
                        width={78}
                        height={76}
                        className="w-[78px] h-auto"
                      />
                    </div>
                    <div className="flex justify-start items-center w-full pr-[8px] sm:pr-[12px] lg:pr-[16px] pl-[8px] sm:pl-[12px] lg:pl-[16px]">
                      <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-sora font-normal leading-[35px] sm:leading-[41px] lg:leading-[46px] text-[#141618]">
                        Adobe XD
                      </span>
                    </div>
                  </div>
                  {/* Miro */}
                  <div className="flex flex-col gap-[33px] sm:gap-[50px] lg:gap-[66px] justify-start items-start w-full bg-[#fff6cd] rounded-[10px] pt-[20px] sm:pt-[30px] lg:pt-[40px] pr-[10px] sm:pr-[15px] lg:pr-[20px] pb-[20px] sm:pb-[30px] lg:pb-[40px] pl-[10px] sm:pl-[15px] lg:pl-[20px]">
                    <div className="w-[39px] sm:w-[59px] lg:w-[78px] ml-[4px] sm:ml-[6px] lg:ml-[8px]">
                      <Image
                        src="/images/img_vector_gray_900_03.svg"
                        alt="Miro"
                        width={78}
                        height={78}
                        className="w-[78px] h-auto"
                      />
                    </div>
                    <div className="flex justify-start items-center w-full pr-[4px] sm:pr-[6px] lg:pr-[8px] pl-[4px] sm:pl-[6px] lg:pl-[8px]">
                      <span className="text-[27px] sm:text-[32px] lg:text-[36px] font-sora font-normal leading-[35px] sm:leading-[41px] lg:leading-[46px] text-[#141618]">
                        Miro
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Join Us Section */}
        <section 
          className="w-full bg-cover bg-center bg-no-repeat pt-[72px] sm:pt-[108px] lg:pt-[144px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[72px] sm:pb-[108px] lg:pb-[144px] pl-[28px] sm:pl-[42px] lg:pl-[56px]"
          style={{ backgroundImage: "url('/images/img_bg_2.png')" }}
        >
          <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-center w-full">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-[#ffffff] w-auto">
              <span className="font-normal">Ready to </span>
              <span className="font-bold">Join Us?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-center items-center w-auto">
              <Button
                variant="primary"
                onClick={() => {}}
                className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#0b0b35] bg-[#ffffff] rounded-[10px] pt-[7px] sm:pt-[11px] lg:pt-[14px] pr-[16px] sm:pr-[24px] lg:pr-[32px] pb-[7px] sm:pb-[11px] lg:pb-[14px] pl-[16px] sm:pl-[24px] lg:pl-[32px] hover:bg-[#f0f0f0] active:bg-[#e0e0e0] transition-all duration-200"
              >
                Explore Career
              </Button>
              <Button
                variant="outline"
                onClick={() => {}}
                className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#ffffff] border border-[#ffffff] rounded-[10px] pt-[7px] sm:pt-[11px] lg:pt-[14px] pr-[16px] sm:pr-[24px] lg:pr-[32px] pb-[7px] sm:pb-[11px] lg:pb-[14px] pl-[16px] sm:pl-[24px] lg:pl-[32px] hover:bg-[#ffffff] hover:text-[#0b0b35] transition-all duration-200"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}