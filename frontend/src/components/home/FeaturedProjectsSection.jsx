'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// New farmhouse project data
const projects = [
  {
    id: 1, 
    name: 'The Aananda Frame',
    video: '/images/upcodeing_project.mp4', // Replace with your actual video path
    description:
      'Nestled against the majestic Aravalli Hills, The Aananda Frame is a sanctuary of rustic luxury. Each estate features a private fruit orchard, sustainable architecture, and modern amenities, offering a bespoke living experience where nature and sophistication coexist.',
  },
  // {
  //   id: 2,
  //   name: 'Veridian Farms',
  //   video: '/videos/farmhouse2.mp4', // Replace with your actual video path
  //   description:
  //     "Escape the city's hustle to Veridian Farms, a community dedicated to a farm-to-table lifestyle. Wander through sprawling green meadows, enjoy organic produce from your own backyard, and live in homes that blend rustic charm with contemporary comfort.",
  // },
  // {
  //   id: 3,
  //   name: 'Serenity Acres',
  //   video: '/videos/farmhouse3.mp4', // Replace with your actual video path
  //   description:
  //     'Discover your personal haven at Serenity Acres. Designed for tranquility and holistic wellness, these farmhouses offer private yoga decks, infinity pools, and uninterrupted views of the natural landscape. It is more than a home; it is a retreat for the soul.',
  // },
];

export default function HeroOverlaySection() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for the floating card
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.6, ease: 'easeIn' } },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Left Text - UPDATED */}
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
          ( Redefining Countryside Living )
        </motion.p>
      </div>

      {/* Vertical Text - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-2 bottom-10 text-white text-[10px] tracking-wider rotate-[-90deg] origin-bottom-left z-10"
      >
        Explore Our Vision
      </motion.div>

      {/* Floating Card on Right */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-1/2 right-10 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-8 w-[90%] max-w-md"
        >
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
            {currentProject.name}
          </h2>

          {/* Video inside card */}
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

          {/* Description */}
          <p className="text-sm text-center text-gray-800 mb-6">
            {currentProject.description}
          </p>
          
          {/* Navigation Buttons are still here if you want to re-enable them */}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}