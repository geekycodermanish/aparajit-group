import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import Image from 'next/image'

const directors = [
  {
    name: 'Anand Singh',
    role: 'Director',
    image: '/images/team/Anand.jpg',
    bio: 'Visionary leader with a passion for real estate and infrastructure development.',
  },
    {
    name: 'Deepak prashant',
    role: 'Director',
    image: '/images/team/Deepak.jpg',
    bio: 'Visionary leader with a passion for real estate and infrastructure development.',
  },
    {
    name: 'Rajesh Kumar',
    role: 'Techniacl Director',
    image: '/images/team/Rajesh.jpg',
    bio: 'Visionary leader with a passion for real estate and infrastructure development.',
  },
    {
    name: 'Naresh Kumar',
    role: 'Techniacl Director',
    image: '/images/team/Naresh.jpg',
    bio: 'Visionary leader with a passion for real estate and infrastructure development.',
  },
  // Add more directors as needed
]

const engineers = [
  {
    name: 'Jatin Yadav',
    role: 'project manager',
    image: '/images/team/Jatin.jpg',
    bio: 'Ensures seamless execution of projects and client satisfaction.',
  },
  {
    name: 'Amar singh naruka',
    role: 'Highway engineer',
    image: '/images/team/Amar.jpg',
    bio: 'Designs innovative spaces blending functionality and aesthetics.',
  },
  // Add more engineers as needed
]

const techTeam = [
  {
    name: 'Ankur',
    role: 'Tech Lead',
    image: '/images/team/Ankur.jpg',
    bio: 'Leads the technology initiatives and digital transformation.',
  },
  {
    name: 'Manish Prashad',
    role: 'Software Engineer',
    image: '/images/team/Manish.jpg',
    bio: 'Develops and maintains our digital platforms.',
  },
    {
    name: 'Rahul Anand',
    role: 'Software Engineer',
    image: '/images/team/Manish.jpg',
    bio: 'Develops and maintains our digital platforms.',
  },
  // Add more tech team members as needed
]

function HorizontalTeamSlider({ members }: { members: any[] }) {
  // Slide only if there are 3 or more members
  const shouldSlide = members.length >= 3

  // Card width + margin (px)
  const CARD_WIDTH = 500 + 48; // 500px card + 48px margin (mx-6 = 24px each side)
  const VIEWPORT_WIDTH = typeof window !== "undefined" ? window.innerWidth : 1200;
  const totalWidth = members.length * CARD_WIDTH;
  // Calculate max scroll so last card is centered
  const maxScroll =
    totalWidth > VIEWPORT_WIDTH
      ? -(totalWidth - VIEWPORT_WIDTH / 2 - CARD_WIDTH / 2)
      : 0;

  if (!shouldSlide) {
    return (
      <div className="flex justify-center gap-8 mb-16">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="min-w-[500px] max-w-[520px] bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:shadow-amber-200 transition-shadow duration-300"
          >
            <div className="w-full h-72 mb-6 rounded-2xl overflow-hidden border-4 border-gray-200">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={288}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-amber-500 font-semibold mb-3">{member.role}</p>
            <p className="text-gray-600 text-lg">{member.bio}</p>
          </div>
        ))}
      </div>
    )
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0px', `${maxScroll}px`]
  )

  return (
    <div ref={containerRef} className="relative h-[120vh] mb-16">
      <div className="sticky top-24 h-[60vh] overflow-hidden">
        <motion.div
          style={{ x }}
          className="absolute top-0 left-0 h-full flex items-center"
        >
          {members.map((member, idx) => (
            <div
              key={idx}
              className="min-w-[500px] max-w-[520px] bg-white rounded-3xl shadow-2xl p-10 mx-6 flex flex-col items-center text-center hover:shadow-amber-200 transition-shadow duration-300"
            >
              <div className="w-full h-72 mb-6 rounded-2xl overflow-hidden border-4 border-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={288}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-amber-500 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-lg">{member.bio}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
export default function TeamSection() {
  // directors, engineers, techTeam arrays remain the same

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-8 py-4 border border-gray-300 rounded-full text-gray-800 font-serif text-2xl md:text-3xl tracking-widest uppercase">
            — Our Team —
          </span>
          <div className="mt-4 text-gray-500 text-lg">Meet the people behind Aparajit Group</div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Directors</h2>
        <HorizontalTeamSlider members={directors} />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Civil Engineers</h2>
        <HorizontalTeamSlider members={engineers} />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Tech Team</h2>
        <HorizontalTeamSlider members={techTeam} />
      </div>
    </section>
  )
}