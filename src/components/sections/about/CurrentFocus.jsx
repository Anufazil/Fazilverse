import { motion } from "framer-motion";
import { focusAreas } from "../../../data/focus";

export default function CurrentFocus() {
  return (
    <div className="mt-24">
      <p className="mb-3 font-mono text-sm text-signal">Current focus</p>

      <h3 className="mb-10 text-2xl font-bold sm:text-3xl">
        Where I'm spending my time
      </h3>

      <div className="grid gap-5 sm:grid-cols-3">
        {focusAreas.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <Icon className="text-xl text-signal" />

              <h4 className="mt-4 font-semibold text-ink-text">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
