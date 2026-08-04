import { timeline } from "@/data/about";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  return (
    <section className="mt-28">
      <h3 className="text-3xl font-bold">Journey</h3>

      <div className=" relative mt-12 space-y-12 before:absolute before:left-1.25 before:top-0 before:h-full before:w-px before:bg-(--border)">
        {timeline.map((item) => (
          <TimelineItem key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
}
