import { motion } from "framer-motion";
import profile from "../../../assets/images/profile.webp";
import { FaCode, FaCircle } from "react-icons/fa";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto flex justify-center"
    >
      <div className="absolute h-[360px] w-[360px] rounded-full bg-signal/10 blur-[100px]" />

      <div className="relative">
        <img
          src={profile}
          loading="lazy"
          alt="Anu Fazil P"
          className="relative z-10 h-[340px] w-[340px] rounded-2xl border border-line-strong object-cover shadow-xl"
        />

        <span className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-signal/60" />
        <span className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-signal/60" />

        <div className="absolute -right-6 top-6 z-20 rounded-lg border border-line-strong bg-surface px-4 py-2">
          <div className="flex items-center gap-2">
            <FaCircle className="text-[8px] text-status" />
            <span className="text-sm text-ink-text">Available for Work</span>
          </div>
        </div>

        <div className="absolute -left-6 bottom-8 z-20 rounded-lg border border-line-strong bg-surface px-4 py-2">
          <div className="flex items-center gap-2">
            <FaCode className="text-signal" />
            <span className="text-sm text-ink-text">Full-Stack Dev</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
