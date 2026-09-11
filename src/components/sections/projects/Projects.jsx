import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import ProjectCaseStudy from "./ProjectCaseStudy";

import { featuredProjects, otherProjects } from "../../../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [caseStudy, setCaseStudy] = useState(null);

  const filters = useMemo(
    () => ["All", ...new Set(otherProjects.map((p) => p.category))],
    []
  );

  const filteredProjects =
    activeFilter === "All"
      ? otherProjects
      : otherProjects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionHeading
          badge="Portfolio"
          title="Featured projects"
          subtitle="The work that best shows where full-stack development meets security thinking."
        />

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              onOpenCaseStudy={setCaseStudy}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-24">
          <h3 className="mb-8 text-2xl font-bold text-ink-text">
            Other projects
          </h3>

          <ProjectFilters
            filters={filters}
            active={activeFilter}
            setActive={setActiveFilter}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="
                -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4
                sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0
                lg:grid-cols-3
              "
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-[78%] shrink-0 snap-start sm:w-auto sm:shrink sm:snap-none"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      <ProjectCaseStudy project={caseStudy} onClose={() => setCaseStudy(null)} />
    </section>
  );
}
