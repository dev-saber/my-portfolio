import socials from "@/assets/socials";

const Socials = () => {
  return (
    <>
      <div className="fixed top-1/2 right-15 -translate-y-1/2 z-50">
        <ul
          className="flex flex-col gap-y-4 w-fit
      fixed top-1/2 -translate-y-1/2 z-50
      sm:right-6 md:-right-4 lg:right-16
      text-xl
    "
        >
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
      </div>
    </>
  );
};

export default Socials;
