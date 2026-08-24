"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroSlides } from "@/lib/data/hero-slides";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = heroSlides[activeIndex];

  useEffect(() => {
    if (reducedMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(id);
  }, [reducedMotion]);

  function goTo(index: number) {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  }

  return (
    <section className="relative overflow-hidden bg-[#0b0b0c] text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24 lg:min-h-[40rem]">
        <div className="relative z-10 flex max-w-xl flex-col">
          {/* Fixed-height copy area so slide text length doesn't change layout */}
          <div className="relative min-h-[14.5rem] sm:min-h-[16.5rem] lg:min-h-[18rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.number}
                className="absolute inset-0"
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-sm font-medium tracking-[0.2em] text-white/45">
                  {active.number}
                </p>
                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] text-balance">
                  {active.headline}
                </h1>
                <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg text-pretty">
                  {active.subheadline}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Start a Project</Button>
            <Button href="/services" variant="onDark">
              Explore Our Services
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Hero slides"
            >
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.number}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Show slide ${slide.number}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    idx === activeIndex
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/30 hover:bg-white/50",
                  )}
                  onClick={() => goTo(idx)}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-[28rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.image}
              className="absolute inset-0"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                priority={activeIndex === 0}
                className="object-cover object-center"
                sizes="(min-width: 1024px) 36rem, 100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
