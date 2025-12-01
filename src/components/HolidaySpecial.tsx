'use client';

import { motion } from 'framer-motion';
import { Plane, Wine, Sparkles, Calendar, Snowflake, Gift, ArrowRight } from 'lucide-react';

export default function HolidaySpecial() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-red-50 to-white">
      {/* Decorative Snowflakes - Darker for visibility */}
      <div className="absolute top-10 left-10 text-red-200 animate-pulse">
        <Snowflake className="w-12 h-12" />
      </div>
      <div className="absolute bottom-10 right-10 text-green-200 animate-pulse delay-700">
        <Snowflake className="w-16 h-16" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-100 border border-red-200 text-red-600 text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            DECEMBER SPECIAL
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Holiday Travel Made Effortless
          </h3>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Whether you're catching a flight, attending holiday parties, or exploring NYC's festive lights — 
            our chauffeurs ensure you arrive on time and in style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Airport */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white border border-red-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
              <Plane className="w-7 h-7 text-red-500 group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">Holiday Airport Service</h4>
            <p className="text-slate-600 mb-6">Skip the stress of holiday traffic and parking. We track your flight and arrive early, every time.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                JFK, LGA & EWR pickups
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Extra luggage space for gifts
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Meet & greet available
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Parties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
              <Wine className="w-7 h-7 text-green-500 group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">Holiday Events & Parties</h4>
            <p className="text-slate-600 mb-6">Office parties, family gatherings, or nights out — enjoy the festivities without worrying about driving.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Safe rides for celebrations
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Multi-stop flexibility
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Group transportation available
              </li>
            </ul>
          </motion.div>

          {/* Card 3: NYC Tours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white border border-yellow-100 shadow-sm hover:shadow-lg hover:border-yellow-200 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
              <Sparkles className="w-7 h-7 text-yellow-500 group-hover:text-white" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">NYC Holiday Tours</h4>
            <p className="text-slate-600 mb-6">Experience Rockefeller Center, Bryant Park, and Dyker Heights lights from the comfort of a luxury SUV.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                Custom holiday itineraries
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                No parking or weather stress
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                Perfect for families & visitors
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Urgency Alert */}
        <div className="max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-sm">
          <div className="p-3 bg-white rounded-full text-red-600 shadow-sm">
            <Calendar className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h4 className="text-slate-900 font-bold text-lg mb-1">Reserve Early for December Dates</h4>
            <p className="text-slate-600 text-sm">Holiday season books quickly. Secure your preferred vehicle and time slot now for guaranteed availability.</p>
          </div>
          <a 
            href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
            target="_blank"
            className="whitespace-nowrap bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-colors shadow-md flex items-center gap-2"
          >
            Get Holiday Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
