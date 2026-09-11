import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaCss3Alt,
  FaGithub,
  FaNetworkWired,
  FaLinux,
  FaShieldAlt,
  FaUserShield,
  FaUsersCog,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiFastapi,
  SiDjango,
  SiBootstrap,
  SiFramer,
  SiVite,
  SiVercel,
  SiRender,
  SiJsonwebtokens,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const skills = {
  Frontend: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React.js", icon: FaReact },
    { name: "Vite", icon: SiVite },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Framer Motion", icon: SiFramer },
  ],

  Backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "Python", icon: FaPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Django", icon: SiDjango },
    { name: "REST APIs", icon: TbApi },
  ],

  Databases: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
  ],

  Security: [
    { name: "Authentication", icon: FaUserShield },
    { name: "JWT", icon: SiJsonwebtokens },
    { name: "RBAC", icon: FaUsersCog },
    { name: "Networking fundamentals", icon: FaNetworkWired },
    { name: "Linux fundamentals", icon: FaLinux },
    { name: "Web security fundamentals", icon: FaShieldAlt },
  ],

  Tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiRender },
  ],
};
