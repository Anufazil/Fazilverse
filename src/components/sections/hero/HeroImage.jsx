import { motion } from "framer-motion";
import profile from "../../../assets/images/profile.png";
import FloatingIcons from "./FloatingIcons";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay: 0.8,
        },
        scale: {
          duration: 0.8,
          delay: 0.8,
        },
      }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Floating Tech Icons */}
      <FloatingIcons />

      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Fazil"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 h-80 w-80 rounded-full border-4 border-cyan-400/30 object-cover shadow-2xl"
      />
    </motion.div>
  );
}