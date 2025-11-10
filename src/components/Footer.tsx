import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:pr-8 md:border-r border-gray-300">
              <img
                src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/polo-logo-2.png"
                alt="Polo Tile & Stone"
                className="h-24 w-auto object-contain mb-4"
              />
              <p className="text-gray-600 leading-relaxed">
                Your trusted partner for premium granite, quartz, and marble countertop installations.
              </p>
            </div>

            <div className="md:px-8 md:border-r border-gray-300">
              <h4 className="text-lg font-bold mb-4 text-gray-900">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin size={18} className="flex-shrink-0 mt-1 text-amber-600" />
                  <div>
                    <p>44810 Old Ox Rd. STE 100</p>
                    <p>Sterling, VA 20166</p>
                    <p className="text-sm text-amber-600 font-medium mt-1">(Walk-in Welcome)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} className="text-amber-600" />
                  <a href="tel:6466427830" className="hover:text-amber-600 transition-colors">
                    (646) 642-7830
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} className="text-amber-600" />
                  <a href="mailto:info@polotile.com" className="hover:text-amber-600 transition-colors">
                    info@polotile.com
                  </a>
                </div>
              </div>
            </div>

            <div className="md:pl-8">
              <h4 className="text-lg font-bold mb-4 text-gray-900">Showroom Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="flex-shrink-0 mt-1 text-amber-600" />
                  <div>
                    <p>Monday – Friday: 9am – 6pm</p>
                    <p>Saturday: 9am - 4pm</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Polo Countertops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
