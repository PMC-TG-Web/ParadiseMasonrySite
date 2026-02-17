import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, BarChart3, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Capability Bar */}
        <section className="py-6 bg-brand-dark border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-40 grayscale hover:opacity-80 transition-opacity duration-500">
              <div className="text-sm font-black text-white tracking-[0.3em] uppercase">Laser Screed Certified</div>
              <div className="text-sm font-black text-white tracking-[0.3em] uppercase">3D Profiler Tech</div>
              <div className="text-sm font-black text-white tracking-[0.3em] uppercase">Commercial Grade</div>
              <div className="text-sm font-black text-white tracking-[0.3em] uppercase">PA# 031978</div>
            </div>
          </div>
        </section>

        <ServicesGrid />

        {/* Big Boy Stats / Value Prop */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[4/5] bg-gray-900 overflow-hidden shadow-2xl skew-x-1 group">
                    <div className="absolute inset-0 bg-gray-800 opacity-60 bg-[url('/home/IMG_1971.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60" />
                    <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-6xl font-black italic tracking-tighter mb-2">1,000,000+</p>
                      <p className="text-xs uppercase tracking-[0.3em] font-black text-brand-red">SQ FT Poured Annually</p>
                    </div>
                  </div>
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-red p-8 flex flex-col justify-center items-center text-white hidden xl:flex">
                    <ShieldCheck className="w-12 h-12 mb-4" />
                    <p className="text-center text-[10px] font-black tracking-widest leading-tight uppercase">Fully Licensed & Insured PA# 031978</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-sm font-black tracking-widest text-brand-red uppercase mb-6 flex items-center gap-2">
                  <span className="w-12 h-1 bg-brand-red" /> Why Choose Paradise
                </h2>
                <h3 className="text-5xl font-black text-brand-dark mb-10 leading-none uppercase tracking-tighter">
                  We Build the Floors <br />
                  <span className="text-gray-300">That Build Business.</span>
                </h3>
                
                <div className="space-y-12">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gray-50 flex items-center justify-center text-brand-red border border-gray-100 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-brand-dark uppercase tracking-tight mb-2">Industrial Speed</h4>
                      <p className="text-gray-500 leading-relaxed font-medium">Your schedule is non-negotiable. We deploy high-capacity crews and advanced machinery to hit deadlines every time.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gray-50 flex items-center justify-center text-brand-red border border-gray-100 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-brand-dark uppercase tracking-tight mb-2">Technical Excellence</h4>
                      <p className="text-gray-500 leading-relaxed font-medium">Using the 3D Profiler means zero-tolerance results. We eliminate high spots and low spots before they happen.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gray-50 flex items-center justify-center text-brand-red border border-gray-100 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-brand-dark uppercase tracking-tight mb-2">Contractor-to-Contractor</h4>
                      <p className="text-gray-500 leading-relaxed font-medium">We speak the language of GCs. Clear communication, detailed submittals, and professional project management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50 overflow-hidden border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Quote className="absolute -top-8 -left-4 w-16 h-16 text-gray-100 -z-0" />
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <p className="text-xl lg:text-2xl font-black text-brand-dark uppercase tracking-tighter leading-tight mb-6 italic">
                  "We take for granted the quality and hard work you put into making a happy customer. So thank you and your team for making our customers happy….We really do appreciate your quality and attention to details. What I am learning is the <span className="text-brand-red">“small” things make a BIG difference</span>. So thank you for making a BIG difference for our customers."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-8 bg-brand-red" />
                  <p className="text-base font-black uppercase tracking-[0.3em] text-brand-dark">Jonathan M</p>
                  <div className="h-px w-8 bg-brand-red" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial CTA Section */}
        <section className="relative py-32 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 opacity-40">
             <div className="absolute inset-0 bg-[url('/home/IMG_2663.jpg')] bg-cover bg-center" />
             <div className="absolute inset-0 bg-brand-dark/30" />
          </div>
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-sm font-black tracking-[0.4em] text-brand-red uppercase mb-8">Ready to Scale?</h2>
            <h3 className="text-5xl lg:text-7xl font-black text-white mb-12 uppercase tracking-tighter leading-none">
              Solid Foundations <br />For Big Projects.
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link href="/contact" className="px-12 py-6 bg-brand-red text-white font-black text-xl hover:bg-white hover:text-brand-red transition-all uppercase tracking-tighter">
                Request Capacity
              </Link>
              <a href="tel:717-687-6842" className="px-12 py-6 bg-transparent border-2 border-white/20 text-white font-black text-xl hover:bg-white/10 transition-all uppercase tracking-tighter">
                717-687-6842
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
