import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

const projects = [
  { img: '/home/IMG_1887.jpg', title: 'Industrial Warehouse Slab', detail: '120k Sq Ft Laser-Precision Placement' },
  { img: '/home/IMG_1971.jpg', title: 'Commercial Development', detail: '3D Prolifer Leveling & Structural Prep' },
  { img: '/home/IMG_2663.jpg', title: 'Logistics Center Expansion', detail: 'High-Velocity High-Flatness Pour' },
  { img: '/home/IMG_1887.jpg', title: 'Decking Slab Project', detail: 'Multi-Floor Structural Concrete' },
  { img: '/home/IMG_1971.jpg', title: 'Truck Apron Paving', detail: '3D Paving Protocol with Zero Gravity' },
  { img: '/home/IMG_2663.jpg', title: 'Site Concrete Elite', detail: 'Industrial Exterior Paving & Finishing' },
];

export default function ScalePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <div className="relative pt-40 pb-32 bg-brand-dark overflow-hidden border-b border-white/5">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            >
              <source src="/common/Harvest Pour.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-brand-dark/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/40" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-sm font-black tracking-[0.5em] text-brand-red uppercase mb-8">Performance Portfolio</h1>
            <h2 className="text-6xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6 italic">
              Project <span className="text-brand-red">Gallery</span>
            </h2>
            <p className="text-gray-300 font-black uppercase tracking-[0.3em] text-sm max-w-2xl mx-auto leading-relaxed">
              Witness the scale of our operations through high-precision engineering and industrial capacity.
            </p>
          </div>
        </div>

        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div key={i} className="group relative aspect-square bg-gray-900 overflow-hidden skew-y-1 hover:skew-y-0 transition-all duration-700">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-red mb-2">{project.detail}</div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
