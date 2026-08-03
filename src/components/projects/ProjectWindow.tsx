"use client";

import { WindowBar } from "./WindowBar";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function ProjectWindow({ title, children }: Props) {
  return (
    <div className=" overflow-hidden rounded-3xl border border-(--border) bg-(--surface) shadow-[0_30px_80px_rgba(0,0,0,.15)] backdrop-blur-xl">
      <WindowBar title={title} />

      {children}
    </div>
  );
}
