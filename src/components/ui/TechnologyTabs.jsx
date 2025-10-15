"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const tabs = [
    { key: "backend", label: "Backend" },
    { key: "frontend", label: "Frontend" },
    { key: "devops", label: "DevOps/Server" },
    { key: "languages", label: "Languages" },
    { key: "uiux", label: "UI/UX" },
    { key: "other", label: "Other Technologies" },
];

export default function TechnologyTabs() {
    const [activeTab, setActiveTab] = useState("backend");

    const tabContents = {
        uiux: [
            { name: "Figma", bg: "#e8e4ff", img: "/images/img_vector_gray_900_01.svg" },
            { name: "Sketch", bg: "#dddddd", img: "/images/img_vector_gray_900_02.svg" },
            { name: "Adobe XD", bg: "#d7eadb", img: "/images/img_vector_gray_900_01_76x78.svg" },
            { name: "Miro", bg: "#fff6cd", img: "/images/img_vector_gray_900_03.svg" },
        ],
        languages: [
            { name: "JavaScript", bg: "#fce4e4", img: "/images/img_js.svg" },
            { name: "Python", bg: "#e4f0fc", img: "/images/img_python.svg" },
            { name: "TypeScript", bg: "#e4fcf6", img: "/images/img_ts.svg" },
            { name: "Go", bg: "#f9f4e4", img: "/images/img_go.svg" },
        ],
        frontend: [
            { name: "React", bg: "#e4f0fc", img: "/images/img_react.svg" },
            { name: "Vue", bg: "#e4fcea", img: "/images/img_vue.svg" },
            { name: "Next.js", bg: "#f4e4fc", img: "/images/img_next.svg" },
            { name: "Tailwind", bg: "#fff6cd", img: "/images/img_tailwind.svg" },
        ],
        backend: [
            { name: "Node.js", bg: "#e4f0fc", img: "/images/img_node.svg" },
            { name: "Express", bg: "#e4fcf6", img: "/images/img_express.svg" },
            { name: "Django", bg: "#fce4e4", img: "/images/img_django.svg" },
            { name: "Laravel", bg: "#fff6cd", img: "/images/img_laravel.svg" },
        ],
        devops: [
            { name: "Docker", bg: "#e4f0fc", img: "/images/img_docker.svg" },
            { name: "Kubernetes", bg: "#e4fcf6", img: "/images/img_k8s.svg" },
            { name: "AWS", bg: "#fce4e4", img: "/images/img_aws.svg" },
            { name: "Terraform", bg: "#fff6cd", img: "/images/img_terraform.svg" },
        ],
        other: [
            { name: "Figma Plugins", bg: "#e8e4ff", img: "/images/img_plugin.svg" },
            { name: "Notion", bg: "#dddddd", img: "/images/img_notion.svg" },
            { name: "Slack", bg: "#d7eadb", img: "/images/img_slack.svg" },
            { name: "Zoom", bg: "#fff6cd", img: "/images/img_zoom.svg" },
        ],
    };

    return (
        <section className="w-full my-[59px] sm:my-[89px] lg:my-[118px]">
            <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] justify-start items-center w-full">
                    {/* Section Header */}
                    <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] items-center text-center max-w-3xl">
                        <h2 className="section-title">
                            <span className="font-normal">Technology </span>
                            <span className="title-gradient">We Use</span>
                        </h2>
                        <p className="section-description">
                            We thrive on innovation, teamwork, and continuous learning. Our
                            workplace empowers people to do their best work while enjoying the
                            journey together.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`tab transition-all duration-200 
                                            ${activeTab === tab.key ? "active-tab" : ""} 
                                        `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                            {tabContents[activeTab].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col justify-between items-start rounded-[10px] p-6"
                                    style={{ backgroundColor: item.bg }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={78}
                                        height={78}
                                        className="w-16 lg:w-20 h-auto mb-6"
                                    />
                                    <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-sora text-[#141618]">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
