import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark leading-tight mb-6">
            Teaming With You For <span className="text-brand-red">Solid Results</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Your premier commercial concrete sub-contractor in Central and Southeastern PA. 
            Delivering precision, reliability, and 18 years of industry expertise to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand-red text-white rounded-md font-bold text-lg hover:bg-brand-red/90 transition-all text-center shadow-lg shadow-brand-red/20">
              Get an Estimate
            </Link>
            <Link href="/services" className="px-8 py-4 bg-white text-brand-dark border-2 border-brand-dark/10 rounded-md font-bold text-lg hover:border-brand-dark transition-all text-center">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 translate-x-1/4 skew-x-12 hidden lg:block" />
    </div>
  );
};

export default Hero;
