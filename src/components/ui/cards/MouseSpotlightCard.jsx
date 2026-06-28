import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function MouseSpotlightCard({
  children,
  className = "",
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -6,
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
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/50
        hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
        ${className}
      `}
    >
      {/* Animated Gradient Border Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              rgba(34,211,238,0.22),
              transparent 75%
            )
          `,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}