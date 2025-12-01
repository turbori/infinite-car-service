'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, Clock, CreditCard, MessageSquare, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Quote Request',
    description: 'Click "Get Quote" and provide your trip details to receive a personalized quote.',
    icon: MousePointerClick,
  },
  {
    number: '02',
    title: 'Quick Response',
    description: 'Our team reviews your request and sends you a detailed price quote within 2 minutes.',
    icon: Clock,
  },
  {
    number: '03',
    title: 'Review & Pay',
    description: 'Review your trip details, request any changes needed, then proceed with secure payment.',
    icon: CreditCard,
  },
  {
    number: '04',
    title: 'Connect & Ride',
    description: 'Before pickup, we\'ll create a group chat with your chauffeur for seamless communication.',
    icon: MessageSquare,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How It Works</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Simple, transparent booking process from quote to ride.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-slate-50 border border-slate-200 group hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl font-bold text-slate-200 mb-6">{step.number}</div>
              <div className="absolute top-8 right-8 p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <step.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-blue-100 text-blue-600 mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-4">Your Peace of Mind</h4>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            We're here for you every step of the way. Have questions or need changes? 
            Our team is always ready to assist and ensure your perfect transportation experience.
          </p>
          <p className="text-blue-600 font-medium text-sm uppercase tracking-wider">
            Every booking includes live chauffeur tracking, text updates, and direct communication.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
