import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Start a project with Zlooyear. Tell us about your web development, AI integration, or software consulting needs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <p className="text-sm font-medium tracking-wide text-accent uppercase">
                Contact
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Start a project.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Tell us what you&apos;re building. Share your goals, timeline,
                and any technical context — we&apos;ll review your inquiry and
                respond with next steps.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Email
                  </h2>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-2 inline-block text-accent hover:underline"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    What to include
                  </h2>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      A brief description of your project or challenge
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      Your timeline and budget range, if known
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      Any existing systems or technical constraints
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
