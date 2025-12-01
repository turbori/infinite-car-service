'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, Clock, Users } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: '5-Star Reviews',
    value: '400+',
    icon: Star,
    color: 'text-yellow-400',
  },
  {
    id: 2,
    label: 'Years of Service',
    value: '20+',
    icon: Users,
    color: 'text-blue-400',
  },
  {
    id: 3,
    label: 'Licensed & Insured',
    value: '100%',
    icon: ShieldCheck,
    color: 'text-green-400',
  },
  {
    id: 4,
    label: 'Support',
    value: '24/7',
    icon: Clock,
    color: 'text-purple-400',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`mb-4 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

