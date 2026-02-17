import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* About Hero */}
        <div className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-[url('/about/pmc-about-feature.jpg')] bg-cover bg-center" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-sm font-black tracking-widest text-brand-red uppercase mb-6 flex items-center gap-2">
              <span className="w-12 h-1 bg-brand-red" /> Established 2008
            </h1>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Experience the security of a <br />
              <span className="text-brand-red">Solid Foundation.</span>
            </h2>
            <div className="max-w-2xl">
              <p className="text-xl text-white font-black uppercase tracking-tight mb-4">
                As commercial concrete contractors, you deserve fair treatment.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                Paradise Masonry brings you our highest level of service. From estimate to windup.
              </p>
            </div>
          </div>
        </div>

        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h3 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-10 leading-none">
                  Reliability is <br />
                  <span className="text-brand-red">Our Blueprint.</span>
                </h3>
                <div className="space-y-8 text-gray-500 font-medium leading-relaxed">
                  <p>
                    Since 2008, Paradise Masonry has served as a critical pillar for General Contractors across Central and Southeastern PA. We don't just pour concrete; we manage the complex engineering details that keep multi-million dollar industrial projects on track.
                  </p>
                  <p>
                    With 18 years of specialized focus on commercial flatwork, our team understands that on a commercial site, "good enough" is a liability. We prioritize high-capacity output without sacrificing the zero-tolerance precision required for modern warehouse slabs and structural decking.
                  </p>
                  <p>
                    Our transition to 3D Laser Screed technology marked our commitment to being the region's elite commercial sub-contractor—bringing the kind of equipment and expertise usually reserved for the nation's largest firms to local and regional job sites.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden skew-x-1 grayscale shadow-2xl">
                   <Image 
                    src="/home/IMG_1971.jpg" 
                    alt="Precision Concrete Work" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-brand-red p-10 text-white hidden md:block">
                  <p className="text-5xl font-black tracking-tighter italic">18+</p>
                  <p className="text-xs font-black uppercase tracking-[0.2em]">Years Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement / Industrial Bar */}
        <section className="bg-gray-50 py-24 border-y border-gray-200">
           <div className="max-w-5xl mx-auto px-4 text-center">
             <h3 className="text-sm font-black tracking-[0.5em] text-brand-red uppercase mb-8">Our Mission</h3>
             <blockquote className="text-3xl lg:text-4xl font-black text-brand-dark uppercase tracking-tighter italic leading-tight">
               "Shaping the world we live in, by <span className="text-brand-red">pouring into the foundation</span> of our community."
             </blockquote>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
