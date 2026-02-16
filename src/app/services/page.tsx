import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <main>
        <div className="bg-brand-dark py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive concrete solutions for commercial projects. 
              From precision warehouse floors to decorative accents.
            </p>
          </div>
        </div>
        
        <ServicesGrid />

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Ready to get started?</h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Contact us today for a free estimate on your next commercial project.
            </p>
            <a href="mailto:office@pmcdecor.com" className="inline-block px-8 py-4 bg-brand-red text-white rounded-md font-bold hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20">
              Request an Estimate
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
