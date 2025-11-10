import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: () => void;
}

export function QuoteModal({ isOpen, onClose, onSubmitSuccess }: QuoteModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <div
        className="w-full max-w-md my-auto"
      >
        <QuoteForm variant="modal" onClose={onClose} onSubmitSuccess={onSubmitSuccess} />
      </div>
    </div>
  );
}
