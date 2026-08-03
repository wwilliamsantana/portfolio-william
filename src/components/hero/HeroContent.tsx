"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";

import { HeroActions } from "./HeroActions";
import { HeroSocials } from "./HeroSocials";

export function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mx-auto flex max-w-4xl flex-col items-center text-center"
    >
      <Badge>Frontend Engineer</Badge>

      <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
        William
        <br />
        Santana
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-(--muted) md:text-xl">
        Building modern digital experiences with React, Next.js, TypeScript and
        clean user interfaces focused on performance, accessibility and
        delightful user experiences.
      </p>

      <HeroActions />

      <HeroSocials />
    </motion.div>
  );
}
