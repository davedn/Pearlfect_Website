import React, { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    eventType: 'wedding',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      eventType: 'wedding',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="eventType">Event Type</label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          >
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="party">Private Party</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="date">Event Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="time">Event Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="guests">Number of Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-gray-700 mb-2" htmlFor="message">Additional Details</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-brand-primary text-white py-3 rounded-lg hover:bg-brand-dark transition duration-300"
      >
        Submit Booking Request
      </button>
    </form>
  );
};

export default BookingForm;