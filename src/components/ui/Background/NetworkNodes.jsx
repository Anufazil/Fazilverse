const nodes = [
  { x: 8, y: 18 }, { x: 22, y: 9 }, { x: 40, y: 22 }, { x: 63, y: 12 },
  { x: 80, y: 24 }, { x: 92, y: 10 }, { x: 15, y: 46 }, { x: 48, y: 52 },
  { x: 71, y: 44 }, { x: 90, y: 58 }, { x: 6, y: 74 }, { x: 30, y: 82 },
  { x: 55, y: 76 }, { x: 78, y: 86 }, { x: 95, y: 92 },
];

const links = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [0, 6], [2, 7], [4, 8], [5, 9],
  [6, 10], [7, 12], [8, 13], [9, 14],
  [10, 11], [11, 12], [12, 13], [13, 14],
];

export default function NetworkNodes() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none text-signal opacity-[0.16] [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_80%)]"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeWidth="0.12"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="0.55" fill="currentColor" />
      ))}
    </svg>
  );
}
