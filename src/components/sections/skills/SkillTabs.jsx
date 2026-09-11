import { motion } from "framer-motion";

export default function SkillTabs({ categories, active, setActive }) {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <button
            key={category}
            onClick={() => setActive(category)}
            className="relative"
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-lg bg-signal"
              />
            )}

            <span
              className={`
                relative z-10 block rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200
                ${isActive ? "text-on-signal" : "border border-line text-muted hover:text-ink-text"}
              `}
            >
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}
