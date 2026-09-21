const skills: {
  category: string;
  skills: string[];
}[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript/TypeScript", "PHP", "C++"],
  },
  {
    category: "Frontend Technologies",
    skills: ["React", "Tailwind"],
  },
  {
    category: "Backend Technologies",
    skills: [
      "Spring Boot",
      "Django",
      "Django Rest Framework",
      "Flask",
      "Laravel",
      "Symfony",
      "FastAPI",
    ],
  },
  {
    category: "Database Management",
    skills: ["MySQL", "Oracle", "MS SQL Server", "MongoDB"],
  },
  {
    category: "Web Scraping",
    skills: ["Selenium", "Playwright"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Git"],
  },
  {
    category: "Data Manipulation",
    skills: ["Pandas", "Jupyter Notebook"],
  },
  {
    category: "Miscellaneous",
    skills: [
      "Vite",
      "JSON Web Token",
      "Keycloak",
      "GraphQL",
      "Chart JS",
      "Notion API",
      "Stripe API",
      "IntelliJ IDEA"
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
    title: "Spring Billing Manager",
    description:
      "Billing and invoicing management platform using Spring Boot, GraphQL, MongoDB, and React.",
    tools: [
      "React",
      "Tailwind",
      "Vite",
      "JavaScript",
      "Java",
      "Spring Boot",
      "GraphQL",
      "MongoDB",
    ],
    github: "https://github.com/dev-saber/spring-billing-manager",
  },
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
    ],
  },
  {
    title: "Dental-Clinic-Management-System",
    description:
      "A Java desktop app for managing dental clinics, featuring patient records, appointments, invoices, and prescriptions.",
    tools: ["Java", "Java Swing", "Jackson Library", "IntelliJ IDEA"],
    github: "https://github.com/dev-saber/Dental-Clinic-Management-System",
  },
  {
    title: "Sarouty.ma Scraper",
    description:
      "A Python scraper that collects real estate data based on filters, cleans and enriches data then exports it fr data analytics purposes.",
    tools: ["Python", "Pandas", "FastAPI", "Jupyter Notebook", "Docker"],
  },
  {
    title: "TheAthletic Articles Scraper",
    description:
      "A daily terminal-based Python scraper using Selenium and the Notion API to sync TheAthletic articles.",
    tools: ["Python", "Selenium", "Notion API"],
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
];

export { skills, projects };
