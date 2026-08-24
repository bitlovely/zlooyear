import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CaseStudyDetail } from "@/components/ui/CaseStudyCard";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn, StaggerItem } from "@/components/ui/FadeIn";
import { createMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = createMetadata({
  title: "Case Studies",
  description:
    "Representative project examples across web development, AI integration, and software engineering.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Case Studies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Representative engagements that illustrate our approach to web
              development, AI integration, and software engineering. Client
              names and specific metrics are omitted where not publicly
              available.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <StaggerItem key={study.slug} index={i}>
                <CaseStudyDetail study={study} />
              </StaggerItem>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a similar project?"
        description="Tell us about your requirements. We'll help you scope the right solution."
      />
    </>
  );
}
