'use client'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiCheckCircle, FiMapPin } from 'react-icons/fi'

export default function ContactSection() {
  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background with ultra-low opacity */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light mb-6 text-gray-800">
              Why <span className="font-medium">Connect With Us?</span>
            </h2>
            <div className="w-16 h-px bg-amber-500 mb-8" />

            {/* Value Points */}
            <div className="space-y-8">
              {[
                {
                  icon: <FiAward className="text-amber-500" size={24} />,
                  title: "Industry Leaders Since 2005",
                  desc: "Recognized for excellence in luxury real estate development"
                },
                {
                  icon: <FiUsers className="text-amber-500" size={24} />,
                  title: "5000+ Satisfied Clients",
                  desc: "Join our community of discerning property owners"
                },
                {
                  icon: <FiCheckCircle className="text-amber-500" size={24} />,
                  title: "End-to-End Service",
                  desc: "From consultation to handover, we handle everything"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1">
                    <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="mt-12 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Projects" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-amber-500 text-white rounded-md flex items-center justify-center gap-2">
                <FiMapPin size={18} />
                Explore Our Projects
              </button>
            </div>
          </motion.div>

          {/* Right Side - Minimal Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-serif font-light mb-6 text-gray-800">
              Ready to <span className="font-medium">Begin?</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Share your vision and we'll craft the perfect solution.
            </p>

            <form className="space-y-6">
              <input
                type="text"
                className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none"
                placeholder="Name*"
              />
              <input
                type="tel"
                className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none"
                placeholder="Phone Number*"
              />
              <input
                type="email"
                className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none"
                placeholder="Email*"
              />
              <select className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none">
                <option>Contact Type</option>
                <option>Residential Inquiry</option>
                <option>Commercial Inquiry</option>
                <option>Investment Opportunity</option>
                <option>General Question</option>
              </select>
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-lg transition font-medium"
              >
                Schedule Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}