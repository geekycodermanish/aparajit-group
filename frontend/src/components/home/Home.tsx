'use client';

import ConsultantHighlight from "./ConsultantHighlight";
import FarmlandVerticalSlider from "./FarmlandVerticalSlider";
import HeroSection from "./HeroSection";
import VisionPage from "./VisionPage";
import AboutSection from "./AboutSection";
import LeadershipSection from "./LeadershipSection";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <ConsultantHighlight />
      <FarmlandVerticalSlider />
      <VisionPage />
      <AboutSection />
      <LeadershipSection />

    </main>
  );
}
