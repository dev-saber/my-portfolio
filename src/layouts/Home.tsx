import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import TextHighlight from "@/components/atoms/TextHighlight";

export default function Home() {
  return (
    <section id="home" className="h-screen relative">
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
          <TextHighlight word=" Web Development" /> and the
          <TextHighlight word="World of Data" /> .
        </motion.h1>
      </HeroHighlight>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-neutral-400 dark:text-neutral-500 hover:text-emerald-500 dark:hover:text-green-400 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
