// Fixed, deterministic star field — no Math.random() at render time,
// so it doesn't jitter or shift between renders.
const stars = [
  { x: 4, y: 8, r: 0.7, d: 0 }, { x: 12, y: 22, r: 0.4, d: 0.6 },
  { x: 20, y: 5, r: 0.5, d: 1.4 }, { x: 28, y: 34, r: 0.3, d: 2.1 },
  { x: 35, y: 14, r: 0.6, d: 0.3 }, { x: 44, y: 28, r: 0.4, d: 1.8 },
  { x: 50, y: 6, r: 0.5, d: 0.9 }, { x: 58, y: 40, r: 0.3, d: 2.6 },
  { x: 63, y: 16, r: 0.7, d: 1.2 }, { x: 70, y: 30, r: 0.4, d: 0.4 },
  { x: 77, y: 8, r: 0.5, d: 1.9 }, { x: 84, y: 24, r: 0.3, d: 0.7 },
  { x: 90, y: 12, r: 0.6, d: 2.3 }, { x: 96, y: 36, r: 0.4, d: 1.1 },
  { x: 8, y: 50, r: 0.4, d: 1.6 }, { x: 16, y: 62, r: 0.6, d: 0.2 },
  { x: 24, y: 48, r: 0.3, d: 2.4 }, { x: 32, y: 70, r: 0.5, d: 1.0 },
  { x: 40, y: 56, r: 0.4, d: 0.5 }, { x: 48, y: 76, r: 0.3, d: 1.7 },
  { x: 55, y: 60, r: 0.6, d: 2.2 }, { x: 62, y: 82, r: 0.4, d: 0.8 },
  { x: 68, y: 54, r: 0.5, d: 1.5 }, { x: 75, y: 68, r: 0.3, d: 0.1 },
  { x: 82, y: 58, r: 0.6, d: 2.0 }, { x: 88, y: 78, r: 0.4, d: 1.3 },
  { x: 94, y: 62, r: 0.5, d: 0.6 }, { x: 6, y: 88, r: 0.4, d: 2.5 },
  { x: 14, y: 94, r: 0.3, d: 0.9 }, { x: 22, y: 86, r: 0.6, d: 1.8 },
  { x: 30, y: 96, r: 0.4, d: 0.3 }, { x: 38, y: 90, r: 0.5, d: 2.1 },
  { x: 46, y: 98, r: 0.3, d: 1.2 }, { x: 54, y: 92, r: 0.6, d: 0.7 },
  { x: 60, y: 100, r: 0.4, d: 1.9 }, { x: 66, y: 94, r: 0.5, d: 0.4 },
];

export default function Starfield() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none text-ink-text"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="currentColor"
          className="animate-twinkle"
          style={{ animationDelay: `${s.d}s` }}
        />
      ))}
    </svg>
  );
}
