'use client'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden pb-20">
      {/* Image Background - Replaced video with image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <img
            src="/images/pexels-damir-33059225.jpg" 
            alt="Luxury green real estate background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-emerald-900/30" /> {/* Keep the overlay */}
      </div>

      {/* Bottom-Centered Content - Keep everything exactly the same */}
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

        {/* Keep decorative elements exactly the same */}
        <div className="absolute -top-20 -left-20 w-40 h-40 border-4 border-amber-400/30 rounded-full opacity-50" />
        <div className="absolute -bottom-10 -right-20 w-32 h-32 border-4 border-emerald-400/30 rounded-full opacity-50" />
      </div>

      {/* Keep leaf-like decorative elements exactly the same */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-emerald-600/20 rounded-full blur-md" />
      <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-amber-400/10 rounded-full blur-md" />
    </section>
  )
}