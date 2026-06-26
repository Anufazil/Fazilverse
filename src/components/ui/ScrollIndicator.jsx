import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">
        <motion.div
          animate={{
            y: [4, 20, 4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
        />
      </div>
    </motion.div>
  );
}