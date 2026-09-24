import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";
import { SITE } from "@/lib/constants";

export function AboutHero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(46,196,182,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(46,196,182,0.06),transparent_50%)]"
          aria-hidden="true"
        />
        <Container className="relative py-20 sm:py-28 lg:py-32">
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
