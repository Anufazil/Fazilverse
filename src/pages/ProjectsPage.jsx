import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/headings/SectionHeading";
import ProjectCard from "../components/sections/projects/ProjectCard";
import ProjectFilters from "../components/sections/projects/ProjectFilters";
import ProjectCaseStudy from "../components/sections/projects/ProjectCaseStudy";

import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [caseStudy, setCaseStudy] = useState(null);

  const filters = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-28">
      <Container>
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-signal"
        >
          <FaArrowLeft className="text-xs" /> Back to home
        </Link>

        <SectionHeading
          badge="Portfolio"
          title="All projects"
          subtitle={`Every build so far — ${projects.length} projects, from full-stack applications to security tools.`}
        />

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
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setCaseStudy}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>

      <ProjectCaseStudy project={caseStudy} onClose={() => setCaseStudy(null)} />
    </section>
  );
}
