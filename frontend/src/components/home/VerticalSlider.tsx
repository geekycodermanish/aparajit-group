'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function VerticalSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const properties = [
    {
      id: 1,
      title: "Eco-Luxury Forest Retreat",
      price: "₹8.5 Cr",
      details: "5 bedrooms | 6 bathrooms | 8,500 sqft | Solar powered | Organic garden",
      image: "/images/green-property-1.jpg"
    },
    {
      id: 2,
      title: "Sustainable Waterfront Villa",
      price: "₹12.2 Cr",
      details: "4 bedrooms | 5 bathrooms | 7,200 sqft | Rainwater harvesting | Natural materials",
      image: "/images/green-property-2.jpg"
    },
    {
      id: 3,
      title: "Biophilic Urban Residence",
      price: "₹6.8 Cr",
      details: "3 bedrooms | 3.5 bathrooms | 4,500 sqft | Vertical gardens | Energy efficient",
      image: "/images/green-property-3.jpg"
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === properties.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? properties.length - 1 : prev - 1))
  }

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <>
      <Head>
        <title>Premium Green Properties | Verdura Real Estate</title>
      </Head>
      
      <div className="relative h-screen w-full overflow-hidden">
        {properties.map((property, index) => (
          <div 
            key={property.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out`}
            style={{
              transform: `translateY(${(index - currentSlide) * 100}%)`,
              zIndex: properties.length - index
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-light mb-2">
                    <span className="font-serif italic text-emerald-100">{property.title.split(' ')[0]}</span> {property.title.split(' ').slice(1).join(' ')}
                  </h2>
                  <p className="text-2xl md:text-3xl font-bold text-amber-300 mb-3">{property.price}</p>
                  <p className="text-lg text-emerald-100/90 max-w-2xl">{property.details}</p>
                  <div className="w-20 h-1 bg-amber-400 my-6" />
                  <button className="px-8 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-900 font-medium tracking-wider transition-colors rounded-full">
                    View Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={prevSlide} 
          aria-label="Previous property"
          className="absolute left-1/2 -translate-x-1/2 top-8 bg-emerald-800/60 hover:bg-emerald-700/80 text-white w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide} 
          aria-label="Next property"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-emerald-800/60 hover:bg-emerald-700/80 text-white w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </>
  )
}