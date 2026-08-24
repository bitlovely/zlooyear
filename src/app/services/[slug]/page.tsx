import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageContent } from "@/components/pages/ServicePageContent";
import { createMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    { slug: "web-development" },
    { slug: "ai-integration" },
    { slug: "software-consulting" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} />;
}
