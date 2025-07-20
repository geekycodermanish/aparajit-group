'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BlogPage() {
  const [activePost, setActivePost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Emerging Luxury Property Hotspots in Gurugram for 2025",
      excerpt: "Gurugram's real estate landscape is evolving rapidly. Discover the most promising luxury property locations that are redefining urban living.",
      date: "June 10, 2024",
      readTime: "8 min read",
      category: "Market Trends",
      image: "/images/about/about_banner.jpg",
      author: "Elite Realty Insights",
      authorImage: "/images/about/about_banner.jpg",
      content: `## Emerging Luxury Property Hotspots in Gurugram for 2025
      [Content remains the same...]`
    },
    {
      id: 2,
      title: "Emerging Luxury Property Hotspots in Gurugram for 2025",
      excerpt: "Gurugram's real estate landscape is evolving rapidly. Discover the most promising luxury property locations that are redefining urban living.",
      date: "June 10, 2024",
      readTime: "8 min read",
      category: "Market Trends",
      image: "/images/about/about_banner.jpg",
      author: "Elite Realty Insights",
      authorImage: "/images/about/about_banner.jpg",
      content: `## Emerging Luxury Property Hotspots in Gurugram for 2025
      [Content remains the same...]`
    },
    // Other posts remain the same...
  ];

  const openPost = (id) => {
    setActivePost(id);
    window.scrollTo(0, 0);
  };

  const closePost = () => {
    setActivePost(null);
  };

  return (
    <div className="bg-[#f9f7f2] min-h-screen">
      {/* New Hero Section */}
      <div className="relative h-screen max-h-[800px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        <Image
          src="/images/about/about_banner.jpg"
          alt="Luxury Real Estate Insights"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 flex items-end z-20 pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <span className="text-gold-500 font-medium tracking-widest mb-4 block">
              ELITE REALTY INSIGHTS
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-6">
              The Art of Luxury <br />Property Investment
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Expert analysis and exclusive market intelligence for discerning investors
            </p>
            <button 
              className="px-8 py-4 bg-[#a79052] text-white font-medium hover:bg-[#8a6f2a] transition flex items-center"
              onClick={() => document.getElementById('featured-posts').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Insights
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <section id="featured-posts" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-[#e5e0d5] pb-6">
            <div>
              <span className="text-[#a79052] font-medium tracking-widest">CURATED SELECTION</span>
              <h2 className="text-3xl md:text-4xl font-serif font-light mt-2">Featured Market Reports</h2>
            </div>
            <a href="#" className="text-[#a79052] hover:underline hidden md:block">
              View All Reports →
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="group relative overflow-hidden bg-white shadow-lg transition-all duration-500 hover:shadow-xl"
              >
                <div className="relative h-80">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <span className="text-xs text-white/80 tracking-widest">{post.category}</span>
                    <h3 className="text-xl md:text-2xl font-serif font-light text-white mt-1">
                      {post.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden border border-[#a79052]">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">Senior Consultant</p>
                      </div>
                    </div>
                    <button
                      onClick={() => openPost(post.id)}
                      className="text-[#a79052] font-medium hover:underline flex items-center"
                    >
                      Read Analysis
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-20 bg-[#f0ece3] px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#a79052] font-medium tracking-widest">EXPERT PERSPECTIVES</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-2">Our Editorial Focus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Specialized insights into the most relevant topics for luxury property investors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Trends",
                description: "Emerging locations and valuation forecasts for premium properties",
                icon: "📈"
              },
              {
                title: "Investment Strategy",
                description: "Portfolio diversification and tax-efficient ownership structures",
                icon: "💼"
              },
              {
                title: "Architectural Innovation",
                description: "Cutting-edge design and smart home technologies in luxury developments",
                icon: "🏛️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 text-center group hover:bg-[#a79052] transition-colors duration-300">
                <div className="text-4xl mb-4 group-hover:text-white">{item.icon}</div>
                <h3 className="text-xl font-serif font-light mb-3 group-hover:text-white">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute inset-0 bg-[#a79052] opacity-10 -z-10"></div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#a79052] font-medium tracking-widest">CLIENT TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-2">Trusted by Discerning Investors</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Elite Realty's market intelligence helped us secure a prime London penthouse 15% below market value. Their network provides access to off-market opportunities.",
                author: "Rajesh Mehta",
                company: "Mehta Group"
              },
              {
                quote: "The wellness property advisory transformed our Dubai residence into a true sanctuary. Their attention to detail is unmatched in the industry.",
                author: "Priya Kapoor",
                company: "Kapoor Holdings"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 shadow-md">
                <div className="text-3xl text-[#a79052] mb-4">“</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="border-t border-[#e5e0d5] pt-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA - Revised */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/blog/cta-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#a79052] font-medium tracking-widest">EXCLUSIVE ACCESS</span>
          <h2 className="text-3xl md:text-4xl font-serif font-light mt-2 mb-6">
            Ready for Personalized Advisory?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our senior consultants provide bespoke advisory services to select clients. 
            Visit our contact page to schedule a private consultation.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-4 bg-[#a79052] text-white font-medium hover:bg-[#8a6f2a] transition"
          >
            Schedule Consultation
          </a>
          
        </div>
      </section>

      {/* Post Modal */}
      {activePost !== null && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-6xl w-full max-h-[90vh] flex flex-col rounded-none relative">
            <button
              onClick={closePost}
              className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700 text-3xl p-2"
            >
              &times;
            </button>
            
            {blogPosts.find(p => p.id === activePost)?.image && (
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src={blogPosts.find(p => p.id === activePost)?.image || ''}
                  alt={blogPosts.find(p => p.id === activePost)?.title || ''}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            )}
            
            <div className="p-8 md:p-12 flex-1 overflow-y-auto">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{blogPosts.find(p => p.id === activePost)?.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts.find(p => p.id === activePost)?.readTime}</span>
                  <span className="mx-2">•</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                    {blogPosts.find(p => p.id === activePost)?.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6 leading-tight">
                  {blogPosts.find(p => p.id === activePost)?.title}
                </h2>
                
                <div className="flex items-center mb-10">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#a79052]">
                    <Image
                      src={blogPosts.find(p => p.id === activePost)?.authorImage || ''}
                      alt={blogPosts.find(p => p.id === activePost)?.author || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">
                      {blogPosts.find(p => p.id === activePost)?.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      Senior Luxury Property Consultant
                    </p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  {blogPosts.find(p => p.id === activePost)?.content.split('\n').map((paragraph, i) => (
                    <div key={i} className="mb-6">
                      {paragraph.startsWith('##') ? (
                        <h3 className="text-2xl font-serif font-light text-gray-900 mt-12 mb-6">
                          {paragraph.replace('##', '')}
                        </h3>
                      ) : paragraph.startsWith('*') ? (
                        <blockquote className="italic text-gray-700 mt-8 mb-8 pl-6 border-l-4 border-[#a79052] py-2">
                          {paragraph.replace(/\*/g, '')}
                        </blockquote>
                      ) : paragraph.startsWith('-') ? (
                        <ul className="list-disc pl-6 mb-6">
                          <li className="mb-2 text-gray-700">
                            {paragraph.replace('-', '')}
                          </li>
                        </ul>
                      ) : (
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-serif font-light mb-6">About the Author</h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-[#a79052]">
                      <Image
                        src={blogPosts.find(p => p.id === activePost)?.authorImage || ''}
                        alt={blogPosts.find(p => p.id === activePost)?.author || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-medium mb-2">
                        {blogPosts.find(p => p.id === activePost)?.author}
                      </h5>
                      <p className="text-gray-600 mb-4">
                        With over 15 years in luxury real estate advisory, {blogPosts.find(p => p.id === activePost)?.author.split(' ')[0]} has facilitated over ₹2,500 crore in high-end property transactions across India's premier markets.
                      </p>
                      <button className="px-6 py-2 bg-[#a79052] text-white hover:bg-[#8a6f2a] transition">
                        Contact Consultant
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}