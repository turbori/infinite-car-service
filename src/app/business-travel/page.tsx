'use client';

import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Wifi, Coffee, CheckCircle, Users, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Can I set up a corporate account with monthly billing?",
    a: "Yes, we offer corporate accounts with streamlined monthly invoicing and detailed reporting for easy expense management."
  },
  {
    q: "Do you handle roadshows with multiple stops?",
    a: "Yes, our dispatch team specializes in complex roadshow logistics. We coordinate multiple vehicles and adapt to schedule changes in real-time."
  },
  {
    q: "Are your chauffeurs NDA-bound?",
    a: "Discretion is our priority. Our chauffeurs are professionals who understand the confidentiality required for executive travel."
  }
];

export default function BusinessTravelPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageHero 
        title="Business Travel Solutions" 
        subtitle="Seamless logistics for roadshows, conferences, and executive commutes."
        image="/assets/images/Corporate & Executive Travel.png"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-blue-600 font-medium tracking-widest uppercase mb-3 text-sm">Efficiency in Motion</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Mobile Office</h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Maximize your productivity while on the move. Our vehicles are equipped with the amenities 
              modern executives need to stay connected and prepared before their next meeting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center group hover:shadow-lg transition-all">
              <Wifi className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-slate-900 font-bold mb-2">In-Car Wi-Fi</h4>
              <p className="text-slate-600 text-sm">High-speed connection for emails and video calls.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center group hover:shadow-lg transition-all">
              <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-slate-900 font-bold mb-2">NDA Discretion</h4>
              <p className="text-slate-600 text-sm">What is discussed in the car, stays in the car.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center group hover:shadow-lg transition-all">
              <FileText className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-slate-900 font-bold mb-2">Easy Expense</h4>
              <p className="text-slate-600 text-sm">Automated digital receipts sent instantly after ride.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center group hover:shadow-lg transition-all">
              <Coffee className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-slate-900 font-bold mb-2">Concierge</h4>
              <p className="text-slate-600 text-sm">Coffee runs or dry cleaning pickup? Just ask.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">For Executive Assistants</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <span><strong>Reliability:</strong> We double-check every itinerary.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <span><strong>Communication:</strong> Driver details sent in advance.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <span><strong>Flexibility:</strong> Easy changes via phone or email.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Users className="w-5 h-5 text-blue-600 mt-1" />
                  <span><strong>Group Travel:</strong> Sprinters and buses available for teams.</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-10 text-center border border-blue-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Roadshow Specialists</h3>
               <p className="text-slate-600 mb-8">
                 Complex schedules require precision. Our dispatch team coordinates multiple vehicles and last-minute changes to ensure your roadshow stays on track.
               </p>
               <a 
                 href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
                 target="_blank"
                 className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
               >
                 Book Roadshow Service
               </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Business Travel FAQs</h3>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.q}
                  </h5>
                  <p className="text-slate-600 pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
