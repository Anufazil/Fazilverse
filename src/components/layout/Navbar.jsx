import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import GradientText from "../ui/GradientText";
import Button from "../ui/Button";
import ScrollProgress from "./ScrollProgress";
import { NAV_LINKS } from "../../constants/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollProgress />

      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <GradientText className="text-3xl font-bold">
            FazilVerse
          </GradientText>

          <ul className="hidden gap-8 lg:flex">
            {NAV_LINKS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative text-gray-300 transition hover:text-cyan-400"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button>Let's Talk</Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-white lg:hidden"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="border-t border-white/10 bg-black/70 backdrop-blur-xl lg:hidden"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-300 hover:bg-cyan-500/10"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>
    </>
  );
}