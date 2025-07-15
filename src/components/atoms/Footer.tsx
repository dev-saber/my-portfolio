
const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 text-center py-6 text-sm text-gray-700 dark:text-gray-400 italic">
      <span>Sifeddine Eddarai. | &copy; {new Date().getFullYear()}</span>
      <div>
        Design inspiration from{" "}
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
