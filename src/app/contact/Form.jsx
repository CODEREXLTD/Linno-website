'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';

const Form = ({onSubmit, loading }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Let the parent handle the state change
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'company':
                setCompany(value);
                break;
            case 'subject':
                setSubject(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit) {
            const data = {
                firstName,
                lastName,
                email,
                phone,
                company,
                subject,
                message
            }
            onSubmit(data, 'submit');
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="space-y-[20px] sm:space-y-[24px] lg:space-y-[28px]">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                <div>
                    <EditText
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your first name"
                        value={firstName || ''}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                    />
                </div>
                <div>
                    <EditText
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your last name"
                        value={lastName || ''}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                    />
                </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                <div>
                    <EditText
                        id="email"
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="Enter your email"
                        value={email || ''}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                    />
                </div>
                <div>
                    <EditText
                        id="phone"
                        name="phone"
                        type="tel"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        value={phone || ''}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                    />
                </div>
            </div>

            {/* Company and Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
                <div>
                    <EditText
                        id="company"
                        name="company"
                        label="Company"
                        placeholder="Enter your company name"
                        value={company || ''}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                    />
                </div>
                <div>
                    <EditText
                        id="subject"
                        name="subject"
                        label="Subject"
                        placeholder="Enter subject"
                        value={subject || ''}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe]"
                    />
                </div>
            </div>

            {/* Message */}
            <div>
                <EditText
                    id="message"
                    name="message"
                    label="Message"
                    placeholder="Tell us about your project..."
                    value={message || ''}
                    onChange={handleInputChange}
                    multiline={true}
                    rows={6}
                    required
                    className="border-gray-300 focus:border-[#3433fe] focus:ring-[#3433fe] resize-none"
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
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </Button>
            </div>
        </form>
    );
};

export default Form;