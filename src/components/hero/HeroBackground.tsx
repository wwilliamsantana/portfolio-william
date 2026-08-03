export function HeroBackground() {
  return (
    <>
      <div className=" absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb20,transparent_60%)]" />

      <div className=" absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className=" absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)][bg-size:60px_60px]" />
    </>
  );
}
