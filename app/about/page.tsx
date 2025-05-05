import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '50+', label: 'Cities Covered' },
    { number: '100%', label: 'Satisfaction' }
  ]

  return (
    <main className="min-h-screen">
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Poonia Packers and Movers is a renowned name in the transfer of goods and materials industry with the domestic and international sector. With our corporate office in NCR, we have established ourselves as a leading service provider in the region.
              </p>
              <p className="text-gray-600 mb-4">
                We specialize in packing, moving, and installation services for various customer segments including industrial, domestic, and international clients. Our clientele includes banks, pharmaceutical companies, business professionals, and more.
              </p>
              <p className="text-gray-600">
                Our commitment to quality service and customer satisfaction has helped us build a strong reputation in the industry. We continuously strive to improve our services and maintain the highest standards of professionalism.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="Our Office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, efficient, and cost-effective packing and moving solutions while maintaining the highest standards of service quality and customer satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted and preferred packing and moving service provider in India, known for our professionalism, reliability, and customer-centric approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 