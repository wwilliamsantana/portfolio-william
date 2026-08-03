"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ProjectWindow } from "./ProjectWindow";

interface Props {
  image: string;
  title: string;
}

export function ProjectImage({ image, title }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className=" mt-12 overflow-hidden rounded-3xl border border-(--border) bg-(--surface) shadow-2xl"
    >
      <ProjectWindow title={title}>
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          className=" w-full transition-transform duration-500 hover:scale-[1.02]"
        />
      </ProjectWindow>
    </motion.div>
  );
}
