import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function HeroActions() {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
      <Button asChild size="lg">
        <Link href="#projects">View Projects</Link>
      </Button>

      <Button variant="secondary" asChild size="lg">
        <Link href="https://github.com/wwilliamsantana" target="_blank">
          GitHub
        </Link>
      </Button>
    </div>
  );
}
