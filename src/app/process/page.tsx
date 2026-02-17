import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hammer, ClipboardCheck, FastForward, CheckCircle } from 'lucide-react';

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Protocol Hero */}
        <div className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#9a161f_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-sm font-black tracking-[0.4em] text-brand-red uppercase mb-6">Execution Standard</h1>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Our <span className="text-brand-red">Process.</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">How You Get to the Finish Line</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Focus on your big picture, and let our knowledgeable project managers take you from A to Z. At Paradise Masonry, every project follows each step of our concrete services process. This ensures our work is done to spec, on time, and on budget.
              </p>
            </div>
          </div>
        </div>

        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-2">
              <div className="p-12 bg-gray-50 border border-gray-100 group hover:border-brand-red/30 transition-all duration-500">
                <div className="text-4xl font-black text-brand-red mb-12 tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity">01</div>
                <div className="mb-8">
                  <ClipboardCheck className="w-10 h-10 text-brand-dark" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-brand-dark uppercase tracking-tighter">Value <br />Engineering</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">We don't just bid projects. We analyze blueprints for efficiency opportunities, providing bid takeoff and estimation that balances cost with structural longevity.</p>
              </div>
              
              <div className="p-12 bg-white border border-gray-100 group hover:border-brand-red/30 transition-all duration-500 shadow-2xl z-10">
                <div className="text-4xl font-black text-brand-red mb-12 tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity">02</div>
                <div className="mb-8">
                  <FastForward className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-brand-dark uppercase tracking-tighter">Velocity <br />Scheduling</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">A stalled job site is a liability. Our project management protocol ensures that our high-capacity crews move in lockstep with the General Contractor's timeline.</p>
              </div>
              
              <div className="p-12 bg-gray-50 border border-gray-100 group hover:border-brand-red/30 transition-all duration-500">
                <div className="text-4xl font-black text-brand-red mb-12 tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity">03</div>
                <div className="mb-8">
                  <Hammer className="w-10 h-10 text-brand-dark" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-brand-dark uppercase tracking-tighter">3D Precision <br />Laying</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">Using Laser Screed technology, we execute massive pours with absolute flatness. The protocol eliminates manual variability, delivering industrial-grade floors every time.</p>
              </div>

              <div className="p-12 bg-white border border-gray-100 group hover:border-brand-red/30 transition-all duration-500 shadow-2xl z-10">
                <div className="text-4xl font-black text-brand-red mb-12 tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity">04</div>
                <div className="mb-8">
                  <CheckCircle className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-brand-dark uppercase tracking-tighter">Professional <br />Finality</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">We conclude every job with a meticulous sweep and review. We leave the site ready for the next phase, following a "contractor-first" clean-site policy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Detail Section */}
        <section className="py-32 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h4 className="text-brand-red font-black uppercase tracking-[0.3em] mb-6">The Multi-Layer Protocol</h4>
              <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-10 leading-none">
                Because Big Jobs <br />
                <span className="text-gray-500 italic">Have Zero Margin.</span>
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed font-medium mb-12 border-l-4 border-brand-red pl-8 italic">
                "Our rigourous workflow is designed to manage the details that derail multi-million dollar construction projects. We speak the same language as your engineering and management teams."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
