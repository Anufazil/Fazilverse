import AuroraBackground from "./components/ui/background/AuroraBackground";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import GradientText from "./components/ui/GradientText";
import GlassPanel from "./components/ui/GlassPanel";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero/Hero";


function App() {
  return (
    <AuroraBackground>
      <Container className="flex min-h-screen items-center justify-center">
        <GlassPanel className="p-10 text-center">
          <p className="mb-4 text-gray-300">Welcome to</p>

          <h1 className="mb-6 text-6xl font-bold">
            <GradientText>FazilVerse</GradientText>
          </h1>

          <Button>Explore</Button>
        </GlassPanel>
      </Container>
      <Navbar />
      

      <main className="pt-20">
        <Hero />
      </main>
      
    </AuroraBackground>
  );
}

export default App;