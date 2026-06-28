import { motion } from "framer-motion";
import GradientText from "./GradientText";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        flex-col
        items-center
        justify-center
        bg-[#050816]
      "
    >
      {/* Glowing Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-40
          w-40
          rounded-full
          border-2
          border-cyan-400/30
        "
      />

      {/* Glow */}

      <div
        className="
          absolute
          h-52
          w-52
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Logo */}

      <motion.h1
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-6xl font-bold"
      >
        <GradientText>FazilVerse</GradientText>
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 1, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mt-6 text-gray-400"
      >
        Initializing...
      </motion.p>

      {/* Progress */}

      <div className="mt-10 h-1 w-64 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-violet-500
          "
        />
      </div>
    </motion.div>
  );
}