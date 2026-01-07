import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check, Plane, Briefcase, Users, Star, Car, Clock, Shield, Menu, X, ChevronRight, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-navy/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-serif font-bold text-white tracking-tighter">INFINITE</span>
          <span className="text-[10px] tracking-[0.3em] text-luxury-gold uppercase -mt-1 font-sans">Car Service</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-sans uppercase tracking-widest text-white/80">
          <a href="#services" className="hover:text-luxury-gold transition-colors">Services</a>
          <a href="#fleet" className="hover:text-luxury-gold transition-colors">Fleet</a>
          <a href="#routes" className="hover:text-luxury-gold transition-colors">Routes</a>
          <a href="#about" className="hover:text-luxury-gold transition-colors">Why Us</a>
          <a href="tel:+16315160006" className="flex items-center text-luxury-gold font-bold">
            <Phone className="w-4 h-4 mr-2" /> (631) 516-0006
          </a>
          <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="btn-luxury !py-3 !px-6 text-xs">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-luxury-navy border-t border-white/10 p-6 flex flex-col space-y-6 text-sm uppercase tracking-widest text-white/80"
        >
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#fleet" onClick={() => setIsMobileMenuOpen(false)}>Fleet</a>
          <a href="#routes" onClick={() => setIsMobileMenuOpen(false)}>Routes</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
          <a href="tel:+16315160006" className="text-luxury-gold font-bold flex items-center">
            <Phone className="w-4 h-4 mr-2" /> (631) 516-0006
          </a>
          <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="btn-luxury text-center">
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax effect if possible, but keeping it simple for now */}
      <div className="absolute inset-0 z-0">
        <img 
          src="assets/images/hero-chauffeur-escalade.jpg" 
          alt="Luxury Chauffeur Service Long Island" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy via-luxury-navy/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-luxury-gold/20 text-luxury-gold text-xs font-sans tracking-[0.3em] uppercase py-2 px-4 mb-6 backdrop-blur-sm border border-luxury-gold/30">
            Est. 2005 | Family-Operated
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]">
            Long Island's <br />
            <span className="text-luxury-gold">Premier</span> Luxury <br />
            Car Service
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-lg font-sans leading-relaxed">
            Premium transportation for Long Island's business executives and families. Serving Nassau & Suffolk with a 97% repeat rate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="btn-luxury text-center">
              Reserve Your Car
            </a>
            <a href="tel:+16315160006" className="flex items-center justify-center text-white font-sans tracking-widest uppercase text-sm border border-white/30 px-8 py-4 hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4 mr-3 text-luxury-gold" /> (631) 516-0006
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-luxury-gold font-serif text-2xl font-bold">10k+</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Clients Served</span>
            </div>
            <div className="flex flex-col">
              <span className="text-luxury-gold font-serif text-2xl font-bold">97%</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Repeat Rate</span>
            </div>
            <div className="flex flex-col">
              <span className="text-luxury-gold font-serif text-2xl font-bold">24/7</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Availability</span>
            </div>
            <div className="flex flex-col">
              <span className="text-luxury-gold font-serif text-2xl font-bold">50+</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Years Combined</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-navy to-transparent z-10"></div>
    </section>
  );
};

const Routes = () => {
  const routes = [
    { from: "Dix Hills", to: "JFK", price: "$120-140", time: "45-60 min" },
    { from: "Huntington", to: "Manhattan", price: "$150-180", time: "75-90 min" },
    { from: "Hamptons", to: "NYC", price: "$280-320", time: "120-150 min" },
    { from: "Manhasset", to: "LGA", price: "$100-120", time: "30-45 min" },
    { from: "Syosset", to: "Newark", price: "$160-180", time: "90-120 min" },
  ];

  return (
    <section id="routes" className="py-24 bg-luxury-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">Popular Transfers</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Long Island Routes</h2>
          </div>
          <p className="text-white/50 max-w-md mt-6 md:mt-0 font-sans">
            Transparent pricing for our most popular Long Island connections. Custom quotes available for all Nassau and Suffolk locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {routes.map((route, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 border-white/5 hover:border-luxury-gold/30 transition-all duration-500"
            >
              <Plane className="w-8 h-8 text-luxury-gold mb-6" />
              <h3 className="text-white font-serif text-xl mb-1">{route.from}</h3>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-6 flex items-center">
                <ChevronRight className="w-3 h-3 mr-1" /> {route.to}
              </p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-luxury-gold text-2xl font-serif block">{route.price}</span>
                <span className="text-white/30 text-[10px] uppercase tracking-widest mt-2 block">{route.time} est.</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  const vehicles = [
    {
      name: "Luxury SUV - Escalade",
      desc: "The gold standard for Long Island executives and families. Spacious, powerful, and impeccably maintained.",
      image: "assets/images/luxury-large-suv-escalade.jpg",
      capacity: "6 Passengers",
      luggage: "6-8 Bags",
      features: ["Wifi", "Water", "Climate Control", "Phone Chargers"]
    },
    {
      name: "Corporate Sedan",
      desc: "Perfect for solo business travelers or couples. Discreet, comfortable, and efficient.",
      image: "assets/images/Luxury Sedan .png",
      capacity: "3 Passengers",
      luggage: "3 Bags",
      features: ["Leather Seats", "Quiet Cabin", "Daily Newspaper", "Bottle Water"]
    },
    {
      name: "Premium Midsize SUV",
      desc: "Versatile luxury for small groups or families with moderate luggage requirements.",
      image: "assets/images/Luxury Midsize SUV .png",
      capacity: "4 Passengers",
      luggage: "4 Bags",
      features: ["Extra Legroom", "Smooth Ride", "Safety Rated", "Premium Sound"]
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">The Infinite Fleet</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-4">Luxury Vehicles</h2>
        </div>

        <div className="space-y-24">
          {vehicles.map((car, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-[400px] object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-serif text-white mb-6">{car.name}</h3>
                <p className="text-white/60 text-lg mb-8 leading-relaxed font-sans">{car.desc}</p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center text-white/80">
                    <Users className="w-5 h-5 mr-3 text-luxury-gold" />
                    <span className="text-sm tracking-wide">{car.capacity}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Briefcase className="w-5 h-5 mr-3 text-luxury-gold" />
                    <span className="text-sm tracking-wide">{car.luggage}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {car.features.map((f, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-[0.2em] border border-white/10 px-3 py-1 text-white/40">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Airport Transfers",
      image: "assets/images/airport-aircraft-tarmac.jpg",
      icon: <Plane className="w-6 h-6" />,
      desc: "Door-to-door service to JFK, LGA, EWR, and Islip. Flight tracking included."
    },
    {
      title: "Corporate Travel",
      image: "assets/images/Corporate & Executive Travel.png",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Reliable, professional service for Long Island's business community."
    },
    {
      title: "NYC Events",
      image: "assets/images/Events & Celebrations.png",
      icon: <Star className="w-6 h-6" />,
      desc: "Arrive in style for Broadway, gala events, or a night in Manhattan."
    },
    {
      title: "Private Tours",
      image: "assets/images/Night Out & Entertainment.png",
      icon: <Car className="w-6 h-6" />,
      desc: "Customized itineraries for North Shore estates or East End wineries."
    }
  ];

  return (
    <section id="services" className="py-24 bg-luxury-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Professional Services</h2>
          </div>
          <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="text-luxury-gold text-sm uppercase tracking-widest flex items-center mt-6 md:mt-0 group transition-all">
            See All Services <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy via-luxury-navy/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="bg-luxury-gold text-luxury-navy p-3 w-fit mb-6">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const points = [
    {
      title: "Family-Operated in Dix Hills",
      desc: "Since 2005, we've provided boutique-level service that national franchises simply can't match.",
      icon: <Users className="w-10 h-10" />
    },
    {
      title: "97% Repeat Client Rate",
      desc: "Our business is built on long-term relationships with Long Island's most discerning travelers.",
      icon: <Star className="w-10 h-10" />
    },
    {
      title: "Business Ready",
      desc: "WiFi, quiet cabins, and professional chauffeurs who respect your productivity and privacy.",
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      title: "Safety Certified",
      desc: "Fully licensed, insured, and vetted. Professional chauffeurs who know every Long Island route.",
      icon: <Shield className="w-10 h-10" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-luxury-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">The Infinite Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-8">Why Long Islanders <br />Choose Us</h2>
            <p className="text-white/60 text-lg mb-12 font-sans leading-relaxed">
              We're not just a car service; we're part of the Long Island community. Based in Dix Hills, we understand the specific needs of local travelers—from avoiding LIE traffic to seamless airport arrivals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {points.map((p, i) => (
                <div key={i}>
                  <div className="text-luxury-gold mb-6">{p.icon}</div>
                  <h3 className="text-xl font-serif text-white mb-3">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-luxury-gold/20 z-0"></div>
            <img 
              src="assets/images/woman exiting suburban to go to airport.png" 
              alt="Luxury Car Service Client" 
              className="relative z-10 w-full grayscale-[30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const businessPoints = [
    "Never miss a flight with our advanced flight tracking",
    "Professional image for high-stakes client meetings",
    "Productive commute time with WiFi-equipped cabins",
    "Expense report friendly automated invoicing"
  ];

  const familyPoints = [
    "Stress-free family airport runs with child safety seats",
    "Car seat certified chauffeurs for your peace of mind",
    "Spacious SUVs for all your luggage and family needs",
    "Fixed premium rates—never worry about surge pricing"
  ];

  return (
    <section className="py-24 bg-luxury-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-12 border-luxury-gold/10"
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-luxury-gold mr-4" />
              <h3 className="text-3xl font-serif text-white">For Business Executives</h3>
            </div>
            <ul className="space-y-6">
              {businessPoints.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-luxury-gold mr-4 mt-1 flex-shrink-0" />
                  <span className="text-white/70 leading-relaxed font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-12 border-luxury-gold/10"
          >
            <div className="flex items-center mb-8">
              <Users className="w-8 h-8 text-luxury-gold mr-4" />
              <h3 className="text-3xl font-serif text-white">For Long Island Families</h3>
            </div>
            <ul className="space-y-6">
              {familyPoints.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-luxury-gold mr-4 mt-1 flex-shrink-0" />
                  <span className="text-white/70 leading-relaxed font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    {
      name: "Michael R.",
      location: "Huntington, NY",
      type: "Business Travel",
      text: "Infinite has been my go-to for airport transfers for 5 years. Always punctual, immaculate cars, and total professional chauffeurs."
    },
    {
      name: "Sarah L.",
      location: "Dix Hills, NY",
      type: "Family Vacation",
      text: "Traveling with two kids and multiple bags is stressful. Infinite made our airport run seamless. The car seat was ready and the driver was wonderful."
    },
    {
      name: "David K.",
      location: "Manhasset, NY",
      type: "Corporate Events",
      text: "The gold standard of car services. We use them for all our executive transport. The level of care and attention is unmatched."
    }
  ];

  return (
    <section className="py-24 bg-luxury-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">Client Experiences</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">What Our Travelers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-10 flex flex-col h-full"
            >
              <div className="flex text-luxury-gold mb-6">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white/70 italic mb-8 font-sans leading-relaxed flex-grow">"{t.text}"</p>
              <div className="mt-auto">
                <span className="text-white font-serif text-lg block">{t.name}</span>
                <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1 block">{t.location} | {t.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Communities = () => {
  const areas = [
    {
      region: "North Shore",
      towns: ["Great Neck", "Manhasset", "Roslyn", "Glen Cove", "Huntington", "Northport"]
    },
    {
      region: "Central LI",
      towns: ["Dix Hills", "Melville", "Commack", "Smithtown", "Hauppauge", "Deer Park"]
    },
    {
      region: "South Shore",
      towns: ["Babylon", "Lindenhurst", "Massapequa", "Wantagh", "Sayville", "Patchogue"]
    },
    {
      region: "The Hamptons",
      towns: ["Southampton", "East Hampton", "Bridgehampton", "Montauk", "Sag Harbor"]
    }
  ];

  return (
    <section className="py-24 bg-luxury-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">Serving Long Island</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Communities We Proudly Serve</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {areas.map((area, i) => (
            <div key={i}>
              <h4 className="text-luxury-gold font-serif text-xl mb-6 border-b border-luxury-gold/20 pb-4">{area.region}</h4>
              <ul className="space-y-4">
                {area.towns.map((town, idx) => (
                  <li key={idx} className="text-white/50 text-sm hover:text-white transition-colors cursor-default">
                    {town}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="assets/images/fleet driving on the highway.png" alt="Infinite Fleet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-luxury-navy/80"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Experience the Gold Standard of Travel</h2>
        <p className="text-white/70 text-lg mb-12 font-sans">
          Whether it's a critical business meeting or a well-deserved family vacation, start your journey with the comfort and reliability you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="btn-luxury w-full sm:w-auto">
            Book Your Journey
          </a>
          <div className="flex flex-col text-left">
            <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Direct Line</span>
            <a href="tel:+16315160006" className="text-luxury-gold text-2xl font-serif">(631) 516-0006</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-navy pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-serif font-bold text-white tracking-tighter">INFINITE</span>
              <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase -mt-1 font-sans">Car Service</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Long Island's premier family-operated luxury transportation service. Providing excellence in every mile since 2005.
            </p>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#services" className="hover:text-luxury-gold">Services</a></li>
              <li><a href="#fleet" className="hover:text-luxury-gold">Fleet</a></li>
              <li><a href="#routes" className="hover:text-luxury-gold">Popular Routes</a></li>
              <li><a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="hover:text-luxury-gold">Reservations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Areas Served</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li>Dix Hills & Huntington</li>
              <li>Nassau & Suffolk County</li>
              <li>Hamptons & East End</li>
              <li>JFK, LGA, EWR & ISP</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-3 text-luxury-gold" /> (631) 516-0006</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-3 text-luxury-gold" /> info@infinitecarserviceli.com</li>
              <li className="flex items-start"><MapPin className="w-4 h-4 mr-3 text-luxury-gold mt-1" /> Dix Hills, NY 11746</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 Infinite Car Service. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-white/20">
            <span>Licensed & Insured</span>
            <span>TLC Licensed</span>
            <span>Family-Operated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-luxury-navy min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-luxury-navy">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <WhyChooseUs />
        <Services />
        <Routes />
        <Fleet />
        <SocialProof />
        <Communities />
        <CTA />
      </main>

      <Footer />


      {/* Sticky Call Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-[60]">
        <a 
          href="tel:+16315160006" 
          className="flex items-center justify-center w-16 h-16 bg-luxury-gold text-luxury-navy rounded-full shadow-[0_0_30px_rgba(197,160,89,0.5)] animate-bounce"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default App;

