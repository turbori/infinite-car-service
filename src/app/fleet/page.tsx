'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Briefcase, Wifi, Droplets } from 'lucide-react';

const fleetItems = [
  {
    name: 'Luxury Sedan',
    category: 'Executive Sedan',
    description: 'Sophisticated and understated. Our luxury sedans provide a quiet, smooth ride for solo travelers and couples heading to meetings or the airport.',
    capacity: '3 Passengers',
    luggage: '3 Bags',
    features: ['Quiet Cabin', 'Heated Seats', 'USB Charging', 'Work Space'],
    image: '/assets/images/Luxury Sedan .png'
  },
  {
    name: 'Luxury Medium SUV',
    category: 'Executive SUV',
    description: 'The industry standard for secure, comfortable, and reliable transportation. Offers generous legroom and ample cargo capacity for families and small groups.',
    capacity: '6 Passengers',
    luggage: '4 Bags',
    features: ['Spacious Cabin', 'Leather Interior', 'Smooth Ride', 'Reading Lights'],
    image: '/assets/images/Luxury Midsize SUV .png'
  },
  {
    name: 'Luxury Large SUV',
    category: 'Flagship SUV',
    description: 'The flagship of our fleet. Offers unmatched presence, comfort, and space. Perfect for executive travel, airport transfers with extra luggage, and special events.',
    capacity: '6 Passengers',
    luggage: '5 Bags',
    features: ['Panoramic Sunroof', 'Rear Climate Control', 'Privacy Tint', 'Premium Sound'],
    image: '/assets/images/luxury-large-suv-escalade.jpg'
  }
];

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="Our Fleet" 
        subtitle="Immaculately maintained late-model vehicles for every occasion."
        image="/assets/images/fleet driving on the highway.png"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {fleetItems.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative">
                  <div className="aspect-[16/10] relative rounded-2xl overflow-hidden bg-white shadow-lg">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                    {vehicle.category}
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">{vehicle.name}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {vehicle.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-700 font-medium">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-700 font-medium">{vehicle.luggage}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wifi className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-700 font-medium">Wi-Fi Available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Droplets className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-700 font-medium">Bottled Water</span>
                    </div>
                  </div>

                  <a 
                    href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                  >
                    Book This Vehicle
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
