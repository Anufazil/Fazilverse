import { motion, useReducedMotion } from "framer-motion";
import character from "../../assets/images/intro/character.webp";

const EASE = [0.76, 0, 0.24, 1];

export default function IntroReveal({ onComplete }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <motion.div
        className="fixed inset-0 z-[100000] bg-[#7A1420]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        onAnimationComplete={onComplete}
      />
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100000] overflow-hidden bg-[#7A1420]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.1, duration: 1.05, ease: EASE }}
      onAnimationComplete={onComplete}
    >
      {/* Soft studio-light vignette, echoing the reference backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Wordmark */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute left-1/2 top-[16%] -translate-x-1/2 whitespace-nowrap font-mono text-sm tracking-[0.35em] text-white/70"
      >
        FAZILVERSE
      </motion.p>

      {/* Character walks in from the left to center, then a small settle/bob */}
      <motion.img
        src={character}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-[78%] -translate-x-1/2 drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)] sm:h-[84%]"
        initial={{ x: "-46vw", opacity: 0 }}
        animate={{
          x: ["-46vw", "0vw", "0vw"],
          opacity: [0, 1, 1],
          y: [0, 0, -6],
        }}
        transition={{
          duration: 1.55,
          delay: 0.1,
          times: [0, 0.72, 1],
          ease: [0.22, 0.68, 0.35, 1],
        }}
      />
    </motion.div>
  );
}
