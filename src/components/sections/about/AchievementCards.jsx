import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

import GlowCard from "../../ui/cards/GlowCard";
import SectionHeading from "../../ui/headings/SectionHeading";
import AnimatedDivider from "../../ui/divider/AnimatedDivider";

const achievements = [
  {
    icon: <FaLaptopCode />,
    value: "5+",
    title: "Projects",
  },
  {
    icon: <FaCode />,
    value: "15+",
    title: "Technologies",
  },
  {
    icon: <FaBrain />,
    value: "Continuous",
    title: "Learning",
  },
  {
    icon: <FaRocket />,
    value: "Available",
    title: "Open To Work",
  },
];

export default function AchievementCards() {
  return (
    <div>
      {/* Section Heading */}

      <SectionHeading
        badge="MY STATS"
        title="Achievements"
        subtitle="A quick overview of my journey, skills and work."
      />

      <AnimatedDivider />

      {/* Cards */}

      <div className="mt-12 grid grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
          >
            <GlowCard className="p-7 text-center h-full">

              <div className="mb-5 flex justify-center text-4xl text-cyan-400">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.title}
              </p>

            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}