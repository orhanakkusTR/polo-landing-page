import { useState, useMemo } from 'react';
import { X } from 'lucide-react';

export function Materials() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allProjects = useMemo(() => {
    const images = [
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/1.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/2.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/3.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/4.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/5.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/6.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/7.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/8.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/9.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/10.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/11.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/12.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/13.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/14.jpg',
      'https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/15.jpg',
    ];

    return images
      .map((image) => ({ image, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ image }) => ({ image }));
  }, []);

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover examples of our quality craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(project.image)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl text-base"
              >
                View More
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold px-6 py-3 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all shadow-xl text-base"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2"
          >
            <X size={24} className="md:w-8 md:h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Project preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
