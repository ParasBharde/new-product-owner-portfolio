import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { ToolkitSection } from '@/components/sections/ToolkitSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { Footer } from '@/components/layout/Footer';

/**
 * Home page - main entry point of the portfolio
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ToolkitSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}
