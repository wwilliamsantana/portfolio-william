export function NoiseTexture() {
  return (
    <div
      className=" absolute inset-0 opacity-[0.02] mix-blend-soft-light"
      style={{
        backgroundImage: "url('/noise.png')",
      }}
    />
  );
}
