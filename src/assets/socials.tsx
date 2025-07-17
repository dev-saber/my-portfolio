import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { ReactElement } from "react";

const socials: {
    link: string;
    icon: ReactElement;
    }[]= [
    { link: "https://github.com/dev-saber", icon: <FaGithub /> },
    { link: "https://www.linkedin.com/in/eddarai-sifeddine/", icon: <FaLinkedin /> },
    { link: "mailto:sifeddine.edr@gmail.com", icon: <MdEmail /> },
];

export default socials;