import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { AboutHero } from "@/components/pages/AboutHero";
import { AboutSections } from "@/components/pages/AboutSections";
import { services } from "@/lib/data/services";
import { creativeTechnology } from "@/lib/data/content";

export function HomePage() {
  return (
    <>
      <AboutHero />

      <AboutSections showIntro={false} />

      <section className="border-t border-border bg-surface py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="Three disciplines. One integrated approach."
              description="Whether you need a new website, AI integration, or full-stack engineering — we design solutions that fit your business."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service, i) => (
              <StaggerItem key={service.slug} index={i}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
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
