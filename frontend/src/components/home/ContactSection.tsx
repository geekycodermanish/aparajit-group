'use client'
import { motion } from 'framer-motion'
import { FiAward, FiUsers,FiCheckCircle } from 'react-icons/fi'
import { submitContact } from '@/actions/submitContact';
import { useTransition } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContact(formData);
      if (result.success) {
        console.log('Success:', result.message);
      }
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-50">
      {/* Background with ultra-low opacity */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/unsp_drawing.jpeg')] bg-cover bg-center"></div>

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
                  title: "Well Experienced Technical team",
                  desc: "We have a very well experienced team in infrastructure field"
                },
                {
                  icon: <FiUsers className="text-amber-500" size={24} />,
                  title: "Expert Real estate advisor",
                  desc: "We have expert real estate advisor for purchase and planning"
                },
                {
                  icon: <FiCheckCircle className="text-amber-500" size={24} />,
                  title: "End-to-End Service",
                  desc: "Even after purchase we have team for maintanance and facilitate, Re-sale."
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
            <div className="mt-12 bg-white p-4 rounded-lg shadow-sm border border-gray-100 group">
              <div className="aspect-video relative overflow-hidden rounded-md">
                <Image 
                  src="/images/unsp_farm.jpeg" 
                  alt="Our Projects" 
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
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
              Share your vision and we&#39;ll craft the perfect solution.
            </p>

            <form className="space-y-6" action={handleSubmit}>
              <input
                name="name"
                type="text"
                className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none placeholder-gray-200 text-gray-800"
                placeholder="Enter your name"
                required
                disabled={isPending}
              />
              <input
                name="phone"
                type="tel"
                className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none placeholder-gray-200 text-gray-800"
                placeholder="Enter your phone number"
                required
                disabled={isPending}
                pattern="^(\+[0-9]{7,13})$"
                onFocus={(e) => {if(e.target.value === "") e.target.value = "+91"}}
                onChange={(e) => {if(e.target.value === "") e.target.value = "+"}}
                onBlur={(e) => {if(e.target.value === "+91" || e.target.value === "+") e.target.value = ""}}
              />
              <input
                name="email"
                type="email"
                className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none placeholder-gray-200 text-gray-800"
                placeholder="Enter your email"
                required
                disabled={isPending}
              />
              <select
                name="ctype"
                className="w-full px-4 py-3 border-b border-gray-200 focus:border-amber-500 outline-none text-gray-800"
                required
                disabled={isPending}
              >
                <option value="">Contact Type</option>
                <option value="Residential Inquiry">Residential Inquiry</option>
                <option value="Commercial Inquiry">Commercial Inquiry</option>
                <option value="Investment Opportunity">Investment Opportunity</option>
                <option value="General Question">General Question</option>
              </select>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-lg transition font-medium"
              >
                {isPending? "Sending..." : "Schedule Consultation"}
              </button>
            </form>

          </motion.div>
        </div>
      </div>
    </section>
  )
}