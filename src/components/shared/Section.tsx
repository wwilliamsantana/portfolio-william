import { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-28 ${className}`}>
      {children}
    </section>
  );
}
