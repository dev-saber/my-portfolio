import Title from "@/components/atoms/Title";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 py-12 sm:px-8 md:px-16 lg:px-32 lg:w-4/5 mx-auto text-justify"
    >
      <Title>Contact Me</Title>
      <div className="p-6 sm:p-8 text-base sm:text-lg leading-relaxed">
        <p className="mb-2">
          I appreciate you stopping by my portfolio. If you’re curious about my
          work, want to chat about tech, or have an exciting project in mind,
          I’m all ears.
        </p>

        <p className="mb-2">
          Collaboration and growth are what drive me — so if you think we could
          create something awesome together, don’t hesitate to reach out.
        </p>

        <p className="mb-2">
          Drop me a message{" "}
          <a
            href="mailto:sifeddine.edr@gmail.com"
            className="text-emerald-600 dark:text-green-400 underline hover:opacity-80 transition"
          >
            here
          </a>{" "}
          or find me on social media. I’m looking forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default Contact;
