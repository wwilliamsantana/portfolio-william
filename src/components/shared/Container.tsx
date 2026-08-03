import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 md:px-10 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
