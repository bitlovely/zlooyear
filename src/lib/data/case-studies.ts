export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "business-operations-platform",
    title: "Business Operations Platform",
    category: "Software Development",
    summary:
      "A unified internal platform connecting scheduling, reporting, and team workflows for a growing service organization.",
    challenge:
      "The client managed operations across disconnected spreadsheets, email threads, and legacy tools. Teams lacked a single source of truth, and manual processes created delays and errors.",
    approach:
      "We mapped existing workflows with stakeholders, identified integration points, and designed a modular platform architecture that could be built and deployed incrementally.",
    solution:
      "A custom web application with role-based access, automated reporting, API integrations to existing tools, and a dashboard tailored to each team's daily work.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs", "AWS"],
    outcome:
      "Teams consolidated daily operations into one platform, reducing manual data entry and giving leadership clearer visibility into business activity.",
  },
  {
    slug: "ai-powered-workflow",
    title: "AI-Powered Workflow",
    category: "AI Integration",
    summary:
      "An internal AI assistant integrated into document review and classification workflows.",
    challenge:
      "The client's team spent significant time reviewing and categorizing incoming documents. Existing tools lacked intelligent routing and context-aware suggestions.",
    approach:
      "We evaluated document types and accuracy requirements, then designed a retrieval-augmented system with human review checkpoints for high-stakes decisions.",
    solution:
      "An AI-assisted workflow that extracts key information, suggests classifications, and routes documents to the right team — with full audit trails and override capabilities.",
    technologies: [
      "LLM APIs",
      "RAG",
      "Python",
      "Vector database",
      "Internal web portal",
    ],
    outcome:
      "Document processing time decreased substantially while maintaining review quality through structured human-in-the-loop checkpoints.",
  },
  {
    slug: "digital-inspection-platform",
    title: "Digital Inspection Platform",
    category: "Web Development",
    summary:
      "A field-ready web application for capturing, organizing, and reporting inspection data.",
    challenge:
      "Field teams relied on paper forms and later manual data entry. Reports were inconsistent, and stakeholders had limited access to real-time information.",
    approach:
      "We prioritized mobile usability, offline-capable form design, and a clear data model that supported both field capture and back-office reporting.",
    solution:
      "A responsive web application with structured inspection forms, photo capture, automated report generation, and an admin dashboard for review and export.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Cloud storage",
      "PDF generation",
    ],
    outcome:
      "Field teams completed inspections digitally on-site, eliminating duplicate data entry and providing stakeholders with consistent, accessible reports.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
