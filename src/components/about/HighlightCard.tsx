import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export function HighlightCard({ title, value, icon: Icon }: Props) {
  return (
    <article className=" rounded-3xl border border-(--border) bg-(--surface) p-8">
      <Icon size={28} className="text-blue-500" />

      <h3 className="mt-6 text-3xl font-bold">{value}</h3>

      <p className="mt-2 text-(--muted)">{title}</p>
    </article>
  );
}
