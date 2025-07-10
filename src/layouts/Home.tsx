import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <section id="home">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-left text-xl px-4 md:text-4xl lg:text-4xl font-semibold text-neutral-700 dark:text-white max-w-4xl leading-8 lg:leading-14 mx-auto"
        >
          Hi I'm Sifeddine Eddarai.
          <br />
          I'm a Computer Science Engineering Student, passionate about{" "}
          <Highlight className="font-bold whitespace-nowrap">
            Web development
          </Highlight>{" "}
          and the{" "}
          <Highlight className="font-bold whitespace-nowrap">
            World of Data
          </Highlight>
          .
        </motion.h1>
      </HeroHighlight>
    </section>
  );
}
