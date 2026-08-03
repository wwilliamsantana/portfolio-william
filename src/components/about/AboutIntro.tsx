"use client";

import { motion } from "framer-motion";

export function AboutIntro() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className=" mx-auto mt-16 max-w-4xl text-center"
    >
      <h3 className="text-4xl font-bold leading-tight">
        Building digital products that people enjoy using.
      </h3>

      <p className=" mx-auto mt-8 max-w-3xl text-lg leading-9 text-(--muted)">
        I enjoy turning complex ideas into simple, elegant and maintainable
        interfaces.
        <br />
        <br />
        My focus is building scalable applications using React, Next.js and
        TypeScript while delivering great user experiences with attention to
        performance and design.
      </p>

      <div className=" mt-12 text-sm uppercase tracking-[0.3em] text-(--muted)">
        William Santana • Front-End Engineer • Brazil
      </div>
    </motion.div>
  );
}
