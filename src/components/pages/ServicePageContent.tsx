import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { FAQ } from "@/components/ui/FAQ";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { ProcessStep } from "@/components/ui/ProcessStep";
import type { Service } from "@/lib/data/services";
import { processSteps } from "@/lib/data/content";

type ServicePageContentProps = {
  service: Service;
};

export function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-accent uppercase">
              {service.number} — {service.shortTitle}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {service.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {service.hero.subheadline}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Problem */}
      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <SectionHeading
                eyebrow="The Challenge"
                title="What we help solve."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground lg:pt-10">
                {service.problem}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What we provide */}
      <section className="py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="What We Provide"
              title="Capabilities and deliverables."
            />
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.provides.map((item, i) => (
              <StaggerItem key={item} index={i}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface p-5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology / Approach */}
      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <SectionHeading
                eyebrow="Technology & Approach"
                title="How we build."
                description="Pragmatic technology choices aligned with your requirements, team, and long-term goals."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="space-y-4 lg:pt-4">
                {service.approach.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title="From discovery to delivery."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Use Cases */}
      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Use Cases"
              title="When this service fits."
            />
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.useCases.map((item, i) => (
              <StaggerItem key={item} index={i}>
                <div className="h-full rounded-xl border border-border bg-background p-5 text-muted-foreground">
                  {item}
                </div>
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="FAQ" title="Common questions." />
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQ items={service.faq} className="mt-10 max-w-3xl" />
          </FadeIn>
        </Container>
      </section>

      <CTASection
        title="Ready to get started?"
        description={`Let's discuss your ${service.shortTitle.toLowerCase()} needs and determine the right approach.`}
      />
    </>
  );
}

type ServicesOverviewProps = {
  services: Service[];
};

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Services
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Technology consulting and development across web, AI, and software
              engineering — designed to help your business adapt and grow.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, i) => (
              <StaggerItem key={service.slug} index={i}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </div>

          <FadeIn>
            <div
              id="creative"
              className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-10"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Creative Technology
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Voice production platforms, terminology systems, and
                AI-assisted creative workflows — secondary capabilities that
                complement our core engineering services.
              </p>
              <Link
                href="/services/web-development"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Learn about creative technology
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
