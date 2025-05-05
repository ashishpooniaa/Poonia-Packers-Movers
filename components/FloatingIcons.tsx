'use client'

import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function FloatingIcons() {
  const phoneNumber = '+919413545517'
  const whatsappNumber = '+919413545517'
  const email = 'pooniapackerandmovers@gmail.com'

  return (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col gap-4 z-50">
      {/* Call Button */}
      <a 
        href={`tel:${phoneNumber}`}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
        title="Call Us"
      >
        <FaPhone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      {/* Email Button */}
      <a 
        href={`mailto:${email}`}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
        title="Send Email"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </div>
  )
} 