interface Props {
  children: React.ReactNode;
}

export function Chip({ children }: Props) {
  return (
    <span className=" rounded-lg border border-(--border) px-3 py-2 text-sm text-slate-300">
      {children}
    </span>
  );
}
