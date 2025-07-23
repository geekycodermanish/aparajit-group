'use client'

import Image from 'next/image'

export default function LeadershipSection() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/diamond-pattern.svg')] opacity-5" />
      
      <div className="max-w-8xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side - Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-amber-400" />
            <span className="text-amber-500 font-medium tracking-[0.2em] text-xs uppercase">OUR VISION</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8 leading-tight">
            Shaping Skylines, <br />
            Defining Legacies
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              At the helm of our organization stands a visionary leader whose acumen has transformed cityscapes across continents. With three decades of pioneering development, we've redefined luxury living through innovative design and uncompromising quality.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our chairman's philosophy centers on creating timeless value - where every project must endure as both architectural marvel and sound investment.
            </p>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="font-serif text-2xl text-gray-900">Rajiv Mehta</p>
            <p className="text-sm text-gray-500 tracking-widest mt-2 uppercase">Founder & Chairman</p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-[600px] rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          <Image
            src="/images/leadership-portrait.jpg"
            alt="Rajiv Mehta - Founder & Chairman"
            fill
            className="object-cover object-center transition-all duration-500 group-hover:scale-105"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30" />
          
          {/* Signature Decoration */}
          <div className="absolute bottom-8 left-8">
            <svg width="180" height="80" viewBox="0 0 180 80" className="text-white opacity-80">
              <path d="M10,40 Q50,10 90,40 T170,40" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}