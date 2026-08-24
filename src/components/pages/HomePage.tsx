import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { services } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/case-studies";
import { HeroCarousel } from "@/components/pages/HeroCarousel";
import { testimonials } from "@/lib/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import {
  capabilities,
  creativeTechnology,
  processSteps,
  whyZlooyear,
} from "@/lib/data/content";
import {
  Globe,
  Brain,
  Code2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Brain,
  Code2,
  Sparkles,
};

export function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Capabilities */}
      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Capabilities"
              title="Built across technology and creativity."
              description="From corporate websites to AI systems — we bring engineering discipline to every layer of your digital stack."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon];
              return (
                <StaggerItem key={cap.title} index={i}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-border-strong">
                    {Icon && (
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    )}
                    <h3 className="mt-4 font-semibold text-foreground">
                      {cap.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cap.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
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

      {/* Case Studies */}
      <section className="border-t border-border bg-surface py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <FadeIn>
              <SectionHeading
                eyebrow="Case Studies"
                title="Selected project examples."
                description="Representative engagements across web development, AI integration, and software engineering."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline shrink-0"
              >
                View all case studies
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <StaggerItem key={study.slug} index={i}>
                <CaseStudyCard study={study} />
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-background py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Testimonials"
              title="What clients say"
              description="Real feedback from teams we&apos;ve helped deliver modern web, AI, and software systems."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <StaggerItem key={t.name} index={i}>
                <TestimonialCard quote={t.quote} name={t.name} title={t.title} />
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title="A clear path from idea to production."
              description="Structured phases that keep projects focused, transparent, and aligned with your goals."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.number} index={i}>
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isLast={i === processSteps.length - 1}
                />
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Zlooyear */}
      <section className="border-t border-border bg-surface py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Approach"
              title="Why companies work with Zlooyear."
              description="We combine technical depth with business understanding — building systems that work today and adapt to what's next."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyZlooyear.map((item, i) => (
              <StaggerItem key={item.title} index={i}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      {/* Creative Technology */}
      <section className="py-20 sm:py-28">
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
