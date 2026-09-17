import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    // Internal route ("/projects", "/#contact") — client-side navigation.
    // Anything else (mailto:, http(s):, "#section" on the current page) —
    // a plain anchor.
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
          <Link to={href} className={commonClasses} {...props}>
            {children}
          </Link>
        </motion.div>
      );
    }

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
