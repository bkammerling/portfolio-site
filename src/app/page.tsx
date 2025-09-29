import HeroSection, { HighlightsSection } from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import QuickBio from '@/components/QuickBio';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <FeaturedProjects />
      <QuickBio />
    </>
  );
}
