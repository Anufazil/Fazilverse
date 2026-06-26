import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiOpenai,
} from "react-icons/si";

const icons = [
  {
    icon: <FaReact />,
    x: -120,
    y: -100,
    color: "#61DBFB",
  },
  {
    icon: <FaNodeJs />,
    x: 120,
    y: -80,
    color: "#3C873A",
  },
  {
    icon: <SiMongodb />,
    x: 140,
    y: 80,
    color: "#47A248",
  },
  {
    icon: <SiJavascript />,
    x: -130,
    y: 100,
    color: "#F7DF1E",
  },
  {
    icon: <FaPython />,
    x: -10,
    y: 150,
    color: "#3776AB",
  },
  {
    icon: <SiOpenai />,
    x: 0,
    y: -160,
    color: "#ffffff",
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-3xl backdrop-blur-lg"
          style={{
            left: "50%",
            top: "50%",
            color: item.color,
          }}
          animate={{
            x: [item.x, item.x + 10, item.x],
            y: [item.y, item.y - 10, item.y],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
}