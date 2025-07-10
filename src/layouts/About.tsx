const About = () => {
  return (
    <section
      id="about"
      className="px-4 py-12 sm:px-8 md:px-16 lg:px-32 lg:w-4/5 mx-auto text-justify"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-white mb-6 text-center">
        About Me
      </h1>
      <div className="p-6 sm:p-8 text-base sm:text-lg leading-relaxed">
        <p className="mb-4">
          Hey there! I'm{" "}
          <span className="font-semibold">Sifeddine Eddarai</span> — but you can
          call me{" "}
          <span className="text-green-600 dark:text-green-400 font-bold text-lg md:text-xl">
            Dev-Saber
          </span>
          . I'm a curious mind, a builder at heart, and a software engineer who
          loves turning ideas into meaningful digital experiences.
        </p>
        <p className="mb-4">
          Whether it’s crafting a smart backend system or shaping an intuitive
          user interface, I enjoy solving problems that actually help people. My
          journey in tech is driven by a deep passion for learning, exploring,
          and creating. I've had the chance to work with different tools and
          frameworks, but what excites me most is bringing ideas to life with
          clean, efficient code that’s built to last.
        </p>
        <p className="mb-4">
          Outside of coding, I’m someone who loves reading books, a football
          tactics enthusiast (yes, the kind who watches build-up patterns and
          pressing schemas for fun), and an FPS gamer in my spare time — even
          though I’m far from pro status, I still enjoy the challenge!
        </p>
        <p className="mb-4">
          Lately, I’ve also been diving deep into the world of data. My passion
          started with football metrics — things like{" "}
          <span className="font-mono text-green-400">xG</span>,{" "}
          <span className="font-mono text-green-400">xGC</span>, and passing
          networks — and it quickly turned into a broader fascination with how
          data tells stories, reveals patterns, and drives smarter decisions.
        </p>
        <p className="mb-4">
          I’m always eager to connect and collaborate with fellow developers,
          especially when an exciting opportunity comes along. If something
          sparks your interest or you just want to say hi, feel free to{" "}
          <a
            href="mailto:sifeddine.edr@gmail.com"
            className="text-green-700 dark:text-green-400 underline hover:opacity-80 transition"
          >
            drop me an email
          </a>{" "}
          — I’d love to hear from you!
        </p>
        <p>
          Thanks for stopping by, and enjoy exploring the rest of my portfolio!
        </p>
      </div>
    </section>
  );
};

export default About;
