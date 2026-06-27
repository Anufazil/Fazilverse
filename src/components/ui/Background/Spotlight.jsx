import { motion } from "framer-motion";
import useMousePosition from "../../../hooks/useMousePosition";

export default function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{
        left: x,
        top: y,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 20,
      }}
      className="
      absolute
      h-[120px]
      w-[120px]
      rounded-full
      bg-cyan-500/10
      blur-[30px]
      pointer-events-none
      -translate-x-1/2
      -translate-y-1/2
      "
    />
  );
}