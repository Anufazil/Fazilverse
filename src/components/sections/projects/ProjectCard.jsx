import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import MouseSpotlightCard from "../../ui/cards/MouseSpotlightCard";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project }) {
  return (
    <MouseSpotlightCard className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mb-5 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 hover:bg-cyan-500/10"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black"
          >
            <FaExternalLinkAlt />
            Demo
          </a>
        </div>
      </div>
    </MouseSpotlightCard>
  );
}