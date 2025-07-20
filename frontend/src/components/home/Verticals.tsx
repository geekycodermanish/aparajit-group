'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const verticals = [
  {
    title: 'BNW DEVELOPMENTS',
    subtitle: 'Innovative Real Estate Solutions',
    image: '/images/about/about_banner.jpg',
  },
  {
    title: 'BNW WEALTH MANAGEMENT',
    subtitle: 'Strategic Financial Growth',
    image: '/images/about/about_banner.jpg',
  },
  {
    title: 'BNW VACATION HOMES',
    subtitle: 'Luxury Retreats Worldwide',
    image: '/images/about/about_banner.jpg',
  },
  {
    title: 'BNW ENTERTAINMENT',
    subtitle: 'Premium Experiences',
    image: '/images/about/about_banner.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Verticals() {
  return (
    <section className="bg-[#0a0f0f] text-white py-28 px-4 sm:px-8 lg:px-16 xl:px-24">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 font-serif tracking-tight">
          Our Verticals
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-sans">
          At BNW, we leverage our diverse expertise to deliver innovative solutions across multiple sectors, 
          each designed to elevate your lifestyle and financial potential.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {verticals.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative h-[500px] overflow-hidden rounded-none"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 space-y-3 transition-all duration-500 group-hover:pb-10">
              <h3 className="text-white font-normal text-2xl tracking-wide uppercase font-serif">
                {item.title}
              </h3>
              <p className="text-gray-300 text-base font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-sans">
                {item.subtitle}
              </p>
              <div className="w-full h-px bg-white/30 mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-700" />
            </div>
            
            <div className="absolute top-6 right-6 z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-500">
                <span className="text-lg font-light font-serif">0{idx + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}