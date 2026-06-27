import { motion } from "framer-motion";
import profile from "../../../assets/images/profile.png";
import {
  FaCode,
  FaCircle,
} from "react-icons/fa";

export default function AboutImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="relative flex justify-center"
    >
      {/* Aurora Glow */}

      <div className="absolute h-[470px] w-[470px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Animated Border */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[430px] w-[430px] rounded-[40px] bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-[3px]"
      >
        <div className="h-full w-full rounded-[38px] bg-[#050816]" />
      </motion.div>

      {/* Image */}

      <img
        src={profile}
        alt="Fazil"
        className="relative z-10 h-[420px] w-[420px] rounded-[36px] object-cover shadow-[0_0_60px_rgba(0,255,255,0.15)]"
      />

      {/* Available Badge */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute -right-6 top-10 z-20 rounded-full border border-cyan-400/20 bg-black/40 px-5 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">

          <FaCircle className="text-green-400 text-xs" />

          <span className="text-sm">
            Available for Work
          </span>

        </div>
      </motion.div>

      {/* Tech Badge */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -left-8 bottom-10 z-20 rounded-full border border-cyan-400/20 bg-black/40 px-5 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">

          <FaCode className="text-cyan-400" />

          <span className="text-sm">
            MERN Stack
          </span>

        </div>
      </motion.div>
    </motion.div>
  );
}