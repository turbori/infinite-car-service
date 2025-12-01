'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Plane, Clock, UserCheck, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: "What happens if my flight is delayed?",
    a: "We monitor all flights automatically. If your flight is delayed, we adjust your pickup time accordingly at no extra charge. We will be there when you land."
  },
  {
    q: "How do I find my driver?",
    a: "You will receive a text message with your driver's name and contact info upon landing. For standard service, they will meet you at the designated curbside area. For Meet & Greet, they will be at baggage claim with a sign."
  },
  {
    q: "Do you provide car seats?",
    a: "Yes, we can provide infant, toddler, and booster seats upon request for a small additional fee. Please specify this when booking."
  }
];

export default function AirportTransfersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="Luxury Airport Transfers" 
        subtitle="Punctual, tracked, and stress-free connections to JFK, LGA, EWR, and HPN."
        image="/assets/images/airport-aircraft-tarmac.jpg"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Process Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flight Tracking</h3>
              <p className="text-slate-600">We monitor your flight in real-time. If you're delayed, we adjust automatically. No stress.</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Early Arrival</h3>
              <p className="text-slate-600">Your chauffeur arrives 15-20 minutes before your scheduled pickup time, guaranteed.</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Meet & Greet</h3>
              <p className="text-slate-600">Optional inside terminal pickup with a name sign for a seamless baggage claim experience.</p>
            </div>
          </div>

          {/* Airports Grid */}
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Airports Served</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-2xl font-bold text-slate-900">JFK International</h4>
                <p className="text-slate-600">Queens, NY</p>
              </div>
              <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">Primary Hub</span>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-2xl font-bold text-slate-900">LaGuardia (LGA)</h4>
                <p className="text-slate-600">Queens, NY</p>
              </div>
              <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">Domestic</span>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-2xl font-bold text-slate-900">Newark (EWR)</h4>
                <p className="text-slate-600">Newark, NJ</p>
              </div>
              <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">International</span>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-2xl font-bold text-slate-900">Westchester (HPN)</h4>
                <p className="text-slate-600">White Plains, NY</p>
              </div>
              <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">Regional</span>
            </div>
          </div>

          <div className="text-center mb-20">
            <Link 
              href="/airport-meeting-points"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700"
            >
              View Detailed Meeting Point Instructions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Alert Section */}
          <div className="p-6 rounded-xl bg-yellow-50 border border-yellow-200 flex items-start gap-4 max-w-3xl mx-auto mb-24">
             <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
             <div>
               <h4 className="text-slate-900 font-bold mb-2">JFK Construction Update</h4>
               <p className="text-slate-600 text-sm">
                 Due to the $19B renovation project at JFK, traffic patterns change frequently. 
                 We recommend booking our <strong>Meet & Greet ($50)</strong> service to avoid shuttle bus delays 
                 and ensure your chauffeur meets you directly at baggage claim.
               </p>
             </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Airport Transfer FAQs</h3>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.q}
                  </h5>
                  <p className="text-slate-600 pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
