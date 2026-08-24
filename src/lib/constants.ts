export const SITE = {
  name: "Zlooyear LLC",
  domain: "zlooyear.com",
  url: "https://zlooyear.com",
  email: "hello@zlooyear.com",
  tagline: "Adapting to the Technology of the 2100s.",
  motto: "Build for today. Adapt for what comes next.",
  description:
    "Technology consulting and digital product development — modern websites, AI integration, and software engineering for businesses ready to grow.",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export const FOOTER_SERVICES = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "AI Integration", href: "/services/ai-integration" },
  { label: "Software Consulting", href: "/services/software-consulting" },
  { label: "Creative Technology", href: "/services/web-development#creative" },
] as const;
