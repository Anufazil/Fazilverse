import { NAV_LINKS } from "../../../constants/navigation";

export default function FooterLinks() {
  return (
    <div>
      <p className="mb-4 font-mono text-sm text-signal">Navigation</p>

      <div className="flex flex-col gap-2">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm text-muted transition-colors duration-200 hover:text-signal"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
