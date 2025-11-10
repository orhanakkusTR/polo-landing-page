import { useState, useEffect } from 'react';
import { Sparkles, Award, Mail, Phone } from 'lucide-react';

const desktopHeroImages = [
  {
    image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/11.jpg',
    alt: 'Kitchen Countertop',
  },
  {
    image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/3.jpg',
    alt: 'Custom Closet',
  },
];

const mobileHeroImages = [
  {
    image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/11.jpg',
    alt: 'Kitchen Countertop',
  },
  {
    image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/3.jpg',
    alt: 'Custom Closet',
  },
  {
    image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/14.jpg',
    alt: 'Modern Kitchen',
  },
  {
    image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/4.jpg',
    alt: 'Elegant Design',
  },
  {
    image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/13.jpg',
    alt: 'Premium Stone',
  },
  {
    image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/5.jpg',
    alt: 'Custom Installation',
  },
];

const promotions = [
  { text: '25% OFF Premium Countertops', highlight: '25% OFF' },
  { text: 'Free Installation on Closet Systems', highlight: 'Free Installation' },
  { text: 'Lifetime Warranty on Granite & Quartz', highlight: 'Lifetime Warranty' },
  { text: 'Same-Day Quotes Available', highlight: 'Same-Day Quotes' },
];

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const promoTimer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 4000);
    return () => clearInterval(promoTimer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentImageIndex((prev) => (prev + 1) % mobileHeroImages.length);
    }

    if (touchStart - touchEnd < -75) {
      setCurrentImageIndex((prev) => (prev - 1 + mobileHeroImages.length) % mobileHeroImages.length);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-stone-900">
      <div className="relative min-h-[50vh] lg:min-h-[70vh]">
        <div className="hidden lg:grid lg:grid-cols-2 h-full min-h-[70vh]">
          {desktopHeroImages.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div
          className="lg:hidden relative h-full min-h-[50vh] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex h-full transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {mobileHeroImages.map((item, index) => (
              <div
                key={index}
                className="relative min-w-full h-full min-h-[50vh]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {mobileHeroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-amber-400 w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900" />
      </div>

      <div className="relative z-10 bg-gradient-to-b from-gray-900/95 to-gray-900 py-6 lg:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-white space-y-3 sm:space-y-4 lg:space-y-5">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-full">
                  <Sparkles className="text-amber-400" size={16} />
                  <span className="text-amber-400 font-semibold text-sm">Limited Time Offer</span>
                </div>

                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-2xl flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                      <div className="text-center">
                        <Award className="text-white mx-auto mb-0.5" size={16} />
                        <p className="text-xl font-bold text-white leading-none">23+</p>
                        <p className="text-[10px] font-semibold text-white/90 leading-tight">Years</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping" />
                </div>
              </div>

              <div className="overflow-hidden relative mb-2">
                <div className="relative">
                  {promotions.map((promo, index) => {
                    const parts = promo.text.split(promo.highlight);
                    return (
                      <h1
                        key={index}
                        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight transition-all duration-700 ${
                          index === currentPromo
                            ? 'translate-y-0 opacity-100 relative'
                            : index === (currentPromo - 1 + promotions.length) % promotions.length
                            ? '-translate-y-full opacity-0 absolute inset-0'
                            : 'translate-y-full opacity-0 absolute inset-0'
                        }`}
                      >
                        {parts[0]}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                          {promo.highlight}
                        </span>
                        {parts[1]}
                      </h1>
                    );
                  })}
                </div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-light">
                Transform your kitchen with <span className="text-amber-400 font-semibold">stunning natural stone surfaces</span> that combine timeless beauty with exceptional durability.
              </p>

              <div className="space-y-3">
                <div className="flex gap-2 sm:gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-lg border border-white/20 flex-1 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-amber-400">100%</p>
                    <p className="text-xs text-gray-300">Satisfaction</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-lg border border-white/20 flex-1 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-amber-400">Free</p>
                    <p className="text-xs text-gray-300">Estimates</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-lg border border-white/20 flex-1 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-amber-400">Expert</p>
                    <p className="text-xs text-gray-300">Installation</p>
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="mailto:info@polotile.com"
                    className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-2 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-amber-500/30 flex items-center justify-center gap-1.5 sm:gap-2 flex-1 hover:from-amber-500/30 hover:to-amber-600/30 transition-all"
                  >
                    <Mail size={16} className="text-amber-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-amber-400 truncate">info@polotile.com</span>
                  </a>
                  <a
                    href="tel:6466427830"
                    className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-2 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-amber-500/30 flex items-center justify-center gap-1.5 sm:gap-2 flex-1 hover:from-amber-500/30 hover:to-amber-600/30 transition-all"
                  >
                    <Phone size={16} className="text-amber-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-amber-400 truncate">+1 (646) 642-7830</span>
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl text-base"
              >
                GET FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
