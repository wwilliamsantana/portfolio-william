import { portfolioProjects } from "@/data/portfolio";
import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeaturedProject } from "./FeaturedProject";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader
          badge="Projects"
          title="Featured Work"
          description="A selection of projects focused on modern interfaces, scalability and user experience."
        />

        <div className="space-y-36">
          {portfolioProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
