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

      {/* **Contact Grid** */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* **Contact Info (Left Side)** */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-serif font-light mb-6">
                <span className="font-medium">Our</span> Offices
              </h2>
              <div className="w-16 h-px bg-amber-500 mb-8" />
            </div>

            {/* **Contact Cards** */}
            <div className="space-y-8">
              {[
                {
                  icon: <FiMapPin className="text-amber-500" size={20} />,
                  title: "Corporate Headquarters",
                  details: "Aparajit Tower, Sector 54\nGurugram, Haryana 122011"
                },
                {
                  icon: <FiPhone className="text-amber-500" size={20} />,
                  title: "Direct Concierge",
                  details: "+91 95601 11997\nAvailable 24/7"
                },
                {
                  icon: <FiMail className="text-amber-500" size={20} />,
                  title: "Email",
                  details: "contact@aparajitgroup.com\nResponse within 24h"
                },
                {
                  icon: <FiClock className="text-amber-500" size={20} />,
                  title: "Visiting Hours",
                  details: "Mon-Fri: 9AM–7PM\nSat: 10AM–4PM"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* **Contact Form (Right Side)** */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 border border-gray-100 shadow-sm rounded-lg"
          >
            <h2 className="text-2xl font-serif font-light mb-6">
              <span className="font-medium">Enquire</span> Now
            </h2>
            <div className="w-16 h-px bg-amber-500 mb-8" />

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none transition"
                    placeholder="+91 "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                <select className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none transition">
                  <option>Select property type</option>
                  <option>Luxury Residences</option>
                  <option>Commercial</option>
                  <option>Land Acquisition</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none transition"
                  placeholder="Your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 transition duration-300 font-medium"
              >
                Request Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* **Google Map Placeholder** */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Maps Integration</p>
          </div>
        </div>
      </section>
    </div>
  )
}