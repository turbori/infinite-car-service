'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fleet = [
  {
    name: 'Luxury Large SUV',
    type: 'Flagship SUV',
    capacity: '6 Passengers',
    image: '/assets/images/luxury-large-suv-escalade.jpg',
  },
  {
    name: 'Luxury Medium SUV',
    type: 'Executive SUV',
    capacity: '6 Passengers',
    image: '/assets/images/Luxury Midsize SUV .png',
  },
  {
    name: 'Luxury Sedan',
    type: 'Executive Sedan',
    capacity: '3 Passengers',
    image: '/assets/images/Luxury Sedan .png',
  },
];

export default function Fleet() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Immaculate Fleet</h2>
          <p className="text-slate-600 max-w-2xl text-lg font-light">
            Late-model vehicles, meticulously maintained and detailed daily. 
            Experience the comfort of our flagship luxury SUVs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl mb-4 bg-slate-100 shadow-md group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{vehicle.name}</h3>
              <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                <span>{vehicle.type}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{vehicle.capacity}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/fleet"
            className="inline-flex items-center gap-2 border border-slate-200 bg-white px-8 py-3 rounded-full text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md"
          >
            View Full Fleet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
