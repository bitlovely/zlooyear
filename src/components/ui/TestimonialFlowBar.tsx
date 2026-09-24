"use client";

import { useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

type TestimonialFlowBarProps = {
  className?: string;
};

export function TestimonialFlowBar({ className }: TestimonialFlowBarProps) {
  const reducedMotion = useReducedMotion();
  // Triple for seamless -33.333% loop
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      className={cn(
        "relative border-t border-border/60 bg-background/40 overflow-hidden backdrop-blur-sm",
        className,
      )}
      aria-label="Client feedback"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20"
        aria-hidden="true"
      />

      <div
        className={cn(
          "flex w-max items-center gap-10 py-3.5 sm:gap-14 sm:py-4",
          !reducedMotion && "animate-marquee",
        )}
      >
        {items.map((item, index) => (
          <figure
            key={`${item.name}-${index}`}
            className="flex max-w-[min(36rem,78vw)] shrink-0 items-start gap-3"
          >
            <div className="min-w-0">
              <blockquote className="text-sm leading-relaxed text-foreground/85 line-clamp-2 sm:text-[0.9375rem]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-1 text-xs font-medium tracking-wide text-accent uppercase">
                — {item.name}
              </figcaption>
            </div>
            <span
              className="mt-2 ml-2 h-1 w-1 shrink-0 rounded-full bg-border sm:ml-4"
              aria-hidden="true"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
