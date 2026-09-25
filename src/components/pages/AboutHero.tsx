import { Container } from "@/components/ui/Container";
import {
  HeroBrandBackdrop,
  HeroContent,
} from "@/components/pages/HeroHeadline";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";

export function AboutHero() {
  return (
    <>
      <section className="relative -mt-14 flex min-h-dvh items-center overflow-x-hidden sm:-mt-16">
        <HeroBrandBackdrop />

        <div className="relative z-10 w-full pt-14 sm:pt-16">
          <Container className="w-full py-10 sm:py-12">
            <HeroContent />
          </Container>
        </div>
      </section>

      {/* Social proof strip — 2026 trust signal under the fold line */}
      <TestimonialFlowBar />
    </>
  );
}
