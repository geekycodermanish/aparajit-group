'use client'

import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Blog1, Blog2, Blog3, Blog4, Blog5 } from './AllBlogs';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Construction Technology Trends & Market Outlook 2024",
      excerpt: "Exploring cutting-edge building methods that are revolutionizing the construction industry.",
      content: <Blog1 />,
      date: "June 15, 2025",
      category: "Technology",
      readTime: "5 min read",
      image: "/images/pic_1.jpg"
    },
    {
      id: 2,
      title: "16 Sustainable & Cost-Effective Building Materials",
      excerpt: "How eco-friendly materials are changing the way we build for a greener future.",
      content: <Blog2 />,
      date: "May 28, 2025",
      category: "Sustainability",
      readTime: "4 min read",
      image: "/images/pic_1.jpg"
    },
    {
      id: 3,
      title: "Construction Industry Trends & Innovation in 2025",
      excerpt: "Key insights into what's driving demand and innovation in the building sector.",
      content: <Blog3 />,
      date: "April 12, 2025",
      category: "Trends",
      readTime: "6 min read",
      image: "/images/pic_1.jpg"
    },
    {
      id: 4,
      title: "How to Ensure a Long Lifespan for Your Building",
      excerpt: "Engineering principles for creating buildings that stand the test of time.",
      content: <Blog4 />,
      date: "March 30, 2025",
      category: "Engineering",
      readTime: "7 min read",
      image: "/images/pic_1.jpg"
    },
    {
      id: 5,
      title: "Top Safety Innovations in Construction for 2025",
      excerpt: "The latest technologies keeping construction workers safe on the job.",
      content: <Blog5 />,
      date: "February 18, 2025",
      category: "Safety",
      readTime: "8 min read",
      image: "/images/pic_1.jpg"
    },
  ]

  const featuredPost = blogPosts[0]
  const [activePost, setActivePost] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (post) => {
    setActivePost(post)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setActivePost(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>BuildMaster Blog | Construction Insights</title>
        <meta name="description" content="Expert insights on construction techniques, materials, and industry trends" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gray-900 py-28 overflow-hidden">
        <Image
          src="/images/pic_1.jpg"
          alt="Construction Blog"
          fill
          className="object-cover opacity-70"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-orange-400">Build</span>Master Insights
          </h1>
          <div className="w-24 h-1 bg-orange-500 my-6" />
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed">
            Professional perspectives on construction technology, materials, and industry developments
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Featured Post */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="text-orange-500 mr-2">Featured</span> Article
            <span className="ml-4 w-12 h-px bg-gray-300 flex-grow"></span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative h-96 lg:h-auto rounded-lg overflow-hidden group border-4 border-white shadow-xl">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-sm mb-3">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{featuredPost.title}</h3>
              </div>
            </div>

            <div>
              <div className="flex items-center text-gray-600 mb-4">
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <button onClick={() => openModal(featuredPost)} className="inline-flex items-center text-orange-500 font-bold group cursor-pointer">
                Read Full Article
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            Latest <span className="text-orange-500 mx-2">Articles</span>
            <span className="ml-4 w-12 h-px bg-gray-300 flex-grow"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <article key={post.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 rounded-t-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button
                    onClick={() => openModal(post)}
                    className="inline-flex items-center text-sm text-orange-500 font-bold group cursor-pointer"
                  >
                    Read More
                    <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>


      </div>

      {/* Modal */}
      {isModalOpen && activePost && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{activePost.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {activePost.date} • {activePost.readTime} • <span className="text-orange-500">{activePost.category}</span>
            </p>
            <Image
              src={activePost.image}
              alt={activePost.title}
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
            {/* <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {activePost.content}
            </p> */}
            <div className="leading-relaxed">
              {activePost.content}
            </div>

          </div>
        </div>
      )}
    </>
  )
}
