import { motion } from "framer-motion";

export default function AuroraBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Aurora Blob 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[140px]"
      />

      {/* Aurora Blob 2 */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/25 blur-[140px]"
      />

      {/* Aurora Blob 3 */}
      <motion.div
        animate={{
          x: [0, 50, -80, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[140px]"
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}