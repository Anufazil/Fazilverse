import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/YOUR_USERNAME",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/YOUR_USERNAME",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:YOUR_EMAIL@gmail.com",
  },
  {
    name: "Resume",
    icon: FaFileDownload,
    href: "/resume.pdf",
  },
];

export default function SocialIcons() {
  return (
    <div className="mt-10">

      <h4 className="mb-5 text-lg font-semibold text-gray-300">
        Connect With Me
      </h4>

      <div className="flex flex-wrap gap-5">

        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -8,
                scale: 1.1,
                rotate: 6,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="
                group
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                text-2xl
                text-gray-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:text-cyan-300
                hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
              "
            >
              <Icon />

              {/* Tooltip */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -top-12
                  rounded-lg
                  bg-black/80
                  px-3
                  py-1
                  text-xs
                  text-white
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              >
                {social.name}
              </span>

            </motion.a>
          );
        })}

      </div>

    </div>
  );
}