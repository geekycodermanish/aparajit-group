'use client'

import Image from 'next/image'

export default function LeadershipSection() {
  return (
    <section className="relative py-28 bg-emerald-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-400" />
            <span className="text-amber-500 font-medium tracking-widest text-sm">OUR PHILOSOPHY</span>
          </div>
          
            <blockquote className="text-3xl md:text-4xl font-light text-emerald-900 mb-8 leading-tight italic">
            &quot;The function of leadership is to produce more leaders, not more followers.&quot;
            </blockquote>
          
          <div className="prose prose-emerald max-w-2xl">
            <p className="text-lg text-emerald-700 mb-6">
              At BNW, our mission is clear: bridge the gap between investors and the most lucrative opportunities in the real estate landscape. We are dedicated to maximizing returns on investment (ROI) by providing tailored guidance and in-depth market insights.
            </p>
            <p className="text-lg text-emerald-700">
              With our personalized approach, we empower clients to navigate the dynamic real estate market effectively, ensuring they capitalize on the best investments available.
            </p>
          </div>
          
          <div className="mt-12 border-t border-emerald-200 pt-6">
            <p className="font-serif text-xl italic text-emerald-800">Rajiv Mehta</p>
            <p className="text-sm text-emerald-600 tracking-widest mt-1">CHAIRMAN & FOUNDER</p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden group">
          <Image
            src="/images/virat_image.webp" // Replace with your leadership image
            alt="BNW Leadership"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-900/40" />
          
          {/* Decorative frame */}
          <div className="absolute inset-8 border-2 border-emerald-100/30 rounded-xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}