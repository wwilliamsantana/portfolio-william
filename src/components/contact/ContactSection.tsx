import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { ContactLinks } from "./ContactLinks";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { SectionHeader } from "../shared/SectionHeader";

export function ContactSection() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeader
          badge="Contact"
          title="Let's build something together."
          description="I'm available for freelance projects, remote opportunities and collaborations. Feel free to reach out."
        />

        <AvailabilityBadge />

        <ContactLinks />
      </Container>
    </Section>
  );
}
