import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          whileHover={{
            scale: 1.1,
            y: -6,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 20,
          }}
          className="
            fixed
            bottom-8
            right-8
            z-[999]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/30
            bg-white/10
            text-cyan-300
            backdrop-blur-xl
            shadow-[0_0_25px_rgba(34,211,238,.25)]
            transition-all
            hover:border-cyan-300
            hover:shadow-[0_0_40px_rgba(34,211,238,.55)]
          "
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <FaArrowUp size={18} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}