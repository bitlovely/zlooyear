"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const outcomes = [
  "reliable software",
  "scalable infrastructure",
  "sustainable digital solutions",
] as const;

export function HeroHeadline() {
  const reducedMotion = useReducedMotion();

  return (
    <h1 className="relative z-10 max-w-4xl">
      <motion.span
        className="block text-[1.2rem] font-medium tracking-[-0.02em] text-muted-foreground sm:text-xl md:text-2xl lg:text-[1.85rem] lg:leading-[1.4]"
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease }}
      >
        We turn complex technology challenges into
      </motion.span>

      <span className="mt-6 flex flex-col gap-1 sm:mt-8 sm:gap-2">
        {outcomes.map((line, i) => (
          <OutcomeLine
            key={line}
            text={line}
            index={i}
            isLast={i === outcomes.length - 1}
            reducedMotion={!!reducedMotion}
          />
        ))}
      </span>
    </h1>
  );
}

function OutcomeLine({
  text,
  index,
  isLast,
  reducedMotion,
}: {
  text: string;
  index: number;
  isLast: boolean;
  reducedMotion: boolean;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className="flex items-center gap-3 py-1.5 sm:gap-4 sm:py-2"
      initial={reducedMotion ? false : { opacity: 0, x: -28 }}
      animate={
        reducedMotion
          ? { opacity: 1, x: 0 }
          : {
              opacity: 1,
              x: 0,
              y: [0, -4, 0],
            }
      }
      transition={{
        opacity: {
          duration: 0.75,
          delay: reducedMotion ? 0 : 0.25 + index * 0.16,
          ease,
        },
        x: {
          duration: 0.75,
          delay: reducedMotion ? 0 : 0.25 + index * 0.16,
          ease,
        },
        y: reducedMotion
          ? undefined
          : {
              duration: 4.2 + index * 0.5,
              delay: 1.5 + index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            },
      }}
    >
      <motion.span
        className="hidden h-px shrink-0 bg-accent sm:block"
        initial={reducedMotion ? false : { width: 0, opacity: 0 }}
        animate={{ width: 28, opacity: 1 }}
        transition={{
          duration: 0.55,
          delay: reducedMotion ? 0 : 0.45 + index * 0.16,
          ease,
        }}
        aria-hidden="true"
      />

      <span className="relative inline-block text-[1.55rem] font-semibold tracking-[-0.035em] text-foreground sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
        {words.map((word, wi) => (
          <motion.span
            key={`${word}-${wi}`}
            className="mr-[0.28em] inline-block last:mr-0"
            initial={reducedMotion ? false : { opacity: 0, y: "0.55em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: reducedMotion ? 0 : 0.38 + index * 0.16 + wi * 0.06,
              ease,
            }}
          >
            {word}
          </motion.span>
        ))}
        <span>{isLast ? "." : ","}</span>

        <motion.span
          className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-accent/70"
          initial={reducedMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.75,
            delay: reducedMotion ? 0 : 0.75 + index * 0.16,
            ease,
          }}
          aria-hidden="true"
        />
      </span>
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
        className="absolute left-1/2 top-[44%] w-[165%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none text-center text-[clamp(4.75rem,24vw,19rem)] font-bold leading-none tracking-[-0.065em] text-foreground/[0.04] sm:tracking-[-0.075em]"
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

      <motion.p
        className="absolute bottom-[12%] left-[-2%] select-none text-[clamp(2.25rem,10vw,7rem)] font-semibold tracking-[-0.05em] text-accent/[0.055]"
        animate={
          reducedMotion ? undefined : { x: [0, 24, 0], opacity: [0.5, 1, 0.5] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      >
        ZLOOYEAR
      </motion.p>
    </div>
  );
}
