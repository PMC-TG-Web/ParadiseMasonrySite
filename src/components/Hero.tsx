import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gray-800">
          <div className="w-full h-full opacity-70 bg-[url('/home/IMG_1887.jpg')] bg-cover bg-center" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red text-sm font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            Industrial Precision at Scale
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Big Scale.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">
              Elite Precision.
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed italic border-l-4 border-brand-red pl-6">
            "Teaming with you for solid results." Since 2008, we've specialized in 100,000+ sq. ft. commercial pours, powered by 3D Laser Screed technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact" className="px-10 py-5 bg-brand-red text-white font-black text-xl hover:bg-white hover:text-brand-red transition-all text-center uppercase tracking-tighter">
              Get A Quote
            </Link>
            <Link href="/gallery" className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black text-xl hover:bg-white/10 transition-all text-center uppercase tracking-tighter">
              View Our Scale
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-black text-brand-red">18+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-black text-brand-red">3D</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Laser Precision</div>
            </div>
            <div>
              <div className="text-3xl font-black text-brand-red">1M+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Sq Ft Annual Placement</div>
            </div>
            <div>
              <div className="text-3xl font-black text-brand-red">PA#</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">031978 licensed</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Structural Accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-brand-red z-30" />
    </div>
  );
};

export default Hero;
