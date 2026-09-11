import { motion } from "framer-motion";
import { leadership } from "../../../data/leadership";

export default function Leadership() {
  return (
    <div className="mt-24">
      <p className="mb-3 font-mono text-sm text-signal">Leadership</p>

      <h3 className="mb-10 text-2xl font-bold sm:text-3xl">
        Beyond the code
      </h3>

      <div className="space-y-5">
        {leadership.map((item, index) => (
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

            <div className="mt-4 flex flex-wrap gap-2">
              {item.points.map((point) => (
                <span
                  key={point}
                  className="rounded-md border border-line bg-ink px-3 py-1.5 text-sm text-muted"
                >
                  {point}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
