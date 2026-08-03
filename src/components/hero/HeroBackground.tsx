"use client";

import { motion } from "motion/react";
import { MouseGlow } from "./MouseGlow";
import { FloatingShapes } from "./FloatingShapes";

export function HeroBackground() {
  return (
    <>
      <MouseGlow />
      <FloatingShapes />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className=" absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[160px]"
      />

      <div className=" absolute inset-0 opacity-[0.04] bg:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px) bg-size:[60px_60px]" />
    </>
  );
}
