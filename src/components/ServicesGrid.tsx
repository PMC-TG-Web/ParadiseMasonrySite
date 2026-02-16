import React from 'react';
import { Building2, Layers, Truck, Move, Drill, Ruler, Sparkles, HardHat } from 'lucide-react';

const services = [
  {
    title: 'Warehouse Floors',
    description: 'From small to massive. High-tech, laser-precision technology for areas of several hundred thousand square feet.',
    icon: Building2,
  },
  {
    title: 'Decking Slabs',
    description: 'Concrete slabs for parking garages, multi-floor apartment buildings, and warehouse mezzanines.',
    icon: Layers,
  },
  {
    title: 'Loading Docks',
    description: 'High-quality, durable concrete construction specifically for heavy-duty loading dock requirements.',
    icon: Truck,
  },
  {
    title: 'Concrete Paving',
    description: 'Precise 3-D Profiler screeding for driveways, parking lots, truck aprons, and more.',
    icon: Move,
  },
  {
    title: 'Site Concrete Work',
    description: 'Professional exterior work including sidewalks, carports, and integrated site concrete solutions.',
    icon: HardHat,
  },
  {
    title: 'Footers & Piers',
    description: 'Laser technology and total station precision for a wide variety of foundation footers and piers.',
    icon: Drill,
  },
  {
    title: '3D Screed Service',
    description: 'Laser precision technology for warehouse floors, also available as a service for other contractors.',
    icon: Ruler,
  },
  {
    title: 'Decorative Concrete',
    description: 'Exposed aggregate, stamped patterns, and colored concrete to add beauty to commercial spaces.',
    icon: Sparkles,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1 bg-gray-50/50 group">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <service.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
