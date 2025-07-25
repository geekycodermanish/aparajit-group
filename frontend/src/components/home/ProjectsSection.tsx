'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const projects = [
  {
    id: 'Vedant City ',
    title: 'Vedant City',
    location: 'Jhajjar,Haryana',
    description: 'A real estate projects by Aparajit reality ,Offering both residential and industrial plots near Relience MET City',
    image: '/images/projects/project_3.jpg',
    features: ['RCC roads', 'Sewage treatment', 'Solar lights']
  },
  {
    id: 'ROB (Road over bridge).',
    title: 'ROB (Road over bridge).',
    location: 'Bankhadi , himachal pradesh',
    description: 'A road over bridge project located in Bankhadi, Himachal Pradesh.',
    image: '/images/projects/project_2.jpg',
    features: ['Modern Infrastructure', 'Deck slab', 'Load consideration']
  },
  {
    id: 'oasis-villas',
    title: 'Oasis Villas',
    location: 'Sohna Road, Gurugram',
    description: 'Discover a private sanctuary of exclusive villas, where luxury is in every detail.',
    image: '/images/pic_4.jpg',
    features: ['Beach Access', 'Home Spa', '24/7 Concierge']
  },
]

export default function HorizontalProjectSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%'])

  return (
    <div className="bg-white">
      {/* Header */}
<div className="sticky top-0 z-10 bg-white pt-20 pb-10 px-6 md:px-12">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto"
  >
    <div className="relative text-center">
      <span className="inline-block px-6 py-3 border border-gray-300 rounded-full text-gray-800 font-serif text-xl md:text-2xl tracking-widest uppercase">
        — Our Projects —
      </span>
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-px bg-gray-200 -z-10" />
    </div>
  </motion.div>
</div>

      {/* Horizontal Slider */}
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            style={{ x }}
            className="absolute top-0 left-0 h-full flex items-center will-change-transform"
          >
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="relative h-[80vh] w-[90vw] md:w-[70vw] flex-shrink-0 mx-4 md:mx-8 rounded-2xl overflow-hidden group"
              >
                <Link href={`/projects/${project.id}`} className="absolute inset-0 z-20" aria-label={`View ${project.title}`} />
                
                {/* Project Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 w-full">
                  <div className="max-w-md">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                      className="space-y-4"
                    >
                      <p className="text-amber-400 font-medium">{project.location}</p>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.features.map((feature, i) => (
                          <span key={i} className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute top-8 right-8 z-10 text-white/20 text-7xl font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  )
}