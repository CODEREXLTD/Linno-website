import React from 'react';
import Content from './Content';

export const metadata = {
  title: "Careers | Linno",
  description: "Our expert developers can turn your innovative ideas into exceptional digital solutions.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/x-icon' }
    ],
  },
};

const CareersPage = () => {
	return(
		<Content />
	)
};

export default CareersPage;