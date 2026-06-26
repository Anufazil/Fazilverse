export default function GlassPanel({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,.25)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}