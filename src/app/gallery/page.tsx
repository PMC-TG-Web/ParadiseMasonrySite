import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <main>
        <div className="bg-brand-dark py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of our recent commercial concrete projects and precision flatwork.
            </p>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-video bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center hover:shadow-lg transition-all group cursor-pointer">
                  <p className="text-gray-400 font-medium group-hover:text-brand-red transition-colors">Project Image Placeholder #{i}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-gray-500 italic">Coming soon: High-resolution project portfolio featuring our laser-precision flatwork.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
