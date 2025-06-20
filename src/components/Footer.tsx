import React from 'react';
import { Clock, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Los Tacos ML</h3>
            <p className="text-gray-300">
              Experience the finest in contemporary dining with locally sourced ingredients and expertly crafted dishes.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@lostacos.mnl</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Culinary Lane, Food City, FC 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <div>Mon-Thu: 5:00 PM - 10:00 PM</div>
                  <div>Fri-Sat: 5:00 PM - 11:00 PM</div>
                  <div>Sun: 4:00 PM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Los Tacos MNL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;