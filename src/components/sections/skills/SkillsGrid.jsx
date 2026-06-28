import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { skills } from "../../../data/skills";

import SkillCard from "./SkillCard";
import SkillTabs from "./SkillTabs";

export default function SkillsGrid() {
  const categories = Object.keys(skills);

  const [active, setActive] = useState(categories[0]);

  return (
    <>

      <SkillTabs
        categories={categories}
        active={active}
        setActive={setActive}
      />

      <AnimatePresence mode="wait">

        <motion.div
          key={active}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -25,
          }}
          transition={{
            duration: 0.35,
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {skills[active].map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}
        </motion.div>

      </AnimatePresence>

    </>
  );
}