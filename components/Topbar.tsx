'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Topbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        
        if (currentScrollY > lastScrollY) { // scrolling down
          setIsVisible(false)
        } else { // scrolling up
          setIsVisible(true)
        }
        
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <div className={`bg-primary text-white py-2 fixed top-0 w-full z-40 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-2 md:justify-start md:mb-0">
            <div className="flex items-center gap-2">
              <FaPhone className="text-secondary" />
              <span>+91 9413545517, +91 8685929134</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-secondary" />
              <span>pooniapackerandmovers@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-secondary" />
              <span>NCR, gurgaon</span>
            </div>
          </div>

          {/* GST Info */}
          <div className="text-sm">
            <span>GSTIN: 06FMUPS0684D1ZJ</span>
          </div>
        </div>
      </div>
    </div>
  )
} 