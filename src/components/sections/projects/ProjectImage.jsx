import { FaFolder } from "react-icons/fa";

export default function ProjectImage({ image, title, className = "" }) {
  if (!image) {
    return (
      <div
        className={`flex items-center justify-center bg-surface-raised ${className}`}
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <FaFolder className="text-3xl" />
          <span className="font-mono text-xs">preview coming soon</span>
        </div>
      </div>
    );
  }

  return (
    <img
      loading="lazy"
      src={image}
      alt={title}
      className={`object-cover ${className}`}
    />
  );
}
