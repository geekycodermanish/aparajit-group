'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="bg-white text-black px-4 md:px-20 pt-24 md:pt-32">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-20">
        {/* Left Side - Headline */}
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2.8rem] leading-[1.1] md:text-[3.5rem] lg:text-[4rem] font-black tracking-[-0.03em]"
          >
            <span className="block">Recreating Infra </span>
            <span className="block">& Real Estate</span>
            <span className="block">Sector at The</span>
            <span className="block">Same Time</span>
          </motion.h2>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl lg:text-[1.35rem] leading-relaxed tracking-tight font-light">
              APARAJIT GROUP is a renowned conglomerate of companies founded by the Honorable Managing Director, Shri Anand Singh, who brings over 25 years of extensive experience in residential, industrial, and commercial projects.
              Under his visionary leadership, the group has successfully developed numerous city malls across various cities in India, establishing a strong footprint in the real estate sector.
            </p>
            
            <p className="text-lg md:text-xl lg:text-[1.35rem] leading-relaxed tracking-tight font-light">
              Projects like <span className="font-medium">UNIMARK HEALTHCARE LTD. (HARIDWAR)</span> and {' '}
              <span className="font-medium">KOTA SUPAR THERMAL</span> As well.
            </p>
            
            <p className="text-xl md:text-2xl lg:text-[1.7rem] leading-tight tracking-tight font-medium italic">

            </p>
          </motion.div>

          {/* Know More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="mt-8 flex items-center gap-3 group">
              <span className="text-lg font-medium tracking-tight border-b-2 border-black pb-1 transition-all group-hover:border-transparent">
                Know More
              </span>
              <span className="w-4 h-4 bg-black rounded-full block transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection