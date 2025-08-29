'use client';
import React, { memo } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Hero from './components/Hero';

const Content = () => {
    const benefits = [
		{
			icon: '/images/img_icon_white_a700.svg',
			title: 'Fastival\nBonuses',
            spanText: [
                { text: 'Fastival ', weight: 'font-bold' },
                { text: 'Bonuses', weight: 'font-normal' }
            ]
		},
		{
			icon: '/images/img_icon_white_a700_62x62.svg',
			title: 'Performance\nBonus',
            spanText: [
                { text: 'Performance ', weight: 'font-bold' },
                { text: 'Bonus', weight: 'font-normal' }
            ]
		},
		{
			icon: '/images/img_icon_62x62.svg',
			title: 'Yearly \ncompany tour',
            spanText: [
                { text: 'Yearly ', weight: 'font-bold' },
                { text: 'company tour', weight: 'font-normal' }
            ]
		},
		{
			icon: '/images/img_icon_1.svg',
			title: 'Yearly \nsalary review',
            spanText: [
                { text: 'Yearly ', weight: 'font-bold' },
                { text: 'salary review', weight: 'font-normal' }
            ]
		},
		{
			icon: '/images/img_icon_2.svg',
			title: 'Lunch and\nUnlimited Coffee',
			spanText: [
				{ text: 'Lunch ', weight: 'font-bold' },
				{ text: 'and\nUnlimited Coffee', weight: 'font-normal' }
			]
		},
		{
			icon: '/images/img_icon_3.svg',
			title: 'Marriage \nBonus and Leave',
			spanText: [
				{ text: 'Marriage \n', weight: 'font-bold' },
				{ text: 'Bonus and Leave', weight: 'font-normal' }
			]
		},
		{
			icon: '/images/img_icon_4.svg',
			title: 'Competitive\nSalary'
		},
		{
			icon: '/images/img_icon_5.svg',
			title: 'Paid training to improve skills',
			spanText: [
				{ text: 'Paid training', weight: 'font-bold' },
				{ text: ' to improve skills', weight: 'font-normal' }
			]
		},
		{
			icon: '/images/img_icon_6.svg',
			title: 'Parental Bonus and Leave',
			spanText: [
				{ text: 'Parental ', weight: 'font-bold' },
				{ text: 'Bonus and Leave', weight: 'font-normal' }
			]
		}
	];

	const jobPositions = [
		{
			category: 'Marketing',
			title: 'Digital Product Marketing Executive',
			location: 'On-Site',
			type: 'Full Time',
			level: 'Mid-Level',
			buttonStyle: 'outline',
            buttonLink: 'https://inside.coderex.co/jobs/digital-product-marketing-executive--mid-level--gokgm'
		},
	];

	return (
		<div className="w-full bg-[#f2f5fb]">
			<Header />
			<Hero />
			{/* Why Work At Linno Section */}
			<section className="w-full bg-[linear-gradient(90deg,#3433fe0f_0%,_#00c8530f_100%)] mt-[63px] sm:mt-[95px] lg:mt-[126px]">
				<div className="w-full max-w-[1440px] px-2 md:px-4 py-8 md:py-12 mx-auto">
					<div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-4">
						{/* Left Content */}
						<div className="flex flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] items-center w-full lg:w-[66%]">
							<div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] items-start w-full">
								<h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-left text-[#0b0b35]">
									Why Work At <span className="font-bold">Linno?</span>
								</h2>
								<p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-left text-[#51515f] w-[64%]">
									At Linno, you'll grow, be heard, and make an impact. We value your ideas, support your career journey, and create space for you to do meaningful work with a global reach.
								</p>
							</div>

							{/* Features Grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 w-full">
								<div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start">
									<Image
										src="/images/img_icon_gray_900_1.svg"
										alt="Growth icon"
										width={30}
										height={32}
										className="w-[30px] h-auto"
									/>
									<div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] items-start w-full">
										<h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-[#0b0b35]">
											Grow Your Career
										</h3>
										<p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-left text-[#51515f] w-full">
											Advance with learning, mentorship, and new opportunities.
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start">
									<Image
										src="/images/img_icon_gray_900_2.svg"
										alt="Purpose icon"
										width={30}
										height={32}
										className="w-[30px] h-auto"
									/>
									<div className="flex flex-col gap-[7px] sm:gap-[11px] lg:gap-[14px] items-start w-full">
										<h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-[#0b0b35]">
											Work With Purpose
										</h3>
										<p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-left text-[#51515f] w-[94%]">
											Create software that impacts lives worldwide.
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start">
									<Image
										src="/images/img_icon_gray_900_3.svg"
										alt="Culture icon"
										width={32}
										height={32}
										className="w-[32px] h-auto"
									/>
									<div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] items-start w-full">
										<h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-[#0b0b35]">
											Collaborative Culture
										</h3>
										<p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-left text-[#51515f] w-[90%]">
											Thrive in teamwork, creativity, and shared success.
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-start">
									<Image
										src="/images/img_icon_gray_900_4.svg"
										alt="Voice icon"
										width={32}
										height={32}
										className="w-[32px] h-auto"
									/>
									<div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] items-start w-full">
										<h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-sora font-semibold leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-[#0b0b35]">
											Your Voice Matters
										</h3>
										<p className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[20px] sm:leading-[23px] lg:leading-[26px] text-left text-[#51515f] w-[90%]">
											Share ideas freely, influence projects, drive change.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Right Images */}
						<div className="flex flex-col gap-[14px] sm:gap-[21px] lg:gap-[28px] items-center w-full lg:w-[34%]">
							<Image
								src="/images/img_frame_14248_394x454.png"
								alt="Team collaboration"
								width={454}
								height={394}
								className="w-full h-auto"
							/>
							<Image
								src="/images/img_frame_14249_264x454.png"
								alt="Team meeting"
								width={454}
								height={264}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Company Benefits Section */}
			<section className="w-full bg-[#090936] py-[50px] md:py-[120px]">
				<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					{/* Background Image Section */}
					<div className="mx-auto py-[60px] sm:py-[90px] lg:py-[120px] relative">
						<div className="relative z-10 flex justify-center items-start w-[48%] mx-auto mb-[36px] sm:mb-[54px] lg:mb-[72px]">
							<div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] items-center">
								<h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-white">
									Company <span className="font-bold">Benefits</span>
								</h2>
								<p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-center text-white w-full">
									At Linno, we offer a comprehensive benefits package to support our employees' well-being and work-life balance.
								</p>
							</div>
						</div>
					</div>
					{/* Benefits Grid */}
					<div className="w-full px-[8px] sm:px-[15px] lg:px-[20px] xl:px-[26px] py-[8px] sm:py-[15px] lg:py-[20px] xl:py-[26px] -mt-[50px] sm:-mt-[75px] lg:-mt-[105px] xl:-mt-[140px] mb-[40px] sm:mb-[65px] lg:mb-[98px] xl:mb-[130px] relative z-20">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] sm:gap-[50px] lg:gap-[80px] xl:gap-[146px] w-full">
							{benefits?.map((benefit, index) => (
								<div key={index} className="flex flex-col sm:flex-row lg:flex-row justify-start items-center sm:items-start lg:items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] w-full group hover:scale-105 transition-transform duration-200 glass border-b-[rgba(255,255,255,0.48)] border-t-[rgba(255,255,255,0.48)]">
									<div className="bg-[#3433fe] rounded-[30px] p-[12px] sm:p-[14px] lg:p-[16px] w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] lg:w-[62px] lg:h-[62px] flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-200">
										<Image
											src={benefit?.icon}
											alt={`${benefit?.title} icon`}
											width={30}
											height={30}
											className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[30px] lg:h-[30px]"
										/>
									</div>
									<div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-sora leading-[18px] sm:leading-[20px] lg:leading-[24px] xl:leading-[28px] text-center sm:text-left lg:text-left text-white flex-1">
										{benefit?.spanText ? (
											<>
												{benefit?.spanText?.map((span, spanIndex) => (
													<span key={spanIndex} className={span?.weight}>
														{span?.text}
                                                        {
                                                            spanIndex === 0 ? <br /> : null
                                                        }
													</span>
												))}
											</>
										) : (
											<span className="font-bold">{benefit?.title}</span>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Culture Section */}
			<section className="w-full bg-[#F2F5FB]">
				<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[75px] sm:py-[113px] lg:py-[150px]">
					<div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 w-full">
						{/* Left Images */}
						<div className="flex flex-col gap-[14px] sm:gap-[21px] lg:gap-[28px] items-center w-full lg:w-[44%]">
							<div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[21px] lg:gap-[28px] justify-center items-center w-auto">
								<Image
									src="/images/img_02_1.png"
									alt="Team culture"
									width={210}
									height={210}
									className="w-[210px] h-[210px]"
								/>
								<Image
									src="/images/img_frame_14251_248x290.png"
									alt="Team collaboration"
									width={290}
									height={248}
									className="w-[58%] h-auto"
								/>
							</div>
							<Image
								src="/images/img_pxl_20230413_154542781.png"
								alt="Team meeting"
								width={530}
								height={274}
								className="w-full h-auto"
							/>
						</div>
						{/* Right Content */}
						<div className="flex flex-col gap-[22px] sm:gap-[33px] lg:gap-[44px] items-start w-full lg:w-[44%]">
							<div className="flex flex-col gap-[11px] sm:gap-[17px] lg:gap-[22px] items-start w-full">
								<h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[44px] sm:leading-[51px] lg:leading-[58px] text-left text-[#0b0b35] w-[94%]">
									Do Great Work In A Strong <span className="font-bold">Culture</span>
								</h2>
								<div className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter leading-[23px] sm:leading-[27px] lg:leading-[30px] text-left text-[#51515f] w-full">
									<span className="font-normal">
										Culture is one of those words. People throw it around a lot. It's hard to define exactly what it is. But it's something you feel pretty much straight away.
									</span>
									<br /><br />
									<span className="font-normal">We're not going to lie. The culture at </span>
									<span className="font-bold">Linno isn't perfect. Like every group of people we have our issues. But we are all dedicated to continuing to improve, and we think that's a pretty good start.</span>
								</div>
							</div>
							<Button 
								onClick={() => {}}
								className="bg-[#3433fe] text-white rounded-[10px] px-[11px] sm:px-[17px] lg:px-[22px] py-[7px] sm:py-[11px] lg:py-[14px] text-[15px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] w-fit"
							>
								Check Open Position
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Open Positions Section */}
			<section className="w-full bg-white">
				<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[58px] sm:py-[87px] lg:py-[116px]">
					<div className="flex flex-col gap-[26px] sm:gap-[39px] lg:gap-[52px] justify-center items-center w-full">
						{/* Header */}
						<div className="flex flex-col gap-[3px] sm:gap-[5px] lg:gap-[6px] items-center px-[4px] sm:px-[6px] lg:px-[8px] w-auto">
							<h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-snug text-center text-[#0b0b35]">
								Open <span className="font-bold">Positions</span>
							</h2>
							<p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[19px] sm:leading-[22px] lg:leading-[25px] text-center text-[#51515f]">
								We're Hiring! See something that interests you? Apply here.
							</p>
						</div>
						{/* Job Listings */}
						<div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[60px] xl:gap-[86px] items-center w-full lg:w-[80%] xl:w-[52%] mb-[4px] sm:mb-[6px] lg:mb-[8px]">
							{jobPositions?.map((job, index) => (
								<div key={index} className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] items-center w-full group">
									<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-8 w-full p-4 sm:p-6 lg:p-0 bg-white lg:bg-transparent rounded-lg lg:rounded-none shadow-sm lg:shadow-none hover:shadow-md lg:hover:shadow-none transition-shadow duration-200">
										<div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
											<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-3 sm:gap-6 lg:gap-8">
												<span className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-inter font-medium leading-[18px] sm:leading-[20px] lg:leading-[22px] xl:leading-[25px] text-[#3433fe] px-3 py-1 bg-blue-50 rounded-full text-center lg:px-0 lg:py-0 lg:bg-transparent lg:rounded-none">
													{job?.category}
												</span>
												<div className="flex flex-col md:flex-row gap-4 justify-start items-start w-full lg:w-auto flex-1">
													<div className="flex flex-col justify-start items-start w-full lg:w-auto flex-1">
                                                        <h3 className={`text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[30px] font-inter font-semibold leading-[22px] sm:leading-[26px] lg:leading-[30px] xl:leading-[37px] transition-colors duration-200 ${
														    job.buttonStyle === 'primary' ? 'text-[#3433fe]' : 'text-[#0b0b35] group-hover:text-[#3433fe]'
                                                            }`}>
                                                                {job?.title}
                                                            </h3>
                                                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 lg:gap-6 justify-start items-start sm:items-center w-full mt-2">
                                                                <div className="flex items-center gap-[5px] sm:gap-[8px] lg:gap-[10px]">
                                                                    <Image
                                                                        src="/images/img_location.svg"
                                                                        alt="Location"
                                                                        width={12}
                                                                        height={14}
                                                                        className="w-[12px] h-[14px] flex-shrink-0"
                                                                    />
                                                                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[15px] sm:leading-[18px] lg:leading-[20px] text-[#51515f]">
                                                                        {job?.location}
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-[5px] sm:gap-[8px] lg:gap-[10px]">
                                                                    <Image
                                                                        src="/images/img_clock.svg"
                                                                        alt="Time"
                                                                        width={14}
                                                                        height={14}
                                                                        className="w-[14px] h-[14px] flex-shrink-0"
                                                                    />
                                                                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[15px] sm:leading-[18px] lg:leading-[20px] text-[#51515f]">
                                                                        {job?.type}
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-[5px] sm:gap-[8px] lg:gap-[10px]">
                                                                    <Image
                                                                        src="/images/img_chart.svg"
                                                                        alt="Level"
                                                                        width={12}
                                                                        height={14}
                                                                        className="w-[12px] h-[14px] flex-shrink-0"
                                                                    />
                                                                    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-inter font-normal leading-[15px] sm:leading-[18px] lg:leading-[20px] text-[#51515f]">
                                                                        {job?.level}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                    </div>

                                                    <Button 
                                                        onClick={() => {}}
                                                        variant={job?.buttonStyle}
                                                        size="md"
                                                        link={true}
                                                        href={job?.buttonLink}
                                                        label='Apply Now'
                                                        blank={true}
                                                        icon={
                                                            <Image
                                                                src={job?.buttonStyle === 'primary' ? '/images/img_arrowright_white_a700.svg' : '/images/img_arrowright.svg'}
                                                                alt="Arrow"
                                                                width={16}
                                                                height={12}
                                                                className="w-[14px] h-[10px] sm:w-[16px] sm:h-[12px]"
                                                            />
                                                        }
                                                        iconPosition="right"
                                                    >
                                                        Apply Now
                                                    </Button>
												</div>
											</div>
										</div>
									</div>
									{index < jobPositions?.length - 1 && (
										<div className="w-full h-[1px] bg-[#e9e9ff] hidden lg:block" />
									)}
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

export default memo(Content);