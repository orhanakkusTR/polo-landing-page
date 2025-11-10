import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

interface ServicesProps {
  onGetQuote: () => void;
}

export function Services({ onGetQuote }: ServicesProps) {
  const services = [
    {
      name: 'Countertop',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Countertop.jpg',
      description: (
        <>
          Experience the <strong>perfect blend of beauty and durability</strong> with our premium countertops. Engineered to <strong>resist stains, scratches, and heat</strong> while maintaining <strong>stunning aesthetics</strong> that elevate any space.
        </>
      ),
    },
    {
      name: 'Cabinet',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Cabinet.jpg',
      description: (
        <>
          Transform your kitchen with <strong>custom cabinets</strong> that showcase <strong>exceptional craftsmanship and quality materials</strong>. Each design is <strong>tailored to your needs</strong>, bringing <strong>timeless elegance</strong> and exceptional value to your home.
        </>
      ),
    },
    {
      name: 'Tile',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/Tile.jpg',
      description: (
        <>
          Discover the <strong>endless possibilities</strong> of premium tile installations. <strong>Ultra-durable and stylish</strong>, our tiles offer <strong>modern luxury</strong> with <strong>minimal maintenance</strong> for floors, walls, and backsplashes.
        </>
      ),
    },
  ];

  const materials = [
    {
      name: 'Granite',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/granite.jpeg',
    },
    {
      name: 'Quartz',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/quarts.jpg',
    },
    {
      name: 'Marble',
      image: 'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/marble.jpg',
    },
  ];

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your space with expertly crafted stone surfaces
          </p>
        </div>

        <div className="w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/3] cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                      <div className="text-xs font-bold uppercase tracking-wider">Limited Time</div>
                      <div className="text-2xl font-black">25% OFF</div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {service.name}
                    </h3>
                    {service.name === 'Cabinet' && (
                      <div className="mt-3">
                        <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2.5 rounded-lg shadow-xl">
                          <div className="text-sm font-bold">Get a Free Tile Backsplash!</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <button
                    onClick={onGetQuote}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group/btn shadow-md"
                  >
                    Get Free Quote
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Materials</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of high-quality stone materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={material.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      {material.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-stone-900 py-8 lg:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="tel:6466427830"
                className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-amber-500/30 hover:from-amber-500/30 hover:to-amber-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} className="text-amber-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-amber-400">Call Us</span>
              </a>
              <a
                href="mailto:info@polotile.com"
                className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-amber-500/30 hover:from-amber-500/30 hover:to-amber-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Mail size={18} className="text-amber-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-amber-400">Send Mail</span>
              </a>
              <button
                onClick={onGetQuote}
                className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-amber-500/30 hover:from-amber-500/30 hover:to-amber-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Calendar size={18} className="text-amber-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-amber-400">Make an Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
