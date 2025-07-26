'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Animation variants
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
    transition: { 
      type: 'spring', 
      stiffness: 120, 
      damping: 14, 
      mass: 0.8 
    },
  },
}

const teamCardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 12, 
      mass: 0.6 
    },
  },
}

export function OurTeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const teamMembers = [
    {
      name: "Priya Sharma",
      title: "Head of Design",
      image: "/images/virat_image.jpg",
    },
    {
      name: "Rajesh Kumar",
      title: "Chief Engineer",
      image: "/images/virat_image.jpg",
    },
    {
      name: "Sneha Gupta",
      title: "Client Relations Director",
      image: "/images/virat_image.jpg",
    },
    {
      name: "Vikram Reddy",
      title: "Project Manager",
      image: "/images/virat_image.jpg",
    },
  ]

  return (
    <section 
      ref={ref} 
      className="relative bg-white pb-20 lg:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16 pt-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center border border-gray-300 rounded-full px-6 py-2 text-lg font-semibold tracking-widest text-gray-900 relative bg-white"
          >
            <span className="mr-3 w-6 h-0.5 bg-gray-500" />
            <span className="uppercase text-gray-800">Our Team</span>
            <span className="ml-3 w-6 h-0.5 bg-gray-500" />
          </motion.div>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="group relative flex flex-col items-center text-center"
              variants={teamCardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm font-medium text-amber-300">{member.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
