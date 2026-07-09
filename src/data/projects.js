import passwordAnalyzer from "../assets/images/projects/password-analyzer.png";
import turfbooker from "../assets/images/projects/turfbooker.png";
import events from "../assets/images/projects/events.png";

export const projects = [
  {
    id: 1,

    title: "Password Security Analyzer",

    category: "Cybersecurity",

    featured: true,

    description:
      "Modern password analysis platform with entropy calculation, breach detection, common password checking and crack-time estimation.",

    technologies: [
      "React",
      "Flask",
      "Python",
      "Tailwind",
    ],

    image: passwordAnalyzer,

    github: "https://github.com/Anufazil/PasswordSecurityAnalyser",

    live: "https://password-security-analyser.vercel.app/",
  },

  {
    id: 2,

    title: "TurfBooker",

    category: "Business",

    featured: false,

    description:
      "Modern sports turf booking platform with secure authentication, role-based dashboards, online reservations, and PostgreSQL-powered data management.",

    technologies: [
      "Flask",
      "JavaScript",
      "PostgreSQL",
      "SQLAlchemy",
      "Bootstrap",
    ],

    image: turfbooker,

    github: "https://github.com/Anufazil/TurfBooker",

    live: "https://turfbooker.onrender.com/",
  },

  {
    id: 3,

    title: "Event Recommendation AI",

    category: "AI",

    featured: false,

    description:
      "Recommendation engine suggesting nearby events using AI and user interests.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Python",
    ],

    image: events,

    github: "#",

    live: "#",
  },
];