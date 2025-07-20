'use client';

import ConsultantHighlight from "./ConsultantHighlight";
import DeveloperHighlight from "./DeveloperHighlight";
import VerticalSlider from "./VerticalSlider";
import Verticals from "./Verticals";
import HeroSection from "./HeroSection";



export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      {/* <DeveloperHighlight /> */}
      <ConsultantHighlight />
      <VerticalSlider />
      <Verticals/>
    </main>
  );
}
