import { motion } from "framer-motion";

export default function TechBadge({ tech }) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-cyan-300/50
        hover:text-white
        hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
      "
    >
      {/* Animated Glow */}
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Badge Text */}
      <span className="relative z-10">
        {tech}
      </span>
    </motion.span>
  );
}