import { Container } from "@/components/ui/Container";
import { HeroHeadline } from "@/components/pages/HeroHeadline";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";

export function AboutHero() {
  return (
    <>
      <section className="relative -mt-14 overflow-hidden sm:-mt-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,102,255,0.08),transparent_48%),radial-gradient(ellipse_at_85%_80%,rgba(0,102,255,0.035),transparent_42%)]"
          aria-hidden="true"
        />

        <div className="relative pt-14 sm:pt-16">
          <Container className="relative flex min-h-[min(72vh,40rem)] items-center py-20 sm:py-28 lg:py-32">
            <div className="w-full py-4">
              <HeroHeadline />
            </div>
          </Container>
        </div>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
