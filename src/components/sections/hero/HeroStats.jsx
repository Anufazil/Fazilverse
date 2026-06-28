export default function HeroStats() {
  const stats = [
    {
      number: "5+",
      label: "Projects",
    },
    {
      number: "15+",
      label: "Technologies",
    },
    {
      number: "∞",
      label: "Learning",
    },
  ];

  return (
    <div className="mt-14 flex gap-10">
      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="text-3xl font-bold text-cyan-400">
            {item.number}
          </h2>

          <p className="text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}