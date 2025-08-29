'use client';
import React, { useState } from "react";
import Image from "next/image";
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EditText from '@/components/ui/EditText';
const AboutUsPage = () => {
      const benefits = [
		{
			icon: '/images/img_icon_white_a700.svg',
			title: 'Fastival\nBonuses',
            spanText: [
                { text: 'Fastival ', weight: 'font-bold' },
                { text: 'Bonuses', weight: 'font-normal' }
            ]
		},
		{
			icon: '/images/img_icon_white_a700_62x62.svg',
			title: 'Performance\nBonus',
            spanText: [
                { text: 'Performance ', weight: 'font-bold' },
                { text: 'Bonus', weight: 'font-normal' }
            ]
		},
		{
			icon: '/images/img_icon_62x62.svg',
			title: 'Yearly \ncompany tour',
            spanText: [
                { text: 'Yearly ', weight: 'font-bold' },
                { text: 'company tour', weight: 'font-normal' }
            ]
		},
		{
			icon: '/images/img_icon_1.svg',
			title: 'Yearly \nsalary review',
            spanText: [
                { text: 'Yearly ', weight: 'font-bold' },
                { text: 'salary review', weight: 'font-normal' }
            ]
		},
		{
			icon: '/images/img_icon_2.svg',
			title: 'Lunch and\nUnlimited Coffee',
			spanText: [
				{ text: 'Lunch ', weight: 'font-bold' },
				{ text: 'and\nUnlimited Coffee', weight: 'font-normal' }
			]
		},
		{
			icon: '/images/img_icon_3.svg',
			title: 'Marriage \nBonus and Leave',
			spanText: [
				{ text: 'Marriage \n', weight: 'font-bold' },
				{ text: 'Bonus and Leave', weight: 'font-normal' }
			]
		},
		{
			icon: '/images/img_icon_4.svg',
			title: 'Competitive\nSalary'
		},
		{
			icon: '/images/img_icon_5.svg',
			title: 'Paid training to improve skills',
			spanText: [
				{ text: 'Paid training', weight: 'font-bold' },
				{ text: ' to improve skills', weight: 'font-normal' }
			]
		},
		{
			icon: '/images/img_icon_6.svg',
			title: 'Parental Bonus and Leave',
			spanText: [
				{ text: 'Parental ', weight: 'font-bold' },
				{ text: 'Bonus and Leave', weight: 'font-normal' }
			]
		}
	];
  const statistics = [
    {
      number: "30+",
      description: "Team members all over the world",
      bgColor: "bg-[#f8f8ff]",
      icon: "/images/img_roundcube_blue_glossy.png"
    },
    {
      number: "300+",
      description: "We have successfully completed a total of 300+ projects",
      bgColor: "bg-[#f8fcff]",
      icon: "/images/img_supertoroid_white_glossy.png"
    },
    {
      number: "12+",
      description: "Years of experience",
      bgColor: "bg-[#fffaf8]",
      icon: "/images/img_cone_orange_glossy.png"
    }
  ];
  const values = [
    {
      title: "Passion",
      description: "Passion is a powerful and intense emotion or enthusiasm for something, often driving individuals",
      image: "/images/img_credit_cards_my.png",
      icon: "/images/img_solar_fire_bold_duotone.svg"
    },
    {
      title: "Trust",
      description: "Passion is a powerful and intense emotion or enthusiasm for something, often driving individuals",
      image: "/images/img_credit_cards_my_388x610.png",
      icon: "/images/img_solar_fire_bold_duotone.svg"
    },
    {
      title: "Leadership",
      description: "Passion is a powerful and intense emotion or enthusiasm for something, often driving individuals",
      image: "/images/img_credit_cards_my_1.png",
      icon: "/images/img_solar_fire_bold_duotone.svg"
    },
    {
      title: "We are a family",
      description: "Passion is a powerful and intense emotion or enthusiasm for something, often driving individuals",
      image: "/images/img_credit_cards_my_2.png",
      icon: "/images/img_solar_fire_bold_duotone.svg"
    }
  ];
  const skills = [
    { name: "Custom CSS", icon: "/images/img_icon_indigo_a700.svg" },
    { name: "UX Design", icon: "/images/img_icon_indigo_a700_42x42.svg" },
    { name: "Site Speed", icon: "/images/img_icon_indigo_a700.svg" },
    { name: "Development", icon: "/images/img_icon_42x42.svg" },
    { name: "Vue.Js", icon: "/images/img_icon_indigo_a700.svg" },
    { name: "Motion Design", icon: "/images/img_icon_indigo_a700.svg" }
  ];

  const allTeamMembers = [
    {
      id: 1,
      name: "Fatema-Tuz-Zohra Nabila",
      position: "Product Marketing Manager",
      department: "marketing",
      image: "/images/img_image_3.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 2,
      name: "Syed Abid Hossain",
      position: "Marketing",
      department: "marketing",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 3,
      name: "C S Sultan",
      position: "Chief Marketing Manager",
      department: "marketing",
      image: "/images/img_image_5.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 4,
      name: "Sakiba Prima",
      position: "Marketing",
      department: "marketing",
      image: "/images/img_rectangle_18040.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 5,
      name: "Shahab Uddin Mahi",
      position: "Lead UI/UX Designer",
      department: "product",
      image: "/images/img_image_3_328x350.png",
      icon: "/images/img_uim_layer_group.svg"
    },
    {
      id: 6,
      name: "Fahmida Bhuiyan Sathi",
      position: "UI/UX Designer",
      department: "product",
      image: "/images/img_image_7.png",
      icon: "/images/img_uim_layer_group.svg"
    },
    {
      id: 7,
      name: "John Smith",
      position: "Chief Executive Officer",
      department: "leadership",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 8,
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      department: "leadership",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 9,
      name: "Mike Chen",
      position: "Senior Software Engineer",
      department: "engineering",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 10,
      name: "Lisa Wang",
      position: "Frontend Developer",
      department: "engineering",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 11,
      name: "David Rodriguez",
      position: "Marketing Director",
      department: "marketing",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 12,
      name: "Emily Davis",
      position: "Content Marketing Specialist",
      department: "marketing",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 13,
      name: "Alex Thompson",
      position: "Product Manager",
      department: "product",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 14,
      name: "Rachel Green",
      position: "UX Designer",
      department: "product",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    }
  ];


  const departmentList = [
    { name: "Leadership Team", key: "leadership" },
    { name: "Engineering Team", key: "engineering" },
    { name: "Marketing Team", key: "marketing" },
    { name: "Product Team", key: "product" },
    { name: "Customer Success", key: "customer" }
  ];

  const [activeTab, setActiveTab] = useState("leadership");

  // Filter team members based on active tab
  const filteredTeamMembers = allTeamMembers.filter(member => member.department === activeTab);

  // Create departments array with active state for rendering
  const departments = departmentList.map(dept => ({
    name: dept.name,
    key: dept.key,
    active: dept.key === activeTab
  }));

  const handleTabClick = (departmentKey) => {
    setActiveTab(departmentKey);
  };
  return (
    <div className="w-full bg-[#ffffff]">
      <Header />
      {/* Hero Section with Background */}
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center'>
            <div>
              <h1 className='text-[#0B0B35] font-[Sora] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[1.15] xl:leading-[92px]'>About Us</h1>
            </div>
            <div>
              <p className='text-[#51515F] font-inter text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed sm:leading-relaxed md:leading-8 lg:leading-[35px] mb-8 sm:mb-10 lg:mb-12'>Within our intimate team, we cherish the diverse backgrounds, cultures and perspectives that each individual brings. Our team members represent a tapestry of experiences, talents and skills that enriches our collective creativity.</p>
              <button className='rounded-xl bg-[#3433FE] text-white font-[Sora] text-sm sm:text-base md:text-lg lg:text-xl font-semibold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 hover:bg-[#2D2BE5] transition-colors duration-200 w-full sm:w-auto'>Contact Us</button>
            </div>
          </div>
        </div>
      </section>  

        {/* About video section */}
        <section className="w-full relative">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/videos/test-video.mp4" type="video/mp4" />
              <source src="/videos/test-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Dark overlay with 20% opacity */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </section>

      {/* Values Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[20px] sm:pt-[30px] lg:pt-[40px]">
          <div className="flex items-center gap-[10px] mb-8 sm:mb-12 lg:mb-16">
            <h2 className='text-[#0B0B35] font-sora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight'>Our <span className='font-bold  '>Values</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {values?.map((value, index) => (
              <div key={index} className="bg-[#ffffff] rounded-[16px] shadow-[0px_15px_21px_#6d688921] p-4 sm:p-6 lg:p-10">
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-11">
                  <div className="w-full h-[200px] sm:h-[280px] lg:h-[388px] rounded-[14px] overflow-hidden">
                    <Image
                      src={value?.image}
                      alt={value?.title}
                      width={610}
                      height={388}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                      <Image
                        src={value?.icon}
                        alt="Value icon"
                        width={28}
                        height={28}
                        className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px]"
                      />
                      <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-sora font-bold leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#0f0e55]">
                        {value?.title}
                      </h3>
                    </div>
                    <p className="text-[16px] sm:text-[19px] lg:text-[23px] font-inter font-normal leading-[24px] sm:leading-[29px] lg:leading-[35px] text-[#787878]">
                      {value?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="w-full bg-[#090936] py-[50px] md:py-[120px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Image Section */}
          <div className="mx-auto py-[60px] sm:py-[90px] lg:py-[120px] relative">
            <div className="relative z-10 flex justify-center items-start w-[48%] mx-auto mb-[36px] sm:mb-[54px] lg:mb-[72px]">
              <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] items-center">
                <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora leading-[46px] sm:leading-[54px] lg:leading-[61px] text-center text-white">
                  Company <span className="font-bold">Benefits</span>
                </h2>
                <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[23px] sm:leading-[27px] lg:leading-[30px] text-center text-white w-full">
                  At Linno, we offer a comprehensive benefits package to support our employees' well-being and work-life balance.
                </p>
              </div>
            </div>
          </div>
          {/* Benefits Grid */}
          <div className="w-full px-[8px] sm:px-[15px] lg:px-[20px] xl:px-[26px] py-[8px] sm:py-[15px] lg:py-[20px] xl:py-[26px] -mt-[50px] sm:-mt-[75px] lg:-mt-[105px] xl:-mt-[140px] mb-[40px] sm:mb-[65px] lg:mb-[98px] xl:mb-[130px] relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] sm:gap-[50px] lg:gap-[80px] xl:gap-[146px] w-full">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex flex-col sm:flex-row lg:flex-row justify-start items-center sm:items-start lg:items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] w-full group hover:scale-105 transition-transform duration-200 glass border-b-[rgba(255,255,255,0.48)] border-t-[rgba(255,255,255,0.48)]">
                  <div className="bg-[#3433fe] rounded-[30px] p-[12px] sm:p-[14px] lg:p-[16px] w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] lg:w-[62px] lg:h-[62px] flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-200">
                    <Image
                      src={benefit?.icon}
                      alt={`${benefit?.title} icon`}
                      width={30}
                      height={30}
                      className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[30px] lg:h-[30px]"
                    />
                  </div>
                  <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-sora leading-[18px] sm:leading-[20px] lg:leading-[24px] xl:leading-[28px] text-center sm:text-left lg:text-left text-white flex-1">
                    {benefit?.spanText ? (
                      <>
                        {benefit?.spanText?.map((span, spanIndex) => (
                          <span key={spanIndex} className={span?.weight}>
                            {span?.text}
                              {
                                  spanIndex === 0 ? <br /> : null
                              }
                          </span>
                        ))}
                      </>
                    ) : (
                      <span className="font-bold">{benefit?.title}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-8 bg-[#fbfbff]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="">
            <h2 className='text-[#0B0B35] font-sora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight'>Our <span className='font-bold  '>Values</span></h2>
            <p class="max-w-[720px] w-full mt-2 sm:mt-3 md:mt-4 lg:mt-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-[#40403F] font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[29px]">We combine expert resources with the latest technologies to deliver high-quality software solutions for your business.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Side - Department Filter */}
            <div className="w-full lg:w-1/3">
              <div className="flex items-center gap-[10px] mb-8 sm:mb-12 lg:mb-16">
                <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
                <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-sans leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#0f0e55] uppercase">
                  Our teams
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {departments?.map((dept, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 sm:gap-4 lg:gap-5 cursor-pointer group"
                    onClick={() => handleTabClick(dept.key)}
                  >
                    <div className={`w-[16px] sm:w-[18px] lg:w-[20px] h-[1px] transition-colors duration-200 ${
                      dept?.active 
                        ? 'bg-[#3433fe]' 
                        : 'bg-[#0f0e55] group-hover:bg-[#3433fe]'
                    }`}></div>
                    <span className={`text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-sans leading-[20px] sm:leading-[22px] lg:leading-[24px] transition-colors duration-200 ${
                      dept?.active 
                        ? 'text-[#3433fe]' 
                        : 'text-[#0f0e55] group-hover:text-[#3433fe]'
                    }`}>
                      {dept?.name}
                    </span>
                    {dept?.active && (
                      <svg width="19" height="20" fill="none" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFC933" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.369 1.5v2.55h2.55m-7.31 4.76l7.31-7.31"/><path fill="#FFC933" stroke="#FFC933" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.418 11.7a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4z"/><path stroke="#3433FE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.673 4.9h-.255a5.1 5.1 0 105.1 5.1v-.255"/><path stroke="#3433FE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.969 1.926a8.44 8.44 0 105.525 5.524m-13.77 8.84L2.619 18.5m12.495-2.21l1.105 2.21"/></svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Team Grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                {filteredTeamMembers?.map((member) => (
                  <div key={member?.id} className="bg-[#ffffff] rounded-[10px] shadow-[0px_9px_13px_#6d688921] hover:shadow-[0px_15px_25px_#6d688930] transition-shadow duration-300 p-2 sm:p-3 lg:p-[6px] group">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-7">
                      <div className="w-full h-[250px] sm:h-[280px] lg:h-[328px] rounded-[8px] overflow-hidden bg-[#f2f7ff] relative">
                        <Image
                          src={member?.image}
                          alt={member?.name}
                          width={350}
                          height={328}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="px-4 sm:px-5 lg:px-5 pb-4 sm:pb-5 lg:pb-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                              <svg className="mb-1" width="18" height="18" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#clip0_26_541)"><path stroke="#21F0A8" d="M13.758 1.64v2.25h2.25m-6.45 4.2l6.45-6.45"/><path fill="#21F0A8" stroke="#21F0A8" d="M8.507 10.64a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path stroke="#3433FE" d="M8.732 4.64h-.225a4.5 4.5 0 104.5 4.5v-.225"/><path stroke="#3433FE" d="M10.758 2.015a7.447 7.447 0 104.875 4.875m-12.15 7.8l-.975 1.95m11.025-1.95l.975 1.95"/></g><defs><clipPath id="clip0_26_541"><path fill="#fff" d="M0 0h18v18H0z"/></clipPath></defs></svg>
                            <div className="flex flex-col gap-1 sm:gap-2 lg:gap-2 flex-1 min-w-0">
                              <h3 className="text-[14px] sm:text-[15px] lg:text-[17px] font-bold font-sans leading-[17px] sm:leading-[19px] lg:leading-[21px] text-[#0f0e55] truncate">
                                {member?.name}
                              </h3>
                              <p className="text-[12px] sm:text-[13px] lg:text-[15px] font-sans leading-[15px] sm:leading-[17px] lg:leading-[19px] text-[#787878] line-clamp-2">
                                {member?.position}
                              </p>
                            </div>
                          </div>
                          <button 
                            className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            aria-label={`View ${member?.name} on LinkedIn`}
                          >
                            <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] bg-[#0077b5] rounded-sm flex items-center justify-center">
                              <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] lg:w-[14px] lg:h-[14px] bg-white rounded-sm flex items-center justify-center text-[8px] font-bold text-[#0077b5]">
                                in
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Empty State */}
              {filteredTeamMembers.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <p className="text-[16px] font-sans text-[#787878]">
                    No team members found for this department.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0b0a3c]"></div>
        <div className="absolute inset-0 bg-[url('/images/img_midjourney_image_1_1.png')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-sora font-medium leading-[48px] sm:leading-[72px] lg:leading-[96px] text-[#ffffff] mb-6 sm:mb-8 lg:mb-12">
            Good things Happen<br />When you say
          </h2>
          <div className="text-[60px] sm:text-[80px] lg:text-[105px] font-sora font-medium leading-[72px] sm:leading-[96px] lg:leading-[126px] underline mb-8 sm:mb-12 lg:mb-16">
            <span className="bg-gradient-to-r from-[#3433fe] via-[#2585bd] to-[#21f0a7] bg-clip-text text-transparent">
              😃 "Hello"
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default AboutUsPage;