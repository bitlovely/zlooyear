import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Insights",
  description:
    "Technical articles and insights on web development, AI integration, and software engineering — coming soon from Zlooyear.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <section className="pt-16 pb-20 sm:pt-20 sm:pb-28">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-wide text-accent uppercase">
              Insights
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Technical perspectives, coming soon.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We&apos;re preparing articles on practical AI adoption, modern
              web architecture, and software engineering for growing businesses.
              Check back for updates.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Start a Project
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
