import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import MouseSpotlightCard from "../../ui/cards/MouseSpotlightCard";
import TechBadge from "./TechBadge";

export default function FeaturedProject({ project }) {
  return (
    <div className="mb-24">
      <MouseSpotlightCard className="overflow-hidden p-0">

        <div className="grid items-center lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <div className="group relative overflow-hidden">

            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
              src={project.image}
              alt={project.title}
              className="h-full min-h-[380px] w-full object-cover"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          </div>

          {/* RIGHT CONTENT */}

          <div className="flex flex-col justify-center p-10 lg:p-14">

            {/* Badge */}

            <span className="mb-6 inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Featured
            </span>

            {/* Title */}

            <h2 className="mb-6 text-3xl font-bold leading-tight lg:text-5xl">
              {project.title}
            </h2>

            {/* Description */}

            <p className="mb-8 text-lg leading-8 text-gray-400">
              {project.description}
            </p>

            {/* Tech */}

            <div className="mb-10 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <TechBadge
                  key={tech}
                  tech={tech}
                />
              ))}
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white/5 px-6 py-3 font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <FaGithub />
                GitHub
                <span>→</span>
              </motion.a>

              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/40"
              >
                <FaExternalLinkAlt />
                Live Demo
                <span>→</span>
              </motion.a>

            </div>

          </div>

        </div>

      </MouseSpotlightCard>
    </div>
  );
}