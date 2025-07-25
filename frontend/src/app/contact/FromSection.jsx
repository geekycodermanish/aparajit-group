'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Animation variants for a staggered reveal effect
const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const formItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}


export default function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying a Property',
    message: '',
  })
  
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    // In a real app, you'd have your fetch() logic here
    setStatus('Your inquiry has been sent successfully!')
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        
        {/* ====== LEFT COLUMN: IMAGE ====== */}
        <aside className="relative block h-48 lg:col-span-5 lg:h-full xl:col-span-6">
           <motion.div 
             className="relative h-full w-full"
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: 'easeOut' }}
             viewport={{ once: true }}
           >
            <Image
              alt="Modern building architecture"
              src="/images/pic_1.jpg" // IMPORTANT: Use a high-quality vertical or square image here
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>
        </aside>

        {/* ====== RIGHT COLUMN: FORM ====== */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="w-full max-w-xl lg:max-w-3xl">
            <motion.div
              variants={formContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-gray-900 font-sans"
                variants={formItemVariants}
              >
                Contact Our Team
              </motion.h1>

              <motion.p 
                className="mt-4 leading-relaxed text-gray-500"
                variants={formItemVariants}
              >
                Please provide your details below. A dedicated project advisor will connect with you to discuss your requirements.
              </motion.p>
              
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                
                <motion.div className="col-span-6" variants={formItemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm py-3 px-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" />
                </motion.div>

                <motion.div className="col-span-6 sm:col-span-3" variants={formItemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm py-3 px-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" />
                </motion.div>
                
                <motion.div className="col-span-6 sm:col-span-3" variants={formItemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm py-3 px-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" />
                </motion.div>

                <motion.div className="col-span-6" variants={formItemVariants}>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700">I am interested in...</label>
                  <select name="interest" id="interest" value={formData.interest} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm py-3 px-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition">
                    <option>Buying a Property</option>
                    <option>Selling a Property</option>
                    <option>Scheduling a Site Visit</option>
                    <option>Partnership Opportunities</option>
                    <option>General Inquiry</option>
                  </select>
                </motion.div>

                <motion.div className="col-span-6" variants={formItemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-3 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"></textarea>
                </motion.div>

                <motion.div className="col-span-6" variants={formItemVariants}>
                  <button type="submit" disabled={status === 'Sending...'} className="w-full inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-bold text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'Sending...' ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </motion.div>

                {status && (
                  <div className="col-span-6">
                    <p className={`text-center text-sm font-medium ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                      {status}
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </main>

      </div>
    </section>
  )
}