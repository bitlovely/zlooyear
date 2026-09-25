"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * 2026 winning hero pattern for service brands:
 * brand signal → outcome headline → how subhead → one CTA → proof visual (logo)
 */
export function HeroContent() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-16">
      <div className="max-w-2xl">
        <motion.p
          className="text-[0.6875rem] font-semibold tracking-[0.24em] text-accent uppercase"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          Technology consulting
        </motion.p>

        <motion.h1
          className="mt-5 text-[2.35rem] font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05] text-balance"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.06, ease }}
        >
          Turn complex tech into software that lasts.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reducedMotion ? 0 : 0.14, ease }}
        >
          Zlooyear builds reliable systems, scalable infrastructure, and
          sustainable digital solutions for businesses that need to move forward
          with confidence.
        </motion.p>

        <motion.p
          className="mt-9 text-sm text-muted-foreground"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.22, ease }}
        >
          Engineering · AI · Digital products
        </motion.p>
      </div>

      <motion.div
        className="relative mx-auto flex w-full max-w-[20rem] items-center justify-center sm:max-w-[24rem] lg:ml-auto lg:mr-0"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.18, ease }}
      >
        <div
          className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_68%)]"
          aria-hidden="true"
        />
        <motion.div
          className="relative"
          animate={
            reducedMotion ? undefined : { y: [0, -10, 0], rotate: [0, 1.2, 0] }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Image
            src="/brand/logo-mark.png?v=11"
            alt="Zlooyear"
            width={360}
            height={430}
            priority
            className="relative z-10 h-auto w-full max-w-[16rem] object-contain drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)] sm:max-w-[19rem]"
          />
        </motion.div>
      </motion.div>
    </div>
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
      {/* 2026 mesh/spotlight field */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(59,130,246,0.18),transparent_42%),radial-gradient(ellipse_at_85%_20%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(ellipse_at_50%_100%,rgba(59,130,246,0.06),transparent_45%)]" />

      <motion.p
        className="absolute left-1/2 top-[30%] w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none text-center text-[clamp(4rem,20vw,15rem)] font-bold leading-none tracking-[-0.07em] text-foreground/[0.045] sm:top-[28%] sm:w-[140%] sm:tracking-[-0.075em]"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={
          reducedMotion
            ? { opacity: 1 }
            : { opacity: 1, scale: [1, 1.015, 1] }
        }
        transition={
          reducedMotion
            ? { duration: 0.4 }
            : {
                opacity: { duration: 1 },
                scale: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }
        }
      >
        ZLOOYEAR
      </motion.p>
    </div>
  );
}
