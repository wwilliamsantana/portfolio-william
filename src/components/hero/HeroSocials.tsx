import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/constants/socialLinks";

const socials = [
  {
    icon: "/github.svg",
    href: socialLinks.github,
  },
  {
    icon: "/linkedin.svg",
    href: socialLinks.linkedin,
  },
  {
    icon: "/email.svg",
    href: socialLinks.email,
  },
];

export function HeroSocials() {
  return (
    <div className="mt-12 flex items-center gap-10">
      {socials.map((social) => {
        return (
          <Link
            key={social.href}
            href={social.href}
            target="_blank"
            className="text-(--muted) transition hover:text-(--foreground)"
          >
            <Image
              className="dark:invert"
              src={social.icon}
              alt={social.href.replace("/", "").replace(".svg", "")}
              width={32}
              height={32}
            />
          </Link>
        );
      })}
    </div>
  );
}
