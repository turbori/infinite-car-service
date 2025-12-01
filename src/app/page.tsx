import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutShowcase from "@/components/AboutShowcase";
import HolidaySpecial from "@/components/HolidaySpecial";
import Services from "@/components/Services";
import AirportShowcase from "@/components/AirportShowcase";
import HourlyShowcase from "@/components/HourlyShowcase";
import Fleet from "@/components/Fleet";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <AboutShowcase />
      <HolidaySpecial />
      <Services />
      <AirportShowcase />
      <HourlyShowcase />
      <Fleet />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
