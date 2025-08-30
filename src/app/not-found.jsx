import Link from 'next/link';
import Header from '@/components/common/Header';

export default function NotFound() {
  return (
    <div className="w-full bg-[#ffffff] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-[18px] pb-[18px] mb-[10px]">
          <Header />
        </div>
        
        {/* 404 Content */}
        <div className="flex flex-col items-center justify-center py-24">
          <h1 className="text-[60px] sm:text-[80px] lg:text-[100px] font-bold text-[#3433fe] mb-4">
            404
          </h1>
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#0b0a3d] mb-6 text-center">
            Page Not Found!
          </h2>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#787878] mb-8 text-center max-w-[600px]">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring our latest articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/"
              className="bg-[#3433fe] text-white px-8 py-3 rounded-full text-[16px] font-medium hover:bg-[#0e0e54] transition-colors duration-200"
            >
              Go to Homepage
            </Link>
            <Link 
              href="/contact"
              className="border border-[#3433fe] text-[#3433fe] px-8 py-3 rounded-full text-[16px] font-medium hover:bg-[#3433fe] hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
