import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Skills from "./components/sections/skills/Skills";
import Projects from "./components/sections/projects/Projects";
import AuroraBackground from "./components/ui/Background/AuroraBackground";

function App() {
  return (
    <AuroraBackground>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </AuroraBackground>
  );
}

export default App;