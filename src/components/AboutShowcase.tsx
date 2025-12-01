'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    id: 1,
    label: 'Years of Service',
    value: '18+',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 2,
    label: 'Happy Clients',
    value: '10K+',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 3,
    label: '5-Star Google Reviews',
    value: '400+',
    icon: Star,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    id: 4,
    label: 'Available Service',
    value: '24/7',
    icon: Clock,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

export default function AboutShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Since 2005</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Infinite Car Service</h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Family-owned and operated since 2005, we pride ourselves on providing a luxury experience tailored to every client. Every ride is smooth, punctual, and professional.
              </p>
              <p>
                Our commitment to excellence has made us Long Island's most trusted luxury car service, serving executives, families, and travelers who demand the highest standards of comfort and reliability.
              </p>
            </div>
            <div className="mt-8">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-slate-900 border-b border-blue-600 pb-1 hover:text-blue-600 transition-colors font-medium"
              >
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={stat.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex p-3 rounded-full mb-4 ${stat.bg} ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
