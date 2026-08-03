import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const variants = {
    primary: "bg-(--primary) hover:bg-blue-700 text-white",

    secondary:
      "border border-(--border) bg-transparent hover:bg-slate-900 text-white",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    />
  );
}
