'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';

const Form = ({ data, onSubmit, loading }) => {
    const [formData, setFormData] = React.useState(data || {});
    const handleInputChange = (e) => {
        // Let the parent handle the state change
        if (onSubmit) {
            const { name, value } = e.target;
            const updatedData = {
                ...formData,
                [name]: value
            };
            localStorage.setItem('formData', JSON.stringify(updatedData));
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit) {
            const updatedDataOBJ = await localStorage.getItem('formData');
            const updatedData = await JSON.parse(updatedDataOBJ);
            onSubmit(updatedData, 'submit');
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
                        value={formData.firstName || ''}
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
                        value={formData.lastName || ''}
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
                        value={formData.email || ''}
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
                        value={formData.phone || ''}
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
                        value={formData.company || ''}
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
                        value={formData.subject || ''}
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
                    value={formData.message || ''}
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