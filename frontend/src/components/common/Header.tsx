'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'RESIDENCES', path: '/properties' },
    { name: 'AMENITIES', path: '/amenities' },
    { name: 'LIFESTYLE', path: '/lifestyle' },
    { name: 'DEVELOPMENTS', path: '/developments' },
    { name: 'CONTACT', path: '/contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Contact Bar - Hidden on scroll */}
      <div className={`hidden md:block transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0' : 'max-h-10'}`}>
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex justify-end items-center py-1 text-xs font-medium tracking-wider text-white">
            <div className="flex items-center mr-6">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (555) 123-4567
            </div>
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              inquiries@aparajitgroup.com
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          {/* LOGO - Smaller and more prominent */}
          <Link href="/" className="flex items-center h-10 w-auto">
            <Image
              src="/images/LOGO.png"
              alt="Aparajit Group"
              width={80}  // Reduced from 160
              height={30}  // Reduced from 48
              className={`transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
              priority
            />
          </Link>

          {/* DESKTOP NAV - Stronger typography */}
          <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className={`text-xs font-semibold tracking-[0.15em] transition-colors duration-300 uppercase ${
                      scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                  <div className={`absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full`} />
                </div>
              ))}
            </div>
          </nav>

          {/* Language Selector - Compact */}
          <div className="hidden md:flex items-center ml-auto">
            <select 
              className={`bg-transparent text-xs font-semibold tracking-wider uppercase focus:outline-none border-l pl-3 ${
                scrolled ? 'text-gray-800 border-gray-300' : 'text-white border-white/30'
              }`}
            >
              <option>EN</option>
              <option>HI</option>
            </select>
          </div>

          {/* MOBILE TOGGLE - More prominent */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} strokeWidth={2} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV MENU - Stronger typography */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
      } ${scrolled ? 'bg-white' : 'bg-gray-900'}`}>
        <div className="flex flex-col space-y-0 px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-4 text-sm font-semibold uppercase tracking-wider transition-colors ${
                scrolled 
                  ? 'text-gray-800 hover:bg-gray-100 border-b border-gray-100' 
                  : 'text-white hover:bg-gray-800 border-b border-gray-800'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-2 pt-3 border-t border-gray-200 px-4">
            <select 
              className={`w-full py-2 px-3 bg-transparent text-sm font-medium uppercase rounded border ${
                scrolled ? 'text-gray-800 border-gray-300' : 'text-white border-white/30'
              }`}
            >
              <option>English</option>
              <option>हिंदी</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}