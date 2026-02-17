import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Services Page Hero */}
        <div className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-[url('/home/IMG_2663.jpg')] bg-cover bg-center" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-sm font-black tracking-widest text-brand-red uppercase mb-6 flex items-center gap-2">
              <span className="w-12 h-1 bg-brand-red" /> Operational excellence
            </h1>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Commercial <br />
              <span className="text-gray-500">Capability Report.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl font-medium leading-relaxed">
              Leveraging 3D Laser Screed technology and precision engineering to deliver high-capacity concrete solutions for industrial, commercial, and structural projects.
            </p>
          </div>
        </div>
        
        <ServicesGrid />

        {/* Technical Capabilities Section */}
        <section className="py-24 bg-brand-dark text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-10 leading-none">
                  Heavy Equipment <br />
                  <span className="text-brand-red">High Performance.</span>
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-brand-red pl-6">
                    <h4 className="font-black uppercase tracking-tight text-xl mb-2">3D Profiler & Laser Screed</h4>
                    <p className="text-gray-400 text-sm">We provide proprietary 3D screeding services that ensure warehouse floor flatness (FF) and levelness (FL) meet rigorous industrial standards, eliminating manual errors.</p>
                  </div>
                  <div className="border-l-2 border-brand-red pl-6">
                    <h4 className="font-black uppercase tracking-tight text-xl mb-2">Total Station Precision</h4>
                    <p className="text-gray-400 text-sm">Every footer and pier we pour is guided by Total Station technology, ensuring your structural foundation matches the architectural blueprint with millimetric accuracy.</p>
                  </div>
                  <div className="border-l-2 border-brand-red pl-6">
                    <h4 className="font-black uppercase tracking-tight text-xl mb-2">High-Capacity Logisics</h4>
                    <p className="text-gray-400 text-sm">Capable of placing and finishing millions of square feet per year. We operate with crews that understand the pace and safety protocols of large-scale commercial sites.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-square bg-gray-800 border border-white/5 opacity-80 hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 bg-[url('/home/IMG_1887.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-brand-dark/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Contact CTA */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-black text-brand-dark uppercase tracking-tighter mb-10 leading-none">
              Get an Industrial-Grade <br />
              <span className="text-gray-300 italic">Project Estimate.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="px-12 py-6 bg-brand-red text-white font-black text-xl hover:bg-brand-dark transition-all uppercase tracking-tighter flex items-center justify-center gap-4">
                Let's Talk Capacity <MoveRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
