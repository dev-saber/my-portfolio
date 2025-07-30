const skills: {
  category: string;
  skills: string[];
}[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java", "PHP", "C++"],
  },
  {
    category: "Frontend Technologies",
    skills: ["React", "Tailwind"],
  },
  {
    category: "Backend Technologies",
    skills: [
      "Django",
      "Django Rest Framework",
      "Flask",
      "ASP .NET",
      "Laravel",
      "Symfony",
    ],
  },
  {
    category: "Database Management",
    skills: ["MySQL", "Oracle", "MS SQL Server", "MongoDB"],
  },
  {
    category: "Web Scraping",
    skills: ["Selenium"],
  },
  {
    category: "DevOps",
    skills: ["Docker"],
  },
  {
    category: "Operating Systems",
    skills: ["Linux"],
  },
  {
    category: "Miscellaneous",
    skills: [
      "Vite",
      "JSON Web Token",
      "Keycloak",
      "Chart JS",
      "Notion API",
      "Stripe API",
    ],
  },
];

const projects: {
  title: string;
  description: string;
  tools: string[];
  github?: string;
}[] = [
  {
    title: "RADEES Identity Server",
    description:
      "A centralized identity management system built with Symfony and Keycloak OAuth2, enabling users and role-based permissions management, and authentication across multiple apps.",
    tools: ["Tailwind", "JavaScript", "PHP", "Symfony", "Keycloak", "Docker"],
  },
  {
    title: "EMSI Connect",
    description:
      "A professional networking and recruitment platform dedicated for EMSI alumnus. Enables CV creation, job applications, and social interaction.",
    tools: [
      "React",
      "Tailwind",
      "Redux Toolkit",
      "Vite",
      "PHP",
      "Laravel",
      "Sanctum",
      "MySQL",
      // "Docker", "WebSockets"
    ],
    // github: "",
  },
  {
    title: "Dental-Clinic-Management-System",
    description:
      "A Java desktop app for managing dental clinics, featuring patient records, appointments, invoices, and prescriptions.",
    tools: ["Java", "Java Swing", "Jackson Library", "IntelliJ IDEA"],
    github: "https://github.com/dev-saber/Dental-Clinic-Management-System",
  },
  {
    title: "TheAthletic Articles Scraper",
    description:
      "A daily terminal-based Python scraper using Selenium and the Notion API to sync TheAthletic articles.",
    tools: ["Python", "Selenium", "Notion API", "Requests"],
  },
  {
    title: "Sakan",
    description:
      "A real estate rental platform built with React.js and ASP .NET.",
    tools: [
      "React",
      "Tailwind",
      "Redux Toolkit",
      "Vite",
      "ASP .NET",
      "JSON Web Token",
      "MS SQL Server",
    ],
    github: "",
  },
  {
    title: "Deliverix",
    description: "A Django REST API for managing mail and package logistics.",
    tools: [
      "Python",
      "Django",
      "Django Rest Framework",
      "MySQL",
      "JSON Web Token",
    ],
    github: "https://github.com/dev-saber/Deliverix",
  },
  {
    title: "University Library Management",
    description:
      "A library management system dedicated to book borrow and returns handle, built using Django REST Framework and React.",
    tools: [
      "React",
      "Tailwind",
      "Redux Toolkit",
      "Vite",
      "Python",
      "Django",
      "Django Rest Framework",
      "MySQL",
    ],
    github: "https://github.com/dev-saber/university-library-management",
  },
  {
    title: "EduManage",
    description:
      "A command-line C++ application for managing school operations (student and staff profiles, course registration, grading, attendance, and timetabling).",
    tools: ["C++"],
    github: "https://github.com/dev-saber/EduManage",
  },
  {
    title: "Moroccan Blood Donating Centers API",
    description:
      "A Flask-based API offering blood donating centers information in Morocco.",
    tools: ["Python", "Flask", "MongoDB"],
    github: "https://github.com/dev-saber/moroccan-blood-donating-centers-api",
  },
  {
    title: "EMSI Grades Checker",
    description:
      "A Python automated script that scrapes academic grades from the EMSI student portal.",
    tools: ["Python", "Selenium"],
    github: "https://github.com/dev-saber/emsi-grades-checker",
  },
];

export { skills, projects };
