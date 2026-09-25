import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";
import { SITE } from "@/lib/constants";

export function AboutHero() {
  return (
    <>
      {/* -mt pulls the atmosphere under the transparent navbar so they share one field */}
      <section className="relative -mt-14 overflow-hidden sm:-mt-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_0%,rgba(61,142,245,0.14),transparent_55%),radial-gradient(ellipse_at_12%_85%,rgba(61,142,245,0.05),transparent_45%)]"
          aria-hidden="true"
        />

        <div className="relative pt-14 sm:pt-16">
          <Container className="relative flex min-h-[min(78vh,44rem)] items-center py-20 sm:py-24 lg:py-28">
            <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-16">
              <FadeIn direction="left" className="max-w-xl">
                <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase sm:text-xs">
                  Zlooyear
                </p>

                <h1 className="mt-7 text-[2.35rem] font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08] text-balance">
                  {SITE.tagline}
                </h1>

                <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Technology consulting for businesses that need systems built
                  for today — and ready for what comes next.
                </p>

                <p className="mt-8 text-sm font-medium tracking-wide text-foreground/70 sm:text-base">
                  {SITE.motto}
                </p>
              </FadeIn>

              <FadeIn
                delay={0.14}
                direction="right"
                className="flex justify-center lg:justify-end"
              >
                <HeroVisual />
              </FadeIn>
            </div>
          </Container>
        </div>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
