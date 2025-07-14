const skills: {
  category: string;
  skills: string[];
}[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Javascript/TypeScript", "Java", "PHP", "C++"],
  },
  {
    category: "Frontend Technologies",
    skills: ["React", "Tailwind"],
  },
  {
    category: "Backend Technologies",
    skills: ["Laravel", "Django", "Django Rest Framework", "Flask", "ASP .NET"],
  },
  {
    category: "Database Management",
    skills: ["MySQL", "Oracle", "MS SQL Server", "MongoDB"],
  },
  {
    category: "Web Scraping",
    skills: ["Selenium"],
  },
  //   {
  //     category: "DevOps",
  //     skills: ["Docker", "GitHub Actions", "CI/CD"],
  //   },
  {
    category: "Miscellaneous",
    skills: [
      "Vite",
      "Git",
      "GitHub",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "JSON Web Token",
      "Chart JS",
      "Axios",
      "Insomnia",
      "Postman",
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
    title: "EMSI Connect",
    description:
      "A professional networking and recruitment platform dedicated for EMSI alumni. Enables CV creation, job applications, real-time messaging, and social interaction — all built with Laravel, React, and WebSockets.",
    tools: [
      "React",
      "Tailwind",
      "Redux Toolkit",
      "Vite",
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
      "A Java desktop app for managing dental clinics, featuring patient records, appointments, invoices, and prescriptions. Built with Java Swing and JSON storage, it supports role-based access for doctors and assistants.",
    tools: [
      "Java",
      "Java Swing",
      "Jackson Library",
      "IntelliJ IDEA",
      "Git",
      "GitHub",
    ],
    github: "https://github.com/dev-saber/Dental-Clinic-Management-System",
  },
  {
    title: "TheAthletic Articles Scraper",
    description:
      "A terminal-driven Python scraper that fetches articles from The Athletic and integrates them into a Notion database using Selenium and the Notion API. Supports daily sync and single-URL scraping.",
    tools: ["Python", "Selenium", "Notion API", "Requests"],
  },
  {
    title: "Sakan",
    description:
      "A real estate rental platform built with React.js and ASP .NET, featuring role-based authentication, user/admin access control, and efficient property and post management.",
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
    description:
      "A Django REST API for managing mail and package logistics with JWT auth, role-based permissions, and endpoints for offices, users, and delivery requests.",
    tools: ["Django", "Django Rest Framework", "MySQL", "JSON Web Token"],
    github: "https://github.com/dev-saber/Deliverix",
  },
  {
    title: "University Library Management",
    description:
      "A library management system with secure user authentication and efficient handling of book borrow and returns. Built using Django REST Framework and React, designed for streamlined and scalable library operations.",
    tools: [
      "React",
      "Tailwind",
      "Redux Toolkit",
      "Vite",
      "Django",
      "Django Rest Framework",
      "MySQL",
    ],
    github: "https://github.com/dev-saber/university-library-management",
  },
  {
    title: "EduManage",
    description:
      "A command-line C++ application for managing school operations such as student and staff profiles, course registration, grading, attendance, and timetabling.",
    tools: ["C++"],
    github: "https://github.com/dev-saber/EduManage",
  },
  {
    title: "Moroccan Blood Donating Centers API",
    description:
      "A Flask-based API that offers information about blood donating centers in Morocco.",
    tools: ["Python", "Flask", "MongoDB"],
    github: "https://github.com/dev-saber/moroccan-blood-donating-centers-api",
  },
  {
    title: "EMSI Grades Checker",
    description:
      "A Python automation tool to log in and scrape academic grades from the EMSI student portal. It handles authentication, term navigation, and grade extraction.",
    tools: ["Python", "Selenium"],
    github: "https://github.com/dev-saber/emsi-grades-checker",
  },
];

export { skills, projects };
