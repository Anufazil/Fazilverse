import { TypeAnimation } from "react-type-animation";
import GradientText from "../../ui/GradientText";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { motion } from "framer-motion";
import { fadeUp } from "../../../animations/heroVariants";

export default function HeroContent() {
  return (
    <div>
      {/* Greeting */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="mb-4 text-cyan-400"
      >
        Hello, I'm 👋
      </motion.p>

      {/* Name */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="mb-6 text-6xl font-bold lg:text-8xl"
      >
        <GradientText>Fazil</GradientText>
      </motion.h1>

      {/* Type Animation */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
      >
        <TypeAnimation
          sequence={[
            "Computer Science Engineer",
            2000,
            "MERN Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl font-semibold text-gray-300"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.7}
        className="mt-6 max-w-xl text-lg leading-8 text-gray-400"
      >
        I build beautiful, scalable and modern web applications with a passion
        for UI, AI and cybersecurity.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.9}
      >
        <HeroButtons />
      </motion.div>

      {/* Socials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.1}
      >
        <HeroSocials />
      </motion.div>
    </div>
  );
}