import { motion } from "framer-motion";
import profile from "../../../assets/images/profile.png";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Image */}
      <img
        src={profile}
        alt="Fazil"
        className="relative z-10 h-80 w-80 rounded-full border-4 border-cyan-400/30 object-cover shadow-2xl"
      />
    </motion.div>
  );
}