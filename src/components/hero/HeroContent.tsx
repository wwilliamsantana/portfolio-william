"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";

import { HeroActions } from "./HeroActions";
import { HeroSocials } from "./HeroSocials";

export function HeroContent() {
  return (
    <div className="flex max-w-4xl flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Badge>Frontend Engineer</Badge>
      </motion.div>

      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className=" mt-8 text-6xl font-black leading-none tracking-tight md:text-8xl"
      >
        William
        <br />
        Santana
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
        }}
        className=" mt-8 max-w-2xl text-xl leading-9 text-(--muted)"
      >
        Building modern digital experiences using React, Next.js, TypeScript and
        beautiful UI.
      </motion.p>

      <HeroActions />
      <HeroSocials />
    </div>
  );
}
