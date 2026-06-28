import { motion } from "framer-motion";

export default function ContactCard({
  icon,
  title,
  value,
  href,
}) {
  const content = (
    <motion.div
      whileHover={{
        x: 8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        group
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-cyan-500/10
          text-2xl
          text-cyan-400
          transition-all
          duration-300
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">
          {title}
        </p>

        <h3 className="text-lg font-semibold text-white">
          {value}
        </h3>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
}