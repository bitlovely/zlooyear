"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeDirection = "up" | "left" | "right";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: FadeDirection;
};

const fadeOffset: Record<FadeDirection, { x?: number; y?: number }> = {
  up: { y: 32 },
  left: { x: -40, y: 12 },
  right: { x: 40, y: 12 },
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = fadeOffset[direction];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  return <div className={cn(className)}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
  index = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  direction?: FadeDirection;
}) {
  const prefersReducedMotion = useReducedMotion();
  const offset = fadeOffset[direction];

  if (prefersReducedMotion) {
    return <div className={cn("h-full", className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: 0.08 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("h-full", className)}
    >
      {children}
    </motion.div>
  );
}
