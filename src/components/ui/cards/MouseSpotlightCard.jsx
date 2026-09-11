import { motion } from "framer-motion";

export default function MouseSpotlightCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-line
        bg-surface
        transition-colors
        duration-200
        hover:border-signal/40
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
