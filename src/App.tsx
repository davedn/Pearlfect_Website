import React from 'react';
import { Cup, Calendar, Users, Building2, PartyPopper, Heart, ChefHat, Clock, MapPin, Star } from 'lucide-react';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543661975-42d2b5d61924?auto=format&fit=crop&q=80"
            alt="Boba Tea Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Pearlfect Boba</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Elevate Your Events with Premium Boba Catering</p>
          <a href="#booking" className="bg-brand-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-dark transition duration-300">
            Book Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-brand-dark">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-brand-secondary">
            <Heart className="w-12 h-12 text-brand-secondary mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Weddings</h3>
            <p className="text-gray-600">Make your special day even more memorable with our elegant boba bar setup.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-brand-primary">
            <Building2 className="w-12 h-12 text-brand-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Corporate Events</h3>
            <p className="text-gray-600">Impress your clients and employees with our professional boba catering service.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-brand-accent">
            <PartyPopper className="w-12 h-12 text-brand-accent mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Private Parties</h3>
            <p className="text-gray-600">Create unforgettable moments with customized boba experiences.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-light py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-dark">Why Choose Pearlfect Boba</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <ChefHat className="w-10 h-10 mx-auto text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Premium Ingredients</h3>
              <p className="text-gray-600">Finest quality teas and toppings</p>
            </div>
            <div className="text-center">
              <Users className="w-10 h-10 mx-auto text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Professional Staff</h3>
              <p className="text-gray-600">Experienced and friendly service</p>
            </div>
            <div className="text-center">
              <Clock className="w-10 h-10 mx-auto text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Flexible Hours</h3>
              <p className="text-gray-600">Available when you need us</p>
            </div>
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Mobile Service</h3>
              <p className="text-gray-600">We come to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-dark">Book Your Event</h2>
          <BookingForm />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
      
      <Footer />
    </div>
  );
}

export default App;