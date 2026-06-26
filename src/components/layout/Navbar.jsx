import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navigation } from "../../constants/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">

        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            FazilVerse
          </span>
        </h1>

        <nav className="hidden gap-8 md:flex">

          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}

        </nav>

        <Button>Let's Talk</Button>

      </Container>
    </motion.header>
  );
}