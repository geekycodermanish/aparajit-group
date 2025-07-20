'use client'

export default function DeveloperHighlight() {
  return (
    <section className="bg-white py-20 text-center px-4">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-black">
          The Premier Real Estate Developer in <span className="font-serif">UAE</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          From awe-inspiring skyscrapers to elegant Seaview penthouses, our developments embody an elevated lifestyle
          marked by elegance and exclusivity. We offer innovative and leading-edge solutions, specializing in exclusive
          luxury residences for the property development and investment sector.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center max-w-4xl mx-auto border-y border-gray-200 py-10">
        <div className="flex-1 px-4 py-4">
          <p className="text-4xl font-semibold text-black">02</p>
          <p className="text-sm mt-1 text-gray-600">Communities in UAE</p>
        </div>
        <div className="h-px sm:h-16 sm:w-px bg-gray-300 hidden sm:block" />
        <div className="flex-1 px-4 py-4">
          <p className="text-4xl font-semibold text-black">06</p>
          <p className="text-sm mt-1 text-gray-600">New Residential Projects</p>
        </div>
        <div className="h-px sm:h-16 sm:w-px bg-gray-300 hidden sm:block" />
        <div className="flex-1 px-4 py-4">
          <p className="text-4xl font-semibold text-black">20 Bn.</p>
          <p className="text-sm mt-1 text-gray-600">AED of Portfolio AUM</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-yellow-600 w-20 mx-auto my-12" />

      {/* Featured Project */}
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest text-yellow-600 uppercase mb-2">Latest Launch</p>
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">FashionTV Acacia</h3>
        <p className="text-lg text-gray-700 mb-8">
          1 - 3 BR Apartments and 4 BR Penthouses on Al Marjan Island, Ras Al Khaimah
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide">
            Project Details
          </button>
          <button className="bg-yellow-500 text-black px-6 py-3 text-sm font-semibold uppercase tracking-wide">
            Register Your Interest
          </button>
        </div>
      </div>
    </section>
  )
}
