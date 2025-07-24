'use client';

import ProjectsSection from "./ProjectsSection";
import FarmlandVerticalSlider from "./FarmlandVerticalSlider";
import HeroSection from "./HeroSection";
import OurValues from "./OurValues";
import AboutSection from "./AboutSection";
import LeadershipSection from "./LeadershipSection";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      {/* <FarmlandVerticalSlider /> */}
      <AboutSection />
      <OurValues />
      {/* <ProjectsSection /> */}
      {/* <LeadershipSection /> */}

    </main>
  );
}
