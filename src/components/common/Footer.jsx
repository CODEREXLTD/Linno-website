'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export const socialLinks = [
		{
		name: 'LinkedIn',
		icon: <svg fill="none" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200"><path fill="#9C9CE4" className="group-hover:fill-[#3433FE] transition-colors duration-200" d="M17.273 0H2.727A2.727 2.727 0 000 2.727V17.27a2.727 2.727 0 002.727 2.727h14.546A2.728 2.728 0 0020 17.27V2.727A2.727 2.727 0 0017.273 0zM6.818 15.825a.421.421 0 01-.421.423H4.6a.42.42 0 01-.423-.423v-7.53a.423.423 0 01.423-.423h1.797a.423.423 0 01.421.422v7.531zm-1.32-8.667a1.705 1.705 0 110-3.41 1.705 1.705 0 010 3.41zm10.711 8.697a.388.388 0 01-.389.388h-1.93a.389.389 0 01-.389-.388v-3.528c0-.527.155-2.309-1.378-2.309-1.188 0-1.43 1.22-1.478 1.767v4.074a.388.388 0 01-.383.389H8.395a.386.386 0 01-.387-.389V8.261a.388.388 0 01.387-.388h1.866a.389.389 0 01.389.388v.657c.44-.662 1.094-1.171 2.489-1.171 3.088 0 3.068 2.883 3.068 4.467l.002 3.64z" /></svg>,
		size: { width: 20, height: 20 },
		href: 'https://www.linkedin.com/company/coderex-ltd/'
	},
	{
		name: 'Facebook',
		icon: <svg fill="none" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200"><path fill="#9C9CE4" className="group-hover:fill-[#3433FE] transition-colors duration-200" fillRule="evenodd" d="M10 0c1.863.021 3.545.479 5.048 1.373a10.077 10.077 0 013.587 3.61c.889 1.511 1.344 3.204 1.365 5.078-.053 2.564-.861 4.754-2.426 6.57-1.565 1.815-3.568 2.938-5.643 3.369v-7.188h1.961l.444-2.825h-2.97v-1.85c-.016-.384.105-.76.342-1.063.238-.302.656-.462 1.255-.477h1.793V4.122a15.25 15.25 0 00-.732-.098 14.556 14.556 0 00-1.58-.098c-1.196.005-2.142.343-2.837 1.012-.695.668-1.05 1.636-1.066 2.902v2.147h-2.26v2.825h2.26V20c-2.547-.43-4.55-1.554-6.115-3.37C.861 14.815.053 12.625 0 10.06c.021-1.873.476-3.566 1.365-5.078a10.078 10.078 0 013.587-3.609C6.455.48 8.137.021 10 0z" clipRule="evenodd" /></svg>,
		size: { width: 18, height: 18 },
		href: 'https://www.facebook.com/coderexco'
	},
	{
		name: 'X',
		icon: <svg fill="none" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200"><rect width="20" height="20" fill="#9C9CE4" className="group-hover:fill-[#3433FE] transition-colors duration-200" rx="3" /><path fill="#fff" d="M5.025 5l3.956 5.29L5 14.59h.896l3.485-3.765 2.816 3.765h3.05l-4.18-5.587L14.774 5h-.896l-3.21 3.468L8.074 5h-3.05zm1.318.66h1.4l6.185 8.27h-1.4L6.343 5.66z" /></svg>,
		size: { width: 20, height: 16 },
		href: 'https://x.com/coderexco'
	},
	{
		name: 'Instagram',
		icon: <svg fill="none" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200"><path fill="#9C9CE4" className="group-hover:fill-[#3433FE] transition-colors duration-200" d="M10 12.391a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2z" /><path fill="#9C9CE4" className="group-hover:fill-[#3433FE] transition-colors duration-200" d="M10 0C4.477 0 0 4.477 0 9.999s4.477 9.998 10 9.998S20 15.521 20 10c0-5.523-4.477-10-10-10zm6.178 12.54c-.048.95-.315 1.888-1.008 2.573-.7.692-1.641.95-2.601.998H7.43c-.96-.048-1.902-.306-2.601-.998-.693-.685-.96-1.622-1.008-2.573V7.457c.048-.95.315-1.888 1.008-2.573.7-.692 1.641-.95 2.601-.997h5.138c.96.047 1.902.305 2.601.997.693.685.96 1.623 1.008 2.573v5.083z" /><path fill="#9C9CE4" className="group-hover:fill-[#3433FE] transition-colors duration-200" d="M12.502 5.145a121.793 121.793 0 00-5.007 0c-.651.018-1.39.18-1.854.676-.482.515-.664 1.137-.683 1.833-.032 1.222 0 4.89 0 4.89.022.696.201 1.318.683 1.833.464.496 1.203.658 1.854.676 1.251.034 3.756.034 5.007 0 .652-.018 1.39-.18 1.854-.676.482-.515.664-1.137.683-1.833v-4.89c-.019-.696-.2-1.318-.683-1.833-.464-.496-1.202-.658-1.854-.676zm-2.504 8.208a3.255 3.255 0 110-6.51 3.255 3.255 0 010 6.51zm3.27-5.837a.651.651 0 110-1.302.651.651 0 010 1.302z" /></svg>,
		size: { width: 18, height: 18 },
		href: 'https://www.instagram.com/coderexco/'
	}
];
const Footer = () => {
	const quickLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Products', href: '/products' },
		{ name: 'Careers', href: '/careers' }
	];

	const otherLinks = [
		{ name: 'About Us', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact', href: '/contact' }
	];

	

	return (
		<footer className="relative bg-white w-full bg-[radial-gradient(121.21%_104.42%_at_-7.03%_-6.12%,rgba(255,255,255,0.12)_13.46%,rgba(128,163,238,0.12)_36.79%,rgba(112,189,234,0.12)_64.06%,rgba(33,240,168,0.12)_100%)]
 mt-auto">
			<div className="linno-new-container">
				<div className="pt-[28px] sm:pt-[42px] lg:pt-[56px] pb-[28px] sm:pb-[42px] lg:pb-[56px]">
					<div className="flex flex-col gap-[29px] sm:gap-[44px] lg:gap-[58px]">
						{/* Main Footer Content */}
						<div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mt-[19px] sm:mt-[29px] lg:mt-[38px]">
							{/* Company Info */}
							<div className="flex flex-col items-center lg:items-start gap-[20px] sm:gap-[30px] lg:gap-[40px] w-full lg:w-[300px] xl:w-[350px]">
								<div className="w-[104px] sm:w-[139px] lg:w-[174px]">
									<Link href="/" className="block">
										<Image
											src="/images/logo.svg"
											alt="Linno Logo"
											width={174}
											height={30}
											className="w-full h-auto hover:scale-105 transition-transform duration-200"
											loading="lazy"
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
										<span className="sm:hidden"> </span>Panthapath, Dhaka 1205
									</address>
								</div>
							</div>

							{/* Links Section */}
							<div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center sm:items-start gap-8 sm:gap-12 lg:gap-16 w-full lg:flex-1 max-w-full lg:max-w-[700px] 2xl:max-w-[820px]">

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
								<div className="flex flex-col gap-[15px] sm:gap-[18px] lg:gap-[20px] items-center sm:items-start w-full sm:w-auto lg:mr-[auto] ml-[0] lg:ml-[70px]">
									<h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-sora font-bold leading-[20px] sm:leading-[22px] lg:leading-[23px] text-global-1">
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
								<div className="flex flex-col gap-[15px] sm:gap-[18px] lg:gap-[20px] items-center sm:items-start w-full sm:w-auto lg:mr-[auto] ml-[0] lg:ml-[70px]">
									<h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-sora font-bold leading-[20px] sm:leading-[22px] lg:leading-[23px] text-global-1">
										Follow Us
									</h3>
									<nav className="flex flex-col items-start gap-[8px] sm:gap-[10px] lg:gap-[12px] text-sm sm:text-base lg:text-lg font-inter font-medium leading-[24px] sm:leading-[28px] lg:leading-[32px] text-global-5 text-center sm:text-left pt-[3px] sm:pt-[4px] lg:pt-0">
										{socialLinks?.map((social, index) => (
											<Link
												key={index}
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
												className="flex gap-[8px] sm:gap-[10px] lg:gap-[12px] justify-center lg:justify-start items-center w-auto group focus:outline-none focus:ring-2 focus:ring-global-3 focus:ring-opacity-50 rounded px-2 py-1 transition-all duration-200"
												aria-label={`Follow us on ${social.name}`}
											>
												{social?.icon && (
													<span className="inline-flex items-center justify-center">
														{React.cloneElement(social.icon, { width: social.size.width, height: social.size.height })}
													</span>
												)}
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
							<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg font-inter font-medium leading-[18px] sm:leading-[19px] lg:leading-[20px] text-global-5 text-center sm:text-right order-1 sm:order-2" >
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
			</div>
		</footer>
	);
};

export default Footer;