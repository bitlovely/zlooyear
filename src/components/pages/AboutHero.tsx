import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";
import { SITE } from "@/lib/constants";

export function AboutHero() {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <FadeIn>
            <p className="text-sm font-bold tracking-[0.22em] text-accent uppercase">
              Zlooyear
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] text-balance">
              {SITE.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A technology and creative services consulting company. We help
              businesses design, build, and integrate the digital products and
              systems they need to operate and grow.
            </p>
            <p className="mt-5 max-w-2xl text-base font-medium text-foreground/80 italic sm:text-lg">
              {SITE.motto}
            </p>
          </FadeIn>
        </Container>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
