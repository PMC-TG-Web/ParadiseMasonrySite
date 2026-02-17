import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/common/logo.png" 
                alt="Paradise Masonry Logo" 
                width={280} 
                height={80} 
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden lg:flex space-x-10 items-center">
            <Link href="/services" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-red transition-all">Services</Link>
            <Link href="/process" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-red transition-all">Process</Link>
            <Link href="/gallery" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-red transition-all">Project Gallery</Link>
            <div className="relative group">
              <Link href="/about" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-red transition-all flex items-center gap-1">
                About Us
                <svg className="w-2.5 h-2.5 opacity-40 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/about/story" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-red hover:bg-gray-50 transition-colors">Our Story</Link>
                <Link href="/about" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-red hover:bg-gray-50 border-t border-gray-50 transition-colors">Experience</Link>
              </div>
            </div>
            <Link href="/contact" className="ml-4 px-8 py-3 bg-brand-red text-white text-xs font-black uppercase tracking-widest hover:bg-brand-dark transition-all">
              Request A Quote
            </Link>
          </div>
          
          <div className="lg:hidden">
            <button className="text-brand-dark border border-gray-100 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
