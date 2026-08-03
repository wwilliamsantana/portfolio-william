interface Props {
  title: string;
}

export function WindowBar({ title }: Props) {
  return (
    <header className=" flex items-center justify-between border-b border-(--border) bg-(--surface) px-5 py-4 backdrop-blur-xl">
      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <span className=" text-sm font-medium text-(--muted)">{title}</span>

      <div className="w-14" />
    </header>
  );
}
