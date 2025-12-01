'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Wifi, Coffee } from 'lucide-react';

export default function BusinessTravelPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero 
        title="Business Travel Solutions" 
        subtitle="Seamless logistics for roadshows, conferences, and executive commutes."
        image="/assets/images/Corporate & Executive Travel.png"
      />

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">Efficiency in Motion</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Mobile Office</h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Maximize your productivity while on the move. Our vehicles are equipped with the amenities 
              modern executives need to stay connected and prepared before their next meeting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
              <Wifi className="w-10 h-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">In-Car Wi-Fi</h4>
              <p className="text-gray-400 text-sm">High-speed connection for emails and video calls.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
              <ShieldCheck className="w-10 h-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">NDA Discretion</h4>
              <p className="text-gray-400 text-sm">What is discussed in the car, stays in the car.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
              <FileText className="w-10 h-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Easy Expense</h4>
              <p className="text-gray-400 text-sm">Automated digital receipts sent instantly after ride.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
              <Coffee className="w-10 h-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Concierge</h4>
              <p className="text-gray-400 text-sm">Coffee runs or dry cleaning pickup? Just ask.</p>
            </div>
          </div>

          <div className="bg-blue-900/20 rounded-2xl p-10 md:p-16 text-center">
             <h3 className="text-3xl font-bold text-white mb-6">Roadshows & Multi-Stop Itineraries</h3>
             <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
               Managing complex schedules involves precision. Our dispatch team specializes in roadshow logistics, 
               coordinating multiple vehicles, last-minute itinerary changes, and ensuring your team stays on schedule across NYC.
             </p>
             <a 
               href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
               target="_blank"
               className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
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

