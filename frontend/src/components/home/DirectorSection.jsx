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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14, mass: 0.8 },
  },
}

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
}

const quoteVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 0.2,
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
    <section ref={ref} className="relative bg-white text-gray-800 overflow-hidden">
      {/* Accent line at the top */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-amber-600" />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          
          {/* ====== IMAGE COLUMN ====== */}
          <motion.div 
            className="w-full lg:w-5/12 relative"
            variants={imageVariants} 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full rounded-lg border-2 border-amber-300/60 z-0" />
            <div className="relative z-10 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[580px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                 src="/images/director_image.jpg"
                 alt="Anand Singh - Director, Aparajit Group"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" /> 
            </div>
          </motion.div>

          {/* ====== CONTENT COLUMN ====== */}
          <motion.div 
            className="w-full lg:w-6/12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <div className="mb-8 md:mb-12">
              <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-3 sm:mb-4 overflow-hidden">
                {headingWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2 sm:mr-3"
                    variants={itemVariants}
                  >
                    {word === "Excellence" ? <span className="text-amber-600">{word}</span> : word}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p 
                className="text-xs sm:text-sm uppercase tracking-widest text-amber-600"
                variants={itemVariants}
              >
                Helmed by Anand Singh
              </motion.p>
            </div>

            {/* STYLIZED BLOCKQUOTE */}
            <motion.div className="relative mb-8 md:mb-10" variants={itemVariants}>
              <motion.span 
                className="absolute -top-6 sm:-top-8 -left-3 sm:-left-4 text-7xl sm:text-8xl md:text-9xl font-serif text-gray-300 z-0"
                variants={quoteVariants}
              >“</motion.span>
              <blockquote className="relative z-10 text-lg sm:text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed pl-3 sm:pl-4 border-l-2 sm:border-l-4 border-amber-400">
                We don't just build structures, we sculpt landmarks that define skylines and inspire generations.
              </blockquote>
            </motion.div>

            {/* Director's Profile */}
            <motion.div className="space-y-4 sm:space-y-5 text-gray-600 leading-relaxed max-w-xl" variants={itemVariants}>
              <p className="text-sm sm:text-base">
                Under the visionary leadership of <span className="font-semibold text-amber-600">Anand Singh</span>, Aparajit Group has ascended to the pinnacle of luxury construction in India. His philosophy carries two decades of profound expertise with a relentless pursuit of perfection, establishing a new benchmark for quality.
              </p>
              <p className="text-sm sm:text-base">
                Mr. Singh's principle of "ethical luxury" is the cornerstone of our identity, ensuring every creation is a testament to sustainable innovation and enduring value for our discerning clientele.
              </p>
            </motion.div>

            {/* Separator and Title Block */}
            <motion.div className="mt-8 sm:mt-12 pt-6 sm:pt-8" variants={itemVariants}>
                <motion.div 
                  className="h-px w-full bg-gray-300 mb-6 sm:mb-8 origin-left" 
                  variants={lineVariants}
                />
                <p className="font-serif text-lg sm:text-xl text-gray-900">Anand Singh</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Managing Director, Aparajit Group</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}