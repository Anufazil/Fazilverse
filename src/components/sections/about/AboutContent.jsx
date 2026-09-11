import { motion } from "framer-motion";

const info = [
  { title: "Location", value: "Malappuram, Kerala, India" },
  { title: "Education", value: "B.Tech, Computer Science Engineering" },
  { title: "Role", value: "CSE Student & Developer" },
  { title: "Focus", value: "Cybersecurity • Secure Web Apps" },
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 font-mono text-sm text-signal">
        About
      </p>

      <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
        Full-Stack developer, security-minded
      </h2>

      <div className="space-y-5 leading-8 text-muted">
        <p>
          I'm a Computer Science Engineering student and Full-Stack Web
          Developer who enjoys turning ideas into functional,
          user-focused web applications.
        </p>

        <p>
          I primarily work with JavaScript and the MERN stack, while also
          working with Python-based backend technologies. I enjoy taking
          projects from an idea to a working product — designing
          interfaces, building APIs, working with databases, implementing
          authentication, and deploying applications.
        </p>

        <p>
          Alongside web development, I'm actively developing my
          cybersecurity knowledge, particularly networking, Linux,
          security fundamentals, web application security, and secure
          development practices.
        </p>

        <p>
          I also use AI-assisted development tools for learning,
          debugging, prototyping, documentation, and problem-solving
          while continuing to understand the architecture and
          technologies behind what I build.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3">
        {info.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-line bg-surface px-4 py-3"
          >
            <p className="text-xs uppercase tracking-wider text-muted">
              {item.title}
            </p>

            <p className="mt-1 text-sm font-medium text-ink-text">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
