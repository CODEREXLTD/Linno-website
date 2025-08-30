'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';

const PrivacyContent = () => {
  const contactInfo = [
    {
      icon: '/images/img_icon_gray_900.svg',
      title: 'Email',
      info: 'enquiry@linno.io',
      link: 'mailto:enquiry@linno.io'
    },
    {
      icon: '/images/img_icon_gray_900_1.svg',
      title: 'Phone',
      info: '+880 1711 123456',
      link: 'tel:+8801711123456'
    },
    {
      icon: '/images/img_icon_gray_900_2.svg',
      title: 'Office',
      info: 'Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka 1215',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '/images/img_icon.svg',
      href: 'https://www.linkedin.com/company/coderex-ltd/'
    },
    {
      name: 'Facebook',
      icon: '/images/img_vector_indigo_a700_18x18.svg',
      href: 'https://www.facebook.com/coderexco'
    },
    {
      name: 'X',
      icon: '/images/img_vector_indigo_a100.svg',
      href: 'https://x.com/coderexco'
    },
    {
      name: 'Instagram',
      icon: '/images/img_vector_indigo_200.svg',
      href: 'https://www.instagram.com/coderexco/'
    }
  ];

  return (
    <div className="w-full bg-global-7">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-global-5 pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-[10px] sm:gap-[12px] lg:gap-[14px] mb-[20px] sm:mb-[30px] lg:mb-[40px]">
              <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
              <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#3433fe] uppercase">
                Legal
              </h2>
            </div>
            <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] font-sora font-medium leading-[38px] sm:leading-[58px] lg:leading-[77px] xl:leading-[96px] text-[#0b0b35] mb-[16px] sm:mb-[24px] lg:mb-[32px]">
              <span className="font-normal">Privacy Policy & </span>
              <span className="font-bold bg-gradient-to-r from-[#3433fe] via-[#2585bd] to-[#21f0a7] bg-clip-text text-transparent">Terms of Use</span>
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#51515f] max-w-[600px] mx-auto">
              Understanding how we protect your privacy and data while using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-global-7 pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Terms and Conditions Section */}
            <div className="mb-[60px] sm:mb-[80px] lg:mb-[100px]">
              <div className="flex items-center gap-[12px] mb-[24px] sm:mb-[32px] lg:mb-[40px]">
                <div className="w-[2px] h-[24px] sm:h-[32px] lg:h-[40px] bg-[#3433fe]"></div>
                <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-sora font-bold leading-[34px] sm:leading-[38px] lg:leading-[42px] text-[#0b0b35]">
                  Web Site Terms and Conditions of Use
                </h2>
              </div>

              <div className="space-y-[24px] sm:space-y-[32px] lg:space-y-[40px]">
                {/* Terms Section */}
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px]">
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                    1. Terms
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    By accessing this web site, you are agreeing to be bound by the Terms and Conditions of Use of this website, all applicable laws and regulations of this website, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.
                  </p>
                </div>

                {/* Use License Section */}
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px]">
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                    2. Use License
                  </h3>
                  <div className="space-y-[16px] sm:space-y-[20px] lg:space-y-[24px]">
                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                      <strong>a.</strong> Permission is granted to temporarily download one copy of the materials(information or software) on CodeRex's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-[8px] sm:space-y-[12px] lg:space-y-[16px] ml-[16px] sm:ml-[20px] lg:ml-[24px] text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                      <li>modify or copy the materials;</li>
                      <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                      <li>attempt to decompile or reverse engineer any software contained on CodeRex's web site;</li>
                      <li>remove any copyright or other proprietary notations from the materials; or</li>
                      <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                      <strong>b.</strong> This license shall automatically terminate if you violate any of these restrictions and may be terminated by CodeRex at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                    </p>
                  </div>
                </div>

                {/* Disclaimer Section */}
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px]">
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                    3. Disclaimer
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    The materials on CodeRex's web site are provided "as is". CodeRex makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Furthermore, CodeRex does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet website, or otherwise, relating to such materials or on any sites linked to this website.
                  </p>
                </div>

                {/* Limitations Section */}
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px]">
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                    4. Limitations
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    In no event shall CodeRex or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on CodeRex's Internet site, even if CodeRex or a CodeRex authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                  </p>
                </div>

                {/* Revisions and Errata Section */}
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px]">
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                    5. Revisions and Errata
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    The materials appearing on CodeRex's website could include technical, typographical, or photographic errors. CodeRex does not warrant that any of the materials on its website are accurate, complete, or current. CodeRex may make changes to the materials contained on its website at any time without notice. CodeRex does not, however, make any commitment to update the materials.
                  </p>
                </div>

                {/* Links Section */}
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px]">
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                    6. Links
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    CodeRex has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CodeRex of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>

                {/* Site Terms of Use Modifications Section */}
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px]">
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                    7. Site Terms of Use Modifications
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    CodeRex may revise these terms of use for its web site at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                  </p>
                </div>

                {/* Governing Law Section */}
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px]">
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                    8. Governing Law
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    Any claim relating to CodeRex's website shall be governed by the laws of the State of Dhaka Division without regard to its conflict of law provisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy Section */}
            <div className="mb-[60px] sm:mb-[80px] lg:mb-[100px]">
              <div className="flex items-center gap-[12px] mb-[24px] sm:mb-[32px] lg:mb-[40px]">
                <div className="w-[2px] h-[24px] sm:h-[32px] lg:h-[40px] bg-[#3433fe]"></div>
                <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-sora font-bold leading-[34px] sm:leading-[38px] lg:leading-[42px] text-[#0b0b35]">
                  Privacy Policy
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#3433fe] to-[#2585bd] rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[28px] lg:p-[36px] mb-[24px] sm:mb-[32px] lg:mb-[40px]">
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-medium leading-[24px] sm:leading-[28px] lg:leading-[32px] text-white">
                  Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[24px] lg:gap-[28px]">
                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[24px] lg:p-[28px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[32px] h-[32px] bg-[#3433fe] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-sora font-bold text-[14px]">1</span>
                    </div>
                    <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold text-[#0b0b35]">Collection Purpose</h4>
                  </div>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.
                  </p>
                </div>

                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[24px] lg:p-[28px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[32px] h-[32px] bg-[#3433fe] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-sora font-bold text-[14px]">2</span>
                    </div>
                    <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold text-[#0b0b35]">Usage & Consent</h4>
                  </div>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    We will collect and use personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.
                  </p>
                </div>

                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[24px] lg:p-[28px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[32px] h-[32px] bg-[#3433fe] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-sora font-bold text-[14px]">3</span>
                    </div>
                    <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold text-[#0b0b35]">Data Retention</h4>
                  </div>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    We will only retain personal information as long as necessary for the fulfillment of those purposes.
                  </p>
                </div>

                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[24px] lg:p-[28px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[32px] h-[32px] bg-[#3433fe] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-sora font-bold text-[14px]">4</span>
                    </div>
                    <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold text-[#0b0b35]">Lawful Collection</h4>
                  </div>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.
                  </p>
                </div>

                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[24px] lg:p-[28px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[32px] h-[32px] bg-[#3433fe] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-sora font-bold text-[14px]">5</span>
                    </div>
                    <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold text-[#0b0b35]">Data Accuracy</h4>
                  </div>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.
                  </p>
                </div>

                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[24px] lg:p-[28px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[32px] h-[32px] bg-[#3433fe] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-sora font-bold text-[14px]">6</span>
                    </div>
                    <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold text-[#0b0b35]">Security Safeguards</h4>
                  </div>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.
                  </p>
                </div>

                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[24px] lg:p-[28px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[32px] h-[32px] bg-[#3433fe] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-sora font-bold text-[14px]">7</span>
                    </div>
                    <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold text-[#0b0b35]">Transparency</h4>
                  </div>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    We will make readily available to customers information about our policies and practices relating to the management of personal information.
                  </p>
                </div>

                <div className="bg-global-5 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-[20px] sm:p-[24px] lg:p-[28px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[32px] h-[32px] bg-[#3433fe] rounded-[8px] flex items-center justify-center">
                      <span className="text-white font-sora font-bold text-[14px]">8</span>
                    </div>
                    <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold text-[#0b0b35]">Our Commitment</h4>
                  </div>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                    We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyContent;
