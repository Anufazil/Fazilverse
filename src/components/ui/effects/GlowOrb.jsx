import { motion } from "framer-motion";

export default function GlowOrb({
  size = 350,
  color = "bg-cyan-500/20",
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.35, 0.55, 0.35],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
      }}
      className={`
        absolute
        rounded-full
        blur-[120px]
        ${color}
      `}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}