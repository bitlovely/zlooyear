export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  capabilities: string[];
  hero: {
    headline: string;
    subheadline: string;
  };
  problem: string;
  provides: string[];
  approach: string[];
  useCases: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Corporate Web Development",
    shortTitle: "Web Development",
    description:
      "High-performance corporate websites and digital experiences designed around business goals.",
    href: "/services/web-development",
    capabilities: [
      "Corporate websites",
      "SaaS websites",
      "Web applications",
      "UX/UI implementation",
      "Performance optimization",
      "CMS integrations",
    ],
    hero: {
      headline: "Websites built for business outcomes.",
      subheadline:
        "Modern corporate sites, SaaS platforms, and high-performance web applications — designed, engineered, and optimized for the way your business operates.",
    },
    problem:
      "Many business websites look polished but fail to convert, load slowly, or become difficult to maintain as the company grows. Off-the-shelf templates rarely reflect how your organization actually works.",
    provides: [
      "Custom corporate and SaaS website development",
      "High-performance web applications",
      "UX/UI design and implementation",
      "CMS integration and content workflows",
      "Performance and accessibility optimization",
      "Voice and creative technology service platforms",
      "Custom terminology and terminology-generation tools",
    ],
    approach: [
      "Next.js, React, and TypeScript for modern frontends",
      "Headless CMS and API-driven architectures",
      "Core Web Vitals–focused performance engineering",
      "Responsive, accessible design systems",
      "SEO and structured content architecture",
    ],
    useCases: [
      "Launching a new corporate web presence",
      "Redesigning an outdated business website",
      "Building a SaaS marketing and product site",
      "Creating a voice-actor or creative services platform",
      "Developing custom terminology management tools",
    ],
    faq: [
      {
        question: "Do you work with existing CMS platforms?",
        answer:
          "Yes. We integrate with headless CMS solutions and existing content systems, or help you choose the right platform based on your team's workflow and content needs.",
      },
      {
        question: "Can you redesign an existing site without starting over?",
        answer:
          "Often, yes. We assess your current stack, content, and goals to determine whether a redesign, refactor, or full rebuild makes the most sense.",
      },
      {
        question: "How do you handle performance?",
        answer:
          "Performance is built into our process — from image optimization and code splitting to server-side rendering and careful asset loading. We target strong Core Web Vitals scores.",
      },
    ],
  },
  {
    slug: "ai-integration",
    number: "02",
    title: "AI Integration",
    shortTitle: "AI Integration",
    description:
      "Practical AI solutions that integrate into existing workflows and products.",
    href: "/services/ai-integration",
    capabilities: [
      "LLM integration",
      "AI assistants",
      "Automation",
      "Knowledge systems",
      "Document processing",
      "Internal AI tools",
    ],
    hero: {
      headline: "Put AI to work inside your business.",
      subheadline:
        "Practical AI integration — assistants, automation, knowledge systems, and internal tools that connect to your existing products and workflows.",
    },
    problem:
      "AI adoption often stalls when tools are disconnected from daily work, produce unreliable outputs, or require teams to change how they operate entirely. Hype without integration creates more confusion than value.",
    provides: [
      "LLM integrations with your existing systems",
      "AI assistants for internal and customer-facing use",
      "Workflow automation powered by AI",
      "RAG and knowledge base systems",
      "Document intelligence and processing pipelines",
      "Custom internal AI tools and dashboards",
      "API integrations with leading AI providers",
    ],
    approach: [
      "Evaluation-first: identify where AI adds measurable value",
      "Secure integration with existing data and auth systems",
      "Prompt engineering, retrieval, and guardrails",
      "Human-in-the-loop workflows where accuracy matters",
      "Monitoring, iteration, and cost management",
    ],
    useCases: [
      "Internal knowledge assistants for teams",
      "Automated document classification and extraction",
      "Customer support augmentation",
      "AI-powered content and terminology workflows",
      "Process automation across business systems",
    ],
    faq: [
      {
        question: "Do you build custom AI models?",
        answer:
          "We focus on practical integration — connecting proven models and APIs to your systems. For most business use cases, fine-tuning existing models or using retrieval-augmented generation delivers better results faster than building from scratch.",
      },
      {
        question: "How do you handle data security?",
        answer:
          "We design integrations with your security requirements in mind — including access controls, data boundaries, and provider selection based on your compliance needs.",
      },
      {
        question: "Can AI be added to an existing product?",
        answer:
          "Yes. We specialize in integrating AI capabilities into products and workflows you already use, rather than requiring a complete platform change.",
      },
    ],
  },
  {
    slug: "software-consulting",
    number: "03",
    title: "Software Development & Technical Consulting",
    shortTitle: "Software Consulting",
    description:
      "Engineering expertise for companies building, scaling, or modernizing software systems.",
    href: "/services/software-consulting",
    capabilities: [
      "Full-stack development",
      "APIs",
      "Cloud architecture",
      "Databases",
      "Integrations",
      "Technical strategy",
    ],
    hero: {
      headline: "Engineering systems that scale with your business.",
      subheadline:
        "Full-stack development, API design, cloud architecture, and technical consulting for teams building, scaling, or modernizing software.",
    },
    problem:
      "Growing businesses often outgrow their initial systems — integrations break, databases strain, and technical debt slows every new feature. Without clear architecture and engineering discipline, scaling becomes expensive and unpredictable.",
    provides: [
      "Full-stack software development",
      "Backend engineering and API development",
      "Cloud architecture and infrastructure design",
      "Database architecture and optimization",
      "System integrations and data pipelines",
      "Legacy system modernization",
      "Technical consulting and architecture reviews",
    ],
    approach: [
      "Pragmatic architecture aligned with business goals",
      "Modern stacks: Node.js, Python, PostgreSQL, cloud-native services",
      "API-first design and clear documentation",
      "Incremental modernization over risky rewrites",
      "Testing, observability, and deployment best practices",
    ],
    useCases: [
      "Building a new internal operations platform",
      "Modernizing a legacy application",
      "Designing APIs for product integrations",
      "Scaling infrastructure for growing user bases",
      "Technical due diligence and architecture planning",
    ],
    faq: [
      {
        question: "Do you work alongside existing engineering teams?",
        answer:
          "Yes. We frequently collaborate with in-house teams — providing additional capacity, specialized expertise, or architectural guidance while integrating with your processes.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We choose technologies based on project requirements. Common stacks include TypeScript/Node.js, Python, PostgreSQL, Redis, and cloud platforms such as AWS, GCP, or Vercel.",
      },
      {
        question: "Can you help with a partial rewrite?",
        answer:
          "Absolutely. We prefer incremental modernization — replacing or refactoring components strategically rather than stopping business operations for a full rewrite.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
