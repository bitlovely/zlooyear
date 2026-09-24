"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroSculptureProps = {
  className?: string;
};

/**
 * Symbolic 3D form: a crystalline core (systems built today)
 * wrapped by twin orbital paths (adaptation toward what's next) —
 * echoing the dual-flow logo and the site motto.
 */
export function HeroSculpture({ className }: HeroSculptureProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem]",
        className,
      )}
      aria-hidden="true"
    >
      {/* Soft depth field */}
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,168,248,0.16),rgba(26,92,255,0.08)_45%,transparent_70%)]" />

      <div
        className="absolute inset-0"
        style={{ perspective: "900px", perspectiveOrigin: "50% 45%" }}
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={
            reducedMotion
              ? undefined
              : { rotateY: 360, rotateX: [12, 18, 12] }
          }
          transition={
            reducedMotion
              ? undefined
              : {
                  rotateY: {
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  rotateX: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
        >
          {/* Outer orbital ring — future path */}
          <div
            className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#4da3ff]/70"
            style={{
              transform: "translate(-50%, -50%) rotateX(68deg) rotateZ(18deg)",
              boxShadow:
                "0 0 24px rgba(77,163,255,0.25), inset 0 0 18px rgba(77,163,255,0.12)",
            }}
          />

          {/* Inner orbital ring — present systems */}
          <div
            className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-accent/80"
            style={{
              transform: "translate(-50%, -50%) rotateX(68deg) rotateZ(-42deg)",
              boxShadow:
                "0 0 20px rgba(99,168,248,0.28), inset 0 0 14px rgba(99,168,248,0.15)",
            }}
          />

          {/* Twin ribbon — logo-inspired dual flow */}
          <Ribbon
            color="#1a5cff"
            transform="translate(-50%, -50%) rotateZ(25deg) rotateY(18deg)"
            delay={0}
            reducedMotion={!!reducedMotion}
          />
          <Ribbon
            color="#5eb8ff"
            transform="translate(-50%, -50%) rotateZ(-155deg) rotateY(-18deg)"
            delay={0.15}
            reducedMotion={!!reducedMotion}
          />

          {/* Crystalline core — build for today */}
          <motion.div
            className="absolute left-1/2 top-1/2"
            style={{ transformStyle: "preserve-3d" }}
            animate={
              reducedMotion
                ? { x: "-50%", y: "-50%" }
                : {
                    x: "-50%",
                    y: "-50%",
                    rotateY: -360,
                    rotateZ: [0, 8, 0],
                  }
            }
            transition={
              reducedMotion
                ? undefined
                : {
                    rotateY: {
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    rotateZ: {
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          >
            <Crystal />
          </motion.div>

          {/* Data nodes on orbit */}
          {[0, 120, 240].map((deg) => (
            <div
              key={deg}
              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
              style={{
                transform: `translate(-50%, -50%) rotateZ(${deg}deg) rotateX(68deg) translateY(-36%) translateZ(4px)`,
                boxShadow: "0 0 10px rgba(99,168,248,0.7)",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Pixel scatter — digital trails */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { t: "8%", l: "78%", s: 6, c: "bg-[#1a5cff]/70" },
          { t: "18%", l: "86%", s: 4, c: "bg-[#4da3ff]/60" },
          { t: "28%", l: "72%", s: 5, c: "bg-[#1a5cff]/50" },
          { t: "72%", l: "14%", s: 6, c: "bg-[#5eb8ff]/65" },
          { t: "82%", l: "22%", s: 4, c: "bg-accent/55" },
          { t: "64%", l: "10%", s: 5, c: "bg-[#4da3ff]/50" },
        ].map((p, i) => (
          <motion.span
            key={i}
            className={cn("absolute rounded-[1px]", p.c)}
            style={{
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
            }}
            animate={
              reducedMotion
                ? undefined
                : { opacity: [0.35, 0.9, 0.35], y: [0, -4, 0] }
            }
            transition={{
              duration: 3.2 + i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Ribbon({
  color,
  transform,
  delay,
  reducedMotion,
}: {
  color: string;
  transform: string;
  delay: number;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-[58%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-[100%]"
      style={{
        transform,
        background: `linear-gradient(180deg, ${color} 0%, transparent 78%)`,
        opacity: 0.55,
        filter: "blur(0.2px)",
      }}
      animate={reducedMotion ? undefined : { opacity: [0.4, 0.65, 0.4] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function Crystal() {
  const face =
    "absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2";

  return (
    <div
      className="relative h-28 w-28"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front */}
      <div
        className={face}
        style={{
          transform: "translateZ(48px)",
          background:
            "linear-gradient(145deg, rgba(94,184,255,0.55), rgba(26,92,255,0.35))",
          border: "1px solid rgba(126,200,255,0.35)",
          backdropFilter: "blur(2px)",
        }}
      />
      {/* Back */}
      <div
        className={face}
        style={{
          transform: "rotateY(180deg) translateZ(48px)",
          background:
            "linear-gradient(145deg, rgba(99,168,248,0.4), rgba(26,92,255,0.3))",
          border: "1px solid rgba(99,168,248,0.3)",
        }}
      />
      {/* Right */}
      <div
        className={face}
        style={{
          transform: "rotateY(90deg) translateZ(48px)",
          background:
            "linear-gradient(160deg, rgba(26,92,255,0.5), rgba(14,40,120,0.55))",
          border: "1px solid rgba(77,163,255,0.25)",
        }}
      />
      {/* Left */}
      <div
        className={face}
        style={{
          transform: "rotateY(-90deg) translateZ(48px)",
          background:
            "linear-gradient(200deg, rgba(99,168,248,0.45), rgba(20,60,140,0.5))",
          border: "1px solid rgba(99,168,248,0.25)",
        }}
      />
      {/* Top */}
      <div
        className={face}
        style={{
          transform: "rotateX(90deg) translateZ(48px)",
          background:
            "linear-gradient(180deg, rgba(126,200,255,0.5), rgba(99,168,248,0.25))",
          border: "1px solid rgba(126,200,255,0.3)",
        }}
      />
      {/* Bottom */}
      <div
        className={face}
        style={{
          transform: "rotateX(-90deg) translateZ(48px)",
          background:
            "linear-gradient(0deg, rgba(26,92,255,0.45), rgba(10,20,50,0.6))",
          border: "1px solid rgba(77,163,255,0.2)",
        }}
      />
    </div>
  );
}
