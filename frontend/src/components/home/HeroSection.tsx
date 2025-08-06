'use client'

import { useEffect, useRef, useState } from 'react'

const videos = [
  '/images/banner_vider_1.mp4',
  '/images/banner_vider_2.mp4',
  '/images/banner_vider_3.mp4',
]

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
    setProgress(0)
  }

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRef.current
      if (video?.duration && isPlaying) {
        const currentTime = video.currentTime
        const duration = video.duration
        setProgress((currentTime / duration) * 100)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.load()
      if (isPlaying) video.play()
    }
  }, [currentIndex, isPlaying])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Layer */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          key={currentIndex}
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={videos[currentIndex]} type="video/mp4" />
          <div className="absolute inset-0 bg-black flex items-center justify-center text-white">
            [Construction Project Video]
          </div>
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content - Bottom Left */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-16 px-4 sm:px-6 md:pl-12 text-white">
        <div className="max-w-2xl space-y-2 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight">
            Building An Era 
          </h1>
          <div className="h-px w-16 sm:w-24 bg-amber-500 my-2 sm:my-4" />
          <p className="text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed text-white/90">
            At <span className="font-semibold text-amber-400">APARAJIT GROUP</span>, we are committed to transform visions into reality through high-quality construction. Such as constructing  Highways, Roads, Industrial and Residential township,
             Developing Farmhouses and industrial park with large-scale real estate and infrastructure projects.  We build  precision, and long-lasting impression and growth .
          </p>
        </div>
      </div>

      {/* Play/Pause Button - Adjusted for mobile */}
      <button
        className="absolute bottom-8 md:bottom-16 right-4 md:right-8 z-10 p-2 text-white hover:text-amber-400 transition-colors"
        onClick={togglePlayPause}
        aria-label="Toggle play/pause"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isPlaying ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9v6m4-6v6" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 11.168l-3.2-2.132A1 1 0 0010 9.87v4.26a1 1 0 001.55.832l3.2-2.13a1 1 0 000-1.664z" />
          )}
        </svg>
      </button>

      {/* Progress Bar - Adjusted for mobile */}
      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 z-10 w-24 md:w-32 h-1 bg-white/30 rounded overflow-hidden">
        <div
          className="h-full bg-amber-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  )
}