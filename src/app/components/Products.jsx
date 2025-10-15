'use client';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { products } from '../products/ProductsContent';

const Products = () => {
    return (
        <>
            <section className="linno-products-section w-full bg-[#ffffff] py-[50px] lg:py-[120px] px-4">
					<div className="w-full max-w-[1310px] mx-auto">
						<div className="flex flex-col gap-[26px] sm:gap-[39px] lg:gap-[52px] justify-center items-center w-full">
							{/* Section Header */}
							<div className="flex flex-col justify-center items-start w-full">
								<h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-[#0b0b35] w-auto mb-[34px]">
									<span className="font-normal">Our </span>
									<span className="font-bold title-gradient">Key Products</span>
								</h2>
								<p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-[#B1B4C9] w-full lg:w-[60%]">
									We thrive on innovation, teamwork, and continuous learning. Our workplace empowers people to do their best work while enjoying the journey together.
								</p>
							</div>
							{/* Products Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full mb-[6px] sm:mb-[9px] lg:mb-[12px]">
								{
									products.map((product, index) => (
										<Link href={product.link} target='_blank' key={index} className="linno-products-card flex flex-col gap-[18px] sm:gap-[24px] lg:gap-[30px] xl:gap-[36px] justify-center items-center w-full bg-white rounded-[6px] pt-[15px] sm:pt-[18px] lg:pt-[22px] xl:pt-[20px] pr-[15px] sm:pr-[18px] lg:pr-[22px] xl:pr-[20px] pb-[15px] sm:pb-[18px] lg:pb-[22px] xl:pb-[20px] pl-[15px] sm:pl-[18px] lg:pl-[22px] xl:pl-[20px] hover:shadow-lg transition-shadow duration-300">
											<div className="flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] xl:gap-[20px] justify-start items-start w-full">
												<div className="flex justify-center items-center w-auto">
													{product.image}
												</div>
												<div className="flex flex-col gap-[6px] sm:gap-[8px] lg:gap-[9px] xl:gap-[10px] justify-start items-start w-full">
													<h3 className="product-title text-[16px] sm:text-[18px] lg:text-[21px] xl:text-[24px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[27px] xl:leading-[31px] text-[#0b0b35] w-auto">
														{product.title}
													</h3>
													<p className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-inter font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] xl:leading-[26px] text-[#51515f] w-full">
														{product.description}
													</p>
												</div>
											</div>
											<div className="flex justify-start items-center w-full group cursor-pointer">
												<p className='flex justify-start items-center gap-[14px] products-link-btn'>
													<span className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-sora font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] xl:leading-[21px] text-[#51515f] transition-colors duration-200">
														Learn More
													</span>
													<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#585A65" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.476" d="M12.806 1.182L1 12.988M12.806 1.182v8.66m0-8.66h-8.66"/></svg>
												</p>
											</div>
										</Link>
									))
								}
							</div>
						</div>
					</div>
				</section>
        </>
    );
};

export default memo(Products);