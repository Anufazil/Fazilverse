export default function FilterContainer({ children }) {
  return (
    <div
      className="
        mx-auto
        mb-16
        flex
        w-fit
        flex-wrap
        justify-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-6
        py-4
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,255,255,0.08)]
      "
    >
      {children}
    </div>
  );
}