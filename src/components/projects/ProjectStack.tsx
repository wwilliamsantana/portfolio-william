interface Props {
  stack: string[];
}

export function ProjectStack({ stack }: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {stack.map((item) => (
        <span
          key={item}
          className=" rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
