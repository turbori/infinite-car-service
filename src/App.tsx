import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check, Plane, Briefcase, Users, Star, Clock, Shield, Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// --- Components ---
// Infinite Car Service - Premium Long Island Transportation

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-navy/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex flex-col">
          <span className="text-2xl font-serif font-bold text-white tracking-tighter">INFINITE</span>
          <span className="text-[10px] tracking-[0.3em] text-luxury-gold uppercase -mt-1 font-sans">Car Service</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-sans uppercase tracking-widest text-white/80">
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-luxury-gold transition-colors">Services</a>
          <a href="#fleet" onClick={(e) => scrollToSection(e, 'fleet')} className="hover:text-luxury-gold transition-colors">Fleet</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-luxury-gold transition-colors">Why Us</a>
          <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="btn-luxury !py-3 !px-6 text-xs">
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" aria-label="Toggle Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#fleet" onClick={(e) => scrollToSection(e, 'fleet')}>Fleet</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Why Us</a>
          <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="btn-luxury text-center">
            Get Quote
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Parallax effect if possible, but keeping it simple for now */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img 
          src="/assets/images/hero-chauffeur-escalade.jpg" 
          alt="Luxury Chauffeur Service Long Island" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy via-luxury-navy/90 md:via-luxury-navy/60 to-luxury-navy/40 md:to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl md:max-w-2xl"
          >
            <span className="inline-block bg-luxury-gold/20 text-luxury-gold text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase py-2 px-4 mb-6 backdrop-blur-sm border border-luxury-gold/30">
              Est. 2005 | Family-Operated
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold text-white mb-6 md:mb-8 leading-[1.1]">
              Long Island's <br />
              <span className="text-luxury-gold">Premier</span> Luxury <br />
              Car Service
            </h1>
            <p className="text-white/70 text-base md:text-xl mb-8 md:mb-10 max-w-lg font-sans leading-relaxed">
              Premium transportation for Long Island's business executives and families. Serving Nassau & Suffolk with a 97% repeat rate.
            </p>
          </motion.div>

          {/* Stats Section - No fade on mobile for better visibility */}
          <div className="max-w-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-luxury-gold font-serif text-2xl md:text-2xl font-bold">10k+</span>
                <span className="text-white/70 md:text-white/50 text-[10px] md:text-[10px] uppercase tracking-widest mt-1">Clients Served</span>
              </div>
              <div className="flex flex-col">
                <span className="text-luxury-gold font-serif text-2xl md:text-2xl font-bold">97%</span>
                <span className="text-white/70 md:text-white/50 text-[10px] md:text-[10px] uppercase tracking-widest mt-1">Repeat Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-luxury-gold font-serif text-2xl md:text-2xl font-bold">450+</span>
                <span className="text-white/70 md:text-white/50 text-[10px] md:text-[10px] uppercase tracking-widest mt-1">5-Star Google Reviews</span>
              </div>
              <div className="flex flex-col">
                <span className="text-luxury-gold font-serif text-2xl md:text-2xl font-bold">20+</span>
                <span className="text-white/70 md:text-white/50 text-[10px] md:text-[10px] uppercase tracking-widest mt-1">Years Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-navy to-transparent z-10"></div>

      {/* Scroll Indicator - Desktop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Explore Our World</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent"></div>
      </motion.div>

      {/* Scroll Indicator - Mobile */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 1,
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex md:hidden flex-col items-center"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-3">Scroll to Learn More</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-luxury-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

const Fleet = () => {
  const vehicles = [
    {
      name: "Luxury Large SUV",
      desc: "The gold standard for Long Island executives and families. Spacious, powerful, and impeccably maintained.",
      image: "/assets/images/luxury-large-suv-escalade.jpg",
      capacity: "6 Passengers",
      luggage: "6-8 Bags",
      features: ["Wifi", "Water", "Climate Control", "Phone Chargers"]
    },
    {
      name: "Luxury Sedan",
      desc: "Perfect for solo business travelers or couples. Discreet, comfortable, and efficient.",
      image: "/assets/images/Luxury Sedan .png",
      capacity: "3 Passengers",
      luggage: "3 Bags",
      features: ["Leather Seats", "Quiet Cabin", "Phone Chargers", "Bottle Water"]
    },
    {
      name: "Luxury Medium SUV",
      desc: "Versatile luxury for small groups or families with moderate luggage requirements.",
      image: "/assets/images/Luxury Midsize SUV .png",
      capacity: "5 Passengers",
      luggage: "5 Bags",
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
      image: "/assets/images/airport-aircraft-tarmac.jpg",
      icon: <Plane className="w-6 h-6" />,
      desc: "Door-to-door service to JFK, LGA, EWR, and Islip. Flight tracking included.",
      link: "/airport-transfers"
    },
    {
      title: "Corporate Travel",
      image: "/assets/images/Corporate & Executive Travel.png",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Reliable, professional service for Long Island's business community.",
      link: "/corporate-travel"
    },
    {
      title: "Hourly Service",
      image: "/assets/images/Events & Celebrations.png",
      icon: <Clock className="w-6 h-6" />,
      desc: "Flexible chauffeur service by the hour for shopping, dining, and multi-stop trips.",
      link: "/hourly-service"
    },
    {
      title: "NYC Events",
      image: "/assets/images/Events & Celebrations.png",
      icon: <Star className="w-6 h-6" />,
      desc: "Arrive in style for Broadway, gala events, or a night in Manhattan.",
      link: "/nyc-events"
    }
  ];

  return (
    <section id="services" className="py-24 bg-luxury-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
          <div className="w-full md:max-w-xl">
            <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Professional Services</h2>
          </div>
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
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <Link 
                  to={s.link}
                  className="inline-flex items-center text-luxury-gold text-sm uppercase tracking-widest font-bold hover:text-white transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
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
            <div className="mt-12 text-center md:text-left">
              <Link to="/about" className="btn-luxury !py-4 !px-8 text-sm inline-block">
                Learn More About Our Story
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-luxury-gold/20 z-0"></div>
            <img 
              src="/assets/images/woman exiting suburban to go to airport.png" 
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
      location: "Melville, NY",
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
          <p className="text-luxury-gold/60 text-xs uppercase tracking-widest mt-4 font-sans">More than 450+ Five-Star Google Reviews</p>
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

        <div className="mt-20 text-center">
          <a 
            href="https://www.google.com/search?q=infinite+car+service&sourceid=chrome&ie=UTF-8&sei=Qd9eaaOvJZfk5NoP1t2B-A8#lrd=0x63f29046b509639f:0x5a435f89231cd365,1,,,," 
            target="_blank" 
            className="inline-flex items-center text-luxury-gold hover:text-white transition-colors uppercase tracking-[0.2em] text-sm font-sans border border-luxury-gold/30 px-10 py-4 hover:bg-luxury-gold/10"
          >
            <Star className="w-4 h-4 mr-3" />
            View All 450+ Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

const AirportGuide = () => {
  return (
    <section className="py-24 bg-luxury-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">Airport Intelligence</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">JFK & LGA Travel Guide</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* JFK Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-10 border-luxury-gold/10 relative overflow-hidden"
          >
            <div className="flex items-center mb-8">
              <div className="bg-luxury-gold/10 p-4 mr-6">
                <Plane className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-3xl font-serif text-white">JFK International</h3>
            </div>
            
            <div className="mb-8 p-6 bg-amber-900/20 border border-amber-500/20 rounded-sm">
              <h4 className="text-amber-500 text-xs uppercase tracking-widest font-bold mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" /> Construction Alert
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                JFK's $19 billion redevelopment has moved most pickups to remote lots. Standard pickups now require a complex AirTrain journey and multiple transfers with heavy luggage.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-luxury-gold mr-4 mt-1" />
                <p className="text-white/60 text-sm leading-relaxed">
                  <strong className="text-white">The VIP Solution:</strong> Our inside-terminal Meet & Greet service allows you to skip the AirTrain entirely and meet your chauffeur at baggage claim.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-luxury-gold mr-4 mt-1" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Real-time monitoring of all international and domestic arrivals to ensure precision timing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* LGA Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 border-luxury-gold/10 relative overflow-hidden"
          >
            <div className="flex items-center mb-8">
              <div className="bg-luxury-gold/10 p-4 mr-6">
                <Plane className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-3xl font-serif text-white">LaGuardia (LGA)</h3>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              LGA is the preferred choice for Long Island business travelers, offering the shortest transit times from Nassau and Suffolk County.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-white/5 border border-white/5">
                <h4 className="text-luxury-gold text-xs uppercase tracking-widest font-bold mb-2">Efficiency</h4>
                <p className="text-white/50 text-[11px] leading-relaxed">10-20 min from Nassau<br />30-45 min from Suffolk</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/5">
                <h4 className="text-luxury-gold text-xs uppercase tracking-widest font-bold mb-2">Meet & Greet</h4>
                <p className="text-white/50 text-[11px] leading-relaxed">Available at Terminals B & C<br />Inside baggage claim pickup</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-luxury-gold mr-4 mt-1" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Precision terminal knowledge for the fastest possible pickup and drop-off routes.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-luxury-gold mr-4 mt-1" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Direct communication with your chauffeur upon landing for seamless coordination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/airport-transfers" 
            className="btn-luxury !py-4 !px-10 text-sm inline-block shadow-2xl"
          >
            View Full Airport Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

const Communities = () => {
  const areas = [
    {
      region: "North Shore",
      towns: ["Great Neck", "Manhasset", "Roslyn", "Glen Cove", "Cold Spring Harbor", "Northport"]
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
        <img src="/assets/images/fleet driving on the highway.png" alt="Infinite Fleet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-luxury-navy/80"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Experience the Gold Standard of Travel</h2>
        <p className="text-white/70 text-lg mb-12 font-sans">
          Whether it's a critical business meeting or a well-deserved family vacation, start your journey with the comfort and reliability you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="btn-luxury w-full sm:w-auto">
            Get A Quote
          </a>
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
            <h4 className="text-white font-serif text-lg mb-8">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link to="/airport-transfers" className="hover:text-luxury-gold transition-colors">Airport Transfers</Link></li>
              <li><Link to="/corporate-travel" className="hover:text-luxury-gold transition-colors">Corporate Travel</Link></li>
              <li><Link to="/hourly-service" className="hover:text-luxury-gold transition-colors">Hourly Service</Link></li>
              <li><Link to="/nyc-events" className="hover:text-luxury-gold transition-colors">NYC Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link to="/about" className="hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><a href="#fleet" className="hover:text-luxury-gold transition-colors">Our Fleet</a></li>
              <li><a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="hover:text-luxury-gold transition-colors">Get A Quote</a></li>
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

// --- Detail Pages ---

const PageHero = ({ title, subtitle, image, badge }: { title: string | React.ReactNode, subtitle: string, image: string, badge: string }) => (
  <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0 w-full h-full">
      <img src={image} alt={subtitle} className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy via-luxury-navy/90 to-luxury-navy/40"></div>
    </div>
    <div className="relative z-10 w-full px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block bg-luxury-gold/20 text-luxury-gold text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase py-2 px-4 mb-6 backdrop-blur-sm border border-luxury-gold/30 rounded-sm">
            {badge}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]">
            {title}
          </h1>
          <p className="text-white/70 text-lg md:text-2xl mb-10 max-w-2xl font-sans leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const SectionHeading = ({ badge, title, center = true }: { badge: string, title: string | React.ReactNode, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-sans">{badge}</span>
    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 leading-tight">{title}</h2>
  </div>
);

const AboutPage = () => {
  const values = [
    { title: "Reliability", desc: "Dependable service you can count on, every time, without exception.", icon: <Clock className="w-8 h-8" /> },
    { title: "Luxury", desc: "Premium vehicles and amenities that exceed expectations.", icon: <Star className="w-8 h-8" /> },
    { title: "Service", desc: "Professional, courteous service with attention to every detail.", icon: <Users className="w-8 h-8" /> },
    { title: "Safety", desc: "Your safety is our top priority in everything we do.", icon: <Shield className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-luxury-navy">
      <Helmet>
        <title>About Infinite Car Service | Family-Operated Since 2005 | Dix Hills, NY</title>
        <meta name="description" content="Family-owned luxury car service serving Long Island since 2005. 450+ 5-star reviews. Professional chauffeurs, premium fleet, 97% repeat rate. Based in Dix Hills. Trusted by executives and families." />
        <meta name="keywords" content="about infinite car service, family operated car service, dix hills transportation, long island chauffeur company, professional car service, luxury transportation long island, car service since 2005" />
        <link rel="canonical" href="https://www.infinitecarserviceli.com/about" />
        <meta property="og:title" content="About Infinite Car Service | Family-Operated Since 2005" />
        <meta property="og:description" content="Family-owned luxury transportation. 450+ 5-star reviews. Serving Long Island since 2005." />
        <meta property="og:url" content="https://www.infinitecarserviceli.com/about" />
      </Helmet>
      <PageHero 
        badge="Our Legacy"
        title={<>About <br /><span className="text-luxury-gold">Infinite Car Service</span></>}
        subtitle="Family-owned and operated since 2005, delivering luxury transportation with a personal touch across Long Island and NYC."
        image="/assets/images/fleet driving on the highway.png"
      />
      
      <section className="py-24 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="order-2 lg:order-1">
              <img src="/assets/images/fleet driving on the highway.png" alt="Infinite Fleet" className="rounded-sm shadow-2xl grayscale-[20%]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2">
              <SectionHeading badge="The Infinite Story" title="Built on Trust & Excellence" center={false} />
              <div className="space-y-8 text-white/70 text-lg font-sans leading-relaxed">
                <p>
                  Infinite Car Service is a family-operated luxury chauffeur company serving Long Island, New York City, and all major airports. Built on reliability, discretion, and white-glove service, we specialize in premium transportation for business travelers, families, and high-expectation clients who value consistency over convenience.
                </p>
                <p>
                  With professionally trained chauffeurs, late-model luxury SUVs and sedans, and real human support 24/7, we deliver a level of service that rideshare apps simply cannot match. From airport transfers to corporate travel and special events, our focus is simple: punctuality, comfort, and peace of mind.
                </p>
                <p>
                  We are trusted by executives, law firms, medical professionals, and frequent travelers who need transportation done right — every time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-luxury-charcoal/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading badge="Our Core Values" title={<>What We <span className="text-luxury-gold">Stand For</span></>} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 border-luxury-gold/10 hover:border-luxury-gold/30 transition-all group text-center"
              >
                <div className="text-luxury-gold mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">{v.icon}</div>
                <h3 className="text-2xl font-serif text-white mb-4">{v.title}</h3>
                <p className="text-white/50 text-base leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chauffeur Standard Section */}
      <section className="py-24 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <SectionHeading badge="The Infinite Protocol" title="The Chauffeur Standard" center={false} />
              <div className="space-y-6 text-white/70 text-lg font-sans leading-relaxed">
                <p>
                  We don't just hire drivers; we recruit and train professional chauffeurs. Every member of our team undergoes:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Background checks & drug testing",
                    "Professional etiquette training",
                    "Discretion & confidentiality protocol",
                    "Defensive driving certification",
                    "Route proficiency testing"
                  ].map((p, i) => (
                    <li key={i} className="flex items-center text-sm font-bold uppercase tracking-widest text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mr-4"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 border-luxury-gold/20 text-center"
            >
              <h3 className="text-3xl font-serif text-white mb-6">The Fleet Protocol</h3>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                Every vehicle in our fleet is cleaned and inspected after every single trip. We maintain a strict replacement cycle to ensure you are always riding in the latest luxury models with the highest safety ratings.
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <span className="text-luxury-gold text-2xl font-serif block">Daily</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Detailed</span>
                </div>
                <div className="text-center">
                  <span className="text-luxury-gold text-2xl font-serif block">24/7</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Inspected</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-24 bg-luxury-charcoal/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
              <img src="/assets/images/fleet driving on the highway.png" alt="Long Island Local" className="rounded-sm shadow-2xl grayscale-[20%]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <SectionHeading badge="Dix Hills Local" title="Community Expertise" center={false} />
              <p className="text-white/70 text-lg font-sans leading-relaxed mb-8">
                Based in Dix Hills, we aren't just navigating by GPS—we're navigating by experience. We know the LIE, Northern State, and Southern State Parkway patterns better than any GPS.
              </p>
              <div className="glass-card p-8 border-luxury-gold/10">
                <p className="text-white/50 italic font-serif">
                  "Being locally based means we anticipate the bottlenecks before they happen, ensuring our clients are never caught off guard by Long Island traffic."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

const AirportTransfersPage = () => {
  return (
    <div className="bg-luxury-navy">
      <Helmet>
        <title>JFK & LGA Airport Car Service Long Island | Meet & Greet | Infinite</title>
        <meta name="description" content="Premium Long Island airport car service to JFK, LGA, EWR. Inside-terminal meet & greet. Real-time flight tracking. 450+ 5-star reviews. Based in Dix Hills. Corporate accounts available." />
        <meta name="keywords" content="jfk car service long island, lga airport car service, newark airport long island, jfk meet and greet, airport transfers nassau county, airport limo suffolk county, dix hills airport service, corporate airport car" />
        <link rel="canonical" href="https://www.infinitecarserviceli.com/airport-transfers" />
        <meta property="og:title" content="JFK & LGA Airport Car Service Long Island | Infinite Car Service" />
        <meta property="og:description" content="Premium airport transfers with meet & greet service. JFK, LGA, EWR. 450+ 5-star reviews." />
        <meta property="og:url" content="https://www.infinitecarserviceli.com/airport-transfers" />
      </Helmet>
      <PageHero 
        badge="First-Class Arrivals"
        title={<>Airport <br /><span className="text-luxury-gold">Transfers</span></>}
        subtitle="Serving JFK, LGA, and EWR with professional meet-and-greet service and real-time flight tracking."
        image="/assets/images/airport-aircraft-tarmac.jpg"
      />

      <section className="py-24 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <SectionHeading badge="Stress-Free Travel" title="Reliable Airport Transportation" center={false} />
              <div className="space-y-8 text-white/70 text-lg font-sans leading-relaxed">
                <p>
                  We provide reliable, stress-free airport transportation to and from JFK, LGA, and EWR. Whether you’re catching an early-morning flight or arriving late at night, our chauffeurs monitor flight status in real time to ensure on-time pickups and smooth arrivals.
                </p>
                <ul className="space-y-4">
                  {[
                    "Professional meet-and-greet service",
                    "Flight tracking for delays and early arrivals",
                    "Spacious luxury SUVs ideal for luggage and families",
                    "Fixed, transparent pricing with no surge fees",
                    "24/7 support from a real operations team"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-luxury-gold mr-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="glass-card p-10 border-luxury-gold/20">
                <h3 className="text-2xl font-serif text-white mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-luxury-gold mr-4" /> The 24/7 Precision System
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-6">
                  We don't just "watch" the clocks. Our precision system integrates with global flight data to adjust your pickup time automatically.
                </p>
                <div className="space-y-4 text-sm text-white/40">
                  <p>• If your flight arrives <strong className="text-luxury-gold">45 minutes early</strong>, your chauffeur is already there.</p>
                  <p>• If you're delayed <strong className="text-luxury-gold">3 hours</strong>, your booking is automatically rescheduled.</p>
                  <p>• Zero action required from you—just land and turn on your phone.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet & Greet Detail Section */}
      <section className="py-24 bg-luxury-charcoal/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionHeading badge="The Arrival Protocol" title="Meet & Greet Locations" />
            <p className="text-white/50 max-w-2xl mx-auto -mt-8 mb-12">
              Skip the confusion of remote pickup lots. Your chauffeur will be waiting inside the terminal at these specific locations:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { airport: "JFK International", terminal: "Terminal 4, 5 & 8", location: "Arrivals Level, right outside Baggage Claim Exit." },
              { airport: "LaGuardia (LGA)", terminal: "Terminal B & C", location: "Baggage Claim Area, near the Welcome Center / Information Desk." },
              { airport: "Newark (EWR)", terminal: "Terminal A & C", location: "Baggage Claim level or designated Limo Pickup area." }
            ].map((loc, i) => (
              <div key={i} className="glass-card p-10 border-luxury-gold/10 hover:border-luxury-gold/30 transition-all">
                <h4 className="text-2xl font-serif text-white mb-4">{loc.airport}</h4>
                <div className="bg-luxury-gold/10 inline-block px-3 py-1 mb-6">
                  <span className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold">{loc.terminal}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-luxury-gold mr-4 mt-1 flex-shrink-0" />
                  <p className="text-white/60 text-sm leading-relaxed">{loc.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AirportGuide />

      {/* Travel Time Guide */}
      <section className="py-24 bg-luxury-charcoal/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Timing is Everything" title="Estimated Travel Times" />
          <div className="max-w-3xl mx-auto">
            <div className="glass-card overflow-hidden border-luxury-gold/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-luxury-gold/10 border-b border-luxury-gold/20">
                    <th className="p-6 text-luxury-gold text-xs uppercase tracking-widest font-bold">From Long Island</th>
                    <th className="p-6 text-luxury-gold text-xs uppercase tracking-widest font-bold text-center">To JFK</th>
                    <th className="p-6 text-luxury-gold text-xs uppercase tracking-widest font-bold text-center">To LGA</th>
                  </tr>
                </thead>
                <tbody className="text-white/60 text-sm">
                  {[
                    { town: "Manhasset", jfk: "25-35 min", lga: "15-25 min" },
                    { town: "Syosset", jfk: "35-45 min", lga: "25-35 min" },
                    { town: "Dix Hills", jfk: "40-50 min", lga: "30-40 min" },
                    { town: "Stony Brook", jfk: "60-75 min", lga: "50-65 min" },
                    { town: "The Hamptons", jfk: "90-120 min", lga: "100-130 min" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-6 font-bold text-white">{row.town}</td>
                      <td className="p-6 text-center">{row.jfk}</td>
                      <td className="p-6 text-center">{row.lga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-white/30 text-[10px] uppercase tracking-[0.2em] text-center">
              * Times are estimates and can vary based on time of day and traffic conditions.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

const CorporateTravelPage = () => {
  return (
    <div className="bg-luxury-navy">
      <Helmet>
        <title>Corporate Car Service Long Island | Executive Transportation | Infinite</title>
        <meta name="description" content="Professional corporate car service for Long Island executives. Dedicated account management, centralized billing, WiFi-equipped SUVs. Trusted by Fortune 500 companies. Nassau & Suffolk County." />
        <meta name="keywords" content="corporate car service long island, executive transportation nassau county, business car service, corporate accounts, monthly billing, ea support, professional chauffeur service, executive suv long island" />
        <link rel="canonical" href="https://www.infinitecarserviceli.com/corporate-travel" />
        <meta property="og:title" content="Corporate Car Service Long Island | Executive Transportation" />
        <meta property="og:description" content="Premium executive transportation with dedicated account management and priority scheduling." />
        <meta property="og:url" content="https://www.infinitecarserviceli.com/corporate-travel" />
      </Helmet>
      <PageHero 
        badge="Executive Excellence"
        title={<>Corporate <br /><span className="text-luxury-gold">Travel Solutions</span></>}
        subtitle="Professional, discreet, and dependable transportation tailored for the modern business executive."
        image="/assets/images/Corporate & Executive Travel.png"
      />

      <section className="py-24 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <img src="/assets/images/Corporate & Executive Travel.png" alt="Corporate Travel" className="rounded-sm shadow-2xl grayscale-[20%]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <SectionHeading badge="Business Partner" title="Built for Professionals" center={false} />
              <div className="space-y-8 text-white/70 text-lg font-sans leading-relaxed">
                <p>
                  Our corporate travel solutions are designed for professionals who require dependable, discreet, and polished transportation. We work with executives, law firms, financial institutions, medical groups, and corporate teams who need a transportation partner they can trust.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                  {[
                    { title: "Account Management", desc: "Dedicated support team for all your logistics." },
                    { title: "Priority Scheduling", desc: "Last-minute flexibility for changing schedules." },
                    { title: "Polished Appearance", desc: "Professional chauffeurs and immaculate vehicles." },
                    { title: "Confidentiality", desc: "Absolute discretion for all your business travel." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-sm">
                      <h4 className="text-luxury-gold font-serif text-xl mb-2">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p>
                  Whether it’s daily executive transportation, client pickups, roadshows, or airport transfers for visiting teams, Infinite Car Service operates as an extension of your business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Cabin Section */}
      <section className="py-24 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading badge="The In-Transit Workspace" title="The Business Cabin" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Complimentary WiFi", desc: "High-speed mobile hotspot in every executive vehicle.", icon: <Shield className="w-8 h-8 mx-auto text-luxury-gold mb-6" /> },
              { title: "Universal Charging", desc: "USB and AC outlets for all major devices.", icon: <Star className="w-8 h-8 mx-auto text-luxury-gold mb-6" /> },
              { title: "Quiet Environment", desc: "Acoustically treated cabins for private conference calls.", icon: <Clock className="w-8 h-8 mx-auto text-luxury-gold mb-6" /> }
            ].map((feature, i) => (
              <motion.div key={i} className="glass-card p-10 border-luxury-gold/10">
                {feature.icon}
                <h3 className="text-xl font-serif text-white mb-4">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EA Support Section */}
      <section className="py-24 bg-luxury-charcoal/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <SectionHeading badge="Support for Admins" title="The EA & Travel Manager Advantage" center={false} />
              <div className="space-y-6 text-white/70 text-lg font-sans leading-relaxed">
                <p>
                  We understand that an Executive Assistant's time is valuable. Our platform and support team are optimized to make booking and managing executive travel effortless.
                </p>
                <div className="space-y-4">
                  {[
                    "Direct line to a dedicated account manager",
                    "Real-time GPS tracking for every active trip",
                    "Instant digital receipts and consolidated monthly billing",
                    "Profile management for multiple executives",
                    "2-minute response time for all requests"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-luxury-gold/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></div>
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-12 border-luxury-gold/20"
            >
              <h3 className="text-2xl font-serif text-white mb-6">Centralized Invoicing</h3>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                Setup a direct corporate account to benefit from consolidated billing. We provide detailed monthly statements with trip-by-trip breakdowns for easy expense management and accounting.
              </p>
              <a href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" className="btn-luxury w-full text-center">
                Setup Corporate Billing
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

const HourlyServicePage = () => {
  return (
    <div className="bg-luxury-navy">
      <Helmet>
        <title>Hourly Chauffeur Service Long Island & NYC | On-Standby Luxury SUV</title>
        <meta name="description" content="Flexible hourly chauffeur service for business meetings, shopping, and multi-stop trips. Suited driver on-standby. 3-hour minimum. Serving Long Island and NYC. Ideal for executives and families." />
        <meta name="keywords" content="hourly car service long island, nyc chauffeur by the hour, multi-stop transportation, business meetings car service, shopping car service, on standby driver, hourly suv rental with driver" />
        <link rel="canonical" href="https://www.infinitecarserviceli.com/hourly-service" />
        <meta property="og:title" content="Hourly Chauffeur Service Long Island & NYC" />
        <meta property="og:description" content="Flexible hourly service with professional chauffeur on-standby for multi-stop trips." />
        <meta property="og:url" content="https://www.infinitecarserviceli.com/hourly-service" />
      </Helmet>
      <PageHero 
        badge="Maximum Flexibility"
        title={<>Hourly <br /><span className="text-luxury-gold">Chauffeur Service</span></>}
        subtitle="A dedicated vehicle and chauffeur on standby for as long as you need. Perfect for multi-stop journeys."
        image="/assets/images/Events & Celebrations.png"
      />

      <section className="py-24 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <SectionHeading badge="On Your Schedule" title="Unpredictability Solved" center={false} />
              <div className="space-y-8 text-white/70 text-lg font-sans leading-relaxed">
                <p>
                  Our hourly chauffeur service offers maximum flexibility for clients who need a vehicle on standby. Ideal for business meetings, city tours, shopping trips, or multi-stop itineraries, this service provides the convenience of a private driver without the unpredictability of rideshare platforms.
                </p>
                <ul className="space-y-6">
                  {[
                    { title: "A Dedicated Chauffeur", desc: "The same professional, suited driver for your entire booking." },
                    { title: "On-Standby Status", desc: "Your chauffeur never leaves the curb—always ready the moment you exit." },
                    { title: "Unlimited Stops", desc: "Change your plans or add destinations on the fly." },
                    { title: "Zero Wait Time", desc: "Your vehicle is always outside and ready when you are." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-luxury-gold/10 p-2 mr-4 rounded-sm mt-1">
                        <Check className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="text-white font-serif text-xl mb-1">{item.title}</h4>
                        <p className="text-white/40 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 p-6 bg-luxury-gold/5 border border-luxury-gold/20">
                  <p className="text-luxury-gold text-xs uppercase tracking-widest font-bold mb-2">Service Requirement</p>
                  <p className="text-white/70 text-sm italic">
                    * Minimum 3-hour reservation required for all hourly bookings.
                  </p>
                </div>
                <p>
                  This service is perfect for executives, families, and visitors who want control, comfort, and a seamless transportation experience throughout the day or evening.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <img src="/assets/images/Events & Celebrations.png" alt="Hourly Service" className="rounded-sm shadow-2xl grayscale-[20%]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-luxury-charcoal/30 border-y border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="The Infinite Experience" title="Perfect for Any Itinerary" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Business Loop", 
                desc: "Multiple meetings across Manhattan and Long Island? Your chauffeur waits at every stop so you can focus on the next deal.",
                icon: <Briefcase className="w-8 h-8 mx-auto text-luxury-gold mb-6" />
              },
              { 
                title: "Private Shopping", 
                desc: "Fifth Avenue or Americana Manhasset. Store your purchases safely in the vehicle as you move between boutiques.",
                icon: <Star className="w-8 h-8 mx-auto text-luxury-gold mb-6" />
              },
              { 
                title: "Special Dining", 
                desc: "Arrive at NYC's finest restaurants and have the vehicle waiting right at the door when you step outside.",
                icon: <Users className="w-8 h-8 mx-auto text-luxury-gold mb-6" />
              }
            ].map((use, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 border-luxury-gold/10 hover:border-luxury-gold/30 transition-all"
              >
                {use.icon}
                <h3 className="text-2xl font-serif text-white mb-4">{use.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{use.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

const NYCEventsPage = () => {
  return (
    <div className="bg-luxury-navy">
      <Helmet>
        <title>NYC Event Transportation | Broadway, Concerts, Weddings | Infinite Car Service</title>
        <meta name="description" content="Luxury transportation for NYC events: Broadway shows, MSG, UBS Arena, weddings, galas. VIP drop-off and wait & return service. Group coordination available. Serving Long Island and Manhattan." />
        <meta name="keywords" content="nyc event transportation, broadway car service, concert limo service, madison square garden car service, ubs arena transportation, wedding car service long island, gala transportation, event chauffeur" />
        <link rel="canonical" href="https://www.infinitecarserviceli.com/nyc-events" />
        <meta property="og:title" content="NYC Event Transportation | Broadway, Concerts, Weddings" />
        <meta property="og:description" content="VIP event transportation with wait & return service for concerts, Broadway, and special occasions." />
        <meta property="og:url" content="https://www.infinitecarserviceli.com/nyc-events" />
      </Helmet>
      <PageHero 
        badge="Elevate the Occasion"
        title={<>NYC Events <br /><span className="text-luxury-gold">& Occasions</span></>}
        subtitle="Luxury transportation for weddings, galas, concerts, and milestones. Focus on the moment, we handle the miles."
        image="/assets/images/Events & Celebrations.png"
      />

      <section className="py-24 bg-luxury-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="order-2 lg:order-1">
              <img src="/assets/images/Events & Celebrations.png" alt="NYC Event" className="rounded-sm shadow-2xl grayscale-[20%]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2">
              <SectionHeading badge="Event Logistics" title="Seamless Arrivals" center={false} />
              <div className="space-y-8 text-white/70 text-lg font-sans leading-relaxed">
                <p>
                  From upscale events to private celebrations, Infinite Car Service provides luxury transportation for NYC events of all sizes. We handle logistics so you can focus on the experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Weddings and wedding shuttles",
                    "Corporate events and galas",
                    "Concerts, sporting events, and nightlife",
                    "Private dinners and milestone celebrations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center p-4 bg-white/5 border border-white/10 rounded-sm">
                      <Star className="w-5 h-5 text-luxury-gold mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  We coordinate timing, routing, and vehicle staging to ensure seamless arrivals and departures — with professional chauffeurs who understand the importance of presentation and punctuality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24 bg-luxury-charcoal/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="The Event Protocol" title="Where Luxury Meets Logistics" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass-card p-12 border-luxury-gold/10">
              <h3 className="text-2xl font-serif text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-luxury-gold mr-4" /> Venue Expertise
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Our chauffeurs know exactly where to drop off and pick up at:
              </p>
              <div className="space-y-2 text-xs font-bold uppercase tracking-widest text-luxury-gold">
                <p>• Madison Square Garden</p>
                <p>• UBS Arena</p>
                <p>• Barclays Center</p>
                <p>• Broadway Theaters</p>
                <p>• Yankee Stadium</p>
                <p>• Lincoln Center</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-12 border-luxury-gold/10">
              <h3 className="text-2xl font-serif text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 text-luxury-gold mr-4" /> Wait & Return
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Skip the post-event taxi chaos. Your vehicle will be waiting exactly where you were dropped off the moment you exit.
              </p>
              <div className="flex items-center text-white/40 text-sm italic">
                <Check className="w-4 h-4 text-luxury-gold mr-3" />
                "Safe, prompt returns."
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-12 border-luxury-gold/10">
              <h3 className="text-2xl font-serif text-white mb-6 flex items-center">
                <Users className="w-6 h-6 text-luxury-gold mr-4" /> Group Coordination
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Need to move a large group? We specialize in multi-SUV staging for weddings, corporate outings, or Hamptons winery tours.
              </p>
              <div className="flex items-center text-white/40 text-sm italic">
                <Check className="w-4 h-4 text-luxury-gold mr-3" />
                "Flawless group staging."
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

const Home = () => (
  <main className="w-full">
    <Hero />
    <PainPoints />
    <WhyChooseUs />
    <Services />
    <Fleet />
    <AirportGuide />
    <SocialProof />
    <Communities />
    <CTA />
  </main>
);

const App = () => {
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Show button after 60% scroll, only on home page
      setShowMobileCTA(scrollPercent >= 60 && pathname === '/');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div className="bg-luxury-navy min-h-screen w-full text-white font-sans selection:bg-luxury-gold selection:text-luxury-navy overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/airport-transfers" element={<AirportTransfersPage />} />
        <Route path="/corporate-travel" element={<CorporateTravelPage />} />
        <Route path="/hourly-service" element={<HourlyServicePage />} />
        <Route path="/nyc-events" element={<NYCEventsPage />} />
      </Routes>

      <Footer />

      {/* Sticky Get Quote Button for Mobile - Shows after 60% scroll on Home page */}
      {showMobileCTA && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-0 left-0 w-full z-[60] p-4 bg-gradient-to-t from-luxury-navy to-transparent"
        >
          <a 
            href="https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info" 
            className="flex items-center justify-center bg-luxury-gold text-luxury-navy py-4 px-6 font-bold uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform w-full"
          >
            <MessageSquare className="w-4 h-4 mr-2" /> Get Quote
          </a>
        </motion.div>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;

