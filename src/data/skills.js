import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTensorflow,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const skills = {
  Frontend: [
    {
      name: "React",
      level: 90,
      icon: FaReact,
      color: "text-cyan-400",
    },
    {
      name: "JavaScript",
      level: 90,
      icon: SiJavascript,
      color: "text-yellow-400",
    },
    {
      name: "HTML5",
      level: 95,
      icon: SiHtml5,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      level: 90,
      icon: FaCss3Alt,
      color: "text-blue-400",
    },
    {
      name: "Tailwind",
      level: 88,
      icon: SiTailwindcss,
      color: "text-cyan-300",
    },
  ],

  Backend: [
    {
      name: "Node.js",
      level: 85,
      icon: FaNodeJs,
      color: "text-green-500",
    },
    {
      name: "Express",
      level: 82,
      icon: SiExpress,
      color: "text-gray-300",
    },
  ],

  Database: [
    {
      name: "MongoDB",
      level: 82,
      icon: SiMongodb,
      color: "text-green-400",
    },
    {
      name: "MySQL",
      level: 75,
      icon: SiMysql,
      color: "text-blue-500",
    },
  ],

  AI: [
    {
      name: "Python",
      level: 75,
      icon: FaPython,
      color: "text-yellow-400",
    },
    {
      name: "TensorFlow",
      level: 60,
      icon: SiTensorflow,
      color: "text-orange-500",
    },
  ],

  Tools: [
    {
      name: "Git",
      level: 85,
      icon: FaGitAlt,
      color: "text-orange-500",
    },
    {
      name: "VS Code",
      level: 95,
      icon: VscVscode,
      color: "text-blue-500",
    },
    {
      name: "Postman",
      level: 82,
      icon: SiPostman,
      color: "text-orange-400",
    },
  ],
};