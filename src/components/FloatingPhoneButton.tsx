import { Phone } from 'lucide-react';

export function FloatingPhoneButton() {
  return (
    <a
      href="tel:6466427830"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-2xl hover:shadow-amber-500/50 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:animate-pulse group"
      aria-label="Call us"
    >
      <Phone size={28} className="group-hover:scale-110 transition-transform" />
    </a>
  );
}
