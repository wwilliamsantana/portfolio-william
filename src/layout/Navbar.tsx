"use client";

import Link from "next/link";

import { navigation } from "@/constants/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          William Santana
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
