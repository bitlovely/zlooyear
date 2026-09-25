import { Container } from "@/components/ui/Container";
import {
  HeroBrandBackdrop,
  HeroHeadline,
} from "@/components/pages/HeroHeadline";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";

export function AboutHero() {
  return (
    <>
      <section className="relative flex min-h-[calc(100dvh-3.5rem)] items-center overflow-hidden sm:min-h-[calc(100dvh-4rem)]">
        <HeroBrandBackdrop />

        <Container className="relative z-10 w-full py-8 sm:py-10">
          <HeroHeadline />
        </Container>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
