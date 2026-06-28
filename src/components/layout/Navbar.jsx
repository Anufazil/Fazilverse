import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

import GradientText from "../ui/GradientText";
import Button from "../ui/Button";
import { NAV_LINKS } from "../../constants/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 180;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="
          mx-auto
          mt-4
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-black/30
          px-6
          backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(0,0,0,.35)]
        "
      >
        {/* Logo */}

        <a href="#home">
          <GradientText className="text-3xl font-bold">
            FazilVerse
          </GradientText>
        </a>

        {/* Desktop */}

        <ul className="hidden items-center gap-3 lg:flex">
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace("#", "");

            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative block px-4 py-2"
                >
                  {activeSection === sectionId && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-cyan-400/10
                        backdrop-blur-xl
                        shadow-[0_0_25px_rgba(34,211,238,.25)]
                      "
                    />
                  )}

                  <span
                    className={`
                      relative
                      z-10
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        activeSection === sectionId
                          ? "text-cyan-300"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}

        <div className="hidden lg:block">
          <Button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white lg:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -15,
          }}
          className="
            mx-auto
            mt-3
            max-w-7xl
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black/60
            backdrop-blur-2xl
            lg:hidden
          "
        >
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  block
                  px-6
                  py-4
                  transition-all
                  duration-300
                  ${
                    activeSection === sectionId
                      ? "bg-cyan-500/10 text-cyan-300"
                      : "text-gray-300 hover:bg-cyan-500/10"
                  }
                `}
              >
                {item.name}
              </a>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}