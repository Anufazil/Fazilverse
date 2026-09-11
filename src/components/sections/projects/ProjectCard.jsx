import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import MouseSpotlightCard from "../../ui/cards/MouseSpotlightCard";
import TechBadge from "./TechBadge";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({ project }) {
  return (
    <MouseSpotlightCard className="overflow-hidden p-0">
      <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }}>
        <ProjectImage
          image={project.image}
          title={project.title}
          className="h-32 w-full sm:h-44"
        />
      </motion.div>

      <div className="p-4 sm:p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-ink-text sm:text-lg">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted">{project.category}</span>
        </div>

        <p className="mb-4 text-sm leading-6 text-muted">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-xs text-ink-text transition-colors duration-200 hover:border-signal/50 sm:text-sm"
            >
              <FaGithub /> GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-signal px-3 py-1.5 text-xs font-medium text-on-signal transition-colors duration-200 hover:bg-signal/90 sm:text-sm"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </MouseSpotlightCard>
  );
}
