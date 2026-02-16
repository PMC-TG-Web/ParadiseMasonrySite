import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trusted Partners / Logo Cloud */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 font-semibold uppercase tracking-widest text-xs mb-8">A Partner You Can Count On</p>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
              {/* Placeholders for partner logos/values */}
              <div className="text-xl font-black text-brand-dark italic tracking-tighter">PRECISION</div>
              <div className="text-xl font-black text-brand-dark italic tracking-tighter">RELIABLE</div>
              <div className="text-xl font-black text-brand-dark italic tracking-tighter">QUALITY</div>
              <div className="text-xl font-black text-brand-dark italic tracking-tighter">EFFICIENT</div>
            </div>
          </div>
        </section>

        <ServicesGrid />

        {/* Value Proposition / Secondary Info */}
        <section className="py-24 bg-gray-50 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-brand-dark mb-8">Why Paradise Masonry?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red flex items-center justify-center text-white text-xs">✓</div>
                    <div>
                      <h4 className="font-bold text-brand-dark">18 Years Experience</h4>
                      <p className="text-gray-600">Deep expertise in managing complex concrete details.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red flex items-center justify-center text-white text-xs">✓</div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Laser Precision</h4>
                      <p className="text-gray-600">Utilizing high-tech 3D Profiler and Laser Screed technology.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red flex items-center justify-center text-white text-xs">✓</div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Prompt & Efficient</h4>
                      <p className="text-gray-600">We respect your schedule and hit deadlines reliably.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                   <span className="text-gray-400 font-medium">Professional Project Image Placeholder</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-8 rounded-xl hidden md:block">
                  <p className="text-3xl font-bold">18+</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Years of Trust</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-dark py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Make Your Plans Concrete</h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Ready to start your next commercial project with a partner you can count on?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:717-687-6842" className="px-10 py-5 bg-white text-brand-dark rounded-md font-bold text-lg hover:bg-gray-100 transition-all">
                Call 717-687-6842
              </a>
              <a href="mailto:office@pmcdecor.com" className="px-10 py-5 bg-brand-red text-white rounded-md font-bold text-lg hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20">
                Email Us Today
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
