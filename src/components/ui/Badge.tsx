interface Props {
  children: React.ReactNode;
}

export function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-(--primary) bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-(--primary)">
      {children}
    </span>
  );
}
