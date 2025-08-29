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
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py- sm:py-16 md:py-20 lg:py-24 xl:py-32">
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
            <h2 className='text-[#0B0B35] font-sora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight'>Our <span>Values</span></h2>
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