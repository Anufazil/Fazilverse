import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
  href,
  ...props
}) {
  const styles = {
    primary:
      "bg-signal text-on-signal hover:bg-signal/90",

    secondary:
      "border border-line-strong bg-surface text-ink-text hover:border-signal/50 hover:bg-surface-raised",
  };

  const commonClasses = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-lg
    px-6
    py-3
    font-medium
    transition-colors
    duration-200
    disabled:cursor-not-allowed
    disabled:opacity-60
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        className={commonClasses}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? {} : { scale: 0.97 }}
      className={commonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
}
