export interface Position {
  title: string;
  period: string;
  responsibilities: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  positions: Position[];
  technologies: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Dar Invest",
    location: "Remote",
    positions: [
      {
        title: "Software Engineer | Freelance",
        period: "Aug 2026 - Present",
        responsibilities: [
          "Deployed and hosted the platform on dar-invest.com using a Vercel and Supabase infrastructure.",
          "Launched the platform in 3 languages (French, Spanish, English), expanding the target market to Moroccans living abroad.",
          "Resolved critical security vulnerabilities (SSRF, unauthorized file access) across Python microservices through automated CodeQL security audits.",
          "Designed an AI-assisted data-quality safeguard, integrated into an n8n workflow, to prevent duplicate entries in the neighborhood reference database.",
          "Built a real-time monitoring dashboard (n8n, Supabase, Render) tracking scraper, data quality, database, and frontend health.",
        ],
      },
      {
        title: "Software Engineering Intern (PFE)",
        period: "Feb 2026 - Jul 2026",
        responsibilities: [
          "Designed and developed real estate scrapers in Python (Playwright, Pandas, Jupyter) and FastAPI endpoints to extract and structure listings from major Moroccan real estate platforms and developers; containerized with Docker and deployed on Render.",
          "Integrated scrapers into n8n workflows automating data enrichment into a PostgreSQL database and generating daily reports covering over 80,000 processed listings.",
          "Developed a Next.js interface (B2B and B2C) with OAuth authentication, including saved and compared listings, an interactive map, and neighborhood price comparison.",
        ],
      },
    ],
    technologies: [
      "Python",
      "Playwright",
      "FastAPI",
      "Pandas",
      "Jupyter Notebook",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "Docker",
      "Next.js",
      "Vercel",
      "Supabase",
      "n8n",
      "PostgreSQL",
      "JSON Web Tokens",
      "OAuth",
    ],
  },
  {
    company: "Intelcia IT Solutions",
    location: "Rabat",
    positions: [
      {
        title: "Software Engineering Intern",
        period: "Jul 2024 - Aug 2024",
        responsibilities: [
          "Conducted vulnerability assessment of continuing with an outdated Keycloak version.",
          "Studied the infeasibility of migrating the project to the latest Laravel version due to Keycloak package incompatibility.",
          "Designed the architecture of a Keycloak realm and clients to manage users, roles, and permissions.",
          "Built the project from scratch using Symfony, Twig, Tailwind, and JavaScript.",
          "Dockerized the project.",
        ],
      },
    ],
    technologies: ["PHP", "Symfony", "Keycloak", "JavaScript", "Tailwind", "Docker"],
  },
  {
    company: "Poste Maroc (Barid Al Maghrib)",
    location: "Rabat",
    positions: [
      {
        title: "Software Engineering Intern",
        period: "Jul 2024",
        responsibilities: [
          "Designed and planned the architecture of a mail and package delivery management system.",
          "Developed a Django REST API for managing mail and package delivery operations with role-based authentication.",
        ],
      },
    ],
    technologies: ["Python", "Django", "Django REST Framework", "MySQL", "JSON Web Tokens"],
  },
  {
    company: "National Digital Resources Laboratory",
    location: "Rabat",
    positions: [
      {
        title: "Full Stack Developer Intern",
        period: "Mar 2023 - Apr 2023",
        responsibilities: [
          "Designed and wireframed a word lexicon game.",
          "Led the conception, wireframing, design, and development of a mathematics e-learning platform for children.",
        ],
      },
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
