import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

import { projects } from "../../../data/projects";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectFilters from "./ProjectFilters";

export default function Projects() {
  const featured = projects.find((p) => p.featured);

  const others = projects.filter((p) => !p.featured);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
  activeFilter === "All"
    ? others
    : others.filter(
        (project) => project.category === activeFilter
      );

  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>

        <SectionHeading
          badge="PORTFOLIO"
          title="Featured Projects"
          subtitle="A collection of my best work in web development, AI and cybersecurity."
        />

        {/* Featured */}
        <FeaturedProject project={featured} />

        <ProjectFilters
            active={activeFilter}
            setActive={setActiveFilter}
        />

        {/* Other Projects */}

        <div className="mt-24">

          <h3 className="mb-10 text-center text-4xl font-bold">
            More Projects
          </h3>

          <AnimatePresence mode="wait">

        <motion.div
            key={activeFilter}
            initial={{
            opacity: 0,
            y: 20,
            }}
            animate={{
            opacity: 1,
            y: 0,
            }}
            exit={{
            opacity: 0,
            y: -20,
            }}
            transition={{
            duration: 0.35,
            }}
            className="grid gap-8 md:grid-cols-2"
        >

            {filteredProjects.map((project) => (

            <ProjectCard
                key={project.id}
                project={project}
            />

            ))}

        </motion.div>

        </AnimatePresence>

        </div>

      </Container>
    </section>
  );
}