export function GridPattern() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
      style={{
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg,var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
