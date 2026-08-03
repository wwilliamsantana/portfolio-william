"use client";

import { GridPattern } from "./GridPattern";
import { MouseGlow } from "./MouseGlow";
import { NoiseTexture } from "./NoiseTexture";

export function BackgroundEffects() {
  return (
    <div
      className=" pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <GridPattern />
      <MouseGlow />
      <NoiseTexture />
    </div>
  );
}
