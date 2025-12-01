'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Building2, Plane, Users, Landmark, CheckCircle, HelpCircle, MapPin } from 'lucide-react';

const towns = ['White Plains', 'Yonkers', 'New Rochelle', 'Scarsdale', 'Rye', 'Harrison', 'Armonk', 'Purchase', 'Tarrytown', 'Mount Kisco'];

const faqs = [
  {
    q: "Do you pick up at Westchester County Airport (HPN)?",
    a: "Yes, we are experts at HPN pickups. We monitor all incoming flights and can meet you curbside or inside at baggage claim."
  },
  {
    q: "Can you handle corporate accounts for my business?",
    a: "Absolutely. We work with many Fortune 500 companies in Purchase and Armonk. We offer monthly billing, priority booking, and dedicated account management."
  },
  {
    q: "How long does it take to get to JFK from White Plains?",
    a: "Without traffic, it takes about 45-50 minutes. During rush hour, it can take 90+ minutes. Our dispatch team monitors traffic to advise the best pickup time."
  }
];

export default function WestchesterPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="Westchester Car Service" 
        subtitle="Executive transportation for White Plains, Yonkers, and the entire Hudson Valley region."
        image="/assets/images/hero-chauffeur-escalade.jpg"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Corporate & Private</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Standard for Westchester</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Home to major corporate headquarters and discerning residents, Westchester County demands a higher standard of service. Infinite Car Service delivers with a fleet of immaculate black SUVs and professional chauffeurs who know the area intimately.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <strong className="text-slate-900 block">Corporate Hubs</strong>
                    <span className="text-slate-600 text-sm">Serving White Plains, Purchase, Armonk (IBM), and Rye.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Plane className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <strong className="text-slate-900 block">Airport Transfers</strong>
                    <span className="text-slate-600 text-sm">Reliable connections to HPN (Westchester County Airport), JFK, LGA, and EWR.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/assets/images/Corporate & Executive Travel.png" 
                alt="Westchester Corporate Travel" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Service Areas Grid */}
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Serving All Major Towns</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
            {towns.map((town) => (
              <div key={town} className="p-4 bg-white border border-slate-200 rounded-lg text-center hover:shadow-md transition-all">
                <MapPin className="w-4 h-4 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 text-sm font-medium">{town}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <Landmark className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">White Plains</h4>
              <p className="text-slate-600 text-sm">
                Premier service for the county seat. We handle daily executive commutes and client transport for law firms and financial institutions.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Yonkers & New Rochelle</h4>
              <p className="text-slate-600 text-sm">
                Reliable airport service for families and individuals. Car seats available upon request for safe family travel.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <Plane className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">HPN Airport</h4>
              <p className="text-slate-600 text-sm">
                We are HPN experts. Skip the parking at Westchester County Airport and let us drop you off curbside.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Questions</h3>
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

      <CTA />
      <Footer />
    </main>
  );
}
