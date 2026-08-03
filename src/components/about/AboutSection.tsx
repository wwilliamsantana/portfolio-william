import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AboutIntro } from "./AboutIntro";
import { AboutHighlights } from "./AboutHighlights";
import { TechCloud } from "./TechCloud";
import { Timeline } from "./Timeline";

export function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          badge="About"
          title="Building products, not just interfaces."
          description="I enjoy transforming complex ideas into intuitive and modern digital experiences."
        />

        <AboutIntro />

        <AboutHighlights />

        <TechCloud />

        <Timeline />
      </Container>
    </Section>
  );
}
