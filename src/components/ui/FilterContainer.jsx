export default function FilterContainer({ children }) {
  return (
    <div
      className="
        mb-14
        flex
        flex-wrap
        gap-3
        border-b
        border-line
        pb-6
      "
    >
      {children}
    </div>
  );
}
