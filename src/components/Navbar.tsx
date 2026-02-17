import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

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
                className="h-12 w-auto md:h-16 object-contain"
                priority
                unoptimized
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
                <ChevronDown className="w-3 h-3 opacity-40 group-hover:rotate-180 transition-transform" />
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
          
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark border border-gray-100 p-2 hover:bg-gray-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-28 bg-white z-[60] transition-transform duration-500 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-4 py-8 space-y-2">
          <Link 
            href="/services" 
            onClick={() => setIsOpen(false)}
            className="block py-4 border-b border-gray-50 text-xl font-black uppercase tracking-tighter text-brand-dark hover:text-brand-red"
          >
            Services
          </Link>
          <Link 
            href="/process" 
            onClick={() => setIsOpen(false)}
            className="block py-4 border-b border-gray-50 text-xl font-black uppercase tracking-tighter text-brand-dark hover:text-brand-red"
          >
            Process
          </Link>
          <Link 
            href="/gallery" 
            onClick={() => setIsOpen(false)}
            className="block py-4 border-b border-gray-50 text-xl font-black uppercase tracking-tighter text-brand-dark hover:text-brand-red"
          >
            Project Gallery
          </Link>
          
          <div className="py-4 border-b border-gray-50">
            <button 
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full flex justify-between items-center text-xl font-black uppercase tracking-tighter text-brand-dark hover:text-brand-red"
            >
              About Us
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ${aboutOpen ? 'max-h-40' : 'max-h-0'}`}>
              <Link 
                href="/about/story" 
                onClick={() => setIsOpen(false)}
                className="block pl-4 text-base font-black uppercase tracking-widest text-gray-400 hover:text-brand-red"
              >
                — Our Story
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsOpen(false)}
                className="block pl-4 text-base font-black uppercase tracking-widest text-gray-400 hover:text-brand-red"
              >
                — Experience
              </Link>
            </div>
          </div>

          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="block py-6 mt-8 bg-brand-red text-white text-center text-xl font-black uppercase tracking-tighter"
          >
            Request A Quote
          </Link>
          
          <div className="pt-12 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-2">General Inquiries</p>
            <a href="tel:717-687-6842" className="text-xl font-black text-brand-dark">717-687-6842</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export default Navbar;
