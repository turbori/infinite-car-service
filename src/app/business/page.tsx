'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { CheckCircle, Building, FileText, UserCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Priority Booking',
    description: 'Guaranteed availability for account holders, even during peak times and holidays.',
    icon: CheckCircle
  },
  {
    title: 'Consolidated Billing',
    description: 'Simplified monthly invoices and detailed reporting for easy expense management.',
    icon: FileText
  },
  {
    title: 'Dedicated Support',
    description: 'Direct access to our dispatch team for last-minute changes and complex itineraries.',
    icon: Building
  },
  {
    title: 'Elite Chauffeurs',
    description: 'Our most experienced, vetted, and discreet drivers for your executive team.',
    icon: UserCheck
  }
];

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero 
        title="Corporate Travel" 
        subtitle="Precision, discretion, and reliability for Westchester's leading executives."
        image="/assets/images/Corporate & Executive Travel.png"
      />

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-3 text-sm">Executive Service</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Business Class Ground Travel</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                In the fast-paced world of business, reliability is non-negotiable. Infinite Car Service provides seamless corporate transportation solutions tailored to the needs of modern executives.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We serve major corporate headquarters in White Plains, Purchase, Armonk, and Greenwich. Whether it's an airport transfer for a visiting client or a road show for your sales team, we represent your brand with excellence.
              </p>
              <a 
                href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
                target="_blank"
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
              >
                Open Corporate Account
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <benefit.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

