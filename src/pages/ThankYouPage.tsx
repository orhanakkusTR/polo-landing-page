import { useEffect, useState } from 'react';
import { CheckCircle, Mail, Clock, Sparkles } from 'lucide-react';

interface ThankYouPageProps {
  onNavigateHome: () => void;
}

export function ThankYouPage({ onNavigateHome }: ThankYouPageProps) {
  const [countdown, setCountdown] = useState(13);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17712313317/bUt5CMeU_bsbEOXn8f1B',
        'value': 1.0,
        'currency': 'USD'
      });
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onNavigateHome();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onNavigateHome]);

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          filter: 'blur(8px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-stone-800/80 to-gray-900/85" />

      <div className="max-w-3xl w-full relative z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-stone-900 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />

            <div className="flex flex-col items-center mb-4 relative z-10">
              <h1 className="text-5xl font-bold text-white mb-4">POLO</h1>
              <div className="inline-block bg-white rounded-full p-3 animate-bounce">
                <CheckCircle className="w-12 h-12 text-emerald-500" strokeWidth={2.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Thank You!
              </span>
            </h1>
            <p className="text-gray-200 text-lg relative z-10">
              Your quote request has been received
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-2xl p-6 mb-8 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>
              <p className="text-amber-900 font-bold text-xl mb-2 flex items-center gap-2">
                🎉 25% OFF Special Offer Applied!
              </p>
              <p className="text-amber-800 text-lg">
                You've unlocked exclusive savings on your roofing project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-emerald-100 rounded-lg p-3 flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Confirmation</h3>
                  <p className="text-sm text-gray-600">
                    Check your inbox for confirmation details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-amber-100 rounded-lg p-3 flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                  <p className="text-sm text-gray-600">
                    We'll contact you within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-3 py-6">
              <p className="text-gray-700 text-lg">
                Our expert team is reviewing your request right now
              </p>
              <p className="text-gray-600">
                Get ready for a personalized quote tailored to your needs
              </p>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-gray-200 text-center">
              <p className="text-gray-500 text-base">
                Redirecting to homepage in{' '}
                <span className="inline-block min-w-[24px] font-bold text-2xl text-amber-600 animate-pulse">
                  {countdown}
                </span>{' '}
                seconds...
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={onNavigateHome}
            className="text-gray-600 hover:text-amber-600 transition-colors underline"
          >
            Return to homepage now
          </button>
        </div>
      </div>
    </div>
  );
}
