import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-brand-dark pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/common/logo.png" 
                alt="Paradise Masonry Logo" 
                width={220} 
                height={60} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Serving Central and Southeastern PA with 18 years of excellence in commercial concrete sub-contracting.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg uppercase tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><Link href="/services" className="hover:text-brand-red transition-colors">Services</Link></li>
              <li><Link href="/process" className="hover:text-brand-red transition-colors">Process</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-red transition-colors">Project Gallery</Link></li>
              <li><Link href="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg uppercase tracking-tight">Contact Us</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>2771 Lincoln Highway East<br />Ronks, PA 17572</li>
              <li>Tel: <a href="tel:717-687-6842" className="hover:text-brand-red transition-colors">717-687-6842</a></li>
              <li>Email: <a href="mailto:office@pmcdecor.com" className="hover:text-brand-red transition-colors">office@pmcdecor.com</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg uppercase tracking-tight">License</h4>
            <p className="text-gray-500 text-sm mb-8 font-medium">
              PA#031978
            </p>
            <h4 className="font-bold mb-6 text-lg uppercase tracking-tight">Affiliations</h4>
            <div className="flex flex-wrap gap-6 opacity-100">
              <Image src="/common/acss.png" alt="ASCC Member" width={120} height={60} className="h-12 w-auto object-contain" unoptimized />
              <Image src="/common/abc.png" alt="ABC Member" width={120} height={60} className="h-12 w-auto object-contain" unoptimized />
              <Image src="/common/aci.png" alt="ACI Member" width={120} height={60} className="h-12 w-auto object-contain" unoptimized />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs text-center md:text-left font-medium">
            © {new Date().getFullYear()} Paradise Masonry. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400 font-medium">
            <Link href="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
