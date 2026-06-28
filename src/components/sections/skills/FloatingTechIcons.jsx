import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  {
    Icon: FaReact,
    x: "10%",
    y: "20%",
  },
  {
    Icon: FaNodeJs,
    x: "82%",
    y: "18%",
  },
  {
    Icon: SiMongodb,
    x: "18%",
    y: "80%",
  },
  {
    Icon: FaGitAlt,
    x: "85%",
    y: "72%",
  },
  {
    Icon: SiTailwindcss,
    x: "50%",
    y: "10%",
  },
];

export default function FloatingTechIcons() {
  return (
    <>
      {icons.map(({ Icon, x, y }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
          }}
          style={{
            left: x,
            top: y,
          }}
          className="
            absolute
            text-5xl
            text-cyan-400/10
            pointer-events-none
          "
        >
          <Icon />
        </motion.div>
      ))}
    </>
  );
}