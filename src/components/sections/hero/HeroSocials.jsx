import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { SITE } from "../../../constants/site";

const links = [
  { icon: FaGithub, href: SITE.github, label: "GitHub" },
  { icon: FaLinkedin, href: SITE.linkedin, label: "LinkedIn" },
  { icon: FaWhatsapp, href: SITE.whatsapp, label: "WhatsApp" },
  { icon: FaInstagram, href: SITE.instagram, label: "Instagram" },
  { icon: FaEnvelope, href: `mailto:${SITE.email}`, label: "Email" },
  { icon: FaFileDownload, href: SITE.resume, label: "Resume" },
];

export default function HeroSocials() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          className="
            flex h-11 w-11 items-center justify-center rounded-lg
            border border-line bg-surface text-muted
            transition-colors duration-200
            hover:border-signal/50 hover:text-signal
          "
        >
          <Icon className="text-lg" />
        </a>
      ))}
    </div>
  );
}
