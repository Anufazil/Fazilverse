import AuroraBackground from "./components/ui/Background/AuroraBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";

function App() {
  return (
    <AuroraBackground>
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
      </main>
    </AuroraBackground>
  );
}

export default App;