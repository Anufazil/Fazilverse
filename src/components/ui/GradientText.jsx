export default function GradientText({
  children,
  className = "",
}) {
  return (
    <span
      className={`
        bg-gradient-to-r
        from-signal
        to-status
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
}
