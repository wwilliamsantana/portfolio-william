"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
