import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AirportShowcase from "@/components/AirportShowcase";
import HourlyShowcase from "@/components/HourlyShowcase";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <AirportShowcase />
      <HourlyShowcase />
      <Fleet />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
