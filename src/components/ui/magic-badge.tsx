import React from "react";

interface Props {
  title: string;
}

const MagicBadge = ({ title }: Props) => {
  return (
    <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
      {/* Spinning red-orange glow background */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#f97316_50%,#ef4444_100%)]" />
      
      {/* White text badge with blurred background */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/80 px-4 py-1 text-sm font-semibold text-white backdrop-blur-3xl shadow-md">
        {title}
      </span>
    </div>
  );
};

export default MagicBadge;
