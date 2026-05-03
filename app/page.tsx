import { HorizontalScroll } from '../components/HorizontalScroll';
import { HeroSection } from '../components/sections/HeroSection';
import { JourneySection } from '../components/sections/JourneySection';
import { MoreAboutMeSection } from '../components/sections/MoreAboutMeSection';
import { AboutSection } from '../components/sections/AboutSection';
import { WhatICanDoSection } from '../components/sections/WhatICanDoSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <main className="w-full">
        {/* We use a horizontal scroll setup */}
        <HorizontalScroll>
          <HeroSection />
          <JourneySection />
          <MoreAboutMeSection />
          <AboutSection />
          <WhatICanDoSection />
          <ExperienceSection />
          <ContactSection />
        </HorizontalScroll>
      </main>
    </>
  );
}
