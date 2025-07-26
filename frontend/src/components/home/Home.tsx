'use client';

import ProjectsSection from "./ProjectsSection";
import FarmlandVerticalSlider from "./FarmlandVerticalSlider";
import HeroSection from "./HeroSection";
import OurValues from "./OurValues";
import AboutSection from "./AboutSection";
import DirectorSection from "./DirectorSection";
import FeaturedProjectsSection from "./FeaturedProjectsSection";
import {OurTeamSection} from "./OurTeamSection";
import ContactSection from "../../app/contact/ContactSection";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      {/* <FarmlandVerticalSlider /> */}
      <AboutSection />
      <OurValues />
      <ProjectsSection />
      <FeaturedProjectsSection />
      <DirectorSection />
      <OurTeamSection />
      <ContactSection />

    </main>
  );
}
