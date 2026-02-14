import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

interface FloatingQuoteFormProps {
  onSubmitSuccess?: () => void;
}

export function FloatingQuoteForm({ onSubmitSuccess }: FloatingQuoteFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitSuccess = () => {
    setIsOpen(false);
    onSubmitSuccess?.();
  };

  return (
    <div
      className={`hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-[400px]'
      }`}
    >
      <div className="flex items-center">
        <button
          onClick={handleToggle}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white h-32 px-3 rounded-l-lg shadow-lg transition-colors flex items-center justify-center"
          aria-label={isOpen ? "Close quote form" : "Open quote form"}
        >
          <div className="flex flex-col items-center gap-2">
            {isOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            <span className="writing-mode-vertical text-sm font-bold whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
              GET QUOTE
            </span>
          </div>
        </button>
        <div className="bg-white shadow-2xl w-[400px] max-h-[90vh] overflow-y-auto">
          <QuoteForm variant="hero" onSubmitSuccess={handleSubmitSuccess} />
        </div>
      </div>
    </div>
  );
}
