// pages/index.js (or app/page.js if using App Router)
import Head from 'next/head';
import { motion } from 'framer-motion';

const OurValues = () => {
  const stats = [
    { value: "24,500", label: "Units Delivered" },
    { value: "~50 Million", label: "Square Feet Delivered" },
    { value: "Building Concept", label: "Render" }
  ];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <>
      <Head>
        <title>Modern Design Page - Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen flex justify-center items-center p-5 md:p-10 bg-white text-black overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10 relative overflow-hidden">
          
          {/* Left Section: Large Image with static text */}
          <div className="left-section w-full lg:w-1/2 flex justify-center items-center relative z-10">
            <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/pic_5.jpg" 
                alt="People watching TV outdoors" 
                className="w-full h-full object-cover rounded-2xl" 
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 text-black text-xs px-3 py-1 rounded-full">
                This is an actual image
              </div>
            </div>
          </div>

          {/* Right Section: Marquee Stats + Second Image */}
          <div className="right-section w-full lg:w-1/2 flex flex-col space-y-8 relative">
            
            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden h-48 md:h-64">
              <motion.div 
                className="absolute top-0 left-0 flex items-center h-full"
                variants={marqueeVariants}
                animate="animate"
              >
                {[...stats, ...stats].map((stat, index) => (
                  <div
                    key={`stat-${index}`}
                    className="mx-12 flex-shrink-0 flex flex-col items-start justify-center border-r border-gray-300 pr-12 last:border-none"
                  >
                    <span className="text-[42px] md:text-[56px] font-semibold text-black leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] md:text-sm text-gray-700 tracking-wide uppercase mt-2">
                      ▪︎ {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

            </div>

            {/* Second Image */}
            <div className="second-image-container w-full flex justify-center items-center relative z-10">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/pic_1.jpg" 
                  alt="Building concept render" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 text-black text-xs px-3 py-1 rounded-full">
                  Conceptual shot of the Americana Ve-G-Greene residences
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
