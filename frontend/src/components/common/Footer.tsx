import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f0f] text-white pt-24 pb-12 border-t border-[#222]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logo-white.png" 
                alt="Luxury Estates" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-serif font-light tracking-wide">LUXURY ESTATES</span>
            </div>
            <p className="text-[#999] leading-relaxed font-sans">
              Curating exceptional properties for discerning clients since 2005. 
              Our global network delivers unparalleled real estate opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#999] hover:text-[#c8a97e] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[#999] hover:text-[#c8a97e] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-[#999] hover:text-[#c8a97e] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-lg font-serif font-light tracking-wider uppercase mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/properties" className="text-[#999] hover:text-[#c8a97e] transition-colors font-sans">Luxury Properties</Link></li>
              <li><Link href="/developments" className="text-[#999] hover:text-[#c8a97e] transition-colors font-sans">New Developments</Link></li>
              <li><Link href="/consultation" className="text-[#999] hover:text-[#c8a97e] transition-colors font-sans">Private Consultation</Link></li>
              <li><Link href="/about" className="text-[#999] hover:text-[#c8a97e] transition-colors font-sans">Our Company</Link></li>
              <li><Link href="/contact" className="text-[#999] hover:text-[#c8a97e] transition-colors font-sans">Contact Advisors</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-serif font-light tracking-wider uppercase mb-6">Contact</h3>
            <address className="not-italic space-y-3 font-sans">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#c8a97e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#999]">1602, DLF Corporate Greens, Sector-74A, Gurugram 122004</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#c8a97e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919560111997" className="text-[#999] hover:text-[#c8a97e] transition-colors">+91 95601 11997</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#c8a97e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@realtimerealtors.in" className="text-[#999] hover:text-[#c8a97e] transition-colors">info@realtimerealtors.in</a>
              </div>
            </address>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-light tracking-wider uppercase mb-6">Stay Informed</h3>
            <p className="text-[#999] mb-6 font-sans leading-relaxed">
              Subscribe to receive exclusive property listings and market insights.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-transparent border border-[#333] text-white placeholder-[#555] focus:border-[#c8a97e] focus:outline-none transition"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-[#c8a97e] hover:bg-[#b89a6d] text-black font-medium py-3 px-6 transition-colors uppercase tracking-wider text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#222] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#666] text-sm font-sans">
            &copy; {new Date().getFullYear()} Luxury Estates. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-[#666] hover:text-[#c8a97e] transition-colors text-sm font-sans">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#666] hover:text-[#c8a97e] transition-colors text-sm font-sans">
              Terms of Service
            </Link>
            <Link href="/disclosures" className="text-[#666] hover:text-[#c8a97e] transition-colors text-sm font-sans">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}