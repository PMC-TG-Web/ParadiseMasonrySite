import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Contact Hero */}
        <div className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#9a161f_1px,transparent_1px)] [background-size:60px_60px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-sm font-black tracking-[0.4em] text-brand-red uppercase mb-6">Partner With Excellence</h1>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Request <br /><span className="text-brand-red italic">Project Capacity.</span>
            </h2>
          </div>
        </div>

        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-12">Headquarters</h3>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center text-brand-red border border-gray-100">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-brand-dark mb-2">Location</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">
                        2771 Lincoln Highway East<br />
                        Ronks, PA 17572
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center text-brand-red border border-gray-100">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-brand-dark mb-2">Direct Line</h4>
                      <a href="tel:717-687-6842" className="text-xl font-black text-brand-dark hover:text-brand-red transition-colors">
                        717-687-6842
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center text-brand-red border border-gray-100">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-brand-dark mb-2">Estimating</h4>
                      <a href="mailto:office@pmcdecor.com" className="text-xl font-black text-brand-dark hover:text-brand-red transition-colors">
                        office@pmcdecor.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center text-brand-red border border-gray-100">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-brand-dark mb-2">Registry</h4>
                      <p className="text-gray-500 font-medium">Licensed PA#031978</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-brand-dark p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rotate-45 translate-x-16 -translate-y-16" />
                   
                   <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-10">Bid Request</h3>
                   <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] uppercase font-black tracking-widest text-brand-red mb-3">Company Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="General Contractor LLC" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase font-black tracking-widest text-brand-red mb-3">Your Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-brand-red transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-black tracking-widest text-brand-red mb-3">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-brand-red transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-black tracking-widest text-brand-red mb-3">Project Scope / Sq Ft</label>
                      <textarea className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-brand-red transition-colors h-32" placeholder="Tell us about the project scale..."></textarea>
                    </div>
                    <button className="w-full py-6 bg-brand-red text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-brand-red transition-all duration-300 shadow-xl">
                      Submit for Capability Review
                    </button>
                    <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest font-bold">Paradise Masonry typically responds to commercial inquiries within 24 business hours.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
