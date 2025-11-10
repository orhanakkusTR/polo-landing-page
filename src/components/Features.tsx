import { CheckCircle2, Award, Clock, Shield, Sparkles, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest granite, quartz, and marble from trusted suppliers'
    },
    {
      icon: Users,
      title: '100% Satisfaction',
      description: 'Our expert team works until you are completely satisfied'
    },
    {
      icon: Clock,
      title: 'Quick Installation',
      description: 'Professional installation completed on time, every time'
    },
    {
      icon: Shield,
      title: 'Warranty Included',
      description: 'Comprehensive warranty coverage for your peace of mind'
    },
    {
      icon: Sparkles,
      title: 'Free Design Help',
      description: 'Expert design consultation to match your vision'
    },
    {
      icon: CheckCircle2,
      title: 'Licensed & Insured',
      description: 'Fully licensed, insured, and certified professionals'
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Choose</span> Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with true countertop specialists
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
