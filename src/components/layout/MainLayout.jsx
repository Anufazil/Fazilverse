import AuroraBackground from "../backgrounds/AuroraBackground";

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <AuroraBackground />

      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}