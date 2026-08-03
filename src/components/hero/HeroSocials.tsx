import Link from "next/link";

import { FolderGit2, Mail, Link as LinkLinkedin } from "lucide-react";

export function HeroSocials() {
  return (
    <div className="mt-12 flex items-center gap-6">
      <Link
        href="https://github.com/wwilliamsantana"
        target="_blank"
        className="text-(--muted) transition hover:text-(--foreground)"
      >
        <FolderGit2 size={22} />
      </Link>

      <Link
        href="https://linkedin.com/in/wwilliamsantana"
        target="_blank"
        className="text-(--muted) transition hover:text-(--foreground)"
      >
        <LinkLinkedin size={22} />
      </Link>

      <Link
        href="mailto:email@email.com"
        className="text-(--muted) transition hover:text-(--foreground)"
      >
        <Mail size={22} />
      </Link>
    </div>
  );
}
