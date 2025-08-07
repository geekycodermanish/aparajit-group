'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// New farmhouse project data
const projects = [
  {
    id: 1,
    name: 'The Anandam Farm (Naugaon,Rajasthan)',
    video: '/images/upcodeing_project.mp4',
    description:
      'Nestled in the majestic Aravalli Hills, The Anandam Farm is a sanctuary of rustic luxury. Each estate features a  swimming pool, sustainable architecture and modern amenities, including solar-powered street lights, a clubhouse ,wellness, Resort, gated entry and a bespoke living experience where nature and sophistication co-exist.'
  }
];

export default function HeroOverlaySection() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.6, ease: 'easeIn' } },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <video
            key={currentProject.video}
            src={currentProject.video}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="absolute left-10 bottom-1/3 z-10 text-white max-w-md">
          <motion.h1
            key={currentProject.id}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Our Upcoming <br /> Farmhouse Sanctuaries
          </motion.h1>
          <motion.p
            key={currentProject.id + '-p'}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, ...textVariants.visible.transition }}
            className="text-xs mt-6 opacity-80"
          >
            (Naugaon)
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-2 bottom-10 text-white text-[10px] tracking-wider rotate-[-90deg] origin-bottom-left z-10"
        >
          Explore Our Vision
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-1/2 right-10 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-8 w-[90%] max-w-md"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
              {currentProject.name}
            </h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
              <video
                key={currentProject.video}
                src={currentProject.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <p className="text-sm text-center text-gray-800 mb-6">
              {currentProject.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden relative z-10 flex flex-col items-center justify-center text-white px-6 pt-28 text-center">
        <motion.h1
          key={currentProject.id + '-mobile'}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl font-extrabold leading-snug"
        >
          Communities built <br /> for connection
        </motion.h1>
        <motion.p
          key={currentProject.id + '-sub-mobile'}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, ...textVariants.visible.transition }}
          className="text-xs mt-4 opacity-80"
        >
          (Naugaon)
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id + '-mobile-card'}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mt-10 bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-6 w-full max-w-sm"
          >
            <h2 className="text-lg font-semibold text-center mb-4">
              {currentProject.name}
            </h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
              <video
                key={currentProject.video}
                src={currentProject.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <p className="text-sm text-center text-gray-800">
              {currentProject.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}