import React from 'react';
import { Building2, Layers, Truck, Move, Drill, Ruler, Sparkles, HardHat, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Warehouse Floors',
    description: 'Specializing in massive placement—areas of several hundred thousand square feet with high-tech, laser-precision technology.',
    icon: Building2,
    code: 'Scale: 100k+ SQ FT',
    image: '/services/IMG_1475.jpg'
  },
  {
    title: '3D Screed Service',
    description: 'Our 3D Profiler ensures precise screeding for driveways, parking lots, and truck aprons on every project.',
    icon: Ruler,
    code: 'Laser Precision',
    image: '/services/IMG_1438.jpg'
  },
  {
    title: 'Decking Slabs',
    description: 'Engineered slabs for parking garages, multi-floor apartment buildings, and industrial mezzanines.',
    icon: Layers,
    code: 'Structural Elite',
    image: '/services/IMG_2023.JPG'
  },
  {
    title: 'Footers & Piers',
    description: 'Using Total Station laser technology to pour wide foundations for apartment complexes and office spaces.',
    icon: Drill,
    code: 'Foundational Precision',
    image: '/services/IMG_2360.jpg'
  },
  {
    title: 'Loading Docks',
    description: 'Engineered high-durability concrete for high-traffic loading dock systems and pits.',
    icon: Truck,
    code: 'Logistics Ready',
    image: '/services/IMG_0572.JPG'
  },
  {
    title: 'Concrete Paving',
    description: 'Industrial-grade paving for heavy-duty traffic areas, delivery yards, and commercial parking Lots.',
    icon: Move,
    code: 'Industrial Paving',
    image: '/services/IMG_3189.jpg'
  },
  {
    title: 'Site Concrete Work',
    description: 'Professional exterior concrete including sidewalks, carports, and integrated complex drainage solutions.',
    icon: HardHat,
    code: 'Site Ready',
    image: '/services/IMG_1690.JPG'
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-[#f8f8f8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black tracking-widest text-brand-red uppercase mb-4 pl-1 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-red" /> Elite Capabilities
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tighter">
              Commercial Concrete <br />
              <span className="text-gray-400">Engineering.</span>
            </h3>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 font-black uppercase text-sm tracking-widest text-brand-red hover:gap-4 transition-all">
            Full Capability Report <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white border border-gray-100 hover:border-brand-red/30 transition-all hover:shadow-2xl group overflow-hidden">
              {/* Image Background (Hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                  unoptimized
                />
                <div className="absolute inset-0 bg-brand-dark/30" />
              </div>

              <div className="relative z-10 p-10">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-60 transition-opacity">
                  <service.icon className="w-16 h-16 text-brand-dark group-hover:text-white" />
                </div>
                
                <div className="mb-8 p-3 rounded-lg bg-gray-50 inline-block group-hover:bg-brand-red transition-colors">
                  <service.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                </div>
                
                <div className="text-[10px] uppercase font-black tracking-[0.2em] text-brand-red mb-3">
                  {service.code}
                </div>
                
                <h3 className="text-2xl font-black text-brand-dark group-hover:text-white uppercase mb-4 tracking-tighter leading-none drop-shadow-md">{service.title}</h3>
                <p className="text-gray-500 group-hover:text-white leading-relaxed text-sm mb-6 font-bold drop-shadow-sm">
                  {service.description}
                </p>
                
                <div className="h-1 w-0 bg-brand-red group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
