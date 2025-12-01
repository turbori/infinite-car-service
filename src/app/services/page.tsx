'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Plane, Clock, MapPin, Music, Briefcase, Wine, ShoppingBag, Heart, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive luxury transportation solutions tailored to your needs."
        image="/assets/images/hero-chauffeur-escalade.jpg"
      />

      {/* Hourly Service Spotlight */}
      <section className="py-24 bg-[#050505] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">Premium Flexibility</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Hourly Service</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Maximum flexibility and convenience with our premium hourly transportation service. 
                Your personal chauffeur remains at your disposal for as long as you need.
              </p>
              
              <div className="space-y-6 mb-10">
                <h4 className="text-xl font-bold text-white">Why Choose Hourly?</h4>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    'Ultimate Flexibility: Perfect for trips with multiple stops',
                    'Cost-Effective: Better value than multiple point-to-point trips',
                    'Dedicated Service: Your personal chauffeur for the entire duration',
                    'No Wait Charges: Take your time without additional fees'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">3 Hours</div>
                  <div className="text-xs text-gray-400 uppercase">Minimum</div>
                </div>
                <div className="border-l border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">NYC+</div>
                  <div className="text-xs text-gray-400 uppercase">Service Area</div>
                </div>
                <div className="border-l border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">All</div>
                  <div className="text-xs text-gray-400 uppercase">Fleet Types</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white mb-4">Perfect For</h4>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Briefcase className="w-8 h-8 text-blue-500 mb-3" />
                <h5 className="text-lg font-bold text-white mb-2">Business Meetings</h5>
                <p className="text-gray-400 text-sm">Multiple client visits and office meetings throughout the day. Work securely between stops.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <MapPin className="w-8 h-8 text-blue-500 mb-3" />
                <h5 className="text-lg font-bold text-white mb-2">City Tours</h5>
                <p className="text-gray-400 text-sm">Explore NYC attractions at your own pace. Hop on and off as you please.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Wine className="w-8 h-8 text-blue-500 mb-3" />
                <h5 className="text-lg font-bold text-white mb-2">Wine Tours</h5>
                <p className="text-gray-400 text-sm">Long Island wineries and Hamptons with safe, designated transportation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">More Options</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Additional Services</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Comprehensive transportation solutions for every need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Long Distance Travel',
                desc: 'Comfortable transportation to the Hamptons, upstate destinations, and other long-distance locations.',
                icon: MapPin
              },
              {
                title: 'Sporting Events',
                desc: 'Premium transportation to all major sporting events and concerts throughout New York and New Jersey metro area.',
                icon: Music
              },
              {
                title: 'Shopping Trips',
                desc: 'Luxury shopping experiences to premium outlets, Manhattan boutiques, and shopping centers.',
                icon: ShoppingBag
              },
              {
                title: 'Wine Tours',
                desc: 'Guided wine tours to Long Island\'s North Fork wineries and Hamptons with safe, designated transportation.',
                icon: Wine
              },
              {
                title: 'Medical Transportation',
                desc: 'Comfortable and reliable transportation for medical appointments and hospital visits.',
                icon: Heart
              },
              {
                title: 'Night Out',
                desc: 'Safe and stylish transportation for Broadway shows, fine dining, nightlife, and entertainment venues.',
                icon: Music
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
