"use client";

import { useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

type TestimonialFlowBarProps = {
  className?: string;
};

export function TestimonialFlowBar({ className }: TestimonialFlowBarProps) {
  const reducedMotion = useReducedMotion();
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-zinc-200 bg-zinc-50 text-zinc-900",
        className,
      )}
      aria-label="Client feedback"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-50 to-transparent sm:w-28"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-50 to-transparent sm:w-28"
        aria-hidden="true"
      />

      <div
        className={cn(
          "flex w-max items-center gap-12 py-4 sm:gap-16 sm:py-5",
          !reducedMotion && "animate-marquee",
        )}
      >
        {items.map((item, index) => (
          <figure
            key={`${item.name}-${index}`}
            className="flex max-w-[min(34rem,78vw)] shrink-0 items-baseline gap-4"
          >
            <blockquote className="text-sm leading-relaxed text-zinc-600 line-clamp-2 sm:text-[0.9375rem]">
              “{item.quote}”
            </blockquote>
            <figcaption className="shrink-0 text-[0.65rem] font-semibold tracking-[0.14em] text-blue-600 uppercase">
              {item.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
