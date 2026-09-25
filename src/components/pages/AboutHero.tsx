import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";
import { SITE } from "@/lib/constants";

export function AboutHero() {
  return (
    <>
      <section className="relative -mt-14 overflow-hidden sm:-mt-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(61,142,245,0.1),transparent_50%),radial-gradient(ellipse_at_80%_90%,rgba(61,142,245,0.04),transparent_45%)]"
          aria-hidden="true"
        />

        <div className="relative pt-14 sm:pt-16">
          <Container className="relative flex min-h-[min(72vh,40rem)] items-center py-20 sm:py-24 lg:py-28">
            <FadeIn direction="left" className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase sm:text-xs">
                Zlooyear
              </p>

              <h1 className="mt-7 text-[2.35rem] font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08] text-balance">
                {SITE.tagline}
              </h1>

              <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Technology consulting for businesses that need systems built for
                today — and ready for what comes next.
              </p>

              <p className="mt-8 text-sm font-medium tracking-wide text-foreground/70 sm:text-base">
                {SITE.motto}
              </p>
            </FadeIn>
          </Container>
        </div>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
