'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Wifi, Coffee } from 'lucide-react';

export default function BusinessTravelPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="Business Travel Solutions" 
        subtitle="Seamless logistics for roadshows, conferences, and executive commutes."
        image="/assets/images/Corporate & Executive Travel.png"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Efficiency in Motion</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Mobile Office</h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Maximize your productivity while on the move. Our vehicles are equipped with the amenities 
              modern executives need to stay connected and prepared before their next meeting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center group hover:shadow-lg transition-all">
              <Wifi className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-slate-900 font-bold mb-2">In-Car Wi-Fi</h4>
              <p className="text-slate-600 text-sm">High-speed connection for emails and video calls.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center group hover:shadow-lg transition-all">
              <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-slate-900 font-bold mb-2">NDA Discretion</h4>
              <p className="text-slate-600 text-sm">What is discussed in the car, stays in the car.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center group hover:shadow-lg transition-all">
              <FileText className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-slate-900 font-bold mb-2">Easy Expense</h4>
              <p className="text-slate-600 text-sm">Automated digital receipts sent instantly after ride.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center group hover:shadow-lg transition-all">
              <Coffee className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-slate-900 font-bold mb-2">Concierge</h4>
              <p className="text-slate-600 text-sm">Coffee runs or dry cleaning pickup? Just ask.</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-10 md:p-16 text-center border border-blue-100">
             <h3 className="text-3xl font-bold text-slate-900 mb-6">Roadshows & Multi-Stop Itineraries</h3>
             <p className="text-slate-600 max-w-3xl mx-auto mb-8 text-lg">
               Managing complex schedules involves precision. Our dispatch team specializes in roadshow logistics, 
               coordinating multiple vehicles, last-minute itinerary changes, and ensuring your team stays on schedule across NYC.
             </p>
             <a 
               href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
               target="_blank"
               className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
             >
               Book Roadshow Service
             </a>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
