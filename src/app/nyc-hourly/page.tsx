'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Clock, Map, ShoppingBag, Music } from 'lucide-react';

export default function NycHourlyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero 
        title="NYC Hourly Service" 
        subtitle="Your private chauffeur on standby. Unlimited stops, total freedom."
        image="/assets/images/Night Out & Entertainment .png"
      />

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">As Directed</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The City is Yours</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Hourly service puts you in complete control. Your chauffeur stays with the vehicle, ready to move 
                at a moment's notice. No waiting for an Uber, no surge pricing, just your own private car.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Minimum 3 hours booking
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Map className="w-5 h-5 text-blue-500" />
                  Unlimited stops within NYC
                </li>
              </ul>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                 <ShoppingBag className="w-8 h-8 text-blue-500 mb-3" />
                 <h4 className="font-bold text-white">Shopping</h4>
                 <p className="text-sm text-gray-400">Fifth Avenue, SoHo, or Hudson Yards. Leave your bags in the car.</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                 <Music className="w-8 h-8 text-blue-500 mb-3" />
                 <h4 className="font-bold text-white">Concerts</h4>
                 <p className="text-sm text-gray-400">MSG, Barclays, or Broadway. Door-to-door service.</p>
               </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-10 text-center">Popular Hourly Itineraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="text-4xl font-bold text-blue-500/20 mb-4">01</div>
              <h4 className="text-xl font-bold text-white mb-3">The Dinner & Show</h4>
              <p className="text-gray-400">Pickup in Long Island → Dinner in Hell's Kitchen → Broadway Show → Return Home safely.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="text-4xl font-bold text-blue-500/20 mb-4">02</div>
              <h4 className="text-xl font-bold text-white mb-3">The Executive Day</h4>
              <p className="text-gray-400">Morning meetings in Midtown → Lunch at Hudson Yards → Afternoon site visit in Brooklyn → Airport drop-off.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="text-4xl font-bold text-blue-500/20 mb-4">03</div>
              <h4 className="text-xl font-bold text-white mb-3">The Holiday Tour</h4>
              <p className="text-gray-400">Rockefeller Center Tree → Saks Light Show → Dyker Heights Lights → Hot Chocolate stop.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

