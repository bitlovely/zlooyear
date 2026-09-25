"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroHeadline() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative z-10 max-w-5xl">
      <motion.p
        className="text-[0.7rem] font-semibold tracking-[0.22em] text-accent uppercase"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
      >
        Zlooyear
      </motion.p>

      <motion.h1
        className="mt-6 text-[1.85rem] font-semibold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.12] text-pretty"
        initial={reducedMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: reducedMotion ? 0 : 0.08, ease }}
      >
        We turn complex technology challenges into{" "}
        <Emphasis delay={0.28} reducedMotion={!!reducedMotion}>
          reliable software
        </Emphasis>
        ,{" "}
        <Emphasis delay={0.4} reducedMotion={!!reducedMotion}>
          scalable infrastructure
        </Emphasis>
        , and{" "}
        <Emphasis delay={0.52} reducedMotion={!!reducedMotion}>
          sustainable digital solutions
        </Emphasis>
        .
      </motion.h1>
    </div>
  );
}

function Emphasis({
  children,
  delay,
  reducedMotion,
}: {
  children: React.ReactNode;
  delay: number;
  reducedMotion: boolean;
}) {
  return (
    <motion.span
      className="relative inline text-accent"
      initial={reducedMotion ? false : { opacity: 0.35 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: reducedMotion ? 0 : delay, ease }}
    >
      {children}
      <motion.span
        className="absolute inset-x-0 -bottom-[0.12em] h-[0.08em] origin-left rounded-full bg-accent/25"
        initial={reducedMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.65,
          delay: reducedMotion ? 0 : delay + 0.15,
          ease,
        }}
        aria-hidden="true"
      />
    </motion.span>
  );
}

export function HeroBrandBackdrop({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_8%,rgba(0,102,255,0.07),transparent_46%),radial-gradient(ellipse_at_90%_70%,rgba(0,102,255,0.04),transparent_40%)]" />

      <motion.p
        className="absolute left-1/2 top-[46%] w-[165%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none text-center text-[clamp(4.75rem,24vw,19rem)] font-bold leading-none tracking-[-0.065em] text-foreground/[0.035] sm:tracking-[-0.075em]"
        initial={reducedMotion ? false : { opacity: 0, scale: 1.06 }}
        animate={
          reducedMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: [1, 1.02, 1] }
        }
        transition={
          reducedMotion
            ? { duration: 0.5 }
            : {
                opacity: { duration: 1.1, ease },
                scale: {
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }
        }
      >
        ZLOOYEAR
      </motion.p>
    </div>
  );
}
