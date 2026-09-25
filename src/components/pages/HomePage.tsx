import { CTASection } from "@/components/ui/CTASection";
import { AboutHero } from "@/components/pages/AboutHero";
import { AboutSections } from "@/components/pages/AboutSections";

export function HomePage() {
  return (
    <>
      <AboutHero />
      <AboutSections showIntro={false} />
      <CTASection />
    </>
  );
}
