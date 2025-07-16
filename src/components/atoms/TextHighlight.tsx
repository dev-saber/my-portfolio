import React, { useState, useEffect, useId } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function TextHighlight({ word }: { word: string }) {
  const interval = 3000;
  const animationDuration = 700;
  const id = useId();
  const [animationKey, setAnimationKey] = useState(0);
  const textRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <motion.span
      layoutId={`words-here-${id}`}
      className={cn(
        "relative inline-block rounded-lg px-1 py-0.5 my-1 sm:px-2 sm:py-1",
        "[background:linear-gradient(to_bottom,rgba(34,197,94,0.9),rgba(22,163,74,0.7),rgba(21,128,61,0.5))]",
        "shadow-[inset_0_-1px_rgba(22,163,74,0.6),inset_0_0_0_1px_rgba(34,197,94,0.4),_0_4px_8px_rgba(34,197,94,0.3)]",
        "dark:[background:linear-gradient(to_bottom,rgba(34,197,94,0.8),rgba(22,163,74,0.6),rgba(21,128,61,0.4))]",
        "dark:shadow-[inset_0_-1px_rgba(21,128,61,0.7),inset_0_0_0_1px_rgba(34,197,94,0.3),_0_4px_8px_rgba(34,197,94,0.2)]",
        "text-white"
      )}
      key={animationKey}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className="inline-block"
        ref={textRef}
        layoutId={`word-div-${word}-${id}-${animationKey}`}
      >
        <motion.div className="inline-block font-bold whitespace-nowrap">
          {word.split("").map((letter, index) => (
            <motion.span
              key={`${animationKey}-${index}`}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.span>
  );
}
