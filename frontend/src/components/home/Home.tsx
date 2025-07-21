'use client';

import ConsultantHighlight from "./ConsultantHighlight";
import DeveloperHighlight from "./DeveloperHighlight";
import VerticalSlider from "./VerticalSlider";
import FarmlandVerticalSlider from "./FarmlandVerticalSlider";
import HeroSection from "./HeroSection";
import VisionPage from "./VisionPage";
import AboutSection from "./AboutSection";
import LeadershipSection from "./LeadershipSection";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      {/* <DeveloperHighlight /> */}
      <ConsultantHighlight />
      {/* <VerticalSlider /> */}
      <FarmlandVerticalSlider />
      <VisionPage />
      <AboutSection />
      <LeadershipSection />

    </main>
  );
}
