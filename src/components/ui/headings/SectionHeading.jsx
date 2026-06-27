import { motion } from "framer-motion";

export default function SectionHeading({
  badge,
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <p
        className="
        uppercase
        tracking-[0.4em]
        text-cyan-400
        text-sm
        "
      >
        {badge}
      </p>

      <h2
        className="
        mt-5
        text-5xl
        font-bold
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
          mx-auto
          mt-6
          max-w-2xl
          text-gray-400
          "
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}