'use client';
import React, { memo } from "react";
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AboutHero from "./components/AboutHero";
import AboutVideo from "./components/AboutVideo";
import AboutValues from "./components/AboutValues";
import AboutCTA from "./components/AboutCTA";
import AboutTeam from "./components/AboutTeam";

const Content = () => {
    return (
        <div className="w-full bg-[#ffffff]">
            <Header />
            <AboutHero />
            <AboutVideo />
            <AboutValues />
            <AboutTeam />
            <AboutCTA />
            <Footer />
        </div>
    );
};

export default memo(Content);
