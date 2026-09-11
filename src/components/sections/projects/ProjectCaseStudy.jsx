import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import TechBadge from "./TechBadge";

function Field({ label, value }) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-signal">
        {label}
      </p>
      <p className="text-sm leading-6 text-muted">
        {value && value.length > 0 ? value : "Add details for this case study."}
      </p>
    </div>
  );
}

export default function ProjectCaseStudy({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[9998] flex items-start justify-center overflow-y-auto bg-ink/80 p-4 py-10 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-xl border border-line-strong bg-surface p-6 sm:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-sm text-signal">
                  {project.priority ?? ""}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-ink-text">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.category}</p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-lg border border-line p-2 text-muted transition-colors duration-200 hover:border-signal/50 hover:text-signal"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-8">
              <Field label="Overview" value={project.description} />

              <Field label="Problem" value={project.caseStudy?.problem} />

              <Field label="Solution" value={project.caseStudy?.solution} />

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-signal">
                  Features
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {(project.features ?? []).map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-signal">
                  Technology
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>

              {project.caseStudy?.architecture && (
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-wider text-signal">
                    Architecture
                  </p>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
                    <span className="rounded-md border border-line bg-ink px-3 py-1.5">Frontend</span>
                    <span>→</span>
                    <span className="rounded-md border border-line bg-ink px-3 py-1.5">REST API</span>
                    <span>→</span>
                    <span className="rounded-md border border-line bg-ink px-3 py-1.5">Backend</span>
                    <span>→</span>
                    <span className="rounded-md border border-line bg-ink px-3 py-1.5">Database</span>
                  </div>
                </div>
              )}

              <Field label="Challenges" value={project.caseStudy?.challenges} />

              <Field label="What I Learned" value={project.caseStudy?.learned} />

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-signal">
                  Links
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-signal px-4 py-2 text-sm font-medium text-on-signal"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink-text hover:border-signal/50"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {!project.live && !project.github && (
                    <span className="text-sm text-muted">Links coming soon.</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
