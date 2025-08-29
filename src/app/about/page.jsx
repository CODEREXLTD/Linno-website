'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EditText from '@/components/ui/EditText';
const AboutUsPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Fatema-Tuz-Zohra Nabila",
      position: "Product marketing manager",
      image: "/images/img_image_3.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 2,
      name: "Syed Abid Hossain",
      position: "Marketing",
      image: "/images/img_image_4_328x350.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 3,
      name: "C S Sultan",
      position: "Chief marketing manager",
      image: "/images/img_image_5.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 4,
      name: "Sakiba Prima",
      position: "Marketing",
      image: "/images/img_rectangle_18040.png",
      icon: "/images/img_lucide_lab_target_arrow.svg"
    },
    {
      id: 5,
      name: "Shahab Uddin Mahi",
      position: "Lead UI/UX designer",
      image: "/images/img_image_3_328x350.png",
      icon: "/images/img_uim_layer_group.svg"
    },
    {
      id: 6,
      name: "Fahmida Bhuiyan Sathi",
      position: "UI/UX Designer",
      image: "/images/img_image_7.png",
      icon: "/images/img_uim_layer_group.svg"
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
  const departments = [
    { name: "Leadership", active: false },
    { name: "Engineering", active: false },
    { name: "Marketing", active: true },
    { name: "Product", active: false },
    { name: "Customers Success", active: false }
  ];
  return (
    <div className="w-full bg-[#ffffff]">
      <Header />
      {/* Hero Section with Background */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[822px] relative">
          <Image
            src="/images/img_rectangle_19005.png"
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-sora font-bold leading-[48px] sm:leading-[70px] md:leading-[92px] lg:leading-[115px] xl:leading-[130px] text-[#0e0e54] mb-4 sm:mb-6 lg:mb-8 animate-fade-in">
                About Us
              </h1>
              <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
                <p className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-sora font-normal leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px] text-[#292929] mb-6 sm:mb-8 lg:mb-10">
                  Within our intimate team, we cherish the diverse backgrounds, cultures and perspectives that each individual brings. Our team members represent a tapestry of experiences, talents and skills that enriches our collective creativity.
                </p>
                <div className="w-full sm:w-[240px] lg:w-[280px] mx-auto">
                  <EditText
                    placeholder="Contact Us"
                    className="bg-[#3433fe] text-[#ffffff] text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-sora font-normal leading-[18px] sm:leading-[22px] lg:leading-[24px] xl:leading-[29px] rounded-[24px] px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
                    onChange={() => {}}
                    rightImage={{
                      src: "/images/img_arrow_10.svg",
                      width: 30,
                      height: 16
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-[80px] sm:top-[120px] md:top-[180px] lg:top-[230px] right-[20px] sm:right-[60px] md:right-[120px] lg:right-[200px] w-[150px] sm:w-[250px] md:w-[400px] lg:w-[500px] xl:w-[626px] h-[150px] sm:h-[250px] md:h-[400px] lg:h-[500px] xl:h-[712px] opacity-20 lg:opacity-100">
          <Image
            src="/images/img_ellipse_1444.png"
            alt="Decorative element"
            width={626}
            height={712}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* Mission Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left Side - Mission */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-[10px] mb-6 sm:mb-8 lg:mb-12">
                <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
                <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#0f0e55] uppercase">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium leading-[29px] sm:leading-[43px] lg:leading-[57px]">
                  <span className="bg-gradient-to-r from-[#3433fe] via-[#2585bd] to-[#21f0a7] bg-clip-text text-transparent">
                    We believe that
                  </span>
                  <span className="text-[#d3d3d3]"> every brand has a unique story to tell, </span>
                </p>
                <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium leading-[29px] sm:leading-[43px] lg:leading-[58px] text-[#b0b0b0]">
                  and we strive to bring that story to life through innovative solutions. From concept to implementation, we work hand-in-hand with our clients to develop innovative digital products and create a compelling online presence that sets them apart from the competition.
                </p>
              </div>
            </div>
            {/* Right Side - Decorative */}
            <div className="w-full lg:w-1/2 relative">
              <div className="w-[200px] sm:w-[300px] lg:w-[410px] h-[400px] sm:h-[600px] lg:h-[1246px] mx-auto">
                <Image
                  src="/images/img_ellipse_1445.png"
                  alt="Mission decorative"
                  width={410}
                  height={1246}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium leading-[29px] sm:leading-[43px] lg:leading-[58px]">
                  <span className="bg-gradient-to-r from-[#3433fe] via-[#2585bd] to-[#21f0a7] bg-clip-text text-transparent">
                    We combine expert
                  </span>
                  <span className="text-[#b0b0b0]"> resources with the latest</span>
                </p>
                <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium leading-[29px] sm:leading-[43px] lg:leading-[58px] text-[#b0b0b0]">
                  technologies to deliver high-quality software solutions for your business.
                </p>
              </div>
            </div>
            {/* Right Side - Statistics */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-12">
                {statistics?.map((stat, index) => (
                  <div key={index} className={`${stat?.bgColor} rounded-[28px] p-6 sm:p-8 lg:p-10 relative`}>
                    <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                      <h3 className="text-[32px] sm:text-[42px] lg:text-[52px] font-sora font-bold leading-[38px] sm:leading-[50px] lg:leading-[63px] text-[#000000]">
                        {stat?.number}
                      </h3>
                      <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-lato font-normal leading-[19px] sm:leading-[22px] lg:leading-[26px] text-[#5c5c5c] max-w-[200px] sm:max-w-[250px] lg:max-w-[300px]">
                        {stat?.description}
                      </p>
                    </div>
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
                      <Image
                        src={stat?.icon}
                        alt="Statistic icon"
                        width={72}
                        height={72}
                        className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] lg:w-[72px] lg:h-[72px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-[10px] mb-8 sm:mb-12 lg:mb-16">
            <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
            <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#0f0e55] uppercase">
              Our values
            </h2>
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
      {/* Skills Section with Interactive Background */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0b0a3c]"></div>
        {/* Background Skills Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Central Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[888px] h-[300px] sm:h-[500px] lg:h-[850px] rounded-full overflow-hidden">
              <Image
                src="/images/img_13.png"
                alt="Team collaboration"
                width={888}
                height={850}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Skills */}
            <div className="relative w-full h-[600px] sm:h-[800px] lg:h-[1200px]">
              {skills?.map((skill, index) => (
                <div
                  key={index}
                  className={`absolute bg-[#ffffff] bg-opacity-10 backdrop-blur-sm rounded-[20px] px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 ${
                    index === 0 ? 'top-[10%] left-[5%]' :
                    index === 1 ? 'top-[20%] right-[10%]' :
                    index === 2 ? 'top-[60%] right-[5%]' :
                    index === 3 ? 'bottom-[30%] left-[10%]' :
                    index === 4 ? 'bottom-[20%] right-[15%]': 'top-[40%] left-[2%]'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-4">
                    <Image
                      src={skill?.icon}
                      alt={skill?.name}
                      width={42}
                      height={42}
                      className="w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] lg:w-[42px] lg:h-[42px]"
                    />
                    <span className="text-[14px] sm:text-[16px] lg:text-[20px] font-sora font-normal leading-[17px] sm:leading-[19px] lg:leading-[24px] tracking-[2px] text-[#ffffff] uppercase">
                      {skill?.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-[10px] mb-8 sm:mb-12 lg:mb-16">
            <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
            <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#ffffff] uppercase">
              Pick Skills
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium leading-[29px] sm:leading-[43px] lg:leading-[58px]">
              <span className="text-[#ffffff]">Your PM delegates </span>
              <span className="bg-gradient-to-r from-[#3433fe] via-[#2585bd] to-[#21f0a7] bg-clip-text text-transparent">work on a task-by-task basis</span>
            </p>
            <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium leading-[29px] sm:leading-[43px] lg:leading-[58px] text-[#585784]">
              and ensures a qualified expert gets the job done, even if you need these skills only for one day.
            </p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-8 bg-[#fbfbff]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Side - Department Filter */}
            <div className="w-full lg:w-1/3">
              <div className="flex items-center gap-[10px] mb-8 sm:mb-12 lg:mb-16">
                <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
                <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#0f0e55] uppercase">
                  Our teams
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {departments?.map((dept, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                    <div className={`w-[16px] sm:w-[18px] lg:w-[20px] h-[1px] ${dept?.active ? 'bg-[#3433fe]' : 'bg-[#0f0e55]'}`}></div>
                    <span className={`text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] ${dept?.active ? 'text-[#3433fe]' : 'text-[#0f0e55]'}`}>
                      {dept?.name}
                    </span>
                    {dept?.active && (
                      <Image
                        src="/images/img_lucide_lab_target_arrow.svg"
                        alt="Active indicator"
                        width={18}
                        height={18}
                        className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Right Side - Team Grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                {teamMembers?.map((member) => (
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
                          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[6px] flex-1">
                            <Image
                              src={member?.icon}
                              alt="Member icon"
                              width={18}
                              height={18}
                              className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px] flex-shrink-0"
                            />
                            <div className="flex flex-col gap-1 sm:gap-2 lg:gap-2 flex-1 min-w-0">
                              <h3 className="text-[14px] sm:text-[15px] lg:text-[17px] font-sora font-bold leading-[17px] sm:leading-[19px] lg:leading-[21px] text-[#0f0e55] truncate">
                                {member?.name}
                              </h3>
                              <p className="text-[12px] sm:text-[13px] lg:text-[15px] font-inter font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-[#787878] line-clamp-2">
                                {member?.position}
                              </p>
                            </div>
                          </div>
                          <button 
                            className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            aria-label={`View ${member?.name} on LinkedIn`}
                          >
                            <Image
                              src="/images/img_mdi_linkedin.svg"
                              alt="LinkedIn"
                              width={24}
                              height={24}
                              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px]"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-[10px] mb-8 sm:mb-12 lg:mb-16">
            <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
            <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#0f0e55] uppercase">
              Testimonial
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Profile Images */}
            <div className="w-full lg:w-[10%] flex lg:flex-col gap-3 sm:gap-4 lg:gap-[14px] justify-center lg:justify-start">
              <div className="w-[80px] sm:w-[120px] lg:w-[150px] h-[60px] sm:h-[90px] lg:h-[114px] bg-[#f2f7ff7f] border border-[#ffffff] rounded-[8px] flex items-center justify-center">
                <Image
                  src="/images/img_image_7_114x150.png"
                  alt="Testimonial profile 1"
                  width={150}
                  height={114}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="w-[80px] sm:w-[120px] lg:w-[152px] h-[80px] sm:h-[120px] lg:h-[156px] border-2 border-[#3433fe] rounded-[12px] overflow-hidden">
                <Image
                  src="/images/img_image_3_156x152.png"
                  alt="Testimonial profile 2"
                  width={152}
                  height={156}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[80px] sm:w-[120px] lg:w-[152px] h-[60px] sm:h-[90px] lg:h-[114px] bg-[#f2f7ff] border border-[#ffffff] rounded-[8px] flex items-center justify-center">
                <Image
                  src="/images/img_image_4_114x152.png"
                  alt="Testimonial profile 3"
                  width={152}
                  height={114}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
            </div>
            {/* Right Side - Testimonial Content */}
            <div className="w-full lg:w-[82%] bg-[#ffffff] rounded-[10px] shadow-[0px_9px_13px_#6d688921] p-6 sm:p-8 lg:p-12">
              <div className="relative">
                <div className="absolute top-0 right-0 w-[150px] sm:w-[200px] lg:w-[300px] h-[120px] sm:h-[160px] lg:h-[236px]">
                  <Image
                    src="/images/img_iconoir_quote_solid.png"
                    alt="Quote icon"
                    width={300}
                    height={236}
                    className="w-full h-full object-contain opacity-20"
                  />
                </div>
                <div className="relative z-10">
                  <p className="text-[20px] sm:text-[30px] lg:text-[40px] font-sora font-normal leading-[26px] sm:leading-[39px] lg:leading-[52px] text-center text-[#0f0e55] mb-8 sm:mb-10 lg:mb-12">
                    <span className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium bg-gradient-to-r from-[#3433fe] via-[#2585bd] to-[#21f0a7] bg-clip-text text-transparent">
                      From the first day,
                    </span>
                    <span className="text-[20px] sm:text-[30px] lg:text-[40px] font-sora font-medium text-[#b0b0b0]">
                      {" "}I felt I am a part of the team. My ideas and suggestions were heard and appreciated. It's a great atmosphere with a bunch of talented and fun-loving people.
                    </span>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                    <div className="text-center sm:text-left">
                      <h4 className="text-[14px] sm:text-[15px] lg:text-[17px] font-sora font-bold leading-[17px] sm:leading-[19px] lg:leading-[21px] text-[#0f0e55] mb-2">
                        Fatema-Tuz-Zohra Nabila
                      </h4>
                      <p className="text-[12px] sm:text-[13px] lg:text-[15px] font-inter font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-[#787878]">
                        Product marketing manager
                      </p>
                    </div>
                    <div className="flex gap-2 sm:gap-3 lg:gap-[10px]">
                      {[1, 2, 3, 4]?.map((star) => (
                        <Image
                          key={star}
                          src="/images/img_vector_indigo_a700_1.svg"
                          alt="Star rating"
                          width={24}
                          height={24}
                          className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Us Section */}
      <section className="w-full py-[50px] sm:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-[10px] mb-8 sm:mb-12 lg:mb-16">
                <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
                <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#0f0e55] uppercase">
                  Join Us
                </h2>
              </div>
              <div className="space-y-6 sm:space-y-8 lg:space-y-12 mb-8 sm:mb-12 lg:mb-16">
                <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium leading-[29px] sm:leading-[43px] lg:leading-[58px]">
                  <span className="bg-gradient-to-r from-[#3433fe] via-[#2585bd] to-[#21f0a7] bg-clip-text text-transparent">
                    Choose Linno to
                  </span>
                  <span className="text-[#b0b0b0]"> embrace your skills and passion.</span>
                </p>
                <p className="text-[24px] sm:text-[36px] lg:text-[48px] font-sora font-medium leading-[29px] sm:leading-[43px] lg:leading-[58px] text-[#b0b0b0]">
                  We are your growth partner, encouraging creativity and individual development while creating excellent user experiences in collaborative atmosphere.
                </p>
              </div>
              <button className="bg-[#3433fe] text-[#ffffff] text-[18px] sm:text-[20px] lg:text-[24px] font-sora font-normal leading-[22px] sm:leading-[24px] lg:leading-[29px] rounded-[24px] px-6 py-3 sm:px-8 sm:py-4 lg:px-8 lg:py-4 flex items-center gap-4 hover:bg-[#2929d4] transition-colors duration-200">
                Join Us
                <Image
                  src="/images/img_arrow_10.svg"
                  alt="Arrow"
                  width={30}
                  height={16}
                  className="w-[24px] h-[12px] sm:w-[27px] sm:h-[14px] lg:w-[30px] lg:h-[16px]"
                />
              </button>
            </div>
            {/* Right Side - Gallery Images */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {[
                  "/images/img_left.png",
                  "/images/img_frame_14248.png",
                  "/images/img_frame_14249.png",
                  "/images/img_middle.png",
                  "/images/img_frame_14252.png",
                  "/images/img_frame_14251.png",
                  "/images/img_right.png"
                ]?.map((image, index) => (
                  <div key={index} className={`rounded-[16px] overflow-hidden ${
                    index === 0 ? 'col-span-1 row-span-2' :
                    index === 3 ? 'col-span-1 row-span-3' :
                    index === 6 ? 'col-span-1 row-span-2': 'col-span-1 row-span-1'
                  }`}>
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      width={332}
                      height={352}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
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