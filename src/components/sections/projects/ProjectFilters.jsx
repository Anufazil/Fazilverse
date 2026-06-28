import { motion } from "framer-motion";
import FilterContainer from "../../ui/FilterContainer";

const filters = [
  "All",
  "AI",
  "Cybersecurity",
  "Business",
];

export default function ProjectFilters({
  active,
  setActive,
}) {
  return (
    <FilterContainer>
      {filters.map((filter) => {
        const selected = active === filter;

        return (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className="relative"
          >
            {selected && (
              <motion.div
                layoutId="projectFilter"
                className="absolute inset-0 rounded-full bg-cyan-400"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}

            <span
              className={`
                relative z-10 rounded-full px-6 py-3 font-medium transition

                ${
                  selected
                    ? "text-black"
                    : "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400 hover:text-white"
                }
              `}
            >
              {filter}
            </span>
          </button>
        );
      })}
    </FilterContainer>
  );
}