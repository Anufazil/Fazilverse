import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import TechBackground from "./components/ui/Background/TechBackground";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero/Hero";

import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/sections/about/About"));
const Skills = lazy(() => import("./components/sections/skills/Skills"));
const Projects = lazy(() => import("./components/sections/projects/Projects"));
const Growth = lazy(() => import("./components/sections/growth/Growth"));
const Journey = lazy(() => import("./components/sections/journey/Journey"));
const Gallery = lazy(() => import("./components/sections/gallery/Gallery"));
const Contact = lazy(() => import("./components/sections/contact/Contact"));
import Footer from "./components/layout/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <TechBackground>
          <ScrollProgress />

          <Navbar />

          <main className="pt-20">
            <Hero />
              <Suspense fallback={null}>
              <About />
              <Skills />
              <Projects />
              <Growth />
              <Journey />
              <Gallery />
              <Contact />
              </Suspense>
          </main>

          <Footer />

          <BackToTop />
        </TechBackground>
      )}
    </>
  );
}

export default App;