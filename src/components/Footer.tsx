import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              PARADISE<span className="text-brand-red">MASONRY</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving Central and Southeastern PA with 18 years of excellence in commercial concrete sub-contracting.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/services" className="hover:text-brand-red transition-colors">Services</Link></li>
              <li><Link href="/process" className="hover:text-brand-red transition-colors">Process</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-red transition-colors">Project Gallery</Link></li>
              <li><Link href="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>2771 Lincoln Highway East<br />Ronks, PA 17572</li>
              <li>Tel: <a href="tel:717-687-6842" className="hover:text-brand-red transition-colors">717-687-6842</a></li>
              <li>Email: <a href="mailto:office@pmcdecor.com" className="hover:text-brand-red transition-colors">office@pmcdecor.com</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">License</h4>
            <p className="text-gray-400 text-sm">
              PA#031978
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Paradise Masonry. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
