import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { services } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/case-studies";
import {
  capabilities,
  creativeTechnology,
  processSteps,
  whyZlooyear,
} from "@/lib/data/content";
import { SITE } from "@/lib/constants";
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

function HeroVisual() {
  return (
    <div
      className="relative hidden lg:block h-[420px] w-full"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-2xl border border-border bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40" />
        <div className="absolute top-8 left-8 right-8 h-8 rounded-lg border border-border bg-muted/50" />
        <div className="absolute top-20 left-8 w-32 h-24 rounded-lg border border-border bg-muted/30" />
        <div className="absolute top-20 right-8 left-48 h-24 rounded-lg border border-border bg-accent/[0.06]" />
        <div className="absolute top-52 left-8 right-8 bottom-8 rounded-lg border border-border bg-muted/20">
          <div className="p-4 space-y-3">
            <div className="flex gap-2">
              <div className="h-2 w-16 rounded-full bg-accent/30" />
              <div className="h-2 w-24 rounded-full bg-border" />
            </div>
            <div className="h-2 w-full rounded-full bg-border/60" />
            <div className="h-2 w-4/5 rounded-full bg-border/40" />
            <div className="h-2 w-3/5 rounded-full bg-border/40" />
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-20 rounded-md bg-accent/20" />
              <div className="h-6 w-20 rounded-md bg-border/60" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/[0.08] blur-2xl" />
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <p className="text-sm font-medium tracking-wide text-accent uppercase">
                {SITE.name}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] text-balance">
                Adapting to the Technology of the 2100s.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Zlooyear helps businesses turn emerging technology into
                practical digital products, AI-powered workflows, and reliable
                software systems.
              </p>
              <p className="mt-3 text-base font-medium text-foreground/80 italic">
                {SITE.motto}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Start a Project</Button>
                <Button href="/services" variant="secondary">
                  Explore Our Services
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <HeroVisual />
            </FadeIn>
          </div>
        </Container>
      </section>

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
