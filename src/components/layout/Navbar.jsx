import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";

import { NAV_LINKS } from "../../constants/navigation";
import { SITE } from "../../constants/site";
import { toHomeRoute } from "../../utils/navHref";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;

    let ticking = false;

    const computeActive = () => {
      ticking = false;
      setScrolled(window.scrollY > 20);

      // Queried fresh each call rather than cached: section positions
      // shift as images further down the page finish loading, and a
      // cached snapshot from mount time drifted out of sync with
      // reality — this is only 7 elements and runs at most once per
      // animation frame (throttled below), so it's cheap regardless.
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      // "Last section whose (offset - threshold) has been scrolled
      // past" — deliberately no upper-bound check. An upper bound
      // (scrollY < top + height) is fragile to sub-pixel rounding
      // right at a boundary between two sections, which was causing
      // the wrong one to stay highlighted at certain scroll positions.
      // This also naturally keeps the right section active through
      // the gap where an id-less section (Growth) sits between two
      // real ones, and correctly lands on the last section even when
      // scrolled all the way to the bottom of the page.
      sections.forEach((section) => {
        // Matches the html { scroll-padding-top } value in globals.css,
        // so "active" agrees with where an anchor jump actually lands.
        const top = section.offsetTop - 96;

        // A couple pixels of tolerance: window.scrollY reports as a
        // rounded integer, but an anchor-scroll target computed from
        // getBoundingClientRect can be fractional — a strict >= can
        // fail forever by under a pixel once scrolling settles just
        // short of a fractional target.
        if (window.scrollY >= top - 2) {
          current = section.id;
        }
      });

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(computeActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    computeActive();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const goHome = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate("/");
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

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
        <a
          href="/"
          onClick={goHome}
          className="font-mono text-sm font-semibold text-ink-text"
        >
          Fazilverse <span className="text-signal"></span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = location.pathname === "/" && activeSection === sectionId;

            return (
              <li key={item.name}>
                <Link
                  to={toHomeRoute(item.href)}
                  className="relative block px-4 py-2 text-sm"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-surface-raised"
                    />
                  )}

                  <span
                    className={`
                      relative z-10 font-medium transition-colors duration-200
                      ${isActive ? "text-signal" : "text-muted hover:text-ink-text"}
                    `}
                  >
                    {item.name}
                  </span>
                </Link>
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
            const isActive = location.pathname === "/" && activeSection === sectionId;

            return (
              <Link
                key={item.name}
                to={toHomeRoute(item.href)}
                onClick={() => setOpen(false)}
                className={`
                  block px-6 py-4 text-sm transition-colors duration-200
                  ${isActive ? "bg-surface-raised text-signal" : "text-muted hover:bg-surface"}
                `}
              >
                {item.name}
              </Link>
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
