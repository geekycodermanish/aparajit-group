'use client'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* **Hero Section** */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-light mb-6"
          >
            <span className="font-medium">Contact</span> Aparajit Group
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-px bg-amber-500 mx-auto mb-12"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Reach out for private consultations on our luxury developments.
          </motion.p>
        </div>
      </section>


    </div>
  )
}