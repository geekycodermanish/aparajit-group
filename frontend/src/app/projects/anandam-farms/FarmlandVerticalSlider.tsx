'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function PremiumFarmlandSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const farmlands = [
    {
      id: 1,
      title: "Emerald Valley Organic Farm",
      location: "Coorg, Karnataka",
      size: "48 Acres",
      price: "₹14.75 Cr",
      features: ["Organic certification", "Coffee plantation", "Natural springs", "Worker housing"],
      image: "/images/pic_6.jpg"
    },
    {
      id: 2,
      title: "Golden Grain Fields",
      location: "Punjab",
      size: "120 Acres",
      price: "₹22.90 Cr",
      features: ["Alluvial soil", "Full irrigation", "Grain storage", "Equipment included"],
      image: "/images/pic_5.jpg"
    },
    {
      id: 3,
      title: "Misty Mountain Orchard",
      location: "Himachal Pradesh",
      size: "35 Acres",
      price: "₹9.25 Cr",
      features: ["Apple orchard", "Cold storage", "Solar powered", "Road access"],
      image: "/images/pic_4.jpg"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === farmlands.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? farmlands.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <>
      <Head>
        <title>Premium Farmland Properties | Verdura Estates</title>
      </Head>

      <div className="relative h-screen w-full overflow-hidden bg-emerald-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grain-pattern.svg')] bg-repeat"></div>
        </div>

        {/* Main slider container */}
        <div className="relative h-full w-full">
          {farmlands.map((farm, index) => (
            <div
              key={farm.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Content panel */}
              <div className="relative z-20 w-full max-w-6xl mx-auto px-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 max-w-md">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                      Featured Property
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-light text-emerald-900 mb-2">
                    {farm.title}
                  </h2>

                  <div className="flex items-center text-emerald-700 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{farm.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-emerald-600">Land Size</p>
                      <p className="text-xl font-medium text-emerald-900">{farm.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-emerald-600">Price</p>
                      <p className="text-2xl font-bold text-amber-600">{farm.price}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {farm.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-emerald-800">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
                      View Details
                    </button>
                    <button className="px-6 py-3 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium rounded-lg transition-colors">
                      Contact Agent
                    </button>
                  </div>
                </div>
              </div>

              {/* Image background */}
              <div className="absolute inset-0 z-10">
                <Image
                  src={farm.image}
                  alt={farm.title}
                  fill
                  className="object-cover"
                  quality={100}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
          {farmlands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-emerald-700 w-8' : 'bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-emerald-800 p-3 rounded-full shadow-lg transition-all"
          aria-label="Previous property"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-emerald-800 p-3 rounded-full shadow-lg transition-all"
          aria-label="Next property"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  )
}