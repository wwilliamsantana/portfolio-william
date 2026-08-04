interface Props {
  badge: string;
  title: string;
  description: string;
}

export function SectionHeader({ badge, title, description }: Props) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <span className="text-sm font-semibold text-blue-500 uppercase">
        {badge}
      </span>
      <h2 className="mt-8 text-5xl font-black">{title}</h2>
      <p className=" mt-6 text-lg text-(--muted)">{description}</p>
    </div>
  );
}
