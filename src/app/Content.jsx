'use client';
import React, { memo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import TechnologyTabs from '@/components/ui/TechnologyTabs';
import JoinUsLink from '@/components/ui/JoinUsLink';
import Badge from '@/components/common/Badge';
import Link from 'next/link';
import { products } from './products/ProductsContent';

const Content = () => {
    const router = useRouter();
    
    const handleCheckOpenPositions = () => {
        router.push('/careers#linno-open-positions');
    };
    
	return (
		<div className="min-h-screen bg-[#f2f5fb]">
			{/* Header */}
			<Header />
			{/* Main Content */}
			<main className="w-full">
				{/* Hero Section */}
				<section className="w-full">
					<div className="w-full max-w-[1440px] px-2 md:px-4 mx-auto py-12 md:py-16 lg:py-26">
						<div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-0 w-full">
							{/* Left Content */}
							<div className="flex flex-col gap-[21px] sm:gap-[32px] lg:gap-[42px] justify-start items-start w-full order-2 lg:order-1">
								{/* Innovation Badge */}
								<div className="flex flex-col gap-[11px] sm:gap-[17px] lg:gap-[22px] justify-start items-start w-full">
									<div className="w-full sm:w-4/5 lg:w-[60%]">
										<Badge
											highlight='Innovation.'
											text='Fueled by People'
											className='max-w-[330px] !py-2'
										/>
									</div>
									{/* Main Heading and Description */}
									<div className="flex flex-col gap-[15px] sm:gap-[23px] lg:gap-[30px] justify-start items-start w-full">
										<h1 className="text-[32px] sm:text-[48px] lg:text-[80px] font-sora md:text-[74px] leading-tight text-[#0b0b35] w-full">
											<span className="font-normal">High-End </span>
											<span className="font-bold">Software Solutions</span>
										</h1>
										<p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter font-normal leading-[22px] sm:leading-[26px] md:leading-[31px] lg:leading-[35px] text-[#51515f] w-full md:w-[70%]">
											Our expert developers can turn your innovative ideas into exceptional digital solutions.
										</p>
									</div>
								</div>
								{/* CTA Button */}
								<Button
									variant="primary"
									size="lg"
									link={true}
									href="/about"
									label="About Us"
									className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sora font-semibold leading-[18px] sm:leading-[20px] md:leading-[23px] lg:leading-[26px] text-[#ffffff] bg-[#3433fe] rounded-[10px] pt-[7px] sm:pt-[11px] lg:pt-[14px] pr-[16px] sm:pr-[24px] lg:pr-[32px] pb-[7px] sm:pb-[11px] lg:pb-[14px] pl-[16px] sm:pl-[24px] lg:pl-[32px] hover:bg-[#2d2bdb] active:bg-[#2622c4] transition-all duration-200 w-full sm:w-auto"
								/>
							</div>
							{/* Right Image */}
							<div className="flex justify-center items-center w-full order-1 lg:order-2 mb-6 lg:mb-0">
								<div className="w-full px-4 sm:px-0">
									<Image
										src="/images/hero-home.jpg"
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
				<section className="w-full bg-[linear-gradient(90deg,rgba(52,51,254,0.06)_9.32%,rgba(0,200,83,0.06)_100%)] mt-[40px] sm:mt-[60px] lg:mt-[80px] xl:mt-[118px] pt-[40px] sm:pt-[60px] lg:pt-[80px] xl:pt-[118px] pb-[40px] sm:pb-[60px] lg:pt-[80px] xl:pb-[112px]">
					<div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-center items-start w-full">
							{/* Section Header */}
							<div className="flex flex-col gap-[7px] sm:gap-[11px] lg:gap-[14px] justify-start items-center lg:items-start w-full lg:w-[68%] text-center lg:text-left">
								<h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-sora leading-[34px] sm:leading-[42px] md:leading-[50px] lg:leading-[61px] text-[#0b0b35] w-auto">
									<span className="font-normal">Our </span>
									<span className="font-bold">Brands</span>
								</h2>
								<p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter font-normal leading-[20px] sm:leading-[23px] md:leading-[27px] lg:leading-[30px] text-[#51515f] w-full">
									We empower businesses through our brands—WPFunnels and RexTheme—each designed to solve real-world challenges and accelerate growth.
								</p>
							</div>
							{/* Brand Cards */}
							<div className="flex flex-col lg:flex-row gap-[25px] sm:gap-[30px] lg:gap-[38px] xl:gap-[50px] justify-center items-stretch w-full mb-[13px] sm:mb-[20px] lg:mb-[26px]">
								{/* WPFunnels Card */}
								<div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[44px] xl:gap-[58px] justify-between items-start w-full lg:w-1/2 bg-[#ffffff66] border border-[#ffffff] rounded-[10px] pt-[20px] sm:pt-[24px] lg:pt-[30px] xl:pt-[34px] pr-[20px] sm:pr-[24px] lg:pr-[30px] xl:pr-[36px] pb-[20px] sm:pb-[24px] lg:pb-[30px] xl:pb-[34px] pl-[20px] sm:pl-[24px] lg:pl-[30px] xl:pl-[36px] shadow-[0_10px_50px_0_rgba(52,51,254,0.05)] backdrop-blur-[5px]">
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
										<p className="text-[16px] font-sora leading-[22px] sm:leading-[25px] md:leading-[28px] lg:leading-[32px] xl:leading-[36px] text-[#0b0b35] w-full">
											WPFunnels is a WordPress solutions brand behind WPFunnels, Mail Mint, and Creator LMS. Their tools empower creators and businesses with sales funnels, marketing automation, and eLearning solutions—all built to simplify workflows and maximize growth.
										</p>
									</div>
									<Button
										variant="outline"
										size="md"
										onClick={() => {
											window.open('https://getwpfunnels.com/', '_blank')
										}}
										className='hover:bg-[#2622c4] hover:text-white hover:font-semibold active:bg-[#2622c4] transition-all duration-200 hover:border-transparent'
									>
										Learn More
									</Button>
								</div>

								{/* RexTheme Card */}
								<div className="flex flex-col gap-[24px] sm:gap-[36px] lg:gap-[51px] xl:gap-[68px] justify-between items-start w-full lg:w-1/2 bg-[#ffffff66] border border-[#ffffff] rounded-[10px] pt-[20px] sm:pt-[22px] lg:pt-[28px] xl:pt-[32px] pr-[20px] sm:pr-[26px] lg:pr-[34px] xl:pr-[40px] pb-[20px] sm:pb-[22px] lg:pb-[28px] xl:pb-[32px] pl-[20px] sm:pl-[26px] lg:pl-[34px] xl:pl-[40px] shadow-[0_10px_50px_0_rgba(52,51,254,0.05)] backdrop-blur-[5px]">
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
										<p className="text-[16px] font-sora leading-[22px] sm:leading-[25px] md:leading-[28px] lg:leading-[32px] xl:leading-[36px] text-[#0b0b35] w-full">
											RexTheme develops premium WordPress plugins that help businesses grow online. Their solutions include tools for product feed generation, abandoned cart recovery, and immersive virtual tours—built to boost eCommerce performance and user engagement.
										</p>
									</div>
									<Button
										variant="outline"
										size="md"
										onClick={() => {
											window.open('https://rextheme.com/', '_blank')
										}}
										className='hover:bg-[#2622c4] hover:text-white hover:font-semibold active:bg-[#2622c4] transition-all duration-200 hover:border-transparent'
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
							<div className="flex flex-col justify-center items-start w-full]">
								<h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-[#0b0b35] w-auto mb-[34px]">
									<span className="font-normal">Our </span>
									<span className="font-bold">Key Products</span>
								</h2>
								<p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-[#51515f] w-full lg:w-[60%]">
									We thrive on innovation, teamwork, and continuous learning. Our workplace empowers people to do their best work while enjoying the journey together.
								</p>
							</div>
							{/* Products Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full mb-[6px] sm:mb-[9px] lg:mb-[12px]">
								{
									products.map((product, index) => (
										<div key={index} className="flex flex-col gap-[18px] sm:gap-[24px] lg:gap-[30px] xl:gap-[36px] justify-center items-center w-full bg-[linear-gradient(117deg,#3433fe0f_0%,_#00c8530f_100%)] rounded-[6px] pt-[15px] sm:pt-[18px] lg:pt-[22px] xl:pt-[20px] pr-[15px] sm:pr-[18px] lg:pr-[22px] xl:pr-[20px] pb-[15px] sm:pb-[18px] lg:pb-[22px] xl:pb-[20px] pl-[15px] sm:pl-[18px] lg:pl-[22px] xl:pl-[20px] hover:shadow-lg transition-shadow duration-300">
											<div className="flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] xl:gap-[20px] justify-start items-start w-full">
												<div className="flex justify-center items-center w-auto bg-[#ffffff] rounded-[10px] pt-[8px] sm:pt-[10px] lg:pt-[12px] xl:pt-[16px] pr-[7px] sm:pr-[9px] lg:pr-[11px] xl:pr-[14px] pb-[8px] sm:pb-[10px] lg:pb-[12px] xl:pb-[16px] pl-[7px] sm:pl-[9px] lg:pl-[11px] xl:pl-[14px]">
													<Image
														src={product.image}
														alt={product.title}
														width={34}
														height={24}
														className="w-auto h-auto"
													/>
												</div>
												<div className="flex flex-col gap-[6px] sm:gap-[8px] lg:gap-[9px] xl:gap-[10px] justify-start items-start w-full">
													<h3 className="text-[16px] sm:text-[18px] lg:text-[21px] xl:text-[24px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[27px] xl:leading-[31px] text-[#0b0b35] w-auto">
														{product.title}
													</h3>
													<p className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] font-inter font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] xl:leading-[26px] text-[#51515f] w-full">
														{product.description}
													</p>
												</div>
											</div>
											<div className="flex justify-start items-center w-full group cursor-pointer">
												<Link className='flex justify-start items-center' href={product.link} target='_blank'>
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
												</Link>
											</div>
										</div>
									))
								}
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
								<br />
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
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 relative z-40 mt-[-230px] md:mt-[-50px]">
									<div className="bg-transparent border-l border-r border-t-0 border-b-0 border-[1px] border-l-[rgb(70_68_210/0.62)] border-r-[rgba(255,255,255,0.48)] backdrop-blur-md rounded-xl p-6 text-left hover:scale-110 transition-all duration-300">
										<h2 className="text-2xl font-bold text-white">13+</h2>
										<p className="text-white/80 mt-2 text-sm">Successful Products</p>
									</div>

									<div className="bg-transparent border-l border-r border-t-0 border-b-0 border-[1px] border-l-[rgb(70_68_210/0.62)] border-r-[rgba(255,255,255,0.48)] backdrop-blur-md rounded-xl p-6 text-left hover:scale-110 transition-all duration-300">
										<h2 className="text-2xl font-bold text-white">50+</h2>
										<p className="text-white/80 mt-2 text-sm">Country Worldwide</p>
									</div>

									<div className="bg-transparent backdrop-blur-md rounded-xl p-6 text-left hover:scale-110 transition-all duration-300 border-l border-r border-t-0 border-b-0 border-[1px] border-l-[rgb(70_68_210/0.62)] border-r-[rgba(255,255,255,0.48)]">
										<h2 className="text-2xl font-bold text-white">12+</h2>
										<p className="text-white/80 mt-2 text-sm">Years of Experiences</p>
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
									onClick={handleCheckOpenPositions}
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
									src="/images/home-img2.jpg"
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
				<TechnologyTabs />

				{/* Join Us Section */}
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
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default memo(Content);