import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title?: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  title,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Quote className="h-5 w-5 text-accent" strokeWidth={1.75} />
        <p className="text-sm font-medium text-accent">Client feedback</p>
      </div>

      <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-foreground">
        {quote}
      </blockquote>

      <figcaption className="mt-6">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        {title && (
          <p className="mt-1 text-sm text-muted-foreground">{title}</p>
        )}
      </figcaption>
    </figure>
  );
}

