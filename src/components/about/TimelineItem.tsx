"use client";
import { motion } from "framer-motion";

interface Props {
  year: string;
  role: string;
  company: string;
  description: string;
}

export function TimelineItem({ year, role, company, description }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.15 }}
        className=" absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500"
      />

      <span className="text-sm font-semibold text-blue-500">{year}</span>
      <h3 className="mt-2 text-xl font-semibold">{role}</h3>
      <p className="mt-2 text-(--muted) font-bold">{company}</p>
      <p className="mt-2 text-(--muted)">{description}</p>
    </motion.article>
  );
}
