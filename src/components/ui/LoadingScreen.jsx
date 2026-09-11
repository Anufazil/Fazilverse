import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        flex-col
        items-center
        justify-center
        bg-ink
      "
    >
      <p className="font-mono text-lg text-ink-text">
        FAZILVERSE
      </p>

      <div className="mt-8 h-[2px] w-56 overflow-hidden rounded-full bg-line">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-full rounded-full bg-signal"
        />
      </div>
    </motion.div>
  );
}
