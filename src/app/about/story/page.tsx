import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { History, Target, Users2, MoveRight } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Story Hero */}
        <div className="relative pt-40 pb-24 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-[url('/about/pmc-about-feature.jpg')] bg-cover bg-center" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-sm font-black tracking-[0.5em] text-brand-red uppercase mb-6 flex items-center gap-2">
              <span className="w-12 h-1 bg-brand-red" /> The Paradise Protocol
            </h1>
            <h2 className="text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8 italic">
              Our <span className="text-gray-500">Story.</span>
            </h2>
          </div>
        </div>

        {/* Story Content */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {/* 2004 — The Garage Days */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative pl-8 border-l-2 border-brand-red">
                    <h3 className="text-sm font-black tracking-widest text-brand-red uppercase mb-4 flex items-center gap-2">
                      2004 — The Garage Days
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      Levi Stoltzfus founded Paradise Masonry, LLC in the spring of 2004. We began installing concrete floors with a 4-person crew working out of a 2-car garage.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-video bg-gray-100 overflow-hidden border-2 border-brand-dark/5 hover:border-brand-red/30 transition-all duration-500 shadow-2xl skew-x-1">
                    <Image 
                      src="/about/Paradise-started-2004.jpg" 
                      alt="Paradise Masonry started in 2004" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* 2006 — Expanding Repertoire */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-1">
                   <div className="relative aspect-video bg-gray-100 overflow-hidden border-2 border-brand-dark/5 hover:border-brand-red/30 transition-all duration-500 shadow-2xl -skew-x-1">
                    <Image 
                      src="/about/pmc-2006.jpg" 
                      alt="Paradise Masonry expanded in 2006" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="lg:order-2 text-left lg:text-right">
                  <div className="relative lg:pr-8 border-l-2 lg:border-l-0 lg:border-r-2 border-brand-red pl-8 lg:pl-0">
                    <h3 className="text-sm font-black tracking-widest text-brand-red uppercase mb-4 lg:justify-end flex items-center gap-2">
                      2006 — Expanding Repertoire
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      Paradise Masonry expanded to a 4-bay, 2-story shop and a team of 3 crews. With the added manpower and expertise, we began including Commercial Flatwork and Foundations in our repertoire.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2008 — Scaling Up */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative pl-8 border-l-2 border-brand-red bg-gray-50 p-6 md:p-10">
                    <h3 className="text-sm font-black tracking-widest text-brand-red uppercase mb-4 flex items-center gap-2">
                      2008 — Scaling Up
                    </h3>
                    <p className="text-xl md:text-2xl font-black uppercase tracking-tight italic text-brand-dark">
                      The Paradise Masonry team completed our largest project to date—a concrete floor for a 170,000-sq. ft. building.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                   <div className="relative aspect-video bg-gray-100 overflow-hidden border-2 border-brand-dark/5 hover:border-brand-red/30 transition-all duration-500 shadow-2xl skew-x-1">
                    <Image 
                      src="/about/pmc-landmark.jpg" 
                      alt="170,000 sq. ft. landmark project" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* 2012 — Administrative Growth */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-1">
                   <div className="relative aspect-video bg-gray-100 overflow-hidden border-2 border-brand-dark/5 hover:border-brand-red/30 transition-all duration-500 shadow-2xl -skew-x-1">
                    <Image 
                      src="/about/pmc-2012.jpg" 
                      alt="Paradise Masonry office" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="lg:order-2 text-left lg:text-right">
                  <div className="relative lg:pr-8 border-l-2 lg:border-l-0 lg:border-r-2 border-brand-red pl-8 lg:pl-0">
                    <h3 className="text-sm font-black tracking-widest text-brand-red uppercase mb-4 lg:justify-end flex items-center gap-2">
                      2012 — Administrative Growth
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      Needing more office space, Paradise Masonry leased space at our headquarters in Paradise, PA to accommodate our growing administrative team.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2016 — Turnkey Solutions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative pl-8 border-l-2 border-brand-red">
                    <h3 className="text-sm font-black tracking-widest text-brand-red uppercase mb-4 flex items-center gap-2">
                      2016 — Turnkey Solutions
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      Paradise Masonry added a Tri-Axle Dump Truck and mid-size excavation equipment to complement our concrete services for turnkey projects.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                   <div className="relative aspect-video bg-gray-100 overflow-hidden border-2 border-brand-dark/5 hover:border-brand-red/30 transition-all duration-500 shadow-2xl skew-x-1">
                    <Image 
                      src="/about/pmc-2016.jpg" 
                      alt="Paradise Masonry fleet" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* 2019 — Strategic Headquarters */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-1">
                   <div className="relative aspect-video bg-gray-100 overflow-hidden border-2 border-brand-dark/5 hover:border-brand-red/30 transition-all duration-500 shadow-2xl -skew-x-1">
                    <Image 
                      src="/about/pmc-2019.jpg" 
                      alt="Paradise Masonry Headquarters" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="lg:order-2 text-right">
                  <div className="relative pr-8 border-r-2 border-brand-red">
                    <h3 className="text-sm font-black tracking-widest text-brand-red uppercase mb-4 justify-end flex items-center gap-2">
                      2019 — Strategic Headquarters
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      Paradise Masonry moved into a new facility in Ronks, PA. We now operate our office and storage space from one location with over five specialized crews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="p-12 bg-brand-dark text-white border-l-4 border-brand-red shadow-2xl">
                   <h4 className="text-sm font-black tracking-widest text-brand-red uppercase mb-6">Our Goal</h4>
                   <p className="text-3xl font-black uppercase tracking-tighter italic leading-tight">
                    "To continue to serve as the premier concrete contractor throughout central and southeastern Pennsylvania. We do this by being good stewards and treating our employees and contractors with the appreciation and respect they deserve."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Commitment */}
        <section className="py-32 bg-gray-50 border-y border-gray-200 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Users2 className="w-16 h-16 text-brand-red mx-auto mb-8 opacity-20" />
            <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-8 leading-none">
              Shaping the world we live in, by <br />
              <span className="text-brand-red">pouring into our community.</span>
            </h2>
            <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
              Our mission isn't just about concrete slabs; it's about the families and businesses that rely on the buildings we help create. Every pour is a commitment to the growth and stability of our region.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-brand-dark text-white font-black text-xl hover:bg-brand-red transition-all uppercase tracking-tighter">
              Build with Us <MoveRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
