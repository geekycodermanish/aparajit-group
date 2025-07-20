'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    code: '',
  });

  const captchaCode = '4071'; // Replace with dynamic if needed

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.code !== captchaCode) {
      alert('Invalid captcha code');
      return;
    }
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <main className="bg-emerald-50 text-emerald-900">
      {/* Hero Banner - Green Luxury Design */}
      <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/contact/green-estate-contact.jpg"
          alt="Contact Us"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-emerald-900/40 flex items-center justify-center">
          <div className="max-w-5xl px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8 tracking-tight">
              <span className="italic text-emerald-100">Connect</span> With Nature
            </h1>
            <div className="w-32 h-0.5 bg-amber-400 mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-emerald-50/90 font-sans leading-relaxed max-w-3xl mx-auto">
              Begin your sustainable luxury journey with a consultation from our eco-property specialists.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information - Green Premium Styling */}
          <div className="space-y-12">
            <div>
              <span className="text-amber-500 font-medium tracking-widest text-sm block mb-4">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-emerald-900 mb-6">
                Our Sustainable Headquarters
              </h2>
              <p className="text-lg text-emerald-700 font-sans mb-8 leading-relaxed">
                Our green concierge team is available to assist you with all eco-luxury property inquiries and sustainable investment opportunities.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <div className="bg-amber-400/10 p-5 rounded-full flex-shrink-0 border border-amber-400/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-light text-emerald-900 mb-3">Corporate Office</h3>
                  <p className="text-emerald-700 font-sans leading-relaxed">
                    Unit No-1602, 16th Floor, Tower-1<br />
                    DLF Corporate Greens, Sector-74A, SPR<br />
                    Gurugram, Haryana - 122004
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="bg-amber-400/10 p-5 rounded-full flex-shrink-0 border border-amber-400/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-light text-emerald-900 mb-3">Direct Line</h3>
                  <p className="text-emerald-700 font-sans">+91 95601 11997</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="bg-amber-400/10 p-5 rounded-full flex-shrink-0 border border-amber-400/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-light text-emerald-900 mb-3">Email</h3>
                  <p className="text-emerald-700 font-sans">info@verduraestates.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Green Luxury Design */}
          <div className="bg-white p-12 rounded-lg shadow-lg border border-emerald-100">
            <span className="text-amber-500 font-medium tracking-widest text-sm block mb-2">ECO-CONSULTATION</span>
            <h2 className="text-3xl font-serif font-light text-emerald-900 mb-8">Request Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-700 mb-3 font-sans tracking-wider">FULL NAME*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-b border-emerald-200 focus:border-amber-400 bg-transparent focus:outline-none transition font-sans"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-3 font-sans tracking-wider">EMAIL*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-b border-emerald-200 focus:border-amber-400 bg-transparent focus:outline-none transition font-sans"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-emerald-700 mb-3 font-sans tracking-wider">PHONE*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-b border-emerald-200 focus:border-amber-400 bg-transparent focus:outline-none transition font-sans"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-3 font-sans tracking-wider">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-b border-emerald-200 focus:border-amber-400 bg-transparent focus:outline-none transition font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-medium py-5 px-6 transition duration-300 font-sans tracking-widest uppercase text-sm mt-6"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section - Green Premium Styling */}
      <div className="py-24 bg-emerald-100/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-medium tracking-widest text-sm block mb-4">OUR LOCATION</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-emerald-900 mb-6">Sustainable Headquarters</h2>
            <div className="w-24 h-0.5 bg-amber-400 mx-auto"></div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-emerald-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.225593924728!2d77.08286431507805!3d28.44917098249693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e9a8a7f8a5%3A0x9a4e3b9a3a6e3b9a!2sDLF%20Corporate%20Greens!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}