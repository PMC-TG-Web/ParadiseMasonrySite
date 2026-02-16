import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <main>
        <div className="bg-brand-dark py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Paradise Masonry</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              18 years of excellence in commercial concrete sub-contracting.
            </p>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Your Premier Local Concrete Contractor</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6">
                Sub-contractors who don’t show up on time or get done on time can damage your reputation as a contractor. To avoid this, Paradise Masonry consistently prioritizes promptness, efficiency, and quality.
              </p>
              <p className="mb-6">
                With 18 years in the concrete industry under our belts, we love the challenge of managing the details. We deliver highly-skilled results on every project we touch.
              </p>
              <p>
                Paradise Masonry takes care of the entire concrete flatwork process for you—from value engineering to bid takeoff and estimating, from scheduling and project management to professional concrete pouring and laying.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
