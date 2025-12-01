'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-chauffeur-escalade.jpg"
          alt="Luxury Chauffeur Service"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-blue-500 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            The World's Premier Black Car Service
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Driven by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Excellence.
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            Experience the pinnacle of ground transportation. From NYC to the world, 
            Infinite Car Service provides unmatched reliability, safety, and comfort.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <motion.a
              href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Ride
            </motion.a>
            <motion.a
              href="/services"
              className="border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-medium transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Fleet
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}

