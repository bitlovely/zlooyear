import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { whyZlooyear, processSteps } from "@/lib/data/content";
import { ProcessStep } from "@/components/ui/ProcessStep";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Zlooyear LLC — a technology consulting company helping businesses adapt to emerging technology through practical engineering.",
  path: "/about",
});

const beliefs = [
  {
    title: "Technology should serve the business",
    description:
      "Every technical decision should connect to a business outcome — whether that's efficiency, revenue, user experience, or operational clarity.",
  },
  {
    title: "Adaptation is continuous",
    description:
      "The pace of technological change isn't slowing down. We build systems and partnerships designed to evolve, not ossify.",
  },
  {
    title: "Quality is non-negotiable",
    description:
      "Clean architecture, accessible interfaces, and reliable deployments aren't extras — they're the foundation of software that lasts.",
  },
  {
    title: "Honest communication",
    description:
      "We tell you what's feasible, what's risky, and what we'd recommend — even when it's not the most exciting answer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-accent uppercase">
              About
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {SITE.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Zlooyear is a technology and creative services consulting company.
              We help businesses design, build, and integrate the digital
              products and systems they need to operate and grow — from corporate
              websites and web applications to AI-powered workflows and
              full-stack software platforms.
            </p>
            <p className="mt-4 max-w-2xl text-lg font-medium text-foreground/80 italic">
              {SITE.motto}
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Why We Exist"
              title="Businesses need technology partners who understand both engineering and context."
              description="Zlooyear was founded on the belief that companies shouldn't have to choose between technical depth and business understanding. We bridge that gap — building systems that are well-engineered and aligned with how your organization actually works."
            />
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="What We Believe" title="Our principles." />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {beliefs.map((belief, i) => (
              <StaggerItem key={belief.title} index={i}>
                <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {belief.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="How We Work"
              title="A partnership model, not a handoff."
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

      <section className="py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Approach"
              title="What sets our work apart."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyZlooyear.map((item, i) => (
              <StaggerItem key={item.title} index={i}>
                <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's work together."
        description="Whether you're starting a new project or improving an existing system, we'd like to hear from you."
      />
    </>
  );
}
