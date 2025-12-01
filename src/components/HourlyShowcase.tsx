'use client';

import { motion } from 'framer-motion';
import { Clock, Map, ShoppingBag, Music, ArrowRight, Briefcase, Heart } from 'lucide-react';
import Link from 'next/link';

export default function HourlyShowcase() {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">As Directed</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Luxury Hourly Service</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Executive-class chauffeur service by the hour. Perfect for meetings, events, or exploring NYC in comfort and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Features Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-blue-900/10 border border-blue-500/20"
          >
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-500" />
              Flexible & Professional
            </h4>
            <div className="space-y-8">
              <div>
                <strong className="text-white block text-lg mb-1">Book by the Hour</strong>
                <p className="text-gray-400 leading-relaxed">Reserve 2, 4, 6, or 8 hours with complete flexibility. You control the clock.</p>
              </div>
              <div>
                <strong className="text-white block text-lg mb-1">Chauffeur Waits for You</strong>
                <p className="text-gray-400 leading-relaxed">No rush between stops — your driver remains on standby, ready when you are.</p>
              </div>
              <div>
                <strong className="text-white block text-lg mb-1">Multi-Stop Flexibility</strong>
                <p className="text-gray-400 leading-relaxed">Change your itinerary on the fly. We adapt to your schedule instantly.</p>
              </div>
            </div>
          </motion.div>

          {/* Use Cases Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Briefcase className="w-8 h-8 text-blue-500 mb-4" />
              <h5 className="text-white font-bold mb-2">Business Meetings</h5>
              <p className="text-sm text-gray-400">Multiple office visits or client presentations.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Music className="w-8 h-8 text-blue-500 mb-4" />
              <h5 className="text-white font-bold mb-2">Nights Out</h5>
              <p className="text-sm text-gray-400">Broadway shows, dinners, and concerts.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <ShoppingBag className="w-8 h-8 text-blue-500 mb-4" />
              <h5 className="text-white font-bold mb-2">Shopping</h5>
              <p className="text-sm text-gray-400">Fifth Avenue, SoHo, or Hudson Yards.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Heart className="w-8 h-8 text-blue-500 mb-4" />
              <h5 className="text-white font-bold mb-2">Special Occasions</h5>
              <p className="text-sm text-gray-400">Anniversaries, proposals, or VIP experiences.</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">Want to see sample itineraries and detailed pricing?</p>
          <Link 
            href="/nyc-hourly"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            View Hourly Options <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

