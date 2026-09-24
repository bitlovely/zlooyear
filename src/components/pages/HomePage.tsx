import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { SectionBackdrop } from "@/components/ui/SectionMedia";
import { AboutHero } from "@/components/pages/AboutHero";
import { AboutSections } from "@/components/pages/AboutSections";
import { creativeTechnology } from "@/lib/data/content";
import { sectionImages } from "@/lib/data/section-images";

export function HomePage() {
  return (
    <>
      <AboutHero />

      <AboutSections showIntro={false} />

      <section className="relative overflow-hidden border-t border-border bg-surface py-20 sm:py-28">
        <SectionBackdrop
          src={sectionImages.creative.src}
          alt={sectionImages.creative.alt}
          intensity="strong"
        />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-start">
            <FadeIn direction="left" className="lg:col-span-5">
              <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">
                Creative Technology
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] text-balance">
                {creativeTechnology.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                {creativeTechnology.description}
              </p>
            </FadeIn>

            <div className="lg:col-span-6 lg:col-start-7 lg:pt-2">
              <ul className="border-t border-border">
                {creativeTechnology.offerings.map((offering, i) => (
                  <StaggerItem key={offering} index={i} direction="right">
                    <li className="flex gap-5 border-b border-border py-5 sm:gap-6 sm:py-6">
                      <span className="shrink-0 text-sm font-medium tracking-[0.14em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                        {offering}
                      </span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
