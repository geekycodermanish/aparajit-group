'use client'

import { useRef } from 'react'

export default function HeroSection() {
  const videoRef = useRef(null)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Single Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        >
          <source src="/images/banner_vider_1.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">
            [Luxury Property Video]
          </div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content positioned bottom left */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 pl-12 text-white">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl sm:text-6xl font-serif font-light tracking-tight leading-tight">
            Legacy that Leads
          </h1>
          <div className="h-px w-20 bg-amber-400 my-4" />
          <h2 className="text-xl sm:text-2xl font-light tracking-widest uppercase">
            Innovation that Lasts
          </h2>
        </div>
      </div>

      {/* Play/Pause Control - Bottom right */}
      <button 
        className="absolute bottom-8 right-8 z-10 p-2 text-white hover:text-amber-400 transition-colors"
        onClick={() => {
          if (videoRef.current?.paused) {
            videoRef.current.play()
          } else {
            videoRef.current?.pause()
          }
        }}
        aria-label="Toggle play/pause"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {videoRef.current?.paused ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          )}
        </svg>
      </button>
    </section>
  )
}