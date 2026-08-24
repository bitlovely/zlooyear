import { cn } from "@/lib/utils";

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  className?: string;
  isLast?: boolean;
};

export function ProcessStep({
  number,
  title,
  description,
  className,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className={cn("relative flex flex-col", className)}>
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-accent">
          {number}
        </span>
        {!isLast && (
          <div
            className="hidden lg:block absolute top-5 left-10 h-px w-[calc(100%-2.5rem)] bg-border"
            aria-hidden="true"
          />
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
