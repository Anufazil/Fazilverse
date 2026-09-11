import { motion } from "framer-motion";
import { experience } from "../../../data/experience";

export default function Experience() {
  return (
    <div className="mt-24">
      <p className="mb-3 font-mono text-sm text-signal">Experience</p>

      <h3 className="mb-10 text-2xl font-bold sm:text-3xl">
        Where I've worked
      </h3>

      <div className="space-y-5">
        {experience.map((item, index) => (
          <motion.div
            key={item.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-xl border border-line bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-lg font-semibold text-ink-text">
                {item.role}
              </h4>
              <span className="font-mono text-sm text-muted">{item.org}</span>
            </div>

            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-ink px-3 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
