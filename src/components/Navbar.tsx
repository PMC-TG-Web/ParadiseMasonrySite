import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-dark tracking-tight">
              PARADISE<span className="text-brand-red">MASONRY</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/services" className="text-gray-600 hover:text-brand-red transition-colors font-medium">Services</Link>
            <Link href="/process" className="text-gray-600 hover:text-brand-red transition-colors font-medium">Process</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-brand-red transition-colors font-medium">Project Gallery</Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-red transition-colors font-medium">About</Link>
            <Link href="/contact" className="ml-4 px-6 py-2.5 bg-brand-red text-white rounded-md font-semibold hover:bg-brand-red/90 transition-all shadow-sm">
              Let's Talk
            </Link>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className="text-gray-600">
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
