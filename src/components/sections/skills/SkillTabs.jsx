import { motion } from "framer-motion";

export default function SkillTabs({
  categories,
  active,
  setActive,
}) {
  return (
    <div className="mb-14 flex flex-wrap justify-center gap-4">
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
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                }}
                className="absolute inset-0 rounded-full bg-cyan-400"
              />
            )}

            <span
              className={`
                relative z-10 block rounded-full px-7 py-3 font-medium transition

                ${
                  isActive
                    ? "text-black"
                    : "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400 hover:text-white"
                }
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