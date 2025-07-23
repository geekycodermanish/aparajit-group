'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    '/images/pexels-damir-33059225.jpg',
    '/images/pic_1.jpg',
    '/images/pic_2.jpg',
    '/images/pic_3.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === heroImages.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden pb-20">
      {/* Sliding Image Background with reduced tint */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image}
              alt={`Luxury green property ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Reduced green tint opacity from 30% to 15% */}
            <div className="absolute inset-0 bg-emerald-900/15" />
          </div>
        ))}
      </div>

      {/* Bottom-Centered Content (identical to original) */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-2">
          <span className="font-serif italic text-emerald-100">Find</span> Your
        </h1>
        <h2 className="text-4xl sm:text-6xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-6">
          Green Sanctuary
        </h2>

        <div className="w-20 h-1 bg-amber-400 mx-auto mb-6" />

        <p className="text-base sm:text-lg md:text-xl text-emerald-50 leading-relaxed font-light max-w-2xl mx-auto">
          We specialize in premium sustainable properties that harmonize with nature. 
          Discover eco-luxury homes that nurture both family and environment.
        </p>

        {/* Decorative elements (position unchanged) */}
        <div className="absolute -top-20 -left-20 w-40 h-40 border-4 border-amber-400/30 rounded-full opacity-50" />
        <div className="absolute -bottom-10 -right-20 w-32 h-32 border-4 border-emerald-400/30 rounded-full opacity-50" />
      </div>

      {/* Leaf-like decorative elements (position unchanged) */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-emerald-600/20 rounded-full blur-md" />
      <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-amber-400/10 rounded-full blur-md" />
    </section>
  )
}