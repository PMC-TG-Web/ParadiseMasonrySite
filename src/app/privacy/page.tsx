import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <main className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-orange max-w-none text-gray-600">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-6">At Paradise Masonry, we respect your privacy and are committed to protecting it. This privacy policy describes how we collect, use, and handle your information when you use our website.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect information you provide directly to us through contact forms or email, such as your name, email address, and project details.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Information</h2>
            <p className="mb-4">We use the information we collect to respond to inquiries, provide estimates, and manage our business relationships.</p>
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-sm italic text-gray-500">Note: This is a placeholder privacy policy. Please consult with legal counsel to ensure compliance with relevant laws.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
