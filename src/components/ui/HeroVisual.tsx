"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroVisualProps = {
  className?: string;
};

/**
 * Quiet brand focal: the mark floats over a single orbital ring —
 * present systems moving toward what's next.
 */
export function HeroVisual({ className }: HeroVisualProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[24rem]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_center,rgba(61,142,245,0.16),transparent_68%)]" />

      {/* Single orbital path */}
      <motion.div
        className="absolute inset-[12%] rounded-full border border-accent/25"
        style={{
          transform: "rotateX(66deg) rotateZ(12deg)",
          transformStyle: "preserve-3d",
        }}
        animate={reducedMotion ? undefined : { rotateZ: 360 }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 48, repeat: Infinity, ease: "linear" }
        }
      />
      <div
        className="absolute inset-[22%] rounded-full border border-border/80"
        style={{ transform: "rotateX(66deg) rotateZ(-28deg)" }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={
          reducedMotion
            ? undefined
            : { y: [0, -10, 0], rotate: [0, 1.5, 0] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src="/brand/logo-mark.png?v=11"
          alt=""
          width={280}
          height={334}
          className="h-[58%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(61,142,245,0.18)]"
          priority
        />
      </motion.div>
    </div>
  );
}
