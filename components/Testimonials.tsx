'use client'

import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Business Owner',
      content: 'Excellent service! The team was professional and handled our office relocation smoothly. Highly recommended.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Home Owner',
      content: 'Very satisfied with their packing and moving services. Everything was delivered safely and on time.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Corporate Client',
      content: 'Great experience with Poonia Packers & Movers. Their team is efficient and reliable.',
      rating: 4
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 