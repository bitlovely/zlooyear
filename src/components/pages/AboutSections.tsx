import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";
import { beliefs } from "@/lib/data/about";
import { processSteps, whyZlooyear } from "@/lib/data/content";

type AboutSectionsProps = {
  showIntro?: boolean;
};

export function AboutSections({ showIntro = true }: AboutSectionsProps) {
  return (
    <>
      {showIntro && (
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container>
            <FadeIn>
              <p className="text-sm font-medium tracking-wide text-accent uppercase">
                About Zlooyear
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                {SITE.tagline}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Zlooyear is a technology and creative services consulting company.
                We help businesses design, build, and integrate the digital
                products and systems they need to operate and grow — from
                corporate websites and web applications to AI-powered workflows
                and full-stack software platforms.
              </p>
              <p className="mt-4 max-w-2xl text-lg font-medium text-foreground/80 italic">
                {SITE.motto}
              </p>
            </FadeIn>
          </Container>
        </section>
      )}

      <section className="border-t border-border py-16 sm:py-20">
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

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="What We Believe" title="Our principles." />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {beliefs.map((belief, i) => (
              <StaggerItem key={belief.title} index={i}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {belief.title}
                  </h3>
                  <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="How We Work"
              title="A partnership model, not a handoff."
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

      <section className="border-t border-border bg-surface py-16 sm:py-20">
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
    </>
  );
}
