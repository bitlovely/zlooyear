import type { Metadata } from "next";
import { ServicesOverview } from "@/components/pages/ServicePageContent";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/data/services";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Technology consulting and development services — corporate web development, AI integration, and software engineering.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesOverview services={services} />;
}
