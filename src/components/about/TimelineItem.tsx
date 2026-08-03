interface Props {
  year: string;
  title: string;
  description: string;
}

export function TimelineItem({ year, title, description }: Props) {
  return (
    <article className="relative pl-8">
      <div className=" absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500" />

      <span className="text-sm font-semibold text-blue-500">{year}</span>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-(--muted)">{description}</p>
    </article>
  );
}
