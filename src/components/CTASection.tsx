import { QuoteForm } from './QuoteForm';

interface CTASectionProps {
  onQuoteSubmit?: () => void;
}

export function CTASection({ onQuoteSubmit }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full">
              <span className="text-amber-400 font-semibold">Don't Miss Out</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Transform Your Space?
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Fill out the form to get your personalized quote with{' '}
              <span className="text-amber-400 font-bold">25% OFF</span> on all high-end countertops.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Fill Out the Form</h4>
                  <p className="text-gray-400">Tell us about your countertop project</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Get Your Free Quote</h4>
                  <p className="text-gray-400">We'll contact you within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Professional Installation</h4>
                  <p className="text-gray-400">Sit back and enjoy your new countertops</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">
                Our Expert Team Works Till You Are 100% Satisfied
              </p>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg p-4 sm:p-6 text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                  Transform Your Space Today —<br />Limited Time 25% OFF!
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <QuoteForm variant="section" onSubmitSuccess={onQuoteSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}
