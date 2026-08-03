"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export function TiltCard({ children }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]));

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x - 0.2);
    mouseY.set(y - 0.2);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
    >
      {children}
    </motion.div>
  );
}
