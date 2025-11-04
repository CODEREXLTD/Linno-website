'use client';
import React, { memo, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from './components/Hero';
import WhyWorkAtLinno from './components/WhyWorkAtLinno';
import CompanyBenefits from './components/CompanyBenefits';
import CultureSection from './components/CultureSection';
import OpenPositions from './components/OpenPositions';
import Facts from '../about/components/Facts';

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
		<div className="linno-career-page">
			<div className="linno-grid-line">
				<div className="line-wrapper">
					<span className="single-line line-left"></span>
					<span className="single-line line-right"></span>
				</div>
            </div>

			<Header />
			<Hero />
			<Facts />
			<WhyWorkAtLinno />
			<CompanyBenefits />
			<CultureSection />
			<OpenPositions />
			<Footer />
		</div>
	);
};

export default memo(Content);