const experiences: {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}[] = [
  {
    title: "Software Engineering Intern",
    company: "Intelcia IT Solutions",
    location: "Rabat",
    period: "Jul 2024 - Aug 2024",
    duration: "2 months",
    responsibilities: [
      "Conducted vulnerability assessment of continuing with an outdated Keycloak version.",
      "Studied the infeasibility of migrating the project to the latest Laravel version due to Keycloak package incompatibility.",
      "Designed the architecture of a Keycloak realm and clients to manage users, roles, and permissions.",
      "Built the project from scratch using Symfony, Twig, Tailwind, and JavaScript.",
      "Dockerized the project.",
    ],
    technologies: [
      "PHP",
      "Symfony",
      "Keycloak",
      "JavaScript",
      "Tailwind",
      "Docker",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Poste Maroc (Barid Al Maghrib)",
    location: "Rabat",
    period: "Jul 2024",
    duration: "1 month",
    responsibilities: [
      "Designed and planned the architecture of a mail and package delivery management system.",
      "Developed a Django REST API for managing mail and package delivery operations with role-based authentication.",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "MySQL",
      "JSON Web Tokens",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "National Digital Resources Laboratory",
    location: "Rabat",
    period: "Mar 2023 - Apr 2023",
    duration: "1 month",
    responsibilities: [
      "Designed and wireframed a word lexicon game.",
      "Led the conception, wireframing, design, and development of a mathematics e-learning platform for children.",
    ],
    technologies: [
      "Laravel",
      "Laravel Sanctum",
      "Laravel Excel",
      "MySQL",
      "React JS",
      "Redux Toolkit",
      "TailwindCSS",
    ],
  },
];

export default experiences;
