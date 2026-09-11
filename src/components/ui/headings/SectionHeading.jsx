import { motion } from "framer-motion";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {badge && (
        <p className="mb-3 font-mono text-sm text-signal">
          {badge}
        </p>
      )}

      <h2 className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-muted ${isCenter ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
