import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "Have a project in mind?",
  description = "Tell us what you're building. We'll help you determine the right technical approach.",
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="relative max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                {title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={primaryHref}>{primaryLabel}</Button>
                {secondaryLabel && secondaryHref && (
                  <Button href={secondaryHref} variant="secondary">
                    {secondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
