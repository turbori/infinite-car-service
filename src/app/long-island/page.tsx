'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { MapPin, Shield, Wine, Navigation } from 'lucide-react';

const areas = [
  {
    title: 'Nassau County',
    description: 'From Great Neck to Garden City, we provide punctual airport transfers and corporate travel for Nassau residents.',
    points: ['JFK & LGA Transfers', 'North Shore Gold Coast', 'Garden City Hub']
  },
  {
    title: 'Suffolk County',
    description: 'Reliable service for the vast expanse of Suffolk, from Huntington to Patchogue and beyond.',
    points: ['ISP MacArthur Airport', 'Stony Brook', 'Port Jefferson']
  },
  {
    title: 'The Hamptons',
    description: 'Luxury summer travel to East Hampton, Southampton, and Montauk. Skip the train and arrive in comfort.',
    points: ['Montauk Highway', 'Private Estates', 'Summer Events']
  },
  {
    title: 'North Fork',
    description: 'Wine tours and leisure travel to Greenport and the vineyards. Perfect for weekend getaways.',
    points: ['Vineyard Tours', 'Greenport Village', 'Orient Point Ferry']
  }
];

export default function LongIslandPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero 
        title="Long Island Car Service" 
        subtitle="Premier black car service covering Nassau, Suffolk, and the East End."
        image="/assets/images/hero-chauffeur-escalade.jpg"
      />

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">Local Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Serving All of Long Island</h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Whether you need a ride to JFK from Massapequa or a wine tour on the North Fork, 
              Infinite Car Service is your trusted local partner. We know the roads, the shortcuts, 
              and the traffic patterns better than anyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
              >
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  {area.title}
                </h4>
                <p className="text-gray-400 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Feature: Wine Tours */}
      <section className="py-24 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">East End & Wine Tours</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Experience the North Fork's award-winning vineyards without the worry of driving. 
                Our luxury SUVs are perfect for groups of up to 6 passengers, offering a safe, 
                comfortable, and stylish way to tour Long Island's wine country.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Wine className="w-6 h-6 text-blue-500" />
                  <span className="text-white font-medium">Custom Itineraries</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <span className="text-white font-medium">Safe & Reliable</span>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="w-6 h-6 text-blue-500" />
                  <span className="text-white font-medium">Door-to-Door</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-black/20">
               {/* We'll use the vineyard image we have */}
               <img 
                 src="/assets/images/woman wine tour suburban.png" 
                 alt="Long Island Wine Tour" 
                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

