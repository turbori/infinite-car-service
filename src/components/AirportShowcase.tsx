'use client';

import { motion } from 'framer-motion';
import { Plane, Clock, UserCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AirportShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Seamless Connections</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Premium Airport Transfers</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            We track every flight and arrive 20 minutes early — guaranteed. Choose meet & greet inside the terminal or seamless curbside pickup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* JFK Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-3xl font-bold text-slate-900">JFK Airport</h4>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Plane className="w-6 h-6" />
              </div>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Seamless arrivals and departures with flight monitoring and professional meet & greet service. We handle the logistics so you can relax.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Flight tracking with 20-minute early arrival</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <UserCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Meet & greet inside terminal or curbside pickup</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Complimentary wait time included</span>
              </li>
            </ul>

            {/* Alert */}
            <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200 flex items-start gap-3 mb-8">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-yellow-700 text-sm block mb-1">JFK Construction Update</strong>
                <p className="text-slate-600 text-xs leading-relaxed">
                  40-minute shuttle bus required at some terminals. Upgrade to our <span className="text-slate-900 font-bold">$50 Meet & Greet</span> to skip the shuttle and meet your chauffeur inside.
                </p>
              </div>
            </div>

            <a 
              href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
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
            className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-3xl font-bold text-slate-900">LGA Airport</h4>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Plane className="w-6 h-6" />
              </div>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Perfect for business travelers. Fast, reliable pickups and drop-offs with minimal wait time at LaGuardia's new terminals.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Real-time flight monitoring and adjustments</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <UserCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Meet & greet or convenient curbside pickup</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <UserCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Professional chauffeurs with local expertise</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Luggage assistance and spacious vehicles</span>
              </li>
            </ul>

            <a 
              href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-auto"
            >
              Book LGA Transfer <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-slate-100 pt-12">
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Flight Tracking</h4>
            <p className="text-slate-600 text-sm">We monitor your flight in real-time and adjust pickup accordingly.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">20 Minutes Early</h4>
            <p className="text-slate-600 text-sm">Your chauffeur arrives before your scheduled pickup time.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Meet & Greet Options</h4>
            <p className="text-slate-600 text-sm">Choose inside terminal service or quick curbside pickup.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Need more details about meeting points and terminals?</p>
          <Link 
            href="/airport-transfers"
            className="inline-flex items-center gap-2 border border-slate-200 bg-white px-8 py-3 rounded-full text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md"
          >
            View Airport Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
