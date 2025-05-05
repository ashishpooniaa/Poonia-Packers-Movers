import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function ServicesPage() {
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
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      features: [
        'Modern fleet of vehicles',
        'GPS tracking',
        'Experienced drivers',
        'Route optimization'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div key={index} className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="relative h-64 md:h-96">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-secondary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
} 