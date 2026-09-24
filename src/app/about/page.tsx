import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { AboutSections } from "@/components/pages/AboutSections";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Zlooyear LLC — a technology consulting company helping businesses adapt to emerging technology through practical engineering.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutSections showIntro />
      <CTASection
        title="Let's work together."
        description="Whether you're starting a new project or improving an existing system, we'd like to hear from you."
      />
    </>
  );
}
