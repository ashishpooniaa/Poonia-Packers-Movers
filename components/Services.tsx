'use client'

import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      title: 'Home and Office Shifting',
      description: 'Our Home and Office transportation services will help you move your business to a new place with complete peace of mind without much interruption in your business. We ensure safe and secure transportation of all your belongings.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      features: [
        'Professional packing and unpacking',
        'Safe transportation',
        'Insurance coverage',
        'Timely delivery'
      ]
    },
    {
      title: 'Packing and Unpacking',
      description: 'We provide excellent Packing & Unpacking Services that minimize stress and prevent damage during relocation. Our team uses high-quality packing materials and follows best practices.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      features: [
        'Expert packing team',
        'Quality packing materials',
        'Systematic packing process',
        'Careful handling'
      ]
    },
    {
      title: 'Transportation Services',
      description: 'Our transportation services ensure safe and timely delivery of your goods to any destination across the country. We have a fleet of well-maintained vehicles and experienced drivers.',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      features: [
        'Modern fleet of vehicles',
        'GPS tracking',
        'Experienced drivers',
        'Route optimization'
      ]
    },
    {
      title: 'Car Carrier Services',
      description: 'We provide specialized car carrier services for safe and secure transportation of your vehicles. Our services ensure your vehicle reaches its destination without any damage.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      features: [
        'Specialized car carriers',
        'Safe loading and unloading',
        'Insurance coverage',
        'Door-to-door service'
      ]
    },
    {
      title: 'Warehouse Services',
      description: 'Our warehouse services provide secure storage solutions for your goods. We offer both short-term and long-term storage options with 24/7 security.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      features: [
        'Secure storage facilities',
        '24/7 security',
        'Climate control',
        'Inventory management'
      ]
    },
    {
      title: 'Insurance Services',
      description: 'We provide comprehensive insurance coverage for all your goods during transportation and storage. Our insurance services ensure complete protection for your valuable items.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      features: [
        'Comprehensive coverage',
        'Quick claim settlement',
        'Transparent policies',
        '24/7 support'
      ]
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm md:text-base">
                      <FaCheck className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 