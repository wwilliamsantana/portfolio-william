"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  value: string;
  href?: string;
}

export function ContactCard({ icon, title, value, href }: Props) {
  const content = (
    <motion.article
      whileHover={{
        y: -6,
      }}
      className="rounded-3xl border border-(--border) bg-(--surface) p-7 transition"
    >
      <Image
        src={icon}
        alt="title"
        width={28}
        height={28}
        className="text-blue-500 dark:invert"
      />
      <h3 className="mt-6 font-semibold">{title}</h3>
      <p className="mt-2 text-(--muted)">{value}</p>
    </motion.article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} target="_blank">
      {content}
    </Link>
  );
}
