// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Properties', path: '/Properties' },
//     { name: 'About', path: '/about' },
//     { name: 'Blog', path: '/blog' },
//     { name: 'Contact', path: '/contact' }
//   ]

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white py-2 shadow-md' : 'bg-transparent py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
//             Brand
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 className={`transition-colors duration-300 font-medium text-sm uppercase tracking-wider ${
//                   scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-white/80'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden p-2 focus:outline-none"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg
//               className={`w-6 h-6 transition-colors duration-300 ${
//                 scrolled ? 'text-gray-800' : 'text-white'
//               }`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   mobileMenuOpen
//                     ? 'M6 18L18 6M6 6l12 12'
//                     : 'M4 6h16M4 12h16M4 18h16'
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden transition-all duration-300 overflow-hidden ${
//             mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
//           }`}
//         >
//           <div className="flex flex-col space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`transition-colors duration-300 font-medium text-sm uppercase tracking-wider ${
//                   scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-white/80'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// --------------------------------------------------------------# another version

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full transition-all duration-300 px-6 py-3
        ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo - Updated with your requested design */}
        <Link href="/" className="flex flex-col group">
          <div className={`flex items-end gap-1 transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            <span className="text-lg font-medium tracking-wider">APARAJIT GROUP</span>
            <div className={`h-px w-8 mb-1 ${scrolled ? 'bg-gray-400' : 'bg-emerald-200'} transition-colors duration-300`}></div>
          </div>
          <div className={`text-xs tracking-widest transition-colors duration-300 ${scrolled ? 'text-emerald-600' : 'text-amber-300'} group-hover:text-amber-400`}>
            - anandam farms -
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.path}
                className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-emerald-100 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full`}></div>
            </div>
          ))}
        </nav>

        {/* Right: Call & Button */}
        <div className="hidden md:flex items-center gap-6">
          <button className={`relative overflow-hidden group px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${
            scrolled 
              ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600' 
              : 'bg-amber-400 text-gray-900 hover:bg-amber-300'
          } shadow-md hover:shadow-lg`}>
            <span className="relative z-10">Schedule Tour</span>
            <span className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolled ? 'hidden' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className={`w-6 h-6 transition-colors duration-300 ${
              scrolled ? 'text-gray-800 group-hover:text-emerald-600' : 'text-emerald-100 group-hover:text-amber-300'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        } ${
          scrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-emerald-800/95 backdrop-blur-sm'
        } rounded-2xl mt-2`}
      >
        <div className="flex flex-col space-y-5 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm uppercase font-medium tracking-wider transition-colors py-2 px-4 rounded-lg ${
                scrolled 
                  ? 'text-gray-800 hover:bg-emerald-100 hover:text-emerald-700' 
                  : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className={`mt-4 py-3 px-6 rounded-full text-sm font-medium tracking-wider bg-gradient-to-r ${
            scrolled 
              ? 'from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600' 
              : 'from-amber-400 to-amber-300 text-gray-900 hover:from-amber-300 hover:to-amber-200'
          } transition-all shadow-md hover:shadow-lg`}>
            Schedule Tour
          </button>
        </div>
      </div>
    </header>
  )
}