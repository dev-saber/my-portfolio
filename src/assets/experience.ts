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
    title: "Backend Engineering Intern",
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
