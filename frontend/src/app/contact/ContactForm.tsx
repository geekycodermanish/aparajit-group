'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function LuxuryContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Add form submission logic
  }

  return (
    <div className="bg-emerald-50">
      {/* Luxury Hero Banner */}
      <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/pic_4.jpg"
          alt="Luxury Green Real Estate Consultation"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-900/30 to-transparent">
          <div className="container mx-auto h-full flex flex-col justify-end pb-20 px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
                <span className="font-serif italic text-emerald-200">Find Your</span><br />
                Green Sanctuary
              </h1>
              <div className="w-24 h-0.5 bg-amber-400 my-6"></div>
              <p className="text-lg text-emerald-100/90 font-light">
                Connect with our eco-luxury specialists for sustainable properties that harmonize with nature.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Contact Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Luxury Contact Info */}
            <div className="space-y-10">
              <div>
                <span className="text-sm text-amber-500 tracking-widest font-medium mb-4 block">SUSTAINABLE LIVING</span>
                <h2 className="text-3xl md:text-4xl font-light text-emerald-900 mb-6">
                  <span className="font-serif italic">Our Green</span> Commitment
                </h2>
                <div className="w-16 h-0.5 bg-amber-400 mb-8"></div>
                <p className="text-emerald-700 leading-relaxed max-w-lg">
                  At Verdura Estates, we specialize in properties that blend luxury with environmental responsibility. 
                  Our team provides expert guidance on sustainable living solutions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-emerald-900 mb-2">Eco-Headquarters</h3>
                    <p className="text-emerald-700">
                      Green Tower, DLF Cyber City<br />
                      Gurugram, Haryana 122002<br />
                      LEED Platinum Certified
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-emerald-900 mb-2">Green Concierge</h3>
                    <p className="text-emerald-700">
                      +91 95601 11997 (24/7)<br />
                      Sustainable living specialists
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-emerald-900 mb-2">Private Consultations</h3>
                    <p className="text-emerald-700">
                      eco@verduraestates.com<br />
                      Carbon-neutral communications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury Contact Form */}
            <div className="bg-white p-10 rounded-lg shadow-lg border border-emerald-100">
              <span className="text-sm text-amber-500 tracking-widest font-medium mb-2 block">ECO-CONSULTATION</span>
              <h2 className="text-3xl font-light text-emerald-900 mb-6">
                <span className="font-serif italic">Schedule</span> a Green Tour
              </h2>
              <div className="w-16 h-0.5 bg-amber-400 mb-8"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b border-emerald-200 focus:border-amber-500 bg-transparent focus:outline-none transition"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-emerald-700 mb-2">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b border-emerald-200 focus:border-amber-500 bg-transparent focus:outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-700 mb-2">Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b border-emerald-200 focus:border-amber-500 bg-transparent focus:outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Property Interest</label>
                  <select
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b border-emerald-200 focus:border-amber-500 bg-transparent focus:outline-none transition"
                  >
                    <option value="">Select eco-property type</option>
                    <option value="eco-villa">Eco-Luxury Villa</option>
                    <option value="green-penthouse">Green Penthouse</option>
                    <option value="sustainable-farm">Sustainable Farmhouse</option>
                    <option value="net-zero">Net-Zero Home</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-700 mb-2">Your Sustainability Goals</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b border-emerald-200 focus:border-amber-500 bg-transparent focus:outline-none transition"
                    placeholder="Tell us about your ideal green property features..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white py-4 px-6 transition duration-300 font-medium"
                >
                  Request Eco-Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Green Map Section */}
      <div className="py-24 bg-emerald-50 border-t border-emerald-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm text-amber-500 tracking-widest font-medium mb-4 block">VISIT OUR ECO-HUB</span>
            <h2 className="text-3xl md:text-4xl font-light text-emerald-900 mb-4">
              <span className="font-serif italic">Experience</span> Green Living
            </h2>
            <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] border border-emerald-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.225593924728!2d77.08286431507805!3d28.44917098249693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e9a8a7f8a5%3A0x9a4e3b9a3a6e3b9a!2sDLF%20Corporate%20Greens!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-emerald-900">
                <span className="font-serif italic">Verdura</span> Eco-Hub
              </h3>
              <div className="w-12 h-0.5 bg-amber-400"></div>
              <p className="text-emerald-700 leading-relaxed">
                Our sustainable showroom in Gurugram showcases green building technologies and eco-luxury living solutions. 
                Experience first-hand how premium properties can harmonize with nature.
              </p>
              <div className="pt-4">
                <button className="px-8 py-3 bg-transparent border border-amber-500 text-amber-600 hover:bg-amber-50 transition duration-300">
                  Book Eco-Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}