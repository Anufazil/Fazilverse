import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* Heading */}

      <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
        About Me
      </p>

      <h2 className="mb-6 text-5xl font-bold leading-tight">
        Building modern software with
        <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          creativity & technology
        </span>
      </h2>

      {/* Divider */}

      <div className="mb-8 h-[2px] w-32 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

      {/* Paragraph */}

      <p className="leading-9 text-gray-400">
        I'm Anu Fazil, a Computer Science Engineer passionate about
        crafting premium digital experiences using the MERN stack.
        I enjoy creating modern, scalable applications while
        continuously exploring Artificial Intelligence and
        Cybersecurity to solve real-world problems.
      </p>

      {/* Information Cards */}

      <div className="mt-10 grid gap-4">

        {[
          {
            title: "Location",
            value: "Kerala, India",
          },
          {
            title: "Education",
            value: "B.Tech Computer Science",
          },
          {
            title: "Current Role",
            value: "MERN Stack Developer",
          },
          {
            title: "Current Focus",
            value: "AI • Cybersecurity",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              scale: 1.02,
            }}
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-6
            py-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/30
            hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
            "
          >
            <p className="text-sm uppercase tracking-wider text-gray-500">
              {item.title}
            </p>

            <h3 className="mt-1 text-lg font-semibold">
              {item.value}
            </h3>
          </motion.div>
        ))}

      </div>

      {/* Quote */}

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        className="
        mt-10
        rounded-3xl
        border
        border-cyan-400/10
        bg-gradient-to-r
        from-cyan-500/10
        via-purple-500/10
        to-cyan-500/10
        p-8
        backdrop-blur-xl
        "
      >
        <p className="text-xl italic leading-8 text-gray-300">
          "Turning ideas into beautiful software experiences that
          people genuinely enjoy using."
        </p>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <p className="mt-5 font-semibold text-cyan-400">
          — Fazil
        </p>
      </motion.div>
    </motion.div>
  );
}