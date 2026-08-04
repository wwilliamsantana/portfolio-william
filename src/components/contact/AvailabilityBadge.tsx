"use client";

import { motion } from "framer-motion";

export function AvailabilityBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="mx-auto mt-16 flex w-fit items-center gap-3 rounded-full border border-(--border) bg-(--surface) px-6 py-3"
    >
      <span className="relative flex h-3 w-3">
        <span className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />

        <span className="relative h-3 w-3 rounded-full bg-green-500" />
      </span>

      <span className="text-sm font-medium">Available for work</span>
    </motion.div>
  );
}
