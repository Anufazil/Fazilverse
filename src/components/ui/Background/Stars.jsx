import { motion } from "framer-motion";

const stars = Array.from({ length: 80 });

export default function Stars() {
  return (
    <>
      {stars.map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </>
  );
}