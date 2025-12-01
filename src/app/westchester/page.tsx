'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Building2, Plane, Users, Landmark } from 'lucide-react';

export default function WestchesterPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero 
        title="Westchester Car Service" 
        subtitle="Executive transportation for White Plains, Yonkers, and the entire Hudson Valley region."
        image="/assets/images/hero-chauffeur-escalade.jpg"
      />

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">Corporate & Private</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The Standard for Westchester</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Home to major corporate headquarters and discerning residents, Westchester County demands a higher standard of service. Infinite Car Service delivers with a fleet of immaculate black SUVs and professional chauffeurs who know the area intimately.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <strong className="text-white block">Corporate Hubs</strong>
                    <span className="text-gray-400 text-sm">Serving White Plains, Purchase, Armonk (IBM), and Rye.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Plane className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <strong className="text-white block">Airport Transfers</strong>
                    <span className="text-gray-400 text-sm">Reliable connections to HPN (Westchester County Airport), JFK, LGA, and EWR.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/assets/images/Corporate & Executive Travel.png" 
                alt="Westchester Corporate Travel" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <Landmark className="w-10 h-10 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">White Plains</h4>
              <p className="text-gray-400 text-sm">
                Premier service for the county seat. We handle daily executive commutes and client transport for law firms and financial institutions.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <Users className="w-10 h-10 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Yonkers & New Rochelle</h4>
              <p className="text-gray-400 text-sm">
                Reliable airport service for families and individuals. Car seats available upon request for safe family travel.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <Plane className="w-10 h-10 text-blue-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">HPN Airport</h4>
              <p className="text-gray-400 text-sm">
                We are HPN experts. Skip the parking at Westchester County Airport and let us drop you off curbside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

