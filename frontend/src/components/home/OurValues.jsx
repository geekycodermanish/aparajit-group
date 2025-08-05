'use client';
import Head from 'next/head';
import { motion } from 'framer-motion';

const OurValues = () => {
  const stats = [
    { value: "Farmhouses", label: "Upcoming projects" },
    { value: "Highway and Road", label: "Delivered in Infra" },
    { value: "Vedant city", label: "In Real Estate" }
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

      <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 bg-white text-black overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10 relative overflow-hidden">
          
          {/* Left Section: Large Image with static text */}
          <div className="left-section w-full lg:w-1/2 flex justify-center items-center relative z-10">
            <div className="relative w-full h-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg">
              <img 
                src="/images/pic_6.jpg" 
                alt="People watching TV outdoors" 
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl" 
                loading="lazy"
              />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white bg-opacity-80 text-black text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                {/* Empty tag for potential future content */}
              </div>
            </div>
          </div>

          {/* Right Section: Marquee Stats + Second Image */}
          <div className="right-section w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 relative">
            
            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64">
              <motion.div 
                className="absolute top-0 left-0 flex items-center h-full"
                variants={marqueeVariants}
                animate="animate"
              >
                {/* stats duplication for marquee container swipe speed */}
                {[...stats, ...stats].map((stat, index) => (
                  <div
                    key={`stat-${index}`}
                    className="mx-6 sm:mx-8 md:mx-10 lg:mx-12 flex-shrink-0 flex flex-col items-start justify-center border-r border-gray-300 pr-6 sm:pr-8 md:pr-10 lg:pr-12 last:border-none"
                  >
                    <span className="text-3xl sm:text-4xl md:text-[42px] lg:text-[56px] font-semibold text-black leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-[11px] md:text-sm text-gray-700 tracking-wide uppercase mt-1 sm:mt-2">
                      ▪︎ {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Image */}
            <div className="second-image-container w-full flex justify-center items-center relative z-10">
              <div className="relative w-full h-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg">
                <img 
                  src="/images/pic_1.jpg" 
                  alt="Building concept render" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl" 
                  loading="lazy"
                />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white bg-opacity-80 text-black text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  {/* Empty tag for potential future content */}
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