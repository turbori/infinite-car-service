'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Plane, UserCheck, AlertTriangle, MessageSquare, Clock } from 'lucide-react';

export default function MeetingPointsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero 
        title="Airport Meeting Points" 
        subtitle="Find your chauffeur easily at JFK, LGA, and EWR for a seamless pickup experience."
        image="/assets/images/airport-aircraft-tarmac.jpg"
      />

      {/* Premium Inside Service */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
                Recommended for JFK
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Inside Terminal Service</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Avoid the confusion of curbside pickups and construction shuttles. With our Meet & Greet service, your chauffeur parks the car and meets you inside the arrivals hall.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <UserCheck className="w-6 h-6 text-blue-500" />
                  Chauffeur displays your name on a tablet/sign
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-6 h-6 text-blue-500" />
                  No waiting in the cold or for shuttles
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  Essential for JFK (skips AirTrain/Shuttle requirement)
                </li>
              </ul>
              <div className="text-2xl font-bold text-white mb-2">$50 Upgrade</div>
              <p className="text-sm text-gray-500 mb-8">Added to standard fare</p>
              <a 
                href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                Book Meet & Greet
              </a>
            </motion.div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">JFK Construction Alert</h3>
              <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-xl mb-6">
                <p className="text-red-200 text-sm leading-relaxed">
                  <strong>JFK Standard Pickups:</strong> Due to construction, standard pickups at most terminals now require taking an AirTrain to a remote lot or a shuttle bus.
                </p>
              </div>
              <p className="text-gray-400 mb-4">By booking <strong>Inside Terminal Service</strong>, you bypass this entirely. Your chauffeur handles the logistics while you walk straight to the car from the garage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Points List */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Terminal Instructions</h2>
          
          <div className="space-y-6">
            {/* JFK */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Plane className="w-6 h-6 text-blue-500" />
                JFK Airport
              </h3>
              <div className="space-y-4 pl-9 border-l border-white/10 ml-3">
                <div>
                  <strong className="text-white block text-lg">Terminal 4</strong>
                  <p className="text-gray-400 text-sm">Standard: Take shuttle to Remote Lot. <br/><span className="text-blue-400">Premium: Meet at Arrivals Hall (Welcome Center).</span></p>
                </div>
                <div>
                  <strong className="text-white block text-lg">Terminal 5</strong>
                  <p className="text-gray-400 text-sm">Standard: AirTrain to Ride App Lot. <br/><span className="text-blue-400">Premium: Meet at Baggage Claim.</span></p>
                </div>
                <div>
                  <strong className="text-white block text-lg">Terminal 8</strong>
                  <p className="text-gray-400 text-sm">Standard: Walk to garage/limo area. <br/><span className="text-blue-400">Premium: Meet at Arrivals Hall.</span></p>
                </div>
              </div>
            </div>

            {/* LGA */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Plane className="w-6 h-6 text-blue-500" />
                LaGuardia (LGA)
              </h3>
              <div className="space-y-4 pl-9 border-l border-white/10 ml-3">
                <div>
                  <strong className="text-white block text-lg">Terminal B</strong>
                  <p className="text-gray-400 text-sm">Proceed to Level 2 of the Parking Garage. Follow signs for "Car Services". Meet at designated pillar.</p>
                </div>
                <div>
                  <strong className="text-white block text-lg">Terminal C</strong>
                  <p className="text-gray-400 text-sm">Arrivals Level (Ground). Meet at the inner lane designated for "Pre-Arranged Services".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Process */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MessageSquare className="w-12 h-12 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Seamless Communication</h2>
          <p className="text-gray-400 text-lg mb-8">
            The moment you land, you'll receive a text from our dispatch system and your chauffeur.
          </p>
          <div className="p-6 bg-white/10 rounded-xl inline-block text-left max-w-lg w-full">
            <p className="text-gray-300 font-mono text-sm">
              "Welcome to NYC! Your chauffeur Alex is tracking your flight. He is parked 5 mins away. Please text when you have your bags."
            </p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

