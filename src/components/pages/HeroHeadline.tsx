"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const ideaWords = ["Idea", "Idée", "Idee", "Ideia"];
const productWords = ["Product", "Produit", "Produkt", "Produto"];

function HeroEmphasizedWord({
  words,
  label,
  delay = 0,
  reducedMotion,
}: {
  words: string[];
  label: string;
  delay?: number;
  reducedMotion: boolean | null;
}) {
  const [index, setIndex] = useState(0);
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  useEffect(() => {
    if (reducedMotion) return;

    let intervalId = 0;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setIndex((current) => (current + 1) % words.length);
      }, 2800);
    }, Math.round(delay * 1000) + 900);

    return () => {
      window.clearTimeout(startId);
      window.clearInterval(intervalId);
    };
  }, [delay, reducedMotion, words.length]);

  return (
    <span
      className="relative inline-grid align-baseline"
      aria-label={label}
    >
      <span
        className="invisible col-start-1 row-start-1 font-semibold"
        aria-hidden="true"
      >
        {longest}
      </span>

      <span className="relative col-start-1 row-start-1 h-[1.15em] overflow-hidden">
        {reducedMotion ? (
          <span className="bg-gradient-to-r from-accent via-sky-300 to-accent-hover bg-clip-text font-semibold text-transparent">
            {words[0]}
          </span>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={words[index]}
              className="absolute inset-x-0 top-0 bg-gradient-to-r from-accent via-sky-300 to-accent-hover bg-clip-text font-semibold text-transparent"
              initial={{ y: "110%", opacity: 0, filter: "blur(4px)" }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{ y: "-110%", opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease }}
              aria-hidden="true"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        )}

        {!reducedMotion && (
          <motion.span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center bg-gradient-to-r from-transparent via-accent/80 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0.4, 0.95, 0.4] }}
            transition={{
              scaleX: { duration: 0.7, delay: delay + 0.2, ease },
              opacity: {
                duration: 2.8,
                delay: delay + 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            aria-hidden="true"
          />
        )}
      </span>
    </span>
  );
}

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
          From{" "}
          <HeroEmphasizedWord
            words={ideaWords}
            label="Idea"
            delay={0.12}
            reducedMotion={reducedMotion}
          />{" "}
          to{" "}
          <HeroEmphasizedWord
            words={productWords}
            label="Product"
            delay={0.22}
            reducedMotion={reducedMotion}
          />
          , Powered by AI
        </motion.h1>

        <motion.p
          className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reducedMotion ? 0 : 0.14, ease }}
        >
          We help businesses turn ideas into real, scalable software products —
          from the ground up, using AI to build faster and work smarter.
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
