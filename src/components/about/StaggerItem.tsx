"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const item = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
    },
  },
};

export function StaggerItem({ children }: Props) {
  return <motion.div variants={item}>{children}</motion.div>;
}
