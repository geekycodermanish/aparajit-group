'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 'serenity-gardens',
    title: 'Serenity Gardens',
    location: 'Sector 102, Gurugram',
    description: 'An exquisite collection of residences nestled in lush greenery, offering an unparalleled standard of living and tranquility.',
    image: '/images/projects/project_1.jpg',
  },
  {
    id: 'the-pinnacle',
    title: 'The Pinnacle',
    location: 'Sector 65, Gurugram',
    description: 'A monumental icon of commercial architecture, standing as a testament to corporate ambition and modern design.',
    image: '/images/projects/project_2.jpg',
  },
  {
    id: 'oasis-villas',
    title: 'Oasis Villas',
    location: 'Sohna Road, Gurugram',
    description: 'Discover a private sanctuary of exclusive villas, where luxury is in every detail and privacy is paramount.',
    image: '/images/projects/project_1.jpg',
  },
]

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function LuxuryProjectShowcase() {
  return (
    <div className="bg-black h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      {projects.map((project, index) => (
        <section
          key={project.id}
          className="snap-start relative h-screen w-full flex items-end overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              quality={100}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 px-6 pb-16 md:px-12 md:pb-20 lg:px-20 text-white w-full max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="space-y-4"
            >
              <motion.p
                custom={0}
                variants={contentVariants}
                className="text-lg font-medium text-amber-400"
              >
                {project.location}
              </motion.p>

              <motion.h2
                custom={1}
                variants={contentVariants}
                className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                {project.title}
              </motion.h2>

              <motion.p
                custom={2}
                variants={contentVariants}
                className="text-base md:text-lg text-gray-300 max-w-xl font-light"
              >
                {project.description}
              </motion.p>

              <motion.div custom={3} variants={contentVariants}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group inline-flex items-center gap-3 mt-6 px-6 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Property
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}
