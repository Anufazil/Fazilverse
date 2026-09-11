import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";

import { NAV_LINKS } from "../../constants/navigation";
import { SITE } from "../../constants/site";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 180;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`
          mx-auto
          mt-4
          flex
          h-16
          max-w-6xl
          items-center
          justify-between
          rounded-xl
          border
          border-line
          px-5
          transition-colors
          duration-300
          ${scrolled ? "bg-ink/90 backdrop-blur-md shadow-lg" : "bg-ink/40"}
        `}
      >
        {/* Logo */}
        <a href="#home" className="font-mono text-sm font-semibold text-ink-text">
          Fazilverse <span className="text-signal"></span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace("#", "");

            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative block px-4 py-2 text-sm"
                >
                  {activeSection === sectionId && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-surface-raised"
                    />
                  )}

                  <span
                    className={`
                      relative z-10 font-medium transition-colors duration-200
                      ${activeSection === sectionId ? "text-signal" : "text-muted hover:text-ink-text"}
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
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href={SITE.resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-signal px-4 py-2 text-sm font-medium text-on-signal"
          >
            <FaFileDownload className="text-xs" />
            Resume
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-2xl text-ink-text"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-xl border border-line bg-ink/95 backdrop-blur-md lg:hidden"
        >
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  block px-6 py-4 text-sm transition-colors duration-200
                  ${activeSection === sectionId ? "bg-surface-raised text-signal" : "text-muted hover:bg-surface"}
                `}
              >
                {item.name}
              </a>
            );
          })}

          <a
            href={SITE.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 border-t border-line px-6 py-4 text-sm font-medium text-signal"
          >
            <FaFileDownload className="text-xs" />
            Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
