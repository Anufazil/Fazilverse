import { lazy, Suspense } from "react";

import Hero from "../components/sections/hero/Hero";
import { useScrollToHash } from "../hooks/useScrollToHash";

const About = lazy(() => import("../components/sections/about/About"));
const Skills = lazy(() => import("../components/sections/skills/Skills"));
const Projects = lazy(() => import("../components/sections/projects/Projects"));
const Growth = lazy(() => import("../components/sections/growth/Growth"));
const Journey = lazy(() => import("../components/sections/journey/Journey"));
const Gallery = lazy(() => import("../components/sections/gallery/Gallery"));
const Contact = lazy(() => import("../components/sections/contact/Contact"));

export default function Home() {
  useScrollToHash();

  return (
    <>
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
    </>
  );
}
