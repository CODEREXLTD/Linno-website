'use client';
import React, { memo } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TechnologyTabs from '@/components/ui/TechnologyTabs';
import HomeHero from './components/HomeHero';
import HomeBrands from './components/HomeBrands';
import Products from './components/Products';
import Globe from './components/Globe';
import LifeAtLinno from './components/LifeAtLinno';
import HomeCTA from './components/HomeCTA';

const Content = () => {
    
	return (
		<div className="linno-home-page">
			<div className="linno-grid-line">
				<div className="line-wrapper">
					<span className="single-line line-left"></span>
					<span className="single-line line-right"></span>
				</div>
            </div>

			<div className="hero-top-gradient">
				<svg width="1060" height="391" fill="none" viewBox="0 0 1060 391" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_6029_516)"><path fill="url(#paint0_radial_6029_516)" fillOpacity=".2" d="M912.42 24.265c122.72-357.905-4.87-725.901-284.974-821.943-280.105-96.042-132.351 61.329-255.068 419.234-122.718 357.904-509.501 465-62.001 589C590.482 306.597 789.702 382.17 912.42 24.265z"/></g><defs><radialGradient id="paint0_radial_6029_516" cx="0" cy="0" r="1" gradientTransform="matrix(-574.244 -162.981 -248.115 809.648 584.774 -91.799)" gradientUnits="userSpaceOnUse"><stop stopColor="#3433FE"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient><filter id="filter0_f_6029_516" width="1059.1" height="1315.62" x=".003" y="-925.348" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_6029_516" stdDeviation="50"/></filter></defs></svg>
			</div>

			<Header />
			
			<div className="w-full">
				<HomeHero />
				<HomeBrands />
				<Products />
				<Globe />
				<LifeAtLinno />
				<TechnologyTabs />
				<HomeCTA />
			</div>

			<Footer />
		</div>
	);
};

export default memo(Content);