"use client";

import { motion } from "motion/react";
import { ProjectButtons } from "./ProjectButtons";
import { ProjectImage } from "./ProjectImage";
import { ProjectStack } from "./ProjectStack";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  demo: string;
  github: string;
  stack: string[];
}

interface Props {
  project: Project;
}

export function FeaturedProject({ project }: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <span className=" rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-500">
        {project.subtitle}
      </span>

      <motion.h3
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="mt-6 text-5xl font-black "
      >
        {project.title}
      </motion.h3>

      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.35,
        }}
        className=" mt-6 max-w-3xl text-lg leading-8 text-(--muted)"
      >
        {project.description}
      </motion.p>

      <ProjectStack stack={project.stack} />

      <ProjectButtons demo={project.demo} github={project.github} />

      <ProjectImage image={project.image} title={project.title} />
    </motion.article>
  );
}
