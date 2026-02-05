'use client';
import Separator from '@/components/common/Separator';
import Image from 'next/image';
import { memo, useState, useEffect } from 'react';

const AboutTeam = () => {
    const [allTeamMembers, setAllTeamMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch active team members from API
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch('/api/team?active=true');
                const data = await response.json();
                if (data.success) {
                    setAllTeamMembers(data.data);
                }
            } catch (error) {
                console.error('Error fetching team members:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    const departmentList = [
        { name: 'Founder & Visionary', key: 'founder' },
        { name: 'Leadership Team', key: 'leadership' },
        { name: 'Finance', key: 'financial' },
        // { name: 'Human Resources', key: 'human-resources' },
        { name: 'Engineering Team', key: 'engineering' },
        { name: 'Marketing Team', key: 'marketing' },
        { name: 'Design Team', key: 'product' },
        { name: 'Customer Success', key: 'customer' },
        { name: 'Office Assistant', key: 'assistant' },
    ];

    const [activeTab, setActiveTab] = useState('leadership');

    // Filter team members based on active tab
    const filteredTeamMembers = allTeamMembers.filter((member) => {
        if (Array.isArray(member.department)) {
            return member.department.includes(activeTab);
        }
        return member.department === activeTab;
    });

    // Create departments array with active state for rendering
    const departments = departmentList.map((dept) => ({
        name: dept.name,
        key: dept.key,
        active: dept.key === activeTab,
    }));

    const handleTabClick = (departmentKey) => {
        setActiveTab(departmentKey);
    };
    return (
        <>
            <section className="linno-team">
                <div className="linno-new-container">
                    <div className="linno-section-title">
                        <h2>
                            Meet Our <span className="title-gradient">Teams</span>
                        </h2>
                        <p>
                            We combine expert resources with the latest technologies to deliver high-quality
                            software solutions for your business.
                        </p>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3433FE]"></div>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Side - Department Filter */}
                            <div className="w-full lg:w-1/3 lg:sticky lg:top-20 self-start">
                                <div className="filter-wrapper space-y-4 sm:space-y-6 lg:space-y-8 mt-0 md:mt-4 lg:mt-10">
                                    {departments?.map((dept, index) => (
                                        <div
                                            key={index}
                                            className={`single-filter-item flex items-center gap-3 sm:gap-4 lg:gap-5 cursor-pointer group ${dept?.active ? 'active' : '' }`}
                                            onClick={() => handleTabClick(dept.key)}
                                        >
                                            <div
                                                className={`dash-line w-[16px] sm:w-[18px] lg:w-[20px] h-[1px] transition-colors duration-200 ${dept?.active ? 'bg-[#3433fe]' : 'bg-[#0f0e55] group-hover:bg-[#3433fe]'
                                                    }`}
                                            ></div>
                                            <span
                                                className={`filter-title text-[14px] lg:text-[18px] xl:text-[20px] font-medium lg:font-bold font-sans leading-[20px] sm:leading-[22px] lg:leading-[24px] transition-colors duration-200 ${dept?.active
                                                    ? 'text-[#3433fe]'
                                                    : 'text-[#0f0e55] group-hover:text-[#3433fe]'
                                                    }`}
                                            >
                                                {dept?.name}
                                            </span>
                                            {dept?.active && (
                                                <svg
                                                    width="19"
                                                    height="20"
                                                    fill="none"
                                                    viewBox="0 0 19 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke="#FFC933"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M15.369 1.5v2.55h2.55m-7.31 4.76l7.31-7.31"
                                                    />
                                                    <path
                                                        fill="#FFC933"
                                                        stroke="#FFC933"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M9.418 11.7a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4z"
                                                    />
                                                    <path
                                                        stroke="#3433FE"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M9.673 4.9h-.255a5.1 5.1 0 105.1 5.1v-.255"
                                                    />
                                                    <path
                                                        stroke="#3433FE"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M11.969 1.926a8.44 8.44 0 105.525 5.524m-13.77 8.84L2.619 18.5m12.495-2.21l1.105 2.21"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Team Grid */}
                            <div className="w-full lg:w-2/3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                                    {filteredTeamMembers?.map((member) => (
                                        <div
                                            key={member?.id}
                                            className="bg-[#ffffff] rounded-[10px] shadow-[0px_9px_13px_#6d688921] hover:shadow-[0px_15px_25px_#6d688930] transition-shadow duration-300 p-2 sm:p-3 lg:p-[6px] group"
                                        >
                                            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-7">
                                                <div className="w-full h-[250px] sm:h-[280px] lg:h-[328px] rounded-[8px] overflow-hidden bg-[#f2f7ff] relative">
                                                    <Image
                                                        src={member?.image}
                                                        alt={member?.name}
                                                        width={350}
                                                        height={328}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                                <div className="px-4 sm:px-5 lg:px-5 pb-4 sm:pb-5 lg:pb-6">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <svg
                                                                className="mb-1"
                                                                width="18"
                                                                height="18"
                                                                fill="none"
                                                                viewBox="0 0 18 18"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="1.5"
                                                                    clipPath="url(#clip0_26_541)"
                                                                >
                                                                    <path
                                                                        stroke="#21F0A8"
                                                                        d="M13.758 1.64v2.25h2.25m-6.45 4.2l6.45-6.45"
                                                                    />
                                                                    <path
                                                                        fill="#21F0A8"
                                                                        stroke="#21F0A8"
                                                                        d="M8.507 10.64a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                                                    />
                                                                    <path
                                                                        stroke="#3433FE"
                                                                        d="M8.732 4.64h-.225a4.5 4.5 0 104.5 4.5v-.225"
                                                                    />
                                                                    <path
                                                                        stroke="#3433FE"
                                                                        d="M10.758 2.015a7.447 7.447 0 104.875 4.875m-12.15 7.8l-.975 1.95m11.025-1.95l.975 1.95"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_26_541">
                                                                        <path fill="#fff" d="M0 0h18v18H0z" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <div className="flex flex-col gap-1 sm:gap-2 lg:gap-2 flex-1 min-w-0">
                                                                <h3 className="text-[14px] sm:text-[15px] lg:text-[17px] font-bold font-sans leading-[17px] sm:leading-[19px] lg:leading-[21px] text-[#0f0e55] truncate">
                                                                    {member?.name}
                                                                </h3>
                                                                <p className="text-[12px] sm:text-[13px] lg:text-[15px] font-sans leading-[15px] sm:leading-[17px] lg:leading-[19px] text-[#787878] line-clamp-2">
                                                                    {member?.position}
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Empty State */}
                                {filteredTeamMembers.length === 0 && !isLoading && (
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <p className="text-[16px] font-sans text-[#787878]">
                                            No team members found for this department.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Separator />
        </>
    );
};

export default memo(AboutTeam);
