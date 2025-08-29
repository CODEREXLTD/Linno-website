import React from 'react';
import PrivacyContent from './Content.jsx';

export const metadata = {
  title: "Privacy Policy & Terms of Use | Linno",
  description: "Learn about Linno's privacy policy and terms of use. Understand how we protect your personal information and data while using our services.",
  keywords: "privacy policy, terms of use, data protection, privacy, legal, Linno",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/x-icon' }
    ],
  },
};

const PrivacyPolicyPage = () => {
  return <PrivacyContent />;
};

export default PrivacyPolicyPage;
