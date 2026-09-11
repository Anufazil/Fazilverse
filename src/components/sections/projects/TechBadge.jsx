export default function TechBadge({ tech }) {
  return (
    <span
      className="
        rounded-md
        border
        border-line
        bg-ink
        px-3
        py-1
        font-mono
        text-xs
        text-muted
      "
    >
      {tech}
    </span>
  );
}
