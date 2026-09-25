import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";

export function AboutHero() {
  return (
    <>
      <section className="relative -mt-14 overflow-hidden sm:-mt-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(61,142,245,0.1),transparent_50%),radial-gradient(ellipse_at_80%_90%,rgba(61,142,245,0.04),transparent_45%)]"
          aria-hidden="true"
        />

        <div className="relative pt-14 sm:pt-16">
          <Container className="relative flex min-h-[min(68vh,36rem)] items-center py-20 sm:py-24 lg:py-28">
            <FadeIn direction="left" className="max-w-3xl">
              <h1 className="text-[2.1rem] font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.85rem] lg:leading-[1.15] text-balance">
                We provide IT services that help businesses solve software
                problems and build sustainable software infrastructure.
              </h1>
            </FadeIn>
          </Container>
        </div>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
