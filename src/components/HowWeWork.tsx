import { ClipboardList, Palette, CheckCircle, Factory, Hammer } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'Free in-home or virtual design consultation',
    icon: ClipboardList,
  },
  {
    number: 2,
    title: 'Design',
    description: 'Custom 3D designs with instant quote',
    icon: Palette,
  },
  {
    number: 3,
    title: 'Approval',
    description: 'Review and finalize your design',
    icon: CheckCircle,
  },
  {
    number: 4,
    title: 'Production',
    description: 'Quality manufacturing process',
    icon: Factory,
  },
  {
    number: 5,
    title: 'Installation',
    description: 'Professional setup with no mess',
    icon: Hammer,
  },
];

export function HowWeWork() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures quality results from start to finish
          </p>
        </div>

        <div className="relative">
          {/* Desktop view - horizontal */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between">
              {/* Connecting line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-16" />

              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex flex-col items-center w-40 relative z-10">
                    {/* Step number badge */}
                    <div className="absolute -top-2 right-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm shadow-md z-20">
                      {step.number}
                    </div>

                    {/* Circle with icon */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-white shadow-lg flex items-center justify-center mb-4 group hover:scale-105 transition-transform duration-300">
                      <div className="w-28 h-28 rounded-full bg-white shadow-inner flex items-center justify-center">
                        <Icon className="w-10 h-10 text-amber-500 group-hover:text-amber-600 transition-colors" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet view - vertical */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.number} className="relative flex items-start gap-4">
                  {/* Vertical line */}
                  {!isLast && (
                    <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-amber-600 transform translate-y-2" />
                  )}

                  {/* Circle with icon */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-white shadow-lg flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white shadow-inner flex items-center justify-center">
                        <Icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Partners</span>
          </h3>

          {/* Partners Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-rtl gap-8 items-center whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://tribecacabinetry.com/wp-content/uploads/2021/02/Tribeca_logo.png"
                  alt="Tribeca Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://cdn.fastpixel.io/fp/ret_img+v_f6dd+w_442+h_150+q_lossy+to_webp/granitechinc.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fforevermark-cabinetry-logo.png"
                  alt="Forevermark Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://lirp.cdn-website.com/1dd31cea/dms3rep/multi/opt/J+-+B+Fine+Cabinetry+Logos+%281%29-1920w.png"
                  alt="J+B Fine Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://tribecacabinetry.com/wp-content/uploads/2021/02/Tribeca_logo.png"
                  alt="Tribeca Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://cdn.fastpixel.io/fp/ret_img+v_f6dd+w_442+h_150+q_lossy+to_webp/granitechinc.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fforevermark-cabinetry-logo.png"
                  alt="Forevermark Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://lirp.cdn-website.com/1dd31cea/dms3rep/multi/opt/J+-+B+Fine+Cabinetry+Logos+%281%29-1920w.png"
                  alt="J+B Fine Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              {/* Third set for extra coverage */}
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://tribecacabinetry.com/wp-content/uploads/2021/02/Tribeca_logo.png"
                  alt="Tribeca Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://cdn.fastpixel.io/fp/ret_img+v_f6dd+w_442+h_150+q_lossy+to_webp/granitechinc.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fforevermark-cabinetry-logo.png"
                  alt="Forevermark Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0 flex items-center justify-center h-24 px-8">
                <img
                  src="https://lirp.cdn-website.com/1dd31cea/dms3rep/multi/opt/J+-+B+Fine+Cabinetry+Logos+%281%29-1920w.png"
                  alt="J+B Fine Cabinetry"
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
