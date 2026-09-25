"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const outcomes = [
  "reliable software",
  "scalable infrastructure",
  "sustainable digital solutions",
] as const;

export function HeroHeadline() {
  const reducedMotion = useReducedMotion();

  return (
    <h1 className="max-w-4xl">
      <motion.span
        className="block text-[1.65rem] font-medium tracking-[-0.025em] text-muted-foreground sm:text-3xl lg:text-[2.15rem] lg:leading-[1.35]"
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        We turn complex technology challenges into
      </motion.span>

      <span className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
        {outcomes.map((line, i) => (
          <motion.span
            key={line}
            className="flex items-baseline gap-4 sm:gap-5"
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: reducedMotion ? 0 : 0.18 + i * 0.12,
              ease,
            }}
          >
            <span
              className="mt-[0.55em] h-px w-6 shrink-0 bg-accent sm:mt-[0.7em] sm:w-8"
              aria-hidden="true"
            />
            <span className="text-[1.85rem] font-semibold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
              {line}
              {i < outcomes.length - 1 ? "," : "."}
            </span>
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
