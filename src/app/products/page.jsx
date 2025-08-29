import React from 'react';
import ProductsContent from './ProductsContent';

export const metadata = {
  title: "Linno - High-End Software Solutions",
  description: "Our expert developers can turn your innovative ideas into exceptional digital solutions.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/x-icon' }
    ],
  },
};

export default function Products() {
    return(
        <ProductsContent />
    )
}