export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, users, and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define the product experience and technical architecture.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop, integrate, test, and iterate.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Improve, maintain, and evolve the solution.",
  },
] as const;

export const capabilities = [
  {
    title: "Web",
    description: "Corporate sites, SaaS platforms, and web applications.",
    icon: "Globe",
  },
  {
    title: "AI",
    description: "Assistants, automation, and knowledge systems.",
    icon: "Brain",
  },
  {
    title: "Software",
    description: "APIs, cloud architecture, and full-stack engineering.",
    icon: "Code2",
  },
  {
    title: "Creative Technology",
    description: "Voice production tools and terminology systems.",
    icon: "Sparkles",
  },
] as const;

export const whyZlooyear = [
  {
    title: "Engineering-first",
    description:
      "We approach every project with sound architecture and clean implementation — not shortcuts that create debt later.",
  },
  {
    title: "Business-focused",
    description:
      "Technology decisions are tied to business outcomes. We build what moves your operations forward, not what looks impressive in a demo.",
  },
  {
    title: "Practical AI",
    description:
      "AI where it adds value, integrated into real workflows — with guardrails, monitoring, and human oversight where it matters.",
  },
  {
    title: "Long-term partnership",
    description:
      "We design systems to evolve. Many clients work with us across multiple phases — launch, scale, and continuous improvement.",
  },
] as const;

export const creativeTechnology = {
  title: "Technology meets creative production.",
  description:
    "Beyond core engineering, Zlooyear supports creative technology workflows — voice production platforms, terminology systems, and AI-assisted content pipelines.",
  offerings: [
    "Voice production and voice actor service platforms",
    "Corporate voice solutions and workflow tools",
    "Custom terminology generation systems",
    "AI-assisted voice and content workflows",
    "Creative production tooling and integrations",
  ],
} as const;

export const projectTypes = [
  "Corporate Website",
  "Web Application",
  "AI Integration",
  "Software Development",
  "Technical Consulting",
  "Creative Technology",
  "Other",
] as const;

export const budgetRanges = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not sure yet",
] as const;
