'use client';

import { motion } from 'framer-motion';
import { Plane, Briefcase, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Airport Transfers',
    description: 'Flight tracking, 20-minute early arrival guarantee, and meet-and-greet service at JFK, LGA, EWR, and HPN.',
    icon: Plane,
  },
  {
    title: 'Corporate Travel',
    description: 'Executive transportation for Westchester business hubs including White Plains, Purchase, and Armonk.',
    icon: Briefcase,
  },
  {
    title: 'Hourly Service',
    description: 'Your chauffeur on standby. Perfect for meetings, city nights, concerts, and flexible itineraries.',
    icon: Clock,
  },
  {
    title: 'Long Distance',
    description: 'Comfortable, private travel to the Hamptons, Boston, Philadelphia, and Washington D.C.',
    icon: MapPin,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Premium Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Tailored transportation solutions for those who demand excellence in every journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 border border-slate-200 bg-white px-8 py-3 rounded-full text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
