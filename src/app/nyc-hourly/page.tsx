'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Clock, Map, ShoppingBag, Music } from 'lucide-react';

export default function NycHourlyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="NYC Hourly Service" 
        subtitle="Your private chauffeur on standby. Unlimited stops, total freedom."
        image="/assets/images/Night Out & Entertainment .png"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">As Directed</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The City is Yours</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Hourly service puts you in complete control. Your chauffeur stays with the vehicle, ready to move 
                at a moment's notice. No waiting for an Uber, no surge pricing, just your own private car.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Minimum 3 hours booking
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Map className="w-5 h-5 text-blue-600" />
                  Unlimited stops within NYC
                </li>
              </ul>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <ShoppingBag className="w-8 h-8 text-blue-600 mb-3" />
                 <h4 className="font-bold text-slate-900">Shopping</h4>
                 <p className="text-sm text-slate-600">Fifth Avenue, SoHo, or Hudson Yards. Leave your bags in the car.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <Music className="w-8 h-8 text-blue-600 mb-3" />
                 <h4 className="font-bold text-slate-900">Concerts</h4>
                 <p className="text-sm text-slate-600">MSG, Barclays, or Broadway. Door-to-door service.</p>
               </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Popular Hourly Itineraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-blue-100 mb-4">01</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">The Dinner & Show</h4>
              <p className="text-slate-600">Pickup in Long Island → Dinner in Hell's Kitchen → Broadway Show → Return Home safely.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-blue-100 mb-4">02</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">The Executive Day</h4>
              <p className="text-slate-600">Morning meetings in Midtown → Lunch at Hudson Yards → Afternoon site visit in Brooklyn → Airport drop-off.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-blue-100 mb-4">03</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">The Holiday Tour</h4>
              <p className="text-slate-600">Rockefeller Center Tree → Saks Light Show → Dyker Heights Lights → Hot Chocolate stop.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
