import { motion } from "framer-motion";
import profile from "../../../assets/images/hero.webp";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative mx-auto flex items-center justify-center"
    >
      {/* Restrained glow */}
      <div className="absolute h-[320px] w-[320px] rounded-full bg-signal/10 blur-[100px]" />

      {/* Frame */}
      <div className="relative">
        <img
          src={profile}
          loading="lazy"
          alt="Anu Fazil P"
          className="relative z-10 h-72 w-72 rounded-2xl border border-line-strong object-cover shadow-2xl sm:h-80 sm:w-80"
        />

        {/* Corner brackets */}
        <span className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-signal/60" />
        <span className="pointer-events-none absolute -right-3 -top-3 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-signal/60" />
        <span className="pointer-events-none absolute -bottom-3 -left-3 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-signal/60" />
        <span className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-signal/60" />

        {/* Status tag */}
        <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 shadow-lg">
          <span className="h-2 w-2 rounded-full bg-status" />
          <span className="font-mono text-xs text-ink-text">Open to work</span>
        </div>
      </div>
    </motion.div>
  );
}
