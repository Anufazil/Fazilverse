import { motion } from "framer-motion";

export default function AnimatedDivider() {
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      whileInView={{
        width: 160,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
      className="
      mx-auto
      mt-6
      h-[3px]
      rounded-full
      bg-gradient-to-r
      from-cyan-400
      via-purple-500
      to-cyan-400
      "
    />
  );
}