'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="About Us" 
        subtitle="Setting the standard for luxury ground transportation since 2005."
        image="/assets/images/suburban interior shot captain chairs.png"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-slate prose-lg mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Our Story</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Founded in 2005, Infinite Car Service began with a single Lincoln Town Car and a simple mission: to provide a transportation experience that was reliable, safe, and genuinely personal. Over the last two decades, we have grown into one of the most respected luxury car services in the Tri-State area, yet our core values remain unchanged.
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              We are family-owned and operated, which means we take every ride personally. When you call us, you speak to a real person who knows the area, knows the airports, and understands the importance of your schedule. We don't just drive you; we care for you.
            </p>

            <div className="my-16 p-8 bg-white rounded-2xl border-l-4 border-blue-600 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 m-0">The Infinite Standard</h3>
              <p className="text-slate-600 m-0">
                "We believe that true luxury is the absence of worry. Our job is to handle every detail—traffic, timing, luggage, comfort—so that you can relax and focus on what matters to you."
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Why We Are Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Immaculate Vehicles</h4>
                <p className="text-slate-600 text-sm">Our fleet is detailed daily. We strictly prohibit smoking and maintain a showroom-level of cleanliness for every passenger.</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Vetted Chauffeurs</h4>
                <p className="text-slate-600 text-sm">Our drivers are professionals, not gig workers. They undergo background checks, drug testing, and rigorous training.</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-2">24/7 Dispatch</h4>
                <p className="text-slate-600 text-sm">Flight delayed at 2 AM? We are watching. Our dispatch team is available around the clock to adjust your reservation.</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Transparent Pricing</h4>
                <p className="text-slate-600 text-sm">No hidden fees or surge pricing. The price we quote is the price you pay, with all tolls and gratuity clearly outlined.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
