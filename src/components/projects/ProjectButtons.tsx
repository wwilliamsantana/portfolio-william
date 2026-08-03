import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Props {
  demo: string;
  github: string;
}

export function ProjectButtons({ demo, github }: Props) {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button asChild>
        <Link href={demo} target="_blank">
          Live Demo
          <ArrowUpRight size={18} />
        </Link>
      </Button>

      <Button asChild variant="secondary">
        <Link href={github} target="_blank" className="flex items-center gap-4">
          GitHub
          <Image
            className="dark:invert"
            src={"/github.svg"}
            alt="GitHub"
            width={18}
            height={18}
          />
        </Link>
      </Button>
    </div>
  );
}
