import { Container } from "@/components/ui/Container";
import { HeroHeadline } from "@/components/pages/HeroHeadline";
import { TestimonialFlowBar } from "@/components/ui/TestimonialFlowBar";

export function AboutHero() {
  return (
    <>
      {/* Height = viewport minus navbar → menu + hero = one screen */}
      <section className="relative flex min-h-[calc(100dvh-3.5rem)] items-center overflow-hidden sm:min-h-[calc(100dvh-4rem)]">
        <div
          className="pointer-events-none absolute inset-x-0 -top-14 bottom-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,102,255,0.08),transparent_48%),radial-gradient(ellipse_at_85%_80%,rgba(0,102,255,0.035),transparent_42%)] sm:-top-16"
          aria-hidden="true"
        />

        <Container className="relative w-full py-8 sm:py-10">
          <HeroHeadline />
        </Container>
      </section>

      <TestimonialFlowBar />
    </>
  );
}
