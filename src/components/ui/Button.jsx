import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
  ...props
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]",

    secondary:
      "border border-white/20 bg-white/5 backdrop-blur-md text-white hover:border-cyan-400/50 hover:bg-white/10",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.05,
              y: -4,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.96,
            }
      }
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        shadow-lg
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${styles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}