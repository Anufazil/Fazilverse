import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-violet-600 to-cyan-500 text-white",

    secondary:
      "border border-white/20 bg-white/5 backdrop-blur-md text-white",
  };

  return (
    <motion.button
      whileHover={{
          scale:1.05,
          y:-4,
      }}
      whileTap={{
          scale:.96
      }}
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-full
        font-semibold
        transition-all
        duration-300
        shadow-lg
        ${styles[variant]}
      `}
    >
      {children}
    </motion.button>
  );
}