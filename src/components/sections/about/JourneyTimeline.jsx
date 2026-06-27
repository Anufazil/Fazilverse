import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const journey = [
  {
    year: "2022",
    title: "Started Programming",
    description: "Began learning programming fundamentals.",
  },
  {
    year: "2023",
    title: "HTML • CSS • JavaScript",
    description: "Built responsive websites and UI projects.",
  },
  {
    year: "2024",
    title: "React & MERN Stack",
    description: "Started developing full-stack applications.",
  },
  {
    year: "2025",
    title: "AI + Cybersecurity",
    description: "Exploring AI, security and advanced development.",
  },
];

export default function JourneyTimeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <div ref={ref}>
      <h2 className="mb-10 text-center text-4xl font-bold">
        My Journey
      </h2>

      <div className="relative pl-8">

        {/* Animated Line */}

        <div className="absolute left-3 top-0 h-full w-[3px] rounded-full bg-white/10" />

        <motion.div
          style={{ scaleY }}
          className="absolute left-3 top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400"
        />

        {journey.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            className="relative mb-8"
          >
            {/* Timeline Dot */}

            <div className="absolute -left-[23px] top-6 z-10 h-5 w-5 rounded-full border-4 border-cyan-400 bg-[#050816]" />

            {/* Card */}

            <motion.div
              whileHover={{
                x: 8,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
              "
            >
              <p className="text-sm font-semibold tracking-wide text-cyan-400">
                {item.year}
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}