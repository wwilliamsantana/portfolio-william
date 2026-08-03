interface Props {
  children: React.ReactNode;
}

export function Chip({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-lg border border-(--border) px-3 py-2 text-sm text-(--foreground)">
      {children}
    </span>
  );
}
