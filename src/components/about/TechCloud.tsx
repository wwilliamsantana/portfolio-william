"use client";
import { techStack } from "@/data/about";
import { motion } from "framer-motion";

export function TechCloud() {
  return (
    <section className="mt-28">
      <h3 className="text-3xl font-bold">Tech Stack</h3>

      <div className=" mt-10 flex flex-wrap gap-4">
        {techStack.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            transition={{
              duration: 0.1,
            }}
            className="rounded-full border border-(--border) bg-(--surface) px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-blue-500 hover:bg-blue-500  hover:shadow-lg "
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
