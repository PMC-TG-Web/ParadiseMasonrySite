import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <main>
        <div className="bg-brand-dark py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Process</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              How we ensure quality and precision from bid to finished pour.
            </p>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 border border-gray-100 rounded-xl bg-gray-50">
                <div className="text-4xl font-black text-brand-red mb-4 tracking-tighter opacity-30">01</div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Planning</h3>
                <p className="text-gray-600">Value engineering, bid takeoff, and detailed estimating to ensure project viability.</p>
              </div>
              <div className="p-8 border border-gray-100 rounded-xl bg-gray-50">
                <div className="text-4xl font-black text-brand-red mb-4 tracking-tighter opacity-30">02</div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Management</h3>
                <p className="text-gray-600">Strict scheduling and proactive project management to keep your construction on track.</p>
              </div>
              <div className="p-8 border border-gray-100 rounded-xl bg-gray-50">
                <div className="text-4xl font-black text-brand-red mb-4 tracking-tighter opacity-30">03</div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">Execution</h3>
                <p className="text-gray-600">Professional concrete pouring and laying using laser-precision technology.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
