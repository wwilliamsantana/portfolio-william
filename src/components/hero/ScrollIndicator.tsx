"use client";

import { motion } from "framer-motion";

import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className=" absolute bottom-20 left-1/2 -translate-x-1/2"
    >
      <ChevronDown size={26} className="text-(--muted)" />
    </motion.div>
  );
}
