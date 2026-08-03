"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className=" rounded-xl border border-(--border) bg-(--surface) p-3 transition hover:scale-105 "
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
