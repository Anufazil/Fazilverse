export default function GradientText({
  children,
  className = "",
}) {
  return (
    <span
      className={`
        bg-gradient-to-r
        from-violet-500
        via-fuchsia-400
        to-cyan-400
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
}