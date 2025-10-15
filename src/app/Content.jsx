'use client';
import React, { memo } from 'react';
import Image from 'next/image';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import TechnologyTabs from '@/components/ui/TechnologyTabs';
import JoinUsLink from '@/components/ui/JoinUsLink';
import Badge from '@/components/common/Badge';
import Link from 'next/link';
import { products } from './products/ProductsContent';
import HomeHero from './components/HomeHero';
import HomeBrands from './components/HomeBrands';
import Products from './components/Products';
import Globe from './components/Globe';
import LifeAtLinno from './components/LifeAtLinno';
import HomeCTA from './components/HomeCTA';

const Content = () => {
    
	return (
		<div className="min-h-screen bg-[#f2f5fb]">
			<Header />
			
			<main className="w-full">
				<HomeHero />
				<HomeBrands />
				<Products />
				<Globe />
				<LifeAtLinno />
				<TechnologyTabs />
				<HomeCTA />
			</main>

			<Footer />
		</div>
	);
};

export default memo(Content);