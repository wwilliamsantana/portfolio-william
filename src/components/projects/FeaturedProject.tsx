import { ProjectButtons } from "./ProjectButtons";
import { ProjectImage } from "./ProjectImage";
import { ProjectStack } from "./ProjectStack";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  demo: string;
  github: string;
  stack: string[];
}

interface Props {
  project: Project;
}

export function FeaturedProject({ project }: Props) {
  return (
    <article>
      <span className=" rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-500">
        {project.subtitle}
      </span>

      <h3 className="mt-6 text-5xl font-black ">{project.title}</h3>

      <p className=" mt-6 max-w-3xl text-lg leading-8 text-(--muted)">
        {project.description}
      </p>

      <ProjectStack stack={project.stack} />

      <ProjectButtons demo={project.demo} github={project.github} />

      <ProjectImage image={project.image} title={project.title} />
    </article>
  );
}
