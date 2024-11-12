import React, { useState } from 'react';
import { CupSoda, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <CupSoda className="h-8 w-8 text-brand-primary" />
            <span className="ml-2 text-xl font-bold text-brand-dark">Pearlfect Boba</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-brand-primary">Home</a>
            <a href="#services" className="text-gray-600 hover:text-brand-primary">Services</a>
            <a href="#booking" className="text-gray-600 hover:text-brand-primary">Book Now</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-primary">Testimonials</a>
            <a href="#contact" className="bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-dark">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-brand-primary">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-brand-primary">Services</a>
              <a href="#booking" className="block px-3 py-2 text-gray-600 hover:text-brand-primary">Book Now</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-brand-primary">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-brand-primary font-medium">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;