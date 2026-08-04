import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { ContactLinks } from "./ContactLinks";
import { AvailabilityBadge } from "./AvailabilityBadge";

export function ContactSection() {
  return (
    <Section id="contact">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold text-blue-500">CONTACT</span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight">
            {"Let's build something together."}
          </h2>

          <p className="mt-8 text-lg leading-8 text-(--muted)">
            {
              "I'm available for freelance projects, remote opportunities and collaborations. Feel free to reach out."
            }
          </p>
        </div>

        <AvailabilityBadge />

        <ContactLinks />
      </Container>
    </Section>
  );
}
