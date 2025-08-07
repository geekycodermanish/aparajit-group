'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="bg-white text-black px-4 sm:px-8 md:px-12 lg:px-20 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        {/* Left Side - Headline */}
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-7xl xl:text-[4rem] leading-[1.1] font-black tracking-[-0.03em]"
          >
            <span className="block">Recreating Infra</span>
            <span className="block">& Real Estate</span>
            <span className="block">Sector at The</span>
            <span className="block">Same Time</span>
          </motion.h2>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] leading-relaxed sm:leading-relaxed tracking-tight font-light">
              APARAJIT GROUP is a group of companies founded by Hon&apos;ble Managing Director - Mr. Anand Singh having over 25 years of Extensive expertise in Residential,
               Industrial & Commercial infra projects.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] leading-relaxed sm:leading-relaxed tracking-tight font-light">
             Successfully delivered Projects like <span className="font-medium">UNIMARK HEALTHCARE LTD. (HARIDWAR)</span> and {' '}
              <span className="font-medium">KOTA SUPER THERMAL</span> As well.
            </p>
          </motion.div>

          {/* Know More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 group">
              <span className="text-base sm:text-lg font-medium tracking-tight border-b-2 border-black pb-1 transition-all group-hover:border-transparent">
                Know More
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full block transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection