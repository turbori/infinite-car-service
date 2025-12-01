'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Landmark, Plane, Briefcase, MapPin } from 'lucide-react';

export default function ConnecticutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="Connecticut Car Service" 
        subtitle="Luxury transportation for Greenwich, Stamford, Westport, and Fairfield County."
        image="/assets/images/Corporate & Executive Travel.png"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Gold Coast Travel</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Connecting CT to NYC</h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Experience the seamless connection between Fairfield County and New York City. 
              From the hedge funds of Greenwich to the estates of Westport, we provide punctual, 
              discreet, and immaculate service for the region's most discerning residents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Financial District Commute</h4>
                  <p className="text-slate-600">Reliable daily or weekly transport from Stamford and Greenwich to Wall Street or Midtown. Work comfortably with Wi-Fi and privacy.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Airport Logistics</h4>
                  <p className="text-slate-600">Expert navigation to HPN (Westchester), JFK, LGA, and EWR. We track flights and handle all luggage.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Private Schools & Universities</h4>
                  <p className="text-slate-600">Safe transportation for students attending Yale, Sacred Heart, or private academies in the region.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              <img 
                src="/assets/images/luxury-large-suv-escalade.jpg" 
                alt="Luxury SUV in Connecticut" 
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-white font-bold text-lg">The Preferred Fleet of Fairfield County</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Serving All Major Towns</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Greenwich', 'Stamford', 'Darien', 'New Canaan', 'Westport', 'Fairfield', 'Norwalk', 'Ridgefield'].map((town) => (
              <div key={town} className="p-4 rounded-lg bg-white border border-slate-200 text-center hover:border-blue-200 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 font-medium">{town}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
