import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";
import { beliefs } from "@/lib/data/about";
import { processSteps, whyZlooyear } from "@/lib/data/content";
import { cn } from "@/lib/utils";

type AboutSectionsProps = {
  showIntro?: boolean;
};

export function AboutSections({ showIntro = true }: AboutSectionsProps) {
  // Alternate surface / default so bands stay even with or without the intro.
  // Homepage (no intro): surface → default → surface → default
  // About page (intro): intro surface → default → surface → default → surface
  const band = showIntro
    ? {
        why: "",
        believe: "bg-surface",
        work: "",
        approach: "bg-surface",
      }
    : {
        why: "bg-surface",
        believe: "",
        work: "bg-surface",
        approach: "",
      };

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

      <section
        className={cn("border-t border-border py-20 sm:py-28", band.why)}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-start">
            <FadeIn direction="left" className="lg:col-span-5">
              <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">
                Why We Exist
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] text-balance">
                Technology partners who understand both engineering and context.
              </h2>
            </FadeIn>

            <FadeIn
              delay={0.12}
              direction="right"
              className="lg:col-span-6 lg:col-start-7 lg:pt-10"
            >
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                Zlooyear was founded on the belief that companies shouldn&apos;t
                have to choose between technical depth and business
                understanding. We bridge that gap — building systems that are
                well-engineered and aligned with how your organization actually
                works.
              </p>

              <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8">
                <div className="relative pl-5 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.25rem)] before:w-px before:bg-accent/50">
                  <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
                    Depth
                  </p>
                  <p className="mt-3 text-base font-medium text-foreground">
                    Engineering that holds up
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Solid architecture, clean delivery, and systems built to
                    last beyond the first launch.
                  </p>
                </div>
                <div className="relative pl-5 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.25rem)] before:w-px before:bg-border-strong">
                  <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
                    Context
                  </p>
                  <p className="mt-3 text-base font-medium text-foreground">
                    Decisions that fit the business
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Solutions shaped by how your team operates, not generic
                    playbooks.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        className={cn(
          "border-t border-border py-20 sm:py-28",
          band.believe,
        )}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-end">
            <FadeIn direction="left" className="lg:col-span-5">
              <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">
                What We Believe
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] text-balance">
                Principles that shape every engagement.
              </h2>
            </FadeIn>
            <FadeIn
              delay={0.1}
              direction="right"
              className="lg:col-span-5 lg:col-start-8"
            >
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Not slogans — working standards we use when tradeoffs get real.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 sm:mt-16">
            {beliefs.map((belief, i) => (
              <StaggerItem key={belief.title} index={i}>
                <div
                  className={cn(
                    "grid gap-4 border-t border-border py-8 sm:grid-cols-12 sm:gap-8 sm:py-10",
                    i === beliefs.length - 1 && "border-b",
                  )}
                >
                  <span className="text-sm font-medium tracking-[0.14em] text-accent sm:col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:col-span-4 sm:text-2xl text-balance">
                    {belief.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground sm:col-span-6 sm:pt-1">
                    {belief.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      <section
        className={cn("border-t border-border py-16 sm:py-20", band.work)}
      >
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

      <section
        className={cn(
          "border-t border-border py-20 sm:py-28",
          band.approach,
        )}
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-end">
            <FadeIn direction="left" className="lg:col-span-5">
              <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">
                Our Approach
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] text-balance">
                What sets our work apart.
              </h2>
            </FadeIn>
            <FadeIn
              delay={0.1}
              direction="right"
              className="lg:col-span-5 lg:col-start-8"
            >
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Four commitments we carry into every build — from first brief to
                long-term iteration.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:mt-16 sm:grid-cols-2">
            {whyZlooyear.map((item, i) => (
              <StaggerItem key={item.title} index={i}>
                <div className="relative pl-5 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.25rem)] before:w-px before:bg-accent/40">
                  <span className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
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
