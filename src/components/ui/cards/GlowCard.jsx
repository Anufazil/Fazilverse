import { motion } from "framer-motion";

export default function GlowCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.22)]
        ${className}
      `}
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        "
      >
        <div
          className="
          absolute
          left-1/2
          top-0
          h-44
          w-44
          -translate-x-1/2
          rounded-full
          bg-cyan-400/20
          blur-3xl
          "
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}