import { Container } from "@/components/shared/Container";
import { FooterBrand } from "./FooterBrand";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSocial } from "./FooterSocial";
import { FooterCopyright } from "./FooterCopyright";

export function Footer() {
  return (
    <footer className=" mt-40 border-t border-(--border) bg-(--background)">
      <Container>
        <div className=" grid gap-14 py-20 lg:grid-cols-[2fr_1fr_1fr]">
          <FooterBrand />
          <FooterNavigation />
          <FooterSocial />
        </div>
        <FooterCopyright />
      </Container>
    </footer>
  );
}
