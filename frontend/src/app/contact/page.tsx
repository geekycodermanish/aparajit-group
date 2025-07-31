'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const [fadeOut, setFadeOut] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 100) // Start fade
    const redirectTimer = setTimeout(() => {
      router.replace('/#contact')
    }, 550)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(redirectTimer)
    }
  }, [router])

  return (
    <div
      className={`flex items-center justify-center min-h-screen text-lg text-gray-700 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      Redirecting to contact section...
    </div>
  )
}
