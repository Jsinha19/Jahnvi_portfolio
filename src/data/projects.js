// Edit this file to update project content, links and images.
// `filter` must be one of: "Full-Stack" | "Frontend" (used by the Projects filter row).
// `status` must be one of: "live" | "private" | "dev".

export const PROJECTS = [
  {
    number: "01",
    id: "enrich-e-account",
    title: "Enrich E Account",
    category: "In-House Application",
    tag: "Frontend Development",
    filter: "Frontend",
    image: null, // e.g. "/images/enrich-e-account.png"
    description:
      "A structured dashboard for managing account information, built with a responsive frontend and connected backend APIs for a smoother internal workflow.",
    contributions: [
      "Designed and developed the frontend dashboard",
      "Integrated backend APIs with the frontend",
      "Created responsive and user-friendly UI components",
      "Worked with dynamic data and API responses",
      "Improved dashboard usability and overall interface structure",
    ],
    tech: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs"],
    link: "#",
    linkLabel: "Private / In-House Project",
    status: "private",
  },
  {
    number: "02",
    id: "9-influencers",
    title: "9 Influencers",
    category: "Live Website",
    tag: "Frontend Development",
    filter: "Frontend",
    image: null, // e.g. "/images/9-influencers.png"
    description:
      "A clean single-page website for 9 Influencers, focused on brand presentation, responsive layouts, and engaging frontend interactions.",
    contributions: [
      "Developed the single-page website",
      "Created responsive layouts for different screen sizes",
      "Implemented interactive frontend elements",
      "Structured sections for clear content presentation",
      "Worked on UI styling and frontend responsiveness",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://9influencers.in/",
    linkLabel: "View Live Website",
    status: "live",
  },
  {
    number: "03",
    id: "meeraxu-intelligence",
    title: "Meeraxu Intelligence",
    category: "Full-Stack Web Application",
    tag: "MERN Stack",
    filter: "Full-Stack",
    image: null, // e.g. "/images/meeraxu-intelligence.png"
    description:
      "A MERN-based website with a responsive frontend, connected backend, REST APIs, and an admin panel for managing content and enquiries.",
    contributions: [
      "Developed the website using the MERN stack",
      "Built and integrated REST APIs",
      "Developed an admin panel for website management",
      "Implemented authentication and CRUD functionality",
      "Connected frontend, backend and database workflows",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Framer Motion"],
    link: "https://www.meeraxuintelligence.com/",
    linkLabel: "View Live Website",
    secondaryLink: "#",
    secondaryLabel: "Private Admin Panel",
    status: "live",
  },
  {
    number: "04",
    id: "kisan251",
    title: "Kisan251",
    category: "In Development",
    tag: "React.js",
    filter: "Frontend",
    image: null, // e.g. "/images/kisan251.png"
    description:
      "A React.js frontend currently in development, focused on responsive design, reusable components, and clear navigation across devices.",
    contributions: [
      "Developing the frontend using React.js",
      "Creating reusable UI components",
      "Implementing responsive layouts",
      "Building clean navigation and page structure",
      "Improving overall user experience and visual consistency",
    ],
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    link: "#",
    linkLabel: "In Development",
    status: "dev",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
