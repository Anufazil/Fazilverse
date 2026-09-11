import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function SuccessAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-line bg-surface p-10 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-status/15 text-2xl text-status">
        <FaCheck />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-ink-text">
        Message Sent!
      </h3>

      <p className="mt-3 max-w-sm text-muted">
        Thanks for reaching out.
        <br />
        I'll get back to you as soon as possible.
      </p>
    </motion.div>
  );
}
