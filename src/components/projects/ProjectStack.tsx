"use client";
import { motion } from "motion/react";

interface Props {
  stack: string[];
}

export function ProjectStack({ stack }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.7,
      }}
      className=" mt-6"
    >
      {stack.map((item, index) => (
        <motion.span
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45 + index * 0.08,
          }}
          key={item}
          className=" rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium"
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}
