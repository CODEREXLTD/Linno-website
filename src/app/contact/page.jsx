import React from 'react';
import Content from './Content';

export const metadata = {
  title: "Contact Us | Linno",
  description: "Get in touch with Linno. We are here to help you with your software development needs.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/x-icon' }
    ],
  },
};

const Contact = () => {
	return(
		<Content />
	)
};

export default Contact;
