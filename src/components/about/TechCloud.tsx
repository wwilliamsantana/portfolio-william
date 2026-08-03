import { techStack } from "@/data/about";

export function TechCloud() {
  return (
    <section className="mt-28">
      <h3 className="text-3xl font-bold">Tech Stack</h3>

      <div className=" mt-10 flex flex-wrap gap-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-(--border) bg-(--surface) px-5 py-3 text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
