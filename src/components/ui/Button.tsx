"use client";

import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}

export function Button({
  asChild = false,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  const Component = asChild ? Slot : "button";

  const variants = {
    primary: "bg-[color:var(--primary)] text-white hover:opacity-90",

    secondary:
      "border border-[color:var(--border)] bg-[color:var(--surface)] hover:bg-[color:var(--border)]",

    ghost: "hover:bg-[color:var(--surface)]",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",

    md: "h-11 px-6",

    lg: "h-14 px-8 text-lg",
  };

  return (
    <Component
      className={` inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-(--primary)
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    />
  );
}
