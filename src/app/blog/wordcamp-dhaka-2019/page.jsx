import React from 'react'
import Content from './Content'

export const metadata = {
  title: "WordCamp Dhaka 2019 | Linno",
  description: "Our expert developers can turn your innovative ideas into exceptional digital solutions.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/x-icon' }
    ],
  },
};

export default function page() {
    return (
        <>
            <Content />
        </>
    )
}
