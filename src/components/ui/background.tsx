import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function Background({ children, className, ...props }: Props) {
  return (
    <div
      className={`flex min-h-screen flex-col w-full relative bg-black ${className ?? ""}`}
      style={{ backgroundImage: "none !important" }}
      {...props}
    >
      {children}
    </div>
  );
}

export default Background;
