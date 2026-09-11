import { motion } from "framer-motion";
import { currentlyLearning } from "../../../data/learning";

export default function CurrentlyLearning() {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-signal">Currently learning</p>

      <h3 className="mb-8 text-2xl font-bold text-ink-text sm:text-3xl">
        Building depth in security
      </h3>

      <div className="flex flex-wrap gap-3">
        {currentlyLearning.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="rounded-lg border border-line bg-surface px-4 py-2 text-sm text-ink-text"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
