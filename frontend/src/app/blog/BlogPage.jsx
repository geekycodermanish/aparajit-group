'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Luxury Farmland Investments",
      excerpt: "Exploring how premium agricultural properties are becoming the new status symbol for discerning investors.",
      date: "June 15, 2025",
      category: "Investment",
      readTime: "5 min read",
      image: "/images/pic_1.jpg"
    },
    {
      id: 2,
      title: "Sustainable Practices for High-Value Farm Estates",
      excerpt: "How regenerative agriculture is increasing land value while improving ecosystem health.",
      date: "May 28, 2025",
      category: "Sustainability",
      readTime: "4 min read",
      image: "/images/pic_2.jpg"
    },
    {
      id: 3,
      title: "2025 Market Trends for Agricultural Real Estate",
      excerpt: "Key insights into what's driving demand for premium farmland in South Delhi and beyond.",
      date: "April 12, 2025",
      category: "Market Trends",
      readTime: "6 min read",
      image: "/images/pic_3.jpg"
    },
    {
      id: 4,
      title: "Designing Luxury Farmhouses That Respect the Land",
      excerpt: "Architectural principles for creating elegant estates that work with nature.",
      date: "March 30, 2025",
      category: "Design",
      readTime: "7 min read",
      image: "/images/pic_4.jpg"
    },
    {
      id: 5,
      title: "Legal Considerations When Purchasing Farmland",
      excerpt: "Essential due diligence steps for high-value agricultural property transactions.",
      date: "February 18, 2025",
      category: "Legal",
      readTime: "8 min read",
      image: "/images/pic_5.jpg"
    },
    
  ]

  const featuredPost = blogPosts[0]

  return (
    <>
      <Head>
        <title>BNW Insights | Luxury Farmland Blog</title>
        <meta name="description" content="Expert insights on luxury farmland investment, sustainable practices, and market trends" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-emerald-900 py-28 overflow-hidden">
        <Image
          src="/images/blog-hero.jpg"
          alt="Luxury Farmland Blog"
          fill
          className="object-cover opacity-70"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/50" />
        
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            <span className="font-serif italic text-emerald-200">BNW</span> Insights
          </h1>
          <div className="w-24 h-1 bg-amber-400 my-6" />
          <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl leading-relaxed">
            Expert perspectives on luxury farmland investment, sustainable practices, and market trends
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Featured Post */}
        <div className="mb-20">
          <h2 className="text-2xl font-light text-emerald-800 mb-8 flex items-center">
            <span className="font-serif italic mr-2">Featured</span> Article
            <span className="ml-4 w-12 h-px bg-emerald-300 flex-grow"></span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative h-96 lg:h-auto rounded-2xl overflow-hidden group">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="inline-block px-3 py-1 bg-amber-400 text-emerald-900 text-xs font-medium rounded-full mb-3">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium text-white">{featuredPost.title}</h3>
              </div>
            </div>
            
            <div>
              <div className="flex items-center text-emerald-600 mb-4">
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="text-lg text-emerald-700 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center text-emerald-600 font-medium group">
                Read Full Article
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-light text-emerald-800 mb-8 flex items-center">
            Latest <span className="font-serif italic mx-2">Articles</span>
            <span className="ml-4 w-12 h-px bg-emerald-300 flex-grow"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <article key={post.id} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2 py-1 bg-white text-emerald-800 text-xs font-medium rounded">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center text-sm text-emerald-600 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-medium text-emerald-900 mb-2 group-hover:text-amber-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-emerald-700 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center text-sm text-emerald-600 font-medium group"
                >
                  Read More
                  <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-emerald-800/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light text-emerald-900 mb-4">
              <span className="font-serif italic">Subscribe</span> to Our Insights
            </h3>
            <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
              Get the latest luxury farmland investment insights delivered directly to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}