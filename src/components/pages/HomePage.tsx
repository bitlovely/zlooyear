import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { AboutHero } from "@/components/pages/AboutHero";
import { AboutSections } from "@/components/pages/AboutSections";
import { creativeTechnology } from "@/lib/data/content";

export function HomePage() {
  return (
    <>
      <AboutHero />

      <AboutSections showIntro={false} />

      {/* Surface after About “Approach” (default) */}
      <section className="border-t border-border bg-surface py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeIn>
              <SectionHeading
                eyebrow="Creative Technology"
                title={creativeTechnology.title}
                description={creativeTechnology.description}
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="space-y-4">
                {creativeTechnology.offerings.map((offering) => (
                  <li
                    key={offering}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {offering}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
