import { contacts } from "@/constants/socialLinks";
import Link from "next/link";

export function FooterSocial() {
  return (
    <div>
      <h4 className="font-semibold">Connect</h4>

      <ul className="mt-6 space-y-4">
        {contacts.slice(0, -1).map((item) => (
          <li key={item.title}>
            <Link
              href={item.href!}
              target="_blank"
              className=" text-(--muted) transition hover:text-blue-500"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
