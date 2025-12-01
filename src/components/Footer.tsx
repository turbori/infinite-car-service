import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              INFINITE <span className="text-blue-500">CAR SERVICE</span>
            </Link>
            <p className="text-gray-400 max-w-xs mb-8 leading-relaxed text-sm">
              Premier luxury car service serving NYC, Long Island, Westchester, and the Hamptons. 
              Providing exceptional transportation experiences since 2005.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'Services', 'Fleet', 'About', 'Business'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Specialized Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/long-island" className="text-gray-400 hover:text-white transition-colors">
                  Long Island Service
                </Link>
              </li>
              <li>
                <Link href="/westchester" className="text-gray-400 hover:text-white transition-colors">
                  Westchester Service
                </Link>
              </li>
              <li>
                <Link href="/airport-transfers" className="text-gray-400 hover:text-white transition-colors">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link href="/business-travel" className="text-gray-400 hover:text-white transition-colors">
                  Business Travel
                </Link>
              </li>
              <li>
                <Link href="/nyc-hourly" className="text-gray-400 hover:text-white transition-colors">
                  NYC Hourly Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-500" />
                <a href="tel:+16318606700" className="hover:text-white transition-colors">(631) 860-6700</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:info@infinitecarserviceli.com" className="hover:text-white transition-colors">info@infinitecarserviceli.com</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <span>Serving NYC, Long Island & Westchester</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2025 Infinite Car Service. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
