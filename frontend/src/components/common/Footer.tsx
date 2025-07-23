import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-24 pb-16 border-t border-gray-800">
      <div className="max-w-8xl mx-auto px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          {/* Logo Column */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-start">
              <div className="relative">
                <span className="text-3xl font-serif font-medium tracking-wider text-white">APARAJIT</span>
                <div className="absolute -bottom-1 left-0 h-0.5 w-16 bg-amber-500"></div>
              </div>
              <span className="text-xs tracking-[0.3em] text-amber-500 mt-6">ESTATE GROUP</span>
              <p className="text-gray-400 leading-relaxed text-sm mt-8 max-w-md">
                Redefining luxury living through exceptional craftsmanship and unparalleled service since 1995.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.3em] uppercase mb-8 text-white">EXPLORE</h3>
            <ul className="space-y-4">
              <li><Link href="/properties" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">Global Properties</Link></li>
              <li><Link href="/developments" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">New Developments</Link></li>
              <li><Link href="/architecture" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">Signature Architecture</Link></li>
              <li><Link href="/interiors" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">Interior Design</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.3em] uppercase mb-8 text-white">SERVICES</h3>
            <ul className="space-y-4">
              <li><Link href="/concierge" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">Lifestyle Concierge</Link></li>
              <li><Link href="/investment" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">Investment Advisory</Link></li>
              <li><Link href="/management" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">Property Management</Link></li>
              <li><Link href="/relocation" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">Global Relocation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.3em] uppercase mb-8 text-white">CONNECT</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm font-light">18F, One Horizon Center<br/>Gurugram 122002</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919560111997" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">+91 95601 11997</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:concierge@aparajit.com" className="text-gray-400 hover:text-amber-500 transition-colors text-sm font-light">concierge@aparajit.com</a>
              </div>
            </address>
          </div>
        </div>

        {/* Middle Section - Newsletter */}
        <div className="border-t border-gray-800 pt-12 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h3 className="text-sm font-medium tracking-[0.3em] uppercase mb-4 text-white">PRIVATE COLLECTION</h3>
              <p className="text-gray-400 text-sm font-light max-w-md">
                Gain exclusive access to our curated portfolio of ultra-premium properties worldwide.
              </p>
            </div>
            <form className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition text-sm"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium tracking-wider transition-colors text-xs uppercase whitespace-nowrap"
              >
                Request Privileged Access
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-xs tracking-wider mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} APARAJIT GROUP. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <div className="hidden md:block h-4 w-px bg-gray-700"></div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-amber-500 transition-colors text-xs tracking-wider">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-amber-500 transition-colors text-xs tracking-wider">
                Terms
              </Link>
              <Link href="/disclosures" className="text-gray-500 hover:text-amber-500 transition-colors text-xs tracking-wider">
                Disclosures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}