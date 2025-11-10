import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onGetQuote: () => void;
}

export function Header({ onGetQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/polo-logo-2.png"
              alt="Polo Tile & Stone"
              className="h-14 w-auto object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Home
            </a>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Services
            </a>
            <a
              href="/gallery"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('gallery');
              }}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Gallery
            </a>
            <a
              href="/why-choose-us"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('why-choose-us');
              }}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Why Choose Us
            </a>
            <a
              href="/how-we-work"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-we-work');
              }}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              How We Work
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Contact
            </a>
            <a
              href="tel:6466427830"
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold transition-colors"
            >
              <Phone size={18} />
              (646) 642-7830
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:6466427830"
              className="lg:hidden flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold transition-colors p-2"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={onGetQuote}
              className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden group"
            >
              <span className="relative z-10">GET QUOTE</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute inset-0 rounded-lg bg-amber-400/30 animate-pulse" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-amber-600 transition-colors p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col p-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-amber-600 font-bold transition-colors py-3 border-b border-gray-100"
              >
                Home
              </a>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="text-gray-700 hover:text-amber-600 font-bold transition-colors py-3 border-b border-gray-100"
              >
                Services
              </a>
              <a
                href="/gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('gallery');
                }}
                className="text-gray-700 hover:text-amber-600 font-bold transition-colors py-3 border-b border-gray-100"
              >
                Gallery
              </a>
              <a
                href="/why-choose-us"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('why-choose-us');
                }}
                className="text-gray-700 hover:text-amber-600 font-bold transition-colors py-3 border-b border-gray-100"
              >
                Why Choose Us
              </a>
              <a
                href="/how-we-work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-we-work');
                }}
                className="text-gray-700 hover:text-amber-600 font-bold transition-colors py-3 border-b border-gray-100"
              >
                How We Work
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="text-gray-700 hover:text-amber-600 font-bold transition-colors py-3 border-b border-gray-100"
              >
                Contact
              </a>
              <a
                href="tel:6466427830"
                className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold transition-colors py-3"
              >
                <Phone size={18} />
                (646) 642-7830
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
