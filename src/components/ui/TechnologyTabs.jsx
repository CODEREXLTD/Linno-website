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
            { name: "Figma", bg: "#e8e4ff", img: <svg fill="none" width="79" height="77" viewBox="0 0 79 77" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_36_702)"><path fill="#F2F2F2" d="M65.26 0H12.99C5.817 0 0 5.816 0 12.99v50.313c0 7.175 5.816 12.99 12.99 12.99h52.27c7.174 0 12.99-5.815 12.99-12.99V12.991C78.25 5.816 72.434 0 65.26 0z"/><g clipPath="url(#clip1_36_702)"><path fill="#0ACF83" d="M32.418 60.383a8.218 8.218 0 008.23-8.23v-8.231h-8.23a8.218 8.218 0 00-8.23 8.23 8.218 8.218 0 008.23 8.23z"/><path fill="#A259FF" d="M24.188 35.691a8.218 8.218 0 018.23-8.23h8.23v16.46h-8.23a8.218 8.218 0 01-8.23-8.23z"/><path fill="#F24E1E" d="M24.188 19.23a8.218 8.218 0 018.23-8.23h8.23v16.46h-8.23a8.218 8.218 0 01-8.23-8.23z"/><path fill="#FF7262" d="M40.648 11h8.23a8.218 8.218 0 018.231 8.23 8.218 8.218 0 01-8.23 8.23h-8.23V11z"/><path fill="#1ABCFE" d="M57.11 35.691a8.218 8.218 0 01-8.231 8.23 8.218 8.218 0 01-8.23-8.23 8.218 8.218 0 018.23-8.23 8.218 8.218 0 018.23 8.23z"/></g></g><defs><clipPath id="clip0_36_702"><path fill="#fff" d="M0 0h78.25v76.416H0z"/></clipPath><clipPath id="clip1_36_702"><path fill="#fff" d="M0 0h49v49H0z" transform="translate(15 11)"/></clipPath></defs></svg> },
            { name: "Sketch", bg: "#dddddd", img: <svg fill="none" width="79" height="77" viewBox="0 0 79 77" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_36_716)"><path fill="#F2F2F2" d="M65.26 0H12.99C5.817 0 0 5.816 0 12.99v50.313c0 7.175 5.816 12.99 12.99 12.99h52.27c7.174 0 12.99-5.815 12.99-12.99V12.991C78.25 5.816 72.434 0 65.26 0z"/><g clipPath="url(#clip1_36_716)"><path fill="#FDB300" d="M39 8L22.091 9.808 9 27.584 39 62.92l30-35.336L55.91 9.808 39 8z"/><path fill="#EB6C00" d="M9 27.584L39 62.92 21.151 27.584H9zm47.848 0L39 62.92l30-35.336H56.848z"/><path fill="#FDAD00" d="M21.151 27.584L39 62.92l17.849-35.336H21.15z"/><path fill="#FDD231" d="M22.091 9.808l-.94 17.776L39 8 22.091 9.808zm34.757 17.776L55.91 9.808 39 8l17.848 19.584z"/><path fill="#FDAD00" d="M56.849 27.584h12.15L55.91 9.809l.94 17.775zM9 27.584h12.151l.94-17.775L9 27.584z"/><path fill="#FEEEB7" d="M39 8L21.151 27.584H56.85L39 8z"/></g></g><defs><clipPath id="clip0_36_716"><path fill="#fff" d="M0 0h78.25v76.416H0z"/></clipPath><clipPath id="clip1_36_716"><path fill="#fff" d="M0 0h60v55H0z" transform="translate(9 8)"/></clipPath></defs></svg> },
            { name: "Adobe XD", bg: "#d7eadb", img: <svg fill="none" width="79" height="77" viewBox="0 0 79 77" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_36_731)"><path fill="#470137" d="M65.26 0H12.99C5.817 0 0 5.816 0 12.99v50.313c0 7.175 5.816 12.99 12.99 12.99h52.27c7.174 0 12.99-5.815 12.99-12.99V12.991C78.25 5.816 72.434 0 65.26 0z"/><path fill="#FF61F6" d="M41.136 20.064l-9.764 16.115 10.446 17.113a.54.54 0 01.053.394c-.017.056-.052.07-.105.073l-.06-.001-.072-.002a.805.805 0 00-.13.01h-7.532l-.148-.003c-.406-.01-.699-.069-.877-.366a995.193 995.193 0 00-2.1-4.068 143.601 143.601 0 00-1.938-3.597l-.293-.524a239.166 239.166 0 01-2.336-4.252h-.052a163.65 163.65 0 01-2.179 4.2c-.753 1.4-1.496 2.79-2.23 4.173a185.588 185.588 0 01-2.258 4.12c-.123.278-.33.337-.616.346l-.119.002h-7.222l-.103.01c-.057.003-.091-.009-.102-.095a.53.53 0 01.078-.368l10.131-16.64-9.868-16.692c-.105-.14-.123-.253-.053-.341a.382.382 0 01.315-.132h7.402a1.1 1.1 0 01.472.08c.125.07.233.169.315.288.63 1.4 1.33 2.8 2.1 4.2a227.93 227.93 0 002.336 4.146 58.673 58.673 0 012.178 4.147h.053c.687-1.41 1.396-2.81 2.126-4.2a312.929 312.929 0 012.204-4.12c.743-1.365 1.47-2.738 2.179-4.12a.81.81 0 01.21-.342.764.764 0 01.42-.079h6.876a.3.3 0 01.29.5l-.027.025zm15.426 34.379l-.361.004a16.261 16.261 0 01-7.008-1.47 11.142 11.142 0 01-4.908-4.436c-1.16-1.924-1.754-4.322-1.784-7.194l-.001-.233c-.02-2.41.596-4.781 1.785-6.877a13.105 13.105 0 015.017-4.941l.18-.098c2.274-1.26 5.02-1.89 8.24-1.89l.141.002.161.005.18.008.201.011.337.024.381.03.28.025V17.072c0-.245.104-.367.314-.367h6.615a.278.278 0 01.314.314v31.024c0 .52.02 1.081.06 1.682l.099 1.362.052.787a.543.543 0 01-.315.526 26.049 26.049 0 01-5.302 1.574 28.422 28.422 0 01-4.678.469zm2.84-6.505v-14.33a5.195 5.195 0 00-.866-.158 10.37 10.37 0 00-1.076-.053 8.1 8.1 0 00-3.674.84 7.184 7.184 0 00-2.756 2.415c-.693 1.013-1.051 2.337-1.075 3.97l-.001.177a9.262 9.262 0 00.55 3.359 6.39 6.39 0 001.471 2.31 5.594 5.594 0 002.205 1.312 8.65 8.65 0 002.703.42c.49 0 .944-.017 1.365-.053.335-.025.667-.08.992-.164l.163-.045z"/></g><defs><clipPath id="clip0_36_731"><path fill="#fff" d="M0 0h78.25v76.416H0z"/></clipPath></defs></svg> },
            { name: "Miro", bg: "#fff6cd", img: <svg fill="none" width="79" height="79" viewBox="0 0 79 79" xmlns="http://www.w3.org/2000/svg"><path fill="#FD3" d="M0 19.546C0 8.76 8.765 0 19.56 0h39.127c10.8 0 19.564 8.757 19.564 19.546v39.088c0 10.79-8.765 19.546-19.564 19.546H19.56C8.765 78.183 0 69.423 0 58.637V19.546z"/><path fill="#1C1C1E" fillRule="evenodd" d="M52.018 14.915H44.92l5.923 10.39-13.022-10.39h-7.097l6.511 12.69-13.607-12.69h-7.097L23.63 31.08l-7.097 32.33h7.097l13.607-34.63-6.51 34.63h7.096l13.022-36.949-5.923 36.95h7.097L65.04 23.004 52.018 14.93v-.015z" clipRule="evenodd"/></svg> },
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
        <section className="linno-technology-section section-wrapper">
            <div className="linno-container">
                <div className="flex flex-col gap-[25px] md:gap-[42px] justify-start items-center w-full">
                    {/* Section Header */}
                    <div className="section-info-wrapper">
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
                    <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-3 lg:gap-4 w-full">
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
                                    className="tab-content-card"
                                >
                                    {item.img}
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
