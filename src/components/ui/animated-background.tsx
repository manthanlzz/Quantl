"use client";

import { cn } from "@/utils";

interface Props {
  className?: string;
}

export function AnimatedBackground({ className }: Props) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-[-1] h-full w-full bg-black",
        className
      )}
    />
  );
}

export default AnimatedBackground;
