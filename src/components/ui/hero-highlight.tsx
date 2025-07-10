import { cn } from "@/lib/utils";
import { motion } from "motion/react";
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

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-green-300 to-green-400  px-1 pb-1`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
