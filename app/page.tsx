import Image from 'next/image'
import Link from 'next/link'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import { FaTruck, FaBox, FaShieldAlt, FaMoneyBillWave, FaSearch, FaStar } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Topbar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: 'url(/tracks-bg.jpg)' }}
        />
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl md:mb-6">
              Professional Packers & Movers in NCR
            </h1>
            <p className="mb-6 text-lg md:text-xl text-white/90 md:mb-8">
              We provide reliable and efficient packing and moving services for homes and offices. Our experienced team ensures safe transportation of your belongings.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="/contact" className="text-center btn-primary">
                Get a Free Quote
              </a>
              <a href="/services" className="px-6 py-3 text-center transition bg-white rounded-lg text-primary hover:bg-gray-100">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white md:py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl md:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="mb-4 text-4xl text-primary">✓</div>
              <h3 className="mb-2 text-lg font-bold">Professional Team</h3>
              <p className="text-gray-600">Experienced and trained professionals for all your moving needs</p>
            </div>
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="mb-4 text-4xl text-primary">✓</div>
              <h3 className="mb-2 text-lg font-bold">Safe Transportation</h3>
              <p className="text-gray-600">Secure and reliable transportation of your belongings</p>
            </div>
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="mb-4 text-4xl text-primary">✓</div>
              <h3 className="mb-2 text-lg font-bold">Affordable Rates</h3>
              <p className="text-gray-600">Competitive pricing with no hidden charges</p>
            </div>
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="mb-4 text-4xl text-primary">✓</div>
              <h3 className="mb-2 text-lg font-bold">24/7 Support</h3>
              <p className="text-gray-600">Round the clock customer support for your queries</p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
} 