import { MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FloatingCTAProps {
  onClick: () => void;
}

export function FloatingCTA({ onClick }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-110 flex items-center gap-2 sm:gap-3 group"
      style={{ animation: 'bounce 2s infinite' }}
    >
      <MessageSquare size={20} className="sm:w-6 sm:h-6" />
      <span className="text-sm sm:text-base">GET QUOTE</span>
    </button>
  );
}
