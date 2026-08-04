"use client";

import { contacts } from "@/constants/socialLinks";
import { ContactCard } from "./ContactCard";

export function ContactLinks() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2">
      {contacts.map((contact) => (
        <ContactCard key={contact.title} {...contact} />
      ))}
    </div>
  );
}
