import { Container } from "@/components/ui/Container";
import {
  HeroBrandBackdrop,
  HeroHeadline,
} from "@/components/pages/HeroHeadline";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";

export function AboutHero() {
  return (
    <>
      {/* Pull under sticky nav so menu + hero share one full-viewport field */}
      <section className="relative -mt-14 flex min-h-dvh items-center overflow-x-hidden sm:-mt-16">
        <HeroBrandBackdrop />

        <div className="relative z-10 w-full pt-14 sm:pt-16">
          <Container className="w-full py-8 sm:py-10">
            <HeroHeadline />
          </Container>
        </div>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
