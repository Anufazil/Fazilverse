import { motion } from "framer-motion";

export default function AuroraBlobs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-violet-600/25 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, 40, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-pink-500/15 blur-[150px]"
      />
    </>
  );
}