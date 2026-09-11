import FilterContainer from "../../ui/FilterContainer";

export default function ProjectFilters({ filters, active, setActive }) {
  return (
    <FilterContainer>
      {filters.map((filter) => {
        const selected = active === filter;

        return (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`
              rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200
              ${selected ? "bg-signal text-on-signal" : "border border-line text-muted hover:text-ink-text"}
            `}
          >
            {filter}
          </button>
        );
      })}
    </FilterContainer>
  );
}
