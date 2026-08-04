import Link from "next/link";
import { navigation } from "@/constants/navigation";

export function FooterNavigation() {
  return (
    <div>
      <h4 className="font-semibold">Navigation</h4>

      <ul className="mt-6 space-y-4">
        {navigation.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className=" text-(--muted) transition hover:text-blue-500"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
