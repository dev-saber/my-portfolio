import socials from "@/assets/socials";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 text-center py-6 text-sm text-gray-700 dark:text-gray-400 italic">
      <ul className="flex sm:hidden items-center gap-x-6 text-xl not-italic">
        {socials.map((social, index) => (
          <li key={index}>
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-700 dark:hover:text-primary-200 transition-colors duration-200"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
      <span>Sifeddine Eddarai. | &copy; {new Date().getFullYear()}</span>
      <div>
        Design inspirations from{" "}
        <a
          className="font-semibold cursor-pointer hover:underline"
          href="https://meryem-ajmani.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          this portfolio
        </a>{" "}
        and{" "}
        <a
          className="font-semibold cursor-pointer hover:underline"
          href="https://stormix.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          that one
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
