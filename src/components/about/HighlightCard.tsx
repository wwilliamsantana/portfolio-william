"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export function HighlightCard({ title, value, icon: Icon }: Props) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group rounded-3xl border border-(--border) bg-(--surface) p-8 transition-all duration-300 hover:shadow-xl"
    >
      <motion.div
        whileHover={{
          rotate: -8,
          scale: 1.15,
        }}
      >
        <Icon size={28} className="text-blue-500" />
      </motion.div>
      <h3 className="mt-6 text-3xl font-bold">{value}</h3>

      <p className="mt-2 text-(--muted)">{title}</p>
    </motion.article>
  );
}
