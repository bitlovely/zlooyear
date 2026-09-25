import { Container } from "@/components/ui/Container";
import {
  HeroBrandBackdrop,
  HeroContent,
} from "@/components/pages/HeroHeadline";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";

export function AboutHero() {
  return (
    <>
      <section className="relative -mt-14 flex min-h-dvh items-end overflow-x-hidden sm:-mt-16">
        <HeroBrandBackdrop />

        <div className="relative z-10 w-full pt-14 sm:pt-16">
          <Container className="w-full pb-10 pt-8 sm:pb-14 sm:pt-10 lg:pb-16">
            <HeroContent />
          </Container>
        </div>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
