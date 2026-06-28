import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-[4px]
        w-full
        origin-left
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-violet-500
        shadow-[0_0_15px_rgba(34,211,238,0.8)]
      "
    />
  );
}