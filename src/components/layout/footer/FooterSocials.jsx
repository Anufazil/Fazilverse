import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Anufazil",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/anufazilp",
  },
  {
    icon: FaEnvelope,
    href: "anufazil08@gmail.com",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/8590321727",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/faz__zil08",
  },
];

export default function FooterSocials() {
  return (
    <div className="mt-8 flex justify-center gap-5">
      {socials.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -6,
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-xl
              text-gray-300
              backdrop-blur-xl
              transition-all
              hover:border-cyan-400
              hover:text-cyan-300
              hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
            "
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  );
}