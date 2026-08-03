interface Props {
  children: React.ReactNode;
}

export function Badge({ children }: Props) {
  return (
    <span className="rounded-full border border-(--border) bg-(--surface) px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-(--primary)">
      {children}
    </span>
  );
}
