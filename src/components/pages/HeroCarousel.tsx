"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Service } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type HeroCarouselProps = {
  slides: Service[];
};

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const safeSlides = useMemo(() => slides.slice(0, 3), [slides]);

  useEffect(() => {
    if (reducedMotion) return;
    if (safeSlides.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % safeSlides.length);
    }, 6500);

    return () => window.clearInterval(id);
  }, [reducedMotion, safeSlides.length]);

  const active = safeSlides[activeIndex];

  return (
    <div className="relative">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] text-balance">
        {SITE.tagline}
      </h1>

      <div className="mt-6">
        <AnimatePresence mode="wait" initial={false}>
          {active && (
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-base font-medium text-foreground/80 italic">
                {SITE.motto}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {active.hero.subheadline}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {safeSlides.map((s, idx) => (
                  <button
                    key={s.slug}
                    type="button"
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      idx === activeIndex
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:bg-muted/40",
                    )}
                    aria-label={`Show ${s.shortTitle}`}
                    aria-current={idx === activeIndex}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {s.number} {s.shortTitle}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/contact">Start a Project</Button>
        <Button href="/services" variant="secondary">
          Explore Our Services
        </Button>
      </div>
    </div>
  );
}

