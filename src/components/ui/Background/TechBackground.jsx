import NetworkNodes from "./NetworkNodes";

export default function TechBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-ink-text">
      {/* One restrained glow, top of page only */}
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-signal/10 blur-[140px]" />

      <NetworkNodes />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
