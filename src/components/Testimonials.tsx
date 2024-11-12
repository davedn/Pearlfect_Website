import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      event: "Wedding",
      text: "Pearlfect Boba made our wedding reception unforgettable! Our guests couldn't stop raving about the unique boba bar.",
      rating: 5
    },
    {
      name: "Tech Solutions Inc.",
      event: "Corporate Event",
      text: "Professional service and amazing selection. Perfect addition to our company anniversary celebration.",
      rating: 5
    },
    {
      name: "Jessica L.",
      event: "Birthday Party",
      text: "The team was fantastic and the boba was delicious! Will definitely book again for future events.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="bg-brand-light py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-brand-dark">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-secondary fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-brand-dark">{testimonial.name}</p>
                <p className="text-brand-primary text-sm">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;