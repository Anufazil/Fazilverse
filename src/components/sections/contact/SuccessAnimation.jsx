import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function SuccessAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        flex
        min-h-[520px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        p-10
        text-center
        backdrop-blur-xl
      "
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-cyan-500
          text-4xl
          text-white
          shadow-[0_0_40px_rgba(34,211,238,.6)]
        "
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.25,
          }}
        >
          <FaCheck />
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-8 text-3xl font-bold"
      >
        Message Sent!
      </motion.h3>

      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 max-w-sm text-gray-400"
      >
        Thanks for reaching out.
        <br />
        I'll get back to you as soon as possible.
      </motion.p>
    </motion.div>
  );
}