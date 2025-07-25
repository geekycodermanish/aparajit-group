'use client'
import Image from 'next/image';

export default function PremiumFarmLandSection() {
  return (
    <section className="relative bg-emerald-50 py-28 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -left-40 -top-40 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Luxury Content */}
        <div className="relative order-1 lg:order-none">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-400" />
            <span className="text-amber-500 font-medium tracking-widest text-sm">PREMIUM LAND HOLDINGS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-emerald-900 mb-6 leading-tight">
            <span className="font-serif italic">Exclusive</span> Farmland <br />Opportunities
          </h2>
          
          <p className="text-emerald-700/90 text-lg mb-8 leading-relaxed">
            Discover exceptional agricultural land parcels for discerning buyers seeking premium investments in Delhi most desirable locations.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-emerald-800">
                <span className="font-medium">Prime Locations</span> in South Delhi most sought-after agricultural belts
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-emerald-800">
                <span className="font-medium">Fully Vetted</span> properties with clear titles and documentation
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-emerald-800">
                <span className="font-medium">Premium Soil</span> quality with excellent water retention and fertility
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-full transition-colors flex items-center gap-2">
              <span>Explore Properties</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="px-8 py-4 border border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-medium rounded-full transition-colors">
              Speak to Advisor
            </button>
          </div>
        </div>

        {/* Right Side - Premium Image Display */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden group order-2 lg:order-none">
          <Image
            src="/images/pic_5.jpg"
            alt="Premium Farm Land in South Delhi"
            width={1200} // Use the actual width of your image if known
            height={800} // Use the actual height
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-900/60" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-amber-400" />
              <span className="text-amber-300 font-medium tracking-widest text-sm">CERTIFIED LAND</span>
            </div>
            <h3 className="text-3xl font-serif italic">Organic Ready</h3>
          </div>
          <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <span className="text-emerald-800 font-medium text-sm">50+ ACRES</span>
          </div>
        </div>
      </div>
    </section>
  )
}