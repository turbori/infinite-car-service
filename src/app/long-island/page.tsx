'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { MapPin, Shield, Wine, Navigation, Clock, CheckCircle, HelpCircle } from 'lucide-react';

const areas = [
  {
    title: 'Nassau County',
    description: 'From Great Neck to Garden City, we provide punctual airport transfers and corporate travel for Nassau residents.',
    points: ['Garden City', 'Great Neck', 'Manhasset', 'Syosset', 'Massapequa', 'Jericho', 'Rockville Centre']
  },
  {
    title: 'Suffolk County',
    description: 'Reliable service for the vast expanse of Suffolk, from Huntington to Patchogue and beyond.',
    points: ['Huntington', 'Stony Brook', 'Dix Hills', 'Commack', 'Port Jefferson', 'Islip', 'Smithtown']
  },
  {
    title: 'The Hamptons & East End',
    description: 'Luxury summer travel to East Hampton, Southampton, and Montauk. Skip the train and arrive in comfort.',
    points: ['East Hampton', 'Southampton', 'Westhampton', 'Montauk', 'Sag Harbor', 'Bridgehampton']
  },
  {
    title: 'North Fork',
    description: 'Wine tours and leisure travel to Greenport and the vineyards. Perfect for weekend getaways.',
    points: ['Greenport', 'Mattituck', 'Southold', 'Orient Point Ferry', 'Vineyard Tours']
  }
];

const faqs = [
  {
    q: "How far in advance should I book for a Hamptons trip?",
    a: "For summer weekends (Memorial Day to Labor Day), we recommend booking at least 1 week in advance. For weekdays or off-peak times, 24 hours is usually sufficient."
  },
  {
    q: "Do you serve ISP (MacArthur Airport)?",
    a: "Yes, we provide daily service to and from Islip MacArthur Airport, as well as JFK, LGA, EWR, and private aviation hubs like Republic Airport (FRG)."
  },
  {
    q: "Can I book a round-trip for a wine tour?",
    a: "Absolutely. Our hourly service is perfect for wine tours. Your chauffeur stays with you for the entire day, taking you from vineyard to vineyard safely."
  }
];

export default function LongIslandPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="Long Island Car Service" 
        subtitle="Premier black car service covering Nassau, Suffolk, and the East End since 2005."
        image="/assets/images/hero-chauffeur-escalade.jpg"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Local Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Serving All of Long Island</h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Whether you need a ride to JFK from Massapequa or a wine tour on the North Fork, 
              Infinite Car Service is your trusted local partner. We know the roads, the shortcuts, 
              and the traffic patterns of the LIE and Northern State better than anyone.
            </p>
          </motion.div>

          {/* Why Choose Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Always On Time</h4>
              <p className="text-slate-600 text-sm">We track traffic on the LIE/Southern State to ensure punctual arrivals.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Safety First</h4>
              <p className="text-slate-600 text-sm">All drivers are background checked and drug tested. Fully licensed & insured.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Flat Rate Pricing</h4>
              <p className="text-slate-600 text-sm">No surge pricing during rush hour. Know your rate before you book.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  {area.title}
                </h4>
                <p className="text-slate-600 mb-6">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.points.map((point, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                      {point}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Always On Time</h4>
              <p className="text-slate-600 text-sm">We track traffic on the LIE/Southern State to ensure punctual arrivals.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Safety First</h4>
              <p className="text-slate-600 text-sm">All drivers are background checked and drug tested. Fully licensed & insured.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Flat Rate Pricing</h4>
              <p className="text-slate-600 text-sm">No surge pricing during rush hour. Know your rate before you book.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.q}
                  </h5>
                  <p className="text-slate-600 pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Feature: Wine Tours */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">East End & Wine Tours</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Experience the North Fork's award-winning vineyards without the worry of driving. 
                Our luxury SUVs are perfect for groups of up to 6 passengers, offering a safe, 
                comfortable, and stylish way to tour Long Island's wine country.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Wine className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-900 font-medium">Custom Itineraries</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-900 font-medium">Safe & Reliable</span>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="w-6 h-6 text-blue-600" />
                  <span className="text-slate-900 font-medium">Door-to-Door</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
