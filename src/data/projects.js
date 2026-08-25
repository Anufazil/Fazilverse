import passwordAnalyzer from "../assets/images/projects/password-analyzer.png";
import fazilverse from "../assets/images/projects/fazilverse.png";
import turfbooker from "../assets/images/projects/turfbooker.png";
import Evesta from "../assets/images/projects/Evesta.png";
import Expenso from "../assets/images/projects/Expenso.png";
import RestoCafeMenu from "../assets/images/projects/RestoCafeMenu.png";


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

    title: "Fazilverse",

    category: "Personal",

    featured: false,

    description:
      "A personal portfolio website.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],

    image: fazilverse,

    github: "https://github.com/Anufazil/Fazilverse",

    live: "https://fazilverse.vercel.app/",
  },


  {
    id: 3,

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
    id: 4,

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

    image: Evesta,

    github: "https://github.com/Anufazil/Evesta",

    live: "#",
  },

  {
    id: 5,

    title: "Expenso",

    category: "Personal",

    featured: false,

    description:
      "An expense tracking website for tracking our income and expenses.",

    technologies: [
      "React",
      "javaScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
    ],

    image: Expenso,

    github: "https://github.com/Anufazil/Expenso",

    live: "https://expenso-taupe.vercel.app/",
  },
  
  {
    id: 6,

    title: "RestoCafe Menu",

    category: "Business",

    featured: false,

    description:
      "A RestoCafe Menu displaying Webpage.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],

    image: RestoCafeMenu,

    github: "https://github.com/Anufazil/RestoMenu",

    live: "https://restomenu-five.vercel.app/",
  },

];
