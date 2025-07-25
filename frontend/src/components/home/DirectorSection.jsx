'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Reusable animation variants for clean and consistent code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly faster staggering for a livelier feel
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 }, // Increased y for more noticeable slide-up
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14, mass: 0.8 }, // Adjusted for a smoother, bouncier feel
  },
}

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

// New variant for the image to have a subtle scale and rotate effect
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
}

// New variant for the quote marks
const quoteVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 0.2, // Slightly more visible on white background
    scale: 1,
    transition: { type: 'spring', stiffness: 150, damping: 10, delay: 0.5 },
  },
}


export default function LeadershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const headingText = "A Legacy of Excellence"
  const headingWords = headingText.split(" ")

  return (
    // Changed background to white, text to darker tones
    <section ref={ref} className="relative bg-white text-gray-800 overflow-hidden">
      {/* Accent line at the top */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-amber-600" />
      
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* ====== IMAGE COLUMN ====== */}
          <motion.div 
            className="lg:w-5/12 w-full relative"
            variants={imageVariants} 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Subtle border effect around the image */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-lg border-2 border-amber-300/60 z-0" />
            <div className="relative z-10 h-[450px] lg:h-[580px] w-full rounded-lg overflow-hidden shadow-xl"> {/* Slightly less aggressive shadow */}
              <Image
                src="/images/virat_image.jpg" // Ensure this image exists
                alt="Anand Singh - Director, Aparajit Group"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
              {/* Overlay for subtle color tint, adjusted for white background */}
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" /> 
            </div>
          </motion.div>

          {/* ====== CONTENT COLUMN ====== */}
          {/* This parent motion.div orchestrates the staggered animation for its children */}
          <motion.div 
            className="lg:w-6/12 w-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <div className="mb-12">
              {/* ANIMATED HEADING: Each word animates in */}
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-4 overflow-hidden">
                {headingWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-3" // Adjusted spacing for words
                    variants={itemVariants}
                  >
                    {word === "Excellence" ? <span className="text-amber-600">{word}</span> : word}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p 
                className="text-sm uppercase tracking-widest text-amber-600"
                variants={itemVariants}
              >
                Helmed by Anand Singh
              </motion.p>
            </div>

            {/* STYLIZED BLOCKQUOTE */}
            <motion.div className="relative mb-10" variants={itemVariants}>
              {/* Animated large quote mark */}
              <motion.span 
                className="absolute -top-8 -left-4 text-9xl font-serif text-gray-300 z-0"
                variants={quoteVariants}
              >“</motion.span>
              <blockquote className="relative z-10 text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed pl-4 border-l-4 border-amber-400"> {/* Added left border */}
                We don't just build structures; we sculpt landmarks that define skylines and inspire generations.
              </blockquote>
            </motion.div>

            {/* Director's Profile */}
            <motion.div className="space-y-5 text-gray-600 leading-relaxed max-w-xl" variants={itemVariants}>
              <p>
                Under the visionary leadership of <span className="font-semibold text-amber-600">Anand Singh Yadav </span>, Aparajit Group has ascended to the pinnacle of luxury construction in India. His philosophy marries two decades of profound expertise with a relentless pursuit of perfection, establishing a new benchmark for quality.
              </p>
              <p>
                Mr. Singh's principle of "ethical luxury" is the cornerstone of our identity, ensuring every creation is a testament to sustainable innovation and enduring value for our discerning clientele.
              </p>
            </motion.div>

            {/* Separator and Title Block */}
            <motion.div className="mt-12 pt-8" variants={itemVariants}>
                {/* ANIMATED DIVIDER LINE */}
                <motion.div 
                  className="h-px w-full bg-gray-300 mb-8 origin-left" 
                  variants={lineVariants}
                />
                <p className="font-serif text-xl text-gray-900">Anand Singh Yadav</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Director, Aparajit Group</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}