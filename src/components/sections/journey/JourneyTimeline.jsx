import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { journey } from "../../../data/journey";

export default function JourneyTimeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  return (
    <div ref={ref} className="relative pl-8">
      <div className="absolute left-3 top-0 h-full w-px bg-line" />

      <motion.div
        style={{ scaleY }}
        className="absolute left-3 top-0 h-full w-px origin-top bg-signal"
      />

      {journey.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative mb-8"
        >
          <div className="absolute -left-[27px] top-1.5 z-10 h-3 w-3 rounded-full border-2 border-signal bg-ink" />

          <div className="rounded-xl border border-line bg-surface p-5">
            <p className="font-mono text-sm text-signal">{item.year}</p>
            <h3 className="mt-1 text-base font-semibold text-ink-text">
              {item.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
