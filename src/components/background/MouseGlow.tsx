"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function MouseGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 28,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 28,
  });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    }

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className=" absolute h-125 w-125 rounded-full bg-blue-500/15 blur-[140px]"
    />
  );
}
