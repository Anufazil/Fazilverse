import passwordAnalyzer from "../assets/images/projects/password-analyzer.png";
import qrMenu from "../assets/images/projects/qr-menu.png";
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

    github: "https://github.com/Anufazil/PasswordSecurityAnalyzer",

    live: "hhttps://password-security-analyser.vercel.app/",
  },

  {
    id: 2,

    title: "QR Menu Generator",

    category: "Business",

    featured: false,

    description:
      "Restaurant QR menu platform allowing owners to update menus online instantly.",

    technologies: [
      "React",
      "Firebase",
    ],

    image: qrMenu,

    github: "#",

    live: "#",
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