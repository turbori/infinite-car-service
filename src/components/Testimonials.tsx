'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer M.',
    location: 'White Plains',
    text: 'Best car service in Westchester! I use them for all my airport transfers. Always on time, professional chauffeurs, and pristine vehicles.',
  },
  {
    name: 'David R.',
    location: 'Purchase',
    text: 'Outstanding corporate service for our Purchase office. Reliable, professional, and always makes a great impression on our clients.',
  },
  {
    name: 'Sarah L.',
    location: 'New Rochelle',
    text: 'Perfect for our night out in Manhattan. Driver was patient, professional, and made the evening stress-free. Highly recommend!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Client Stories</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
              <div>
                <h4 className="text-slate-900 font-bold">{review.name}</h4>
                <p className="text-blue-600 text-sm">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
