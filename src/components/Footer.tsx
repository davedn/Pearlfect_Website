import React from 'react';
import { CupSoda, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <CupSoda className="h-8 w-8 text-brand-secondary" />
              <span className="ml-2 text-xl font-bold">Pearlfect Boba</span>
            </div>
            <p className="text-gray-300">
              Elevating events with premium boba tea catering services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-secondary mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-secondary mr-2" />
                <span>info@pearlfectboba.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-brand-secondary mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-secondary">Home</a></li>
              <li><a href="#services" className="hover:text-brand-secondary">Services</a></li>
              <li><a href="#booking" className="hover:text-brand-secondary">Book Now</a></li>
              <li><a href="#testimonials" className="hover:text-brand-secondary">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-secondary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-brand-secondary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-brand-secondary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pearlfect Boba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;