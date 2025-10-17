'use client';
import React, { memo } from "react";
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AboutHero from "./components/AboutHero";
import AboutVideo from "./components/AboutVideo";
import Facts from "./components/Facts";
import AboutCTA from "./components/AboutCTA";
import AboutTeam from "./components/AboutTeam";
import LinnoExistance from "./components/LinnoExistance";
import Journey from "./components/Journey";
import Solution from "./components/Solution";
import Quote from "./components/Quote";

const Content = () => {
    return (
        <div className="linno-about-page">
            <div className="linno-grid-line">
				<div className="line-wrapper">
					<span className="single-line line-left"></span>
					<span className="single-line line-right"></span>
				</div>
            </div>

            <Header />
            <AboutHero />
            <AboutVideo />
            <Facts />
            <LinnoExistance />
            <Journey />
            <Solution />
            <Quote />
            <AboutTeam />
            <AboutCTA />
            <Footer />
        </div>
    );
};

export default memo(Content);
