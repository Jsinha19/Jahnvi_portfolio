// Edit this file to update project content, links and images.
// `filter` must be one of: "Full-Stack" | "Frontend" (used by the Projects filter row).
// `status` must be one of: "live" | "private" | "dev".

export const PROJECTS = [
  {
    id: "enrich-e-account",
    title: "Enrich E Account",
    category: "In-House Application",
    tag: "Frontend Development",
    filter: "Frontend",
    image: null, // e.g. "/images/enrich-e-account.png"
    description:
      "A finance and accounting management application with a responsive dashboard for managing ledgers, groups, vouchers, reports, and account-related workflows.",
    contributions: [
      "Designed and developed the frontend dashboard",
      "Integrated backend APIs with JWT authentication and session management",
      "Built responsive UI using React and Tailwind CSS",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "JWT"],
    link: "#",
    linkLabel: "Private / In-House Project",
    status: "private",
  },
  {
    id: "9-influencers",
    title: "9 Influencers",
    category: "Live Website",
    tag: "Frontend Development",
    filter: "Frontend",
    image: null, // e.g. "/images/9-influencers.png"
    description:
      "A modern single-page website developed for a marketing agency, focused on brand presentation, responsive layouts, and engaging frontend interactions.",
    contributions: [
      "Developed the complete single-page website",
      "Created responsive layouts for desktop and mobile devices",
      "Implemented interactive frontend elements using JavaScript",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://9influencers.in/",
    linkLabel: "View Live Website",
    status: "live",
  },
  {
    id: "meeraxu-intelligence",
    title: "Meeraxu Intelligence",
    category: "Full-Stack Web Application",
    tag: "Full-Stack Development",
    filter: "Full-Stack",
    image: null, // e.g. "/images/meeraxu-intelligence.png"
    description:
      "A full-stack AI solutions platform with a responsive frontend, REST APIs, admin panel, and an AI chatbot powered by Gemini with RAG-based knowledge integration.",
    contributions: [
      "Developed the full-stack application with frontend, backend, and admin panel",
      "Built REST APIs with authentication and MongoDB data management",
      "Integrated Gemini AI chatbot with RAG-based company knowledge and response sanitization",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "JWT",
      "Gemini AI",
    ],
    link: "https://www.meeraxuintelligence.com/",
    linkLabel: "View Live Website",
    secondaryLink: "#",
    secondaryLabel: "Private Admin Panel",
    status: "live",
  },
  {
    id: "kisan251",
    title: "Kisan251",
    category: "In Development",
    tag: "React.js",
    filter: "Frontend",
    image: null, // e.g. "/images/kisan251.png"
    description:
      "A marketplace-style web application for farmers and users to buy and sell animals and farming-related machinery, with a responsive and user-friendly frontend.",
    contributions: [
      "Developing the frontend using React.js and Tailwind CSS",
      "Building reusable components and responsive layouts",
      "Preparing frontend for backend API integration",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
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
