'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Experience Luxury?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-blue-50 text-xl mb-10 max-w-2xl mx-auto"
        >
          Receive a personalized quote within 2 minutes. No hidden fees, just exceptional service.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info"
          target="_blank"
          className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          Get Instant Quote
        </motion.a>
      </div>
    </section>
  );
}
