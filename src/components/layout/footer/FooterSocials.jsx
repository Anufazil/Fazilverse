import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SITE } from "../../../constants/site";

const socials = [
  { icon: FaGithub, href: SITE.github, label: "GitHub" },
  { icon: FaLinkedin, href: SITE.linkedin, label: "LinkedIn" },
  { icon: FaWhatsapp, href: SITE.whatsapp, label: "WhatsApp" },
  { icon: FaInstagram, href: SITE.instagram, label: "Instagram" },
  { icon: FaEnvelope, href: `mailto:${SITE.email}`, label: "Email" },
];

export default function FooterSocials() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={item.label}
            className="
              flex h-10 w-10 items-center justify-center rounded-lg
              border border-line text-muted
              transition-colors duration-200
              hover:border-signal/50 hover:text-signal
            "
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
