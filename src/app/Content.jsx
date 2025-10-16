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
			<div className="grid-line">
				<div className="line-wrapper">
					<span className="single-line line-left"></span>
					<span className="single-line line-right"></span>
				</div>
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