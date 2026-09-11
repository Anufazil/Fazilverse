import passwordAnalyzer from "../assets/images/projects/password-analyzer.webp";
import fazilverse from "../assets/images/projects/fazilverse.webp";
import turfbooker from "../assets/images/projects/turfbooker.webp";
import Evesta from "../assets/images/projects/Evesta.webp";
import Expenso from "../assets/images/projects/Expenso.webp";
import TextoQuest from "../assets/images/projects/TextoQuest.webp";
import ABDU from "../assets/images/projects/ABDU.webp";
import Cybrews from "../assets/images/projects/Cybrews.webp";
import RestoCafeMenu from "../assets/images/projects/RestoCafeMenu.webp";

// Featured projects — shown as large, priority-ordered cards.
export const featuredProjects = [
  {
    id: "barberqueue",
    priority: "01",
    title: "BarberQueue",
    category: "Full-Stack SaaS",
    description:
      "A real-time queue management platform designed for barbershops, featuring role-based access, queue management, analytics, authentication, and real-time updates.",
    technologies: [
      "React", "Vite", "Tailwind CSS", "Node.js", "Express",
      "MongoDB", "JWT", "Socket.IO", "React Query",
    ],
    features: [
      "Customer workflow",
      "Barber workflow",
      "Admin dashboard",
      "Role-based access control",
      "Real-time queue updates",
      "Analytics",
      "Authentication",
      "REST APIs",
    ],
    image: null,
    github: null,
    live: null,
    caseStudy: { problem: "", solution: "", architecture: true, challenges: "", learned: "" },
  },
  {
    id: "password-security-analyzer",
    priority: "02",
    title: "Password Security Analyzer",
    category: "Cybersecurity / Full-Stack",
    description:
      "A web-based password security analysis tool that evaluates password strength and provides security-focused feedback.",
    technologies: ["React", "Vite", "Tailwind CSS", "FastAPI", "Python"],
    features: [
      "Password strength analysis",
      "Entropy calculation",
      "Crack-time estimation",
      "Common password detection",
      "Secure password generation",
      "Breached-password checking",
      "Interactive security feedback",
    ],
    image: passwordAnalyzer,
    github: "https://github.com/Anufazil/PasswordSecurityAnalyser",
    live: "https://password-security-analyser.vercel.app/",
    caseStudy: { problem: "", solution: "", architecture: true, challenges: "", learned: "" },
  },
  {
    id: "cybrews",
    priority: "03",
    title: "CYBREWS",
    category: "Cybersecurity Platform",
    description:
      "A cybersecurity news platform designed to aggregate and present security news through an automated content pipeline.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "RSS"],
    features: [
      "Cybersecurity news feed",
      "RSS ingestion",
      "Automated updates",
      "Database-backed content",
      "Source attribution",
    ],
    image: Cybrews,
    github: "https://github.com/Anufazil/Cybrews",
    live: "https://cybrews.vercel.app/",
    caseStudy: { problem: "", solution: "", architecture: true, challenges: "", learned: "" },
  },
  {
    id: "expenso",
    priority: "04",
    title: "Expenso",
    category: "Full-Stack Web Application",
    description:
      "A full-stack expense management application for tracking income, expenses, transactions, and financial analytics.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Chart.js", "Tailwind CSS"],
    features: [
      "Authentication",
      "Income tracking",
      "Expense tracking",
      "Transactions",
      "Dashboard analytics",
      "Charts",
      "REST API",
      "Responsive UI",
    ],
    image: Expenso,
    github: "https://github.com/Anufazil/Expenso",
    live: "https://expenso-taupe.vercel.app/",
    caseStudy: { problem: "", solution: "", architecture: true, challenges: "", learned: "" },
  },
];

// Other projects — compact grid, less visual weight than Featured.
export const otherProjects = [
  {
    id: "textoquest",
    title: "TextoQuest",
    category: "Business",
    description: "Text-to-quiz learning application.",
    technologies: ["React", "MongoDB", "Express", "Node.js", "Python", "Tailwind CSS", "Vite"],
    image: TextoQuest,
    github: "https://github.com/Anufazil/TextoQuest",
    live: "https://textoquest.vercel.app/",
  },
  {
    id: "restomenu",
    title: "RestoMenu",
    category: "Business",
    description: "Digital QR-based restaurant menu.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: RestoCafeMenu,
    github: "https://github.com/Anufazil/RestoMenu",
    live: "https://restomenu-five.vercel.app/",
  },
  {
    id: "turfbooker",
    title: "TurfBooker",
    category: "Business",
    description:
      "Modern sports turf booking platform with secure authentication, role-based dashboards, online reservations, and PostgreSQL-powered data management.",
    technologies: ["Flask", "JavaScript", "PostgreSQL", "SQLAlchemy", "Bootstrap"],
    image: turfbooker,
    github: "https://github.com/Anufazil/TurfBooker",
    live: "https://turfbooker.onrender.com/",
  },
  {
    id: "solar-system",
    title: "Animated Solar System",
    category: "Personal",
    description: "HTML/CSS animated visual project.",
    technologies: ["HTML", "CSS"],
    image: null,
    github: null,
    live: null,
  },
  {
    id: "fazilverse",
    title: "FazilVerse",
    category: "Personal",
    description: "The portfolio itself.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: fazilverse,
    github: "https://github.com/Anufazil/Fazilverse",
    live: "https://fazilverse.vercel.app/",
  },
  {
    id: "evesta",
    title: "EVESTA",
    category: "Academic",
    description: "Academic final-year project.",
    technologies: ["React", "Node.js", "MongoDB", "Python"],
    image: Evesta,
    github: "https://github.com/Anufazil/Evesta",
    live: null,
  },
  {
    id: "abdu",
    title: "ABDU — Artificial Brain for Digital Utility",
    category: "AI",
    description:
      "An intelligent, concise AI companion, built to help with information, ideas, and digital tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "Groq API"],
    image: ABDU,
    github: "https://github.com/Anufazil/ABDU",
    live: "https://abdu-orpin.vercel.app/",
  },
];

export const projects = [...featuredProjects, ...otherProjects];
