export default function GlassPanel({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-line
        bg-surface
        ${className}
      `}
    >
      {children}
    </div>
  );
}
