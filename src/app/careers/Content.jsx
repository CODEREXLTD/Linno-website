'use client';
import React, { memo, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from './components/Hero';
import WhyWorkAtLinno from './components/WhyWorkAtLinno';
import CompanyBenefits from './components/CompanyBenefits';
import CultureSection from './components/CultureSection';
import OpenPositions from './components/OpenPositions';

const Content = () => {
    // Handle scrolling to section when page loads with hash
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#linno-open-positions') {
            setTimeout(() => {
                const element = document.getElementById('linno-open-positions');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Small delay to ensure the page is fully rendered
        }
    }, []);

	return (
		<div className="w-full bg-[#f2f5fb]">
			<Header />
			
			<main className="w-full">
				<Hero />
				<WhyWorkAtLinno />
				<CompanyBenefits />
				<CultureSection />
				<OpenPositions />
			</main>

			<Footer />
		</div>
	);
};

export default memo(Content);