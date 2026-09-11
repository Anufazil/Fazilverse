import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

import MouseSpotlightCard from "../../ui/cards/MouseSpotlightCard";
import TechBadge from "./TechBadge";
import ProjectImage from "./ProjectImage";

export default function FeaturedProject({ project, onOpenCaseStudy, reverse }) {
  return (
    <MouseSpotlightCard className="overflow-hidden p-0">
      <div className={`grid items-stretch lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}>

        <div className="relative overflow-hidden" style={{ direction: "ltr" }}>
          <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="h-full">
            <ProjectImage
              image={project.image}
              title={project.title}
              className="h-full min-h-[280px] w-full"
            />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10" style={{ direction: "ltr" }}>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-sm text-signal">{project.priority}</span>
            <span className="text-xs uppercase tracking-wider text-muted">{project.category}</span>
          </div>

          <h3 className="mb-4 text-2xl font-bold text-ink-text sm:text-3xl">
            {project.title}
          </h3>

          <p className="mb-6 leading-7 text-muted">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink-text transition-colors duration-200 hover:border-signal/50"
              >
                <FaGithub /> GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-signal px-5 py-2.5 text-sm font-medium text-on-signal transition-colors duration-200 hover:bg-signal/90"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}

            <button
              onClick={() => onOpenCaseStudy(project)}
              className="flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink-text transition-colors duration-200 hover:border-signal/50"
            >
              <FaFileAlt /> Case Study
            </button>
          </div>
        </div>
      </div>
    </MouseSpotlightCard>
  );
}
