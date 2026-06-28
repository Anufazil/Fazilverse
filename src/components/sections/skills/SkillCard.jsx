import { motion } from "framer-motion";
import MouseSpotlightCard from "../../ui/cards/MouseSpotlightCard";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <MouseSpotlightCard className="group p-6">
      <div className="flex items-center gap-5">
        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.15,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <Icon className={`text-5xl ${skill.color}`} />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-3 flex items-center justify-between">

            <h3 className="text-lg font-semibold">
              {skill.name}
            </h3>

            <span className="text-cyan-400 font-semibold">
              {skill.level}%
            </span>

          </div>

          {/* Progress Track */}
          <div className="relative h-2 overflow-hidden rounded-full bg-white/10">

            {/* Progress */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${skill.level}%`,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500"
            >

              {/* Shine */}
              <motion.div
                animate={{
                  x: ["-100%", "250%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-8 -skew-x-12 bg-white/40 blur-sm"
              />

            </motion.div>

          </div>

          <p className="mt-4 text-sm text-gray-400">
            Building modern applications using {skill.name}.
          </p>

        </div>
      </div>
    </MouseSpotlightCard>
  );
}