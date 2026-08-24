import type { CaseStudy } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
  className?: string;
};

export function CaseStudyCard({ study, className }: CaseStudyCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border border-border bg-surface overflow-hidden",
        className,
      )}
    >
      <div className="h-1 bg-gradient-to-r from-accent/80 to-accent/30" />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <span className="text-xs font-medium tracking-wide text-accent uppercase">
          {study.category}
        </span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
          {study.title}
        </h3>
        <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
          {study.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {study.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

type CaseStudyDetailProps = {
  study: CaseStudy;
};

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const sections = [
    { label: "Challenge", content: study.challenge },
    { label: "Approach", content: study.approach },
    { label: "Solution", content: study.solution },
    { label: "Outcome", content: study.outcome },
  ];

  return (
    <article className="rounded-2xl border border-border bg-surface overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-accent/80 to-accent/30" />
      <div className="p-6 sm:p-10">
        <span className="text-xs font-medium tracking-wide text-accent uppercase">
          {study.category}
        </span>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {study.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">{study.summary}</p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {sections.map((section) => (
            <div key={section.label}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {section.label}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
            Technology
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
