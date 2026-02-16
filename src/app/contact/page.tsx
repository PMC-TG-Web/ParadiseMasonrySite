import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <main>
        <div className="bg-brand-dark py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Let's Talk</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to partner on your next project? Reach out to us today.
            </p>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-2">Office Address</h4>
                    <p className="text-gray-600">
                      2771 Lincoln Highway East<br />
                      Ronks, PA 17572
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-2">Phone</h4>
                    <a href="tel:717-687-6842" className="text-brand-red hover:text-brand-red/90 font-bold text-xl">
                      717-687-6842
                    </a>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-2">Email</h4>
                    <a href="mailto:office@pmcdecor.com" className="text-gray-600 hover:text-brand-red transition-colors">
                      office@pmcdecor.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-2">License</h4>
                    <p className="text-gray-600">PA#031978</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a message</h3>
                <p className="text-gray-400 italic mb-8">Contact form placeholder - would be integrated with a backend service.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <div className="w-full p-3 bg-white border border-gray-200 rounded-md"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <div className="w-full p-3 bg-white border border-gray-200 rounded-md"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <div className="w-full p-3 bg-white border border-gray-200 rounded-md h-32"></div>
                  </div>
                  <button className="w-full py-4 bg-brand-dark text-white font-bold rounded-md opacity-30 cursor-not-allowed">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
