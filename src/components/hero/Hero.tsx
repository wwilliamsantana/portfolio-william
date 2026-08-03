import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  return (
    <Section className="relative overflow-hidden py-0">
      <HeroBackground />

      <Container>
        <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center -mt-28">
          <HeroContent />
          <ScrollIndicator />
        </div>
      </Container>
    </Section>
  );
}
