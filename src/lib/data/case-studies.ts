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
    slug: "blockdocsqr",
    title: "BlockDocsQR",
    category: "PropTech Platform",
    summary:
      "A property compliance platform for uploading building safety documents, generating permanent QR codes, and giving tenants, inspectors, and contractors instant access without a login or app.",
    challenge:
      "Property managers need a simple way to share compliance documents for each building while keeping records current, accessible, and easy to verify in the field. Traditional sharing methods create friction for residents, contractors, and inspectors.",
    approach:
      "We designed the platform around fast public access and low-friction administration: building-level document management, permanent QR destinations, expiry tracking, and operational alerts for teams managing compliance at scale.",
    solution:
      "A web application with role-based admin, document upload workflows, permanent QR code generation, dashboard expiry alerts, Resend email notifications, and print-ready PDF/PNG QR exports for real-world deployment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Resend",
      "PDF/PNG export",
    ],
    outcome:
      "BlockDocsQR gives property teams a practical way to publish compliance information and maintain document visibility across buildings. The product is also being prepared for submission to the 2026 Property Management Awards in the PropTech Innovation category.",
  },
  {
    slug: "vettique",
    title: "Vettique",
    category: "AI Integration",
    summary:
      "AI-powered supplier vetting for Amazon and Shopify sellers sending deposits to overseas suppliers they have never met.",
    challenge:
      "Ecommerce sellers often make high-risk deposit payments with limited visibility into supplier credibility. Manual checks are inconsistent, slow, and difficult to standardize before money is wired.",
    approach:
      "We structured the product around a clear decision workflow: collect supplier signals, analyze them across defined risk dimensions, and present a verdict that is understandable to non-technical business users.",
    solution:
      "A subscription platform where Google Gemini evaluates payment terms, credentials, pricing, communication, location, and platform history to produce a 0-100 score, red/amber/green flags, and a Proceed / Caution / Do Not Wire recommendation. The product also includes Stripe billing and saved report history.",
    technologies: [
      "Next.js",
      "Google Gemini",
      "Stripe",
      "TypeScript",
      "Report history",
    ],
    outcome:
      "Vettique turns supplier due diligence into a repeatable pre-payment workflow, helping sellers make faster and more informed decisions before sending deposits overseas.",
  },
  {
    slug: "fdin",
    title: "Fire Door Inspectors Network (FDIN)",
    category: "Directory Platform",
    summary:
      "A UK-wide network and public directory connecting verified fire door inspectors, surveyors, and installers with property managers and contractors.",
    challenge:
      "Property managers need to find qualified fire door professionals quickly, while inspectors need a trusted way to demonstrate credentials and compliance. Verification requirements must be clear, consistent, and administratively manageable.",
    approach:
      "We built the platform around two audiences: professionals applying for verification, and clients searching for compliant specialists. The workflows emphasize document review, trust signals, and discoverability.",
    solution:
      "A searchable public directory with inspector application flows, certification and insurance uploads, DBS check collection, admin verification workflows, and a Verified Inspector badge aligned to BS 8214 and the Fire Safety (England) Regulations 2022.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Admin workflows",
      "Document uploads",
      "Search directory",
    ],
    outcome:
      "FDIN creates a more transparent route between property stakeholders and verified fire door professionals, combining compliance-oriented onboarding with a practical public discovery experience.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
