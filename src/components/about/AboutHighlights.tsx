import { highlights } from "@/data/about";
import { HighlightCard } from "./HighlightCard";

export function AboutHighlights() {
  return (
    <section className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {highlights.map((item) => (
        <HighlightCard key={item.title} {...item} />
      ))}
    </section>
  );
}
