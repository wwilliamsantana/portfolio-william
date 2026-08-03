"use client";

import { motion } from "framer-motion";

const shapes = [
  {
    size: 220,
    top: "12%",
    left: "8%",
    duration: 14,
    delay: 0,
  },
  {
    size: 180,
    top: "70%",
    left: "82%",
    duration: 18,
    delay: 2,
  },
  {
    size: 140,
    top: "18%",
    left: "86%",
    duration: 16,
    delay: 1,
  },
  {
    size: 260,
    top: "76%",
    left: "14%",
    duration: 22,
    delay: 3,
  },
];

export function FloatingShapes() {
  return (
    <>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{
            y: 0,
          }}
          animate={{
            y: [-18, 18, -18],
            x: [-8, 8, -8],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
          className=" pointer-events-none absolute rounded-full border border-(--border) bg-(--surface) opacity-20 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
        />
      ))}
    </>
  );
}
