'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { Plane, Clock, MapPin, Music, Briefcase, Wine } from 'lucide-react';

const servicesList = [
  {
    title: 'Airport Transfers',
    description: 'Experience stress-free travel to and from all major airports including JFK, LaGuardia (LGA), Newark (EWR), and Westchester County Airport (HPN). We track your flight in real-time and guarantee early arrival.',
    icon: Plane,
    features: ['Flight Monitoring', 'Meet & Greet Available', 'Curbside Pickup', 'Luggage Assistance']
  },
  {
    title: 'Hourly Chauffeur',
    description: 'Enjoy the ultimate freedom with our hourly "as-directed" service. Whether for business meetings, shopping in Manhattan, or a night out, your chauffeur remains at your disposal.',
    icon: Clock,
    features: ['Unlimited Stops', 'Flexible Schedule', 'Wait & Return', 'Privacy & Comfort']
  },
  {
    title: 'Corporate Travel',
    description: 'Reliable executive transportation for Westchester businesses. We serve White Plains, Purchase, Armonk, and NYC with punctuality and professionalism.',
    icon: Briefcase,
    features: ['Corporate Accounts', 'Monthly Billing', 'Priority Booking', 'Wi-Fi Enabled Vehicles']
  },
  {
    title: 'Special Events',
    description: 'Arrive in style at weddings, galas, proms, or concerts. We handle the logistics so you can focus on celebrating.',
    icon: Music,
    features: ['Red Carpet Service', 'Group Transportation', 'Concert Venue Drop-offs', 'Late Night Returns']
  },
  {
    title: 'Long Distance',
    description: 'Comfortable door-to-door service to destinations like Boston, Philadelphia, Washington D.C., and the Hamptons. Skip the train and travel in private luxury.',
    icon: MapPin,
    features: ['Door-to-Door', 'No Transfers', 'Pet Friendly', 'Rest Stops on Request']
  },
  {
    title: 'Winery & Leisure',
    description: 'Custom tours of Long Island North Fork wineries or Hudson Valley destinations. Perfect for weekends and group outings.',
    icon: Wine,
    features: ['Custom Itineraries', 'Group Seating', 'Scenic Routes', 'Full Day Service']
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive luxury transportation solutions tailored to your needs."
        image="/assets/images/hero-chauffeur-escalade.jpg"
      />

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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

