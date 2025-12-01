import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Placeholder for future sections */}
      <div className="h-screen bg-[#050505] flex items-center justify-center">
        <p className="text-gray-500">Trust & Features Section Coming Soon...</p>
      </div>
    </main>
  );
}
