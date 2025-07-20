'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section - Enhanced */}
      <section className="relative h-screen min-h-[600px] w-full">
        <Image
          src="/images/about/about_banner.jpg"
          alt="Holland Real Estate"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6">
              Holland Real Estate
            </h1>
            <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 font-sans leading-relaxed mb-8">
              A premier full-service real estate agency <br className="hidden md:block" />
              established in 2005 with a legacy of excellence
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="relative z-10 -mt-20 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row bg-white shadow-sm border border-gray-100">
          {/* Left Text Area */}
          <div className="flex-1 p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
              About Us
            </h2>
            <div className="w-16 h-0.5 bg-amber-400 mb-8"></div>

            <h3 className="text-xl md:text-2xl font-serif font-light text-gray-900 mb-6">
              Welcome to our community of discerning clients
            </h3>
            <p className="text-gray-600 font-sans leading-relaxed mb-8">
              For nearly two decades, Holland Real Estate has been transforming the real estate landscape with our 
              unwavering commitment to excellence. Our boutique approach combines global expertise with local 
              knowledge, delivering exceptional results for our valued clients.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed mb-10">
              We believe in building lasting relationships through transparency, integrity, and personalized 
              service that exceeds expectations at every turn.
            </p>

            <a 
              href="#" 
              className="inline-block border-b border-amber-500 text-amber-600 font-medium font-sans text-sm pb-1 hover:text-amber-700 transition-colors"
            >
              Discover Our Story
            </a>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[45%] h-[500px] lg:h-auto">
            <Image
              src="/images/about/sky-sunset.jpg"
              alt="Holland Real Estate Properties"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-widest text-sm">OUR PHILOSOPHY</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">
              The Holland Difference
            </h2>
            <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Client-Centric Approach",
                description: "Every decision we make prioritizes your best interests, with tailored strategies for each unique situation.",
                icon: "🤝"
              },
              {
                title: "Market Mastery",
                description: "Leveraging deep market intelligence to secure properties at optimal value points.",
                icon: "📊"
              },
              {
                title: "Discretion Assured",
                description: "Complete confidentiality for high-profile clients and sensitive transactions.",
                icon: "🔒"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-light mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-12 lg:px-24 bg-[#f9f7f2]">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-20">
      <span className="text-[#a79052] font-medium tracking-widest text-sm">OUR ESSENCE</span>
      <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">
        Redefining Luxury Real Estate
      </h2>
      <div className="w-24 h-px bg-[#a79052] mx-auto"></div>
    </div>

    {/* Content Blocks */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Column - Image with Decorative Frame */}
      <div className="relative">
        <div className="absolute -inset-8 border-2 border-[#a79052]/30 transform rotate-1"></div>
        <Image
          src="/images/about/team-boardroom.jpg"
          alt="Holland Real Estate team"
          width={800}
          height={600}
          className="relative z-10 object-cover w-full h-auto"
        />
      </div>

      {/* Right Column - Content */}
      <div>
        <h3 className="text-2xl font-serif font-light text-gray-900 mb-8 leading-relaxed">
          A boutique firm with global reach, specializing in discreet, high-value transactions for discerning clients.
        </h3>
        
        <div className="space-y-6">
          <p className="text-gray-600 font-sans leading-relaxed">
            Founded in 2005, Holland Real Estate has cultivated an unparalleled reputation through white-glove service 
            and exclusive access to off-market opportunities. Our team combines generations of local expertise with 
            cutting-edge market analytics.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              {
                value: "250+",
                label: "Luxury Transactions"
              },
              {
                value: "98%",
                label: "Client Retention"
              },
              {
                value: "€4.2B",
                label: "Portfolio Volume"
              },
              {
                value: "12",
                label: "Countries Served"
              }
            ].map((stat, index) => (
              <div key={index} className="border-l-2 border-[#a79052] pl-4">
                <p className="text-2xl font-serif font-light text-[#a79052]">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a 
              href="/about" 
              className="inline-flex items-center border-b border-[#a79052] text-[#a79052] pb-1 group transition-all"
            >
              Our Heritage Story
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-amber-600 font-medium tracking-widest text-sm">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">
              Building a Legacy
            </h2>
            <div className="w-16 h-0.5 bg-amber-400"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-amber-400 transform -translate-x-1/2"></div>

            {[
              {
                year: "2005",
                title: "Foundation",
                description: "Established in Amsterdam with three founding partners and a vision for boutique service."
              },
              {
                year: "2012",
                title: "European Expansion",
                description: "Opened offices in Paris and London, serving international clientele."
              },
              {
                year: "2018",
                title: "Luxury Division",
                description: "Launched our exclusive luxury property division for high-net-worth individuals."
              },
              {
                year: "2023",
                title: "Digital Innovation",
                description: "Pioneered virtual reality property tours and blockchain transactions."
              }
            ].map((milestone, index) => (
              <div 
                key={index} 
                className={`relative mb-12 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
              >
                <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0 md:left-auto md:right-0' : 'left-0'}`}>
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-400">
                    <span className="text-xs font-bold text-white">{milestone.year}</span>
                  </div>
                </div>
                <div className={`bg-gray-50 p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <h3 className="text-xl font-serif font-light mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-widest text-sm">MEET THE TEAM</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">
              Our Expert Advisors
            </h2>
            <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie van Dijk",
                role: "Founding Partner",
                image: "/images/about/about_banner.jpg"
              },
              {
                name: "Thomas Janssen",
                role: "Luxury Division Director",
                image: "/images/about/about_banner.jpg"
              },
              {
                name: "Elena Moretti",
                role: "International Relations",
                image: "/images/about/about_banner.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <div className="relative h-80 w-full mb-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={100}
                  />
                </div>
                <h3 className="text-xl font-serif font-light">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/team" 
              className="inline-block px-8 py-3 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
            >
              View Full Team
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-widest text-sm">CLIENT VOICES</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">
              Trusted by Discerning Clients
            </h2>
            <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Holland Real Estate secured our dream Amsterdam canal house with remarkable discretion and market knowledge that saved us €400,000.",
                author: "The Van Berg Family",
                location: "Amsterdam"
              },
              {
                quote: "Their international network found us a rare Parisian pied-à-terre we'd been searching for years to find. Exceptional service.",
                author: "Claire Dubois",
                location: "Paris/London"
              }
            ].map((testimonial, index) => (
              <div key={index} className="border border-gray-200 p-8">
                <div className="text-amber-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    {/* Luxury CTA Section */}
    <section className="relative py-40 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-[#0a0f0f]">
        <div className="absolute inset-0 bg-[url('/images/luxury-texture.png')] opacity-10 mix-blend-overlay"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#c8a97e]"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#c8a97e]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#c8a97e] font-medium tracking-widest text-sm block mb-6">
            EXCLUSIVE OPPORTUNITIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
            Your Vision, Our <br className="hidden md:block" />Expertise
          </h2>
          <div className="w-24 h-px bg-[#c8a97e] mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Begin a confidential conversation with our senior advisors about your 
            real estate aspirations. Discretion and personalized service guaranteed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="/contact" 
            className="group relative px-10 py-4 bg-transparent border border-[#c8a97e] text-white overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Schedule Consultation
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute inset-0 bg-[#c8a97e] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 mix-blend-overlay"></span>
          </a>

          <a 
            href="/properties" 
            className="group relative px-10 py-4 bg-[#c8a97e] text-[#0a0f0f] overflow-hidden transition-all duration-500 font-medium"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Portfolio
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-30"></span>
          </a>
        </div>

      </div>
    </section>
    </main>
  );
}