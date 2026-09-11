import GradientText from "../../ui/GradientText";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { motion } from "framer-motion";
import { fadeUp } from "../../../animations/heroVariants";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>
      {/* Eyebrow */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="mb-4 font-mono text-sm text-signal"
      >
        Anu Fazil P
      </motion.p>

      {/* Headline */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.25}
        className="text-5xl font-bold leading-[1.1] lg:text-6xl"
      >
        I build. I secure.
        <br />
        <GradientText>I keep learning.</GradientText>
      </motion.h1>

      {/* Role line */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.45}
        className="mt-6 max-w-xl text-lg font-medium text-ink-text/90"
      >
        Full-Stack Web Developer focused on building modern web applications
        and developing a deeper understanding of cybersecurity.
      </motion.p>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
        className="mt-4 max-w-xl leading-8 text-muted"
      >
        I build full-stack applications, experiment with new technologies,
        and continuously strengthen my understanding of secure software
        development.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.8}
      >
        <HeroButtons />
      </motion.div>

      {/* Socials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.95}
      >
        <HeroSocials />
        <HeroStats />
      </motion.div>
    </div>
  );
}
