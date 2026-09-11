import { projects } from "../../../data/projects";
import { skills } from "../../../data/skills";

export default function HeroStats() {
  const techCount = Object.values(skills).reduce(
    (sum, list) => sum + list.length,
    0
  );

  const stats = [
    { number: String(projects.length), label: "Projects" },
    { number: String(techCount), label: "Technologies" },
    { number: "\u221E", label: "Learning" },
  ];

  return (
    <div className="mt-14 flex gap-10 border-t border-line pt-8">
      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="font-mono text-2xl font-semibold text-ink-text">
            {item.number}
          </h2>

          <p className="text-sm text-muted">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
