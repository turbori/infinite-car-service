'use client';

import { motion } from 'framer-motion';
import { Plane, Clock, UserCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AirportShowcase() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">Seamless Connections</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Airport Transfers</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            We track every flight and arrive 20 minutes early — guaranteed. Choose meet & greet inside the terminal or seamless curbside pickup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* JFK Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-3xl font-bold text-white">JFK Airport</h4>
              <div className="p-3 rounded-full bg-blue-900/20 text-blue-400">
                <Plane className="w-6 h-6" />
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Seamless arrivals and departures with flight monitoring and professional meet & greet service. We handle the logistics so you can relax.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Flight tracking with 20-minute early arrival</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <UserCheck className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Meet & greet inside terminal or curbside pickup</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Complimentary wait time included</span>
              </li>
            </ul>

            {/* Alert */}
            <div className="p-4 rounded-xl bg-yellow-900/20 border border-yellow-700/30 flex items-start gap-3 mb-8">
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-yellow-500 text-sm block mb-1">JFK Construction Update</strong>
                <p className="text-gray-400 text-xs leading-relaxed">
                  40-minute shuttle bus required at some terminals. Upgrade to our <span className="text-white font-bold">$50 Meet & Greet</span> to skip the shuttle and meet your chauffeur inside.
                </p>
              </div>
            </div>

            <a 
              href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
              target="_blank"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors"
            >
              Book JFK Transfer <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* LGA Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-3xl font-bold text-white">LGA Airport</h4>
              <div className="p-3 rounded-full bg-blue-900/20 text-blue-400">
                <Plane className="w-6 h-6" />
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Perfect for business travelers. Fast, reliable pickups and drop-offs with minimal wait time at LaGuardia's new terminals.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Real-time flight monitoring and adjustments</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <UserCheck className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Meet & greet or convenient curbside pickup</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <UserCheck className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Professional chauffeurs with local expertise</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Luggage assistance and spacious vehicles</span>
              </li>
            </ul>

            <a 
              href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
              target="_blank"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors mt-auto"
            >
              Book LGA Transfer <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Flight Tracking</h4>
            <p className="text-gray-400 text-sm">We monitor your flight in real-time and adjust pickup accordingly.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">20 Minutes Early</h4>
            <p className="text-gray-400 text-sm">Your chauffeur arrives before your scheduled pickup time.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Meet & Greet Options</h4>
            <p className="text-gray-400 text-sm">Choose inside terminal service or quick curbside pickup.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Need more details about meeting points and terminals?</p>
          <Link 
            href="/airport-transfers"
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-8 py-3 rounded-full text-white font-medium hover:bg-white/10 transition-colors"
          >
            View Airport Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

