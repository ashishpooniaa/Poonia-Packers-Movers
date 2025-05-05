import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FloatingIcons from '@/components/FloatingIcons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Packers and Movers - Professional Relocation Services',
  description: 'Professional packing and moving services for homes and offices. Safe, reliable, and affordable relocation solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}  >
        {children}
        <FloatingIcons />
      </body>
    </html>
  )
} 