'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="relative py-28 bg-emerald-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-amber-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image with badge */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden group">
          <Image
            src="/images/pic_5.jpg" // High-quality farmland image
            alt="Our Farmland Legacy"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />
          
          {/* Experience badge */}
          <div className="absolute -bottom-6 -left-6 bg-amber-400 text-emerald-900 p-6 rounded-2xl shadow-xl z-10">
            <div className="text-center">
              <span className="block text-4xl font-bold">40+</span>
              <span className="block text-sm font-medium tracking-widest">YEARS</span>
              <span className="block text-xs mt-1">EXPERIENCE</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-emerald-50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-400" />
            <span className="text-amber-300 font-medium tracking-widest text-sm">OUR STORY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            <span className="font-serif italic text-emerald-200">Cultivating</span> Land <br />Legacies Since 1980
          </h2>
          
          <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
            From our humble beginnings as farmland stewards to becoming Delhi premier luxury agricultural land specialists, 
            we have remained committed to connecting discerning buyers with exceptional properties that appreciate in value.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-900" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-amber-300 mb-2">Agricultural Expertise</h4>
                <p className="text-emerald-100">
                  Deep understanding of soil quality, water resources, and cultivation potential for premium farmland.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-900" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-amber-300 mb-2">Luxury Standards</h4>
                <p className="text-emerald-100">
                  Curating only land parcels with premium infrastructure, access, and development potential.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <div className="bg-emerald-800/50 rounded-lg p-6 text-center min-w-[150px]">
              <span className="block text-3xl font-light text-amber-400 mb-1">500+</span>
              <span className="text-sm text-emerald-200">Acres Transacted</span>
            </div>
            <div className="bg-emerald-800/50 rounded-lg p-6 text-center min-w-[150px]">
              <span className="block text-3xl font-light text-amber-400 mb-1">100%</span>
              <span className="text-sm text-emerald-200">Verified Titles</span>
            </div>
            <div className="bg-emerald-800/50 rounded-lg p-6 text-center min-w-[150px]">
              <span className="block text-3xl font-light text-amber-400 mb-1">3 Gen</span>
              <span className="text-sm text-emerald-200">Family Legacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}