'use client'

import Image from 'next/image'

export default function LeadershipSection() {
  return (
    <section className="relative bg-black text-white">
      <div className="grid lg:grid-cols-2 items-center">
        {/* Left: Image */}
        <div className="relative h-[600px]">
          <Image
            src="/images/virat_image.webp" // Replace with your actual image path
            alt="Chairman - Aparajit Group"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Right: Content */}
        <div className="px-6 py-12 sm:px-12 lg:py-20">
          <div className="max-w-xl space-y-6">
            <div>
              <svg
                className="w-10 h-10 text-amber-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 13H4a1 1 0 0 1-1-1V6.83l4.88-4.88a1 1 0 0 1 1.7.7V12a1 1 0 0 1-1 1zm12 0h-3.17a1 1 0 0 1-1-1V2.65a1 1 0 0 1 1.7-.7L21 6.83V12a1 1 0 0 1-1 1z" />
              </svg>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-tight">
                “The function of leadership is to produce more leaders, not more followers.”
              </h2>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              At <span className="text-amber-400 font-semibold">APARAJIT Group</span>, we build more than infrastructure —
              we build trust, opportunity, and legacy. Guided by vision and values, we lead transformative
              construction projects across India — from highways to high-rises.
              Our leadership ensures long-term impact through quality execution and relentless innovation.
            </p>

            {/* Signature + Name */}
            <div className="pt-6">
              <Image
                src="/images/signature.png" // Optional: stylized signature image
                alt="Signature"
                width={160}
                height={60}
                className="mb-2"
              />
              <p className="font-medium text-lg">Rajiv Mehta</p>
              <p className="text-sm uppercase tracking-widest text-amber-400">Chairman & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
