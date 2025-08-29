'use client';
import React, { useState, useCallback } from 'react';

import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';

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

const Content = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Form submitted:', formData);
        setLoading(false);
        
        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            subject: '',
            message: ''
        });
        
        alert('Thank you for your message! We\'ll get back to you soon.');
    };

    return (
        <div className="w-full bg-global-7">
            <Header />
            
            {/* Hero Section */}
            <section className="w-full bg-global-7 pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-[40px] sm:mb-[60px] lg:mb-[80px]">
                        <div className="flex justify-center items-center gap-[10px] sm:gap-[12px] lg:gap-[14px] mb-[20px] sm:mb-[30px] lg:mb-[40px]">
                            <div className="w-[2px] h-[18px] sm:h-[24px] lg:h-[36px] bg-[#3433fe]"></div>
                            <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[2px] text-[#3433fe] uppercase">
                                Contact Us
                            </h2>
                        </div>
                        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] font-sora font-medium leading-[38px] sm:leading-[58px] lg:leading-[77px] xl:leading-[96px] text-[#0b0b35] mb-[16px] sm:mb-[24px] lg:mb-[32px]">
                            <span className="font-normal">Let's Start a </span>
                            <span className="font-bold bg-gradient-to-r from-[#3433fe] via-[#2585bd] to-[#21f0a7] bg-clip-text text-transparent">Conversation</span>
                        </h1>
                        <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#51515f] max-w-[600px] mx-auto">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="w-full bg-global-7 pb-[60px] sm:pb-[80px] lg:pb-[120px]">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] sm:gap-[60px] lg:gap-[80px] xl:gap-[120px]">
                        
                        {/* Contact Form */}
                        <div className="w-full">
                            <div className="mb-[30px] sm:mb-[40px] lg:mb-[50px]">
                                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-sora font-semibold leading-[30px] sm:leading-[34px] lg:leading-[38px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                                    Send us a Message
                                </h3>
                                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-[20px] sm:space-y-[24px] lg:space-y-[28px]">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                                    <div>
                                        <label htmlFor="firstName" className="block text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#0b0b35] mb-[8px] sm:mb-[10px] lg:mb-[12px]">
                                            First Name *
                                        </label>
                                        <EditText
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Enter your first name"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#0b0b35] mb-[8px] sm:mb-[10px] lg:mb-[12px]">
                                            Last Name *
                                        </label>
                                        <EditText
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Enter your last name"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                                        />
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                                    <div>
                                        <label htmlFor="email" className="block text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#0b0b35] mb-[8px] sm:mb-[10px] lg:mb-[12px]">
                                            Email Address *
                                        </label>
                                        <EditText
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#0b0b35] mb-[8px] sm:mb-[10px] lg:mb-[12px]">
                                            Phone Number
                                        </label>
                                        <EditText
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                                        />
                                    </div>
                                </div>

                                {/* Company and Subject */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                                    <div>
                                        <label htmlFor="company" className="block text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#0b0b35] mb-[8px] sm:mb-[10px] lg:mb-[12px]">
                                            Company
                                        </label>
                                        <EditText
                                            id="company"
                                            name="company"
                                            placeholder="Enter your company name"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#0b0b35] mb-[8px] sm:mb-[10px] lg:mb-[12px]">
                                            Subject *
                                        </label>
                                        <EditText
                                            id="subject"
                                            name="subject"
                                            placeholder="Enter subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-[14px] sm:text-[16px] font-inter font-medium leading-[18px] sm:leading-[20px] text-[#0b0b35] mb-[8px] sm:mb-[10px] lg:mb-[12px]">
                                        Message *
                                    </label>
                                    <EditText
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        multiline={true}
                                        rows={6}
                                        required
                                        className="w-full border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe] resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-[10px] sm:pt-[15px] lg:pt-[20px]">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        loading={loading}
                                        className="w-full sm:w-auto min-w-[200px] text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-[#ffffff] bg-[#3433fe] rounded-[10px] pt-[14px] sm:pt-[16px] lg:pt-[18px] pr-[32px] sm:pr-[40px] lg:pr-[48px] pb-[14px] sm:pb-[16px] lg:pb-[18px] pl-[32px] sm:pl-[40px] lg:pl-[48px] hover:bg-[#2d2bdb] active:bg-[#2622c4] transition-all duration-200"
                                        label={loading ? 'Sending...' : 'Send Message'}
                                        icon={!loading && (
                                            <Image
                                                src="/images/img_arrowright_white_a700.svg"
                                                alt="Send"
                                                width={20}
                                                height={20}
                                                className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]"
                                            />
                                        )}
                                        iconPosition="right"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="w-full">
                            <div className="mb-[30px] sm:mb-[40px] lg:mb-[50px]">
                                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-sora font-semibold leading-[30px] sm:leading-[34px] lg:leading-[38px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                                    Get in Touch
                                </h3>
                                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#51515f]">
                                    We're here to help and answer any question you might have. We look forward to hearing from you.
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-[20px] sm:space-y-[24px] lg:space-y-[28px] mb-[40px] sm:mb-[50px] lg:mb-[60px]">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start gap-[16px] sm:gap-[20px] lg:gap-[24px] p-[20px] sm:p-[24px] lg:p-[28px] bg-[#f8f9fa] rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] hover:bg-[#f0f2f5] transition-colors duration-200">
                                        <div className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px] bg-[#3433fe] rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] flex-shrink-0">
                                            <Image
                                                src={info.icon}
                                                alt={info.title}
                                                width={24}
                                                height={24}
                                                className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px] filter invert brightness-0 contrast-100"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-semibold leading-[20px] sm:leading-[22px] lg:leading-[24px] text-[#0b0b35] mb-[6px] sm:mb-[8px] lg:mb-[10px]">
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#51515f] hover:text-[#3433fe] transition-colors duration-200 underline"
                                                >
                                                    {info.info}
                                                </a>
                                            ) : (
                                                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-inter font-normal leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#51515f]">
                                                    {info.info}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div>
                                <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] font-sora font-semibold leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#0b0b35] mb-[16px] sm:mb-[20px] lg:mb-[24px]">
                                    Follow Us
                                </h4>
                                <div className="flex items-center gap-[12px] sm:gap-[16px] lg:gap-[20px]">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] lg:w-[52px] lg:h-[52px] bg-[#3433fe] rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] hover:bg-[#2d2bdb] transition-all duration-200 hover:scale-105"
                                            aria-label={social.name}
                                        >
                                            <Image
                                                src={social.icon}
                                                alt={social.name}
                                                width={20}
                                                height={20}
                                                className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] filter invert brightness-0 contrast-100"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full bg-global-5 py-[60px] sm:py-[80px] lg:py-[100px]">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-[40px] sm:mb-[50px] lg:mb-[60px]">
                        <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-sora font-semibold leading-[34px] sm:leading-[38px] lg:leading-[42px] text-[#0b0b35] mb-[12px] sm:mb-[16px] lg:mb-[20px]">
                            Find Us Here
                        </h3>
                        <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#51515f]">
                            Visit our office for face-to-face consultations
                        </p>
                    </div>
                    
                    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.842872436157!2d90.3959437!3d23.7531777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sPanthapath%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Linno Office Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Content;