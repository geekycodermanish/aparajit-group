'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FarmVisionSection() {
  const [activeTab, setActiveTab] = useState('philosophy')

  return (
    <section className="relative py-20 bg-emerald-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-emerald-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-emerald-900 mb-4">
            <span className="font-serif italic text-emerald-700">Cultivating</span> Excellence
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6" />
          <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
            Our vision for premium farmland that harmonizes agricultural productivity with uncompromising luxury
          </p>
        </div>

        {/* Tabbed content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={activeTab === 'philosophy' ? "/images/pic_5.jpg" : 
                   activeTab === 'standards' ? "/images/pic_6.jpg" : 
                   "/images/pic_3.jpg"}
              alt="Luxury farmland vision"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <div className="flex border-b border-emerald-200 mb-8">
              {[
                { id: 'philosophy', label: 'Our Philosophy' },
                { id: 'standards', label: 'Quality Standards' },
                { id: 'future', label: 'Future Vision' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-medium text-sm tracking-wider ${activeTab === tab.id ? 'text-amber-600 border-b-2 border-amber-400' : 'text-emerald-700 hover:text-emerald-900'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {activeTab === 'philosophy' && (
                <>
                  <h3 className="text-2xl font-light text-emerald-900">
                    Where Agriculture Meets <span className="font-serif italic">Elegance</span>
                  </h3>
                  <p className="text-emerald-700 leading-relaxed">
                    We believe productive farmland should embody the same sophistication as luxury estates. 
                    Our properties combine premium soil quality with exquisite infrastructure, creating 
                    agricultural assets that are as beautiful as they are profitable.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Landscapes designed for both yield and aesthetics",
                      "Architectural farmsteads with premium amenities",
                      "Sustainable practices that enhance land value"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-emerald-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'standards' && (
                <>
                  <h3 className="text-2xl font-light text-emerald-900">
                    Uncompromising <span className="font-serif italic">Standards</span>
                  </h3>
                  <p className="text-emerald-700 leading-relaxed">
                    Every property in our portfolio meets rigorous criteria that redefine agricultural excellence:
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {[
                      { title: "Soil Quality", value: "Premium Grade A" },
                      { title: "Water Access", value: "Guaranteed" },
                      { title: "Infrastructure", value: "Luxury Grade" },
                      { title: "Certifications", value: "Organic Ready" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                        <p className="text-sm text-emerald-600">{item.title}</p>
                        <p className="text-lg font-medium text-amber-600">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'future' && (
                <>
                  <h3 className="text-2xl font-light text-emerald-900">
                    Pioneering <span className="font-serif italic">Tomorrow's</span> Farmland
                  </h3>
                  <p className="text-emerald-700 leading-relaxed">
                    We're innovating the future of luxury agriculture through:
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      { title: "Smart Farming Integration", icon: "🌱" },
                      { title: "Carbon Positive Practices", icon: "♻️" },
                      { title: "Agri-Tourism Developments", icon: "🏞️" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-2xl mr-3 text-amber-500">{item.icon}</span>
                        <div>
                          <h4 className="font-medium text-emerald-900">{item.title}</h4>
                          <p className="text-sm text-emerald-600 mt-1">
                            {item.title.includes("Smart") && "IoT-enabled precision agriculture systems"}
                            {item.title.includes("Carbon") && "Regenerative techniques that sequester CO2"}
                            {item.title.includes("Agri") && "Luxury farm stays and educational experiences"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2000+", label: "Acres Under Stewardship" },
            { value: "100%", label: "Organic Potential" },
            { value: "24", label: "Premium Properties" },
            { value: "5★", label: "Client Satisfaction" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-light text-amber-600 mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-wider text-emerald-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}