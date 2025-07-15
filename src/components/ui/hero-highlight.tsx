import { cn } from "@/lib/utils";
import React from "react";

export const HeroHighlight = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "group flex h-[25rem] lg:h-[40rem] w-full items-center justify-center"
      )}
    >
      {children}
    </div>
  );
};
