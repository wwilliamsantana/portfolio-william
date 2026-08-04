"use client";
import { highlights } from "@/data/about";
import { HighlightCard } from "./HighlightCard";
import { StaggerContainer } from "./StaggerContainer";
import { StaggerItem } from "./StaggerItem";

export function AboutHighlights() {
  return (
    <StaggerContainer>
      <section className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => (
          <StaggerItem key={item.title}>
            <HighlightCard {...item} />
          </StaggerItem>
        ))}
      </section>
    </StaggerContainer>
  );
}
